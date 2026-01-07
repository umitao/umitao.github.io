import { AppItem as Item } from "@/src/types";
import Link from "next/link";

export default function GridValueView({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <div className="p-8 text-neutral-500 italic">No items found.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-[1px] bg-neutral-800 p-[1px] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {items.map((item) => {
        const isInternal = item.hasDetail;
        const isExternal = !!item.link;
        const Component = isInternal ? Link : isExternal ? "a" : "div";
        const href = isInternal
          ? `/${item.categoryId}/${item.id}`
          : isExternal
            ? item.link
            : undefined;
        const target = isExternal ? "_blank" : undefined;

        return (
          <Component
            key={item.id}
            href={href as string}
            target={target}
            className={`group relative flex aspect-square flex-col justify-end overflow-hidden bg-neutral-900 p-6 transition-all hover:bg-neutral-800 ${isInternal || isExternal ? "cursor-pointer hover:opacity-90" : ""}`}
            style={{
              backgroundImage: item.image ? `url(${item.image})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay for text readability */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${item.image ? "bg-black/60 group-hover:bg-black/40" : "bg-transparent"}`}
            />

            <div className="relative z-10">
              {item.subtitle && (
                <p className="mb-1 font-mono text-xs text-neutral-500">
                  {item.subtitle}
                </p>
              )}
              <h3 className="font-serif text-xl text-neutral-100 decoration-neutral-500/0 underline-offset-4 transition-all group-hover:text-white group-hover:decoration-neutral-500/50">
                {item.title}
                {isExternal && (
                  <span className="ml-1 inline-block align-top text-[10px] opacity-50">
                    ↗
                  </span>
                )}
              </h3>
              {item.rating && (
                <div className="mt-2 inline-block border border-emerald-900/50 bg-emerald-900/30 px-2 py-0.5 text-xs text-emerald-400">
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
