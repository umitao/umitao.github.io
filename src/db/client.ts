import { PGlite } from "@electric-sql/pglite";

let dbInstance: PGlite | null = null;

export const getDb = async () => {
  if (!dbInstance) {
    dbInstance = new PGlite();
  }
  return dbInstance;
};
