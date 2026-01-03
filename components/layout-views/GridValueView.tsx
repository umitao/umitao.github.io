import { Item } from "@/lib/data";
import Link from "next/link";

export default function GridValueView({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <div className="p-8 text-neutral-500 italic">No items found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-neutral-800 p-[1px]">
      {items.map((item) => {
        const isInternal = item.hasDetail;
        const isExternal = !!item.link;
        const Component = isInternal ? Link : (isExternal ? "a" : "div");
        const href = isInternal ? `/${item.categoryId}/${item.id}` : (isExternal ? item.link : undefined);
        const target = isExternal ? "_blank" : undefined;
        
        return (
          <Component 
            key={item.id} 
            href={href as string}
            target={target}
            className={`group relative aspect-square bg-neutral-900 p-6 flex flex-col justify-end transition-all hover:bg-neutral-800 ${isInternal || isExternal ? 'cursor-pointer hover:opacity-90' : ''}`}
          >
            <div className="z-10">
              {item.subtitle && (
                <p className="text-xs font-mono text-neutral-500 mb-1">{item.subtitle}</p>
              )}
              <h3 className="text-xl font-serif text-neutral-100 group-hover:text-white decoration-neutral-500/0 underline-offset-4 transition-all group-hover:decoration-neutral-500/50">
                {item.title}
                {isExternal && <span className="inline-block ml-1 opacity-50 text-[10px] align-top">↗</span>}
              </h3>
              {item.rating && (
                <div className="mt-2 inline-block px-2 py-0.5 bg-emerald-900/30 text-emerald-400 text-xs border border-emerald-900/50">
                  {item.rating}
                </div>
              )}
            </div>
          </Component>
        );
      })}
    </div>
  );
}
