import { Item } from "@/lib/data";
import Link from "next/link";

export default function ListIndexView({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <div className="p-8 text-neutral-500 italic">No items found.</div>;
  }

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 md:p-8">
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
            className={`group flex items-baseline justify-between py-3 border-b border-neutral-800 transition-colors hover:bg-neutral-900/50 px-2 ${isInternal || isExternal ? 'cursor-pointer' : ''}`}
          >
           <h3 className="text-lg text-neutral-300 group-hover:text-white font-medium">
             {item.title}
             {isExternal && <span className="inline-block ml-1 opacity-50 text-[10px] align-top">↗</span>}
           </h3>
           
           <div className="flex items-center gap-4">
             {item.subtitle && (
               <span className="font-mono text-xs text-neutral-500">{item.subtitle}</span>
             )}
             {item.rating && (
                <span className="font-mono text-xs text-emerald-500/80">{item.rating}</span>
             )}
           </div>
          </Component>
        );
      })}
    </div>
  );
}
