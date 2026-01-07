"use client";

import { useItems, type DBItem } from "@/src/hooks/useItems";

export default function VerificationSection() {
  const { items, loading } = useItems();

  if (loading) return null;

  const targets = ["Fruta Fresca", "Django Unchained", "iMesh"];
  const foundItems = items.filter((i: DBItem) => targets.includes(i.title));

  return (
    <div className="mt-10 rounded border border-emerald-500/30 bg-emerald-950/20 p-4">
      <h3 className="mb-4 font-serif text-xl text-emerald-400">
        PGlite Migration Verification
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {foundItems.map((item: DBItem) => (
          <div
            key={item.id}
            className="rounded border border-neutral-800 bg-black/50 p-4"
          >
            <div className="mb-1 text-xs tracking-wider text-emerald-500 uppercase">
              {item.category}
            </div>
            <div className="text-lg font-bold">{item.title}</div>
            <div className="text-sm text-neutral-400">{item.subtitle}</div>
          </div>
        ))}
      </div>
      {foundItems.length === 0 && (
        <div className="text-red-400">
          No target items found. Check database seeding.
        </div>
      )}
    </div>
  );
}
