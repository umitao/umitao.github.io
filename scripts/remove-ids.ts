import fs from "fs";
import path from "path";

const DATA_DIR = path.resolve(process.cwd(), "src/data");

// Regex to match lines like "    id: "..." ," or "  id: '...',"
const ID_REGEX = /^\s*id:.*?,?\s*$/gm;

// Regex to match type annotations like ": MovieItem[]"
const TYPE_REGEX = /: (\w+)\[\]/g;

function processFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    console.error(`Directory not found: ${DATA_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(DATA_DIR);
  let filesProcessed = 0;

  files.forEach((file) => {
    // Skip index.ts and non-ts files
    if (file === "index.ts" || !file.endsWith(".ts")) {
      return;
    }

    const filePath = path.join(DATA_DIR, file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // 1. Remove IDs
    if (content.match(ID_REGEX)) {
      content = content.replace(ID_REGEX, "");
      // Cleanup empty lines
      content = content.replace(/\n\s*\n\s*\n/g, "\n\n");
      modified = true;
    }

    // 2. Update Type Definition (: Item[] -> : RawItem<Item>[])
    if (content.match(TYPE_REGEX)) {
      // Check if already RawItem
      if (!content.includes("RawItem<")) {
        content = content.replace(TYPE_REGEX, ": RawItem<$1>[]");
        modified = true;
      }
    }

    // 3. Add RawItem to imports
    // Matches: import { MovieItem } from "../types";
    const importRegex = /import { (.*?) } from "\.\.\/types";/;
    const importMatch = content.match(importRegex);
    if (importMatch) {
      const currentImports = importMatch[1];
      if (!currentImports.includes("RawItem")) {
        const newImports = `${currentImports}, RawItem`;
        content = content.replace(
          importRegex,
          `import { ${newImports} } from "../types";`,
        );
        modified = true;
      }
    }

    if (modified) {
      console.log(`Updated ${file}`);
      fs.writeFileSync(filePath, content, "utf8");
      filesProcessed++;
    } else {
      console.log(`Skipped ${file} (no changes needed)`);
    }
  });

  console.log(`Done! Processed ${filesProcessed} files.`);
}

processFiles();
