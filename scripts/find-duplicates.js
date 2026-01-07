const fs = require("fs");
const path = require("path");

// --- Hashing Logic (Same as src/utils/idGenerator.ts) ---
function fnv1aHash(str) {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash +=
      (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

function generateId(seed) {
  return fnv1aHash(seed);
}

// --- Main ---

// We will only check movies.ts since that's where the user saw errors usually
const filePath = path.join(__dirname, "../src/data/movies.ts");
const content = fs.readFileSync(filePath, "utf8");

// Regex to find movie blocks
const itemRegex = /{\s*(?:\n\s*)?(?:categoryId|title):[\s\S]*?}/g;

let matches;
const seen = new Map();
const duplicates = [];

let count = 0;

while ((matches = itemRegex.exec(content)) !== null) {
  count++;
  const block = matches[0];

  // Extract Title and Subtitle
  const titleMatch = block.match(/title:\s*"(.*?)"/);
  const subtitleMatch = block.match(/subtitle:\s*"(.*?)"/);

  if (titleMatch) {
    const title = titleMatch[1];
    const subtitle = subtitleMatch ? subtitleMatch[1] : "";

    // Strategy: Title-Subtitle (matching src/data/index.ts)
    const seed = `${title}-${subtitle}`;
    const id = generateId(seed);

    if (seen.has(id)) {
      duplicates.push({
        id,
        title,
        subtitle,
      });
    } else {
      seen.set(id, { title, subtitle });
    }
  }
}

console.log(`Scanned ${count} items.`);

if (duplicates.length > 0) {
  console.log(
    `\nFound ${duplicates.length} DUPLICATE items (Same Title + Year):`,
  );
  console.log("---------------------------------------------------");
  duplicates.forEach((d) => {
    console.log(`[${d.id}] ${d.title} (${d.subtitle})`);
  });
  console.log("---------------------------------------------------");
  console.log(
    "These items exist more than once in your file, generating the same ID.",
  );
} else {
  console.log("No duplicates found. Logic might need checking.");
}
