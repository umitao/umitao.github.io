import { AppItem as Item } from "@/src/types";
import GridValueView from "./GridValueView"; // Reuse the grid for subsections

export default function SectionalView({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <div className="p-8 text-neutral-500 italic">No items found.</div>;
  }

  // Group items by 'group' property
  const groupedItems = items.reduce(
    (acc, item) => {
      const groupName = item.group || "Uncategorized";
      if (!acc[groupName]) {
        acc[groupName] = [];
      }
      acc[groupName].push(item);
      return acc;
    },
    {} as Record<string, Item[]>,
  );

  // Sort groups alphabetically or by some other logic if needed
  const groups = Object.keys(groupedItems).sort();

  return (
    <div className="flex flex-col gap-12 p-4 md:p-8">
      {groups.map((group) => (
        <section key={group} className="flex flex-col gap-4">
          <h2 className="mx-4 border-b border-neutral-800 pb-2 font-serif text-xl text-neutral-400 md:text-2xl">
            {group}
          </h2>
          {/* Reuse GridValueView for the actual items within a section for visual consistency */}
          <GridValueView items={groupedItems[group]} />
        </section>
      ))}
    </div>
  );
}
