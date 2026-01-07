import { getDb } from "./client";
import { allContent } from "../data/index";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS items (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL, -- 'movies', 'music', 'brands', etc.
  title TEXT NOT NULL,
  subtitle TEXT,          -- Generic "secondary" text (Year, Artist, Industry)
  story TEXT,
  data JSONB,             -- Stores specific fields: imdbScore, website, discontinued, etc.
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS edges (
  source_id TEXT NOT NULL REFERENCES items(id),
  target_id TEXT NOT NULL REFERENCES items(id),
  type TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (source_id, target_id)
);
`;

export async function seedDatabase() {
  const db = await getDb();

  // 1. Initialize Schema
  await db.exec(SCHEMA);

  // 2. Check if data exists
  const result = await db.query<{ count: number }>(
    "SELECT count(*) FROM items",
  );
  // PGlite returns rows. count might be string or number depending on driver, usually string for BigInt.
  // Using explicit check.
  const count = Number(result.rows[0].count);

  if (count > 0) {
    console.log("Database already seeded. Item count:", count);
    return;
  }

  console.log("Seeding database with " + allContent.length + " items...");

  // 3. Serialize Insertions
  // Using a loop for simplicity and safety with parameters.
  for (const item of allContent) {
    // Destructure known columns
    const { id, categoryId, title, subtitle, story, ...rest } = item as any;

    await db.query(
      `INSERT INTO items (id, category, title, subtitle, story, data) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT (id) DO NOTHING`,
      [
        id,
        categoryId,
        title,
        subtitle || null,
        story || null,
        JSON.stringify(rest),
      ],
    );
  }

  console.log("Seeding complete.");
}
