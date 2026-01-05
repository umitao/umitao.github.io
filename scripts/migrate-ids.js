const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const targetFile = process.argv[2];

if (!targetFile) {
  console.error("Please provide a file path");
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), targetFile);
let content = fs.readFileSync(filePath, "utf8");

// Regex to find id: "..."
// We use a replacement function to generate a new UUID for each match
const newContent = content.replace(/id:\s*"[^"]*"/g, (match) => {
  return `id: "${crypto.randomUUID()}"`;
});

fs.writeFileSync(filePath, newContent, "utf8");

console.log(`Migrated IDs in ${targetFile}`);
