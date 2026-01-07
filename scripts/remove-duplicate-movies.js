const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../src/data/movies.ts");
const content = fs.readFileSync(filePath, "utf8");

// Regex to find movie blocks: { ... }
// Matches { followed by content until } (non-greedy)
const itemRegex = /{\s*(?:\n\s*)?(?:categoryId|title):[\s\S]*?}/g;

const seen = new Set();
const toRemove = [];

let match;
while ((match = itemRegex.exec(content)) !== null) {
  const block = match[0];
  const startIndex = match.index;
  const endIndex = startIndex + block.length;

  // Extract Title and Subtitle for uniqueness check
  const titleMatch = block.match(/title:\s*"(.*?)"/);
  const subtitleMatch = block.match(/subtitle:\s*"(.*?)"/);

  if (titleMatch) {
    const title = titleMatch[1];
    const subtitle = subtitleMatch ? subtitleMatch[1] : "";
    const seed = `${title}-${subtitle}`;

    if (seen.has(seed)) {
      // It's a duplicate! Mark for removal.
      // We also look ahead for a trailing comma to keep the list clean.
      let removalEnd = endIndex;
      if (content[endIndex] === ",") {
        removalEnd++;
      }

      toRemove.push({ start: startIndex, end: removalEnd, title });
    } else {
      seen.add(seed);
    }
  }
}

// Remove duplicates working backwards to keep indices valid
let newContent = content;
// Sort descending by start index
toRemove.sort((a, b) => b.start - a.start);

toRemove.forEach((item) => {
  // Also remove preceding whitespace/newlines if possible to keep formatting clean
  // But strictly removing the block + comma is safest.
  console.log(`Removing duplicate: ${item.title}`);

  const before = newContent.substring(0, item.start);
  const after = newContent.substring(item.end);

  newContent = before + after;
});

// Final cleanup of potentially double commas or empty lines
// Simple pass to fix ", \n \n ," issues if they arise, though precise removal usually avoids this.
// We'll leave it raw but maybe clean up multiple blank lines.
newContent = newContent.replace(/\n\s*\n\s*\n/g, "\n\n");

fs.writeFileSync(filePath, newContent, "utf8");
console.log(`\nRemoved ${toRemove.length} duplicate entries.`);
