const fs = require("fs");
const path = require("path");
const https = require("https");

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const targetFile = process.argv[2];

if (!TMDB_API_KEY) {
  console.error("Error: TMDB_API_KEY environment variable is missing.");
  console.error(
    "Usage: TMDB_API_KEY=your_key node scripts/fetch-posters.js src/data/movies.ts",
  );
  process.exit(1);
}

if (!targetFile) {
  console.error("Please provide a file path");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), targetFile);
let content = fs.readFileSync(filePath, "utf8");

// Function to make API calls using native https
function fetchTMDB(title, year) {
  return new Promise((resolve, reject) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}`;

    https
      .get(searchUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.results && json.results.length > 0) {
              // Get the most popular result that matches
              const bestMatch = json.results[0];
              resolve(bestMatch.poster_path);
            } else {
              if (json.status_message)
                console.log("  -> API Error:", json.status_message);
              else
                console.log(
                  "  -> No results. Response:",
                  JSON.stringify(json).substring(0, 100),
                );
              resolve(null);
            }
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", (err) => reject(err));
  });
}

async function processFile() {
  // Regex to find movie blocks.
  // We assume standard formatting: { ... }
  // We look for blocks containing id, title.
  // This is a naive regex parser but sufficient for this specific file structure.

  const itemRegex = /{\s*id:[\s\S]*?}/g;
  let match;
  let matches = [];

  // 1. Gather all matches first so we don't mess up indices during replacement (though replace is better)
  // Actually, we can use string.replace with an async function? No, replace doesn't support async.
  // We will build a list of replacements.

  while ((match = itemRegex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      index: match.index,
      length: match[0].length,
    });
  }

  console.log(`Found ${matches.length} items to process...`);

  // Process sequentially to be nice to the API (and simple logic)
  let updatedContent = content;
  // We go backwards to keep indices valid? Or just replace string content?
  // String replace on unique IDs is safer.

  for (const item of matches) {
    const block = item.fullMatch;

    // Check if already has image
    if (block.includes("image:")) {
      console.log("Skipping (already has image):", getTitle(block));
      continue;
    }

    const title = getTitle(block);
    const year = getYear(block);

    if (!title) continue;

    console.log(`Fetching: ${title} (${year})...`);

    try {
      const posterPath = await fetchTMDB(title, year);

      if (posterPath) {
        const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

        // Locate end of the block inside the braces
        const lastBraceIndex = block.lastIndexOf("}");
        let contentInside = block.substring(0, lastBraceIndex);

        // If the last property doesn't end with a comma, add one
        if (!contentInside.trim().endsWith(",")) {
          contentInside += ",";
        }

        const newBlock = contentInside + `\n    image: "${imageUrl}",\n  }`;

        // Global replace of this specific block text
        updatedContent = updatedContent.replace(block, newBlock);
      } else {
        console.warn(`  Subject not found: ${title}`);
      }

      // Tiny delay to avoid hitting rate limits too hard
      await new Promise((r) => setTimeout(r, 100));
    } catch (err) {
      console.error(`  Error fetching ${title}:`, err.message);
    }
  }

  fs.writeFileSync(filePath, updatedContent, "utf8");
  console.log("Done! File updated.");
}

function getTitle(block) {
  const match = block.match(/title:\s*"(.*?)"/);
  return match ? match[1] : null;
}

function getYear(block) {
  const match = block.match(/subtitle:\s*"(.*?)"/);
  return match ? match[1].substring(0, 4) : ""; // Assumes subtitle starts with Year like '1999' or '1999 - ...'
}

processFile();
