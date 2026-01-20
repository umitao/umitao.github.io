import Link from "next/link";
import { getItemById } from "@/src/utils/query";
import { Category } from "@/src/constants/categories";
import { AppItem } from "@/src/types";

interface ItemDetailContentProps {
  category: Category;
  itemId: string;
}

export default function ItemDetailContent({
  category,
  itemId,
}: ItemDetailContentProps) {
  const item = getItemById(itemId) as
    | (AppItem & {
        link?: string;
        rating?: string;
        images?: string[];
      })
    | undefined;

  if (!item) {
    return (
      <div className="flex min-h-screen flex-col bg-neutral-900 p-20 text-center font-sans text-neutral-300">
        <h1 className="mb-4 text-3xl text-neutral-500">Item Not Found</h1>
        <Link href={`/${category.id}`} className="text-emerald-500 underline">
          Back to {category.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 font-sans text-neutral-300">
      {/* HEADER AREA */}
      <header className="mx-auto w-full max-w-4xl px-6 pt-24 pb-12">
        {/* Breadcrumb / Back Navigation */}
        <Link
          href={`/${category.id}`}
          className="mb-8 block font-mono text-xs tracking-widest text-neutral-500 uppercase transition-colors hover:text-white"
        >
          ← Back to {category.label}
        </Link>

        {/* Metadata */}
        <div className="mb-4 flex items-center gap-4 font-mono text-sm text-emerald-500/80">
          {item.subtitle && <span>{item.subtitle}</span>}
          {item.rating && (
            <>
              <span className="text-neutral-700">•</span>
              <span>{item.rating}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="mb-8 font-serif text-5xl tracking-tight text-white md:text-7xl">
          {item.title}
        </h1>
      </header>

      {/* CONTENT AREA */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-32">
        {/* Story / Description */}
        {item.story ? (
          <div className="prose prose-invert prose-lg max-w-none font-serif leading-relaxed text-neutral-400">
            <p>{item.story}</p>
          </div>
        ) : (
          <p className="text-neutral-600 italic">
            No story available for this item.
          </p>
        )}

        {/* Optional: Render Images here later if needed */}
        {item.images && item.images.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {item.images.map((_img: string, idx: number) => (
              <div key={idx} className="aspect-video rounded-sm bg-neutral-900">
                {/* Image Placeholder or Actual Image */}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
