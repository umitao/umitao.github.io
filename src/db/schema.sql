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
