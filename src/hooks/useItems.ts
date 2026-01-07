"use client";

import { useState, useEffect } from "react";
import { getDb } from "../db/client";

export interface DBItem {
  id: string;
  category: string;
  title: string;
  subtitle: string | null;
  story: string | null;
  data: any;
  created_at: string;
}

export function useItems(category?: string) {
  const [items, setItems] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchItems() {
      try {
        const db = await getDb();
        let result;
        if (category) {
          result = await db.query("SELECT * FROM items WHERE category = $1", [
            category,
          ]);
        } else {
          result = await db.query("SELECT * FROM items");
        }

        if (mounted) {
          setItems(result.rows as DBItem[]);
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to fetch items", err);
        if (mounted) setLoading(false);
      }
    }

    fetchItems();

    return () => {
      mounted = false;
    };
  }, [category]);

  return { items, loading };
}
