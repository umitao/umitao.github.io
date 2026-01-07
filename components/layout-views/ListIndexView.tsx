import { AppItem as Item } from "@/src/types";
import Link from "next/link";

export default function ListIndexView({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return <div className="p-8 text-neutral-500 italic">No items found.</div>;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col p-4 md:p-8">
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
            className={`group flex items-baseline justify-between border-b border-neutral-800 px-2 py-3 transition-colors hover:bg-neutral-900/50 ${isInternal || isExternal ? "cursor-pointer" : ""}`}
          >
            <h3 className="text-lg font-medium text-neutral-300 group-hover:text-white">
              {item.title}
              {isExternal && (
                <span className="ml-1 inline-block align-top text-[10px] opacity-50">
                  ↗
                </span>
              )}
            </h3>

            <div className="flex items-center gap-4">
              {item.subtitle && (
                <span className="font-mono text-xs text-neutral-500">
                  {item.subtitle}
                </span>
              )}
              {item.rating && (
                <span className="font-mono text-xs text-emerald-500/80">
                  {item.rating}
                </span>
              )}
            </div>
          </Component>
        );
      })}
    </div>
  );
}
