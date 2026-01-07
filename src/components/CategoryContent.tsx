"use client";

import { useItems } from "@/src/hooks/useItems";
import { Category } from "@/src/constants/categories";
import GridValueView from "@/components/layout-views/GridValueView";
import ListIndexView from "@/components/layout-views/ListIndexView";
import SectionalView from "@/components/layout-views/SectionalView";

// We need to map DBItem back to the view props expectations if they differ.
// Currently views expect 'Item' which is compatible with DBItem structure
// (though DBItem has created_at string, and types might be looser).
// We'll cast them for now or assume structure compatibility.

export default function CategoryContent({ category }: { category: Category }) {
  const { items, loading } = useItems(category.id);

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <div className="animate-pulse text-neutral-500">
          Loading {category.label}...
        </div>
      </div>
    );
  }

  // Cast items to any to bypass strict type overlap issues for now,
  // as DBItem extends BaseItem structure effectively.
  // In a stricter refactor, we would unify the types in src/types vs DBItem.
  const viewItems = items as any;

  switch (category.layout) {
    case "list":
      return <ListIndexView items={viewItems} />;
    case "sections":
      return <SectionalView items={viewItems} />;
    case "grid":
    default:
      return <GridValueView items={viewItems} />;
  }
}
