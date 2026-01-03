import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategory, getItems, ITEMS } from "@/lib/data";

// Generate static params ONLY for items with hasDetail: true
export async function generateStaticParams() {
  const detailedItems = ITEMS.filter((i) => i.hasDetail);
  return detailedItems.map((item) => ({
    category: item.categoryId,
    itemId: item.id,
  }));
}

interface PageProps {
  params: Promise<{ category: string; itemId: string }>;
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { category: categoryId, itemId } = await params;

  // 1. Fetch Data
  const category = await getCategory(categoryId);
  const items = await getItems(categoryId);
  const item = items.find((i) => i.id === itemId);

  // 2. 404 Guard
  if (!category || !item) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-300 font-sans">
      {/* HEADER AREA */}
      <header className="pt-24 pb-12 px-6 max-w-4xl mx-auto w-full">
        {/* Breadcrumb / Back Navigation */}
        <Link 
          href={`/${category.id}`} 
          className="text-xs font-mono text-neutral-500 uppercase tracking-widest hover:text-white transition-colors mb-8 block"
        >
          ← Back to {category.label}
        </Link>
        
        {/* Metadata */}
        <div className="flex items-center gap-4 mb-4 text-sm font-mono text-emerald-500/80">
           {item.subtitle && <span>{item.subtitle}</span>}
           {item.rating && (
             <>
               <span className="text-neutral-700">•</span>
               <span>{item.rating}</span>
             </>
           )}
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-8">
          {item.title}
        </h1>
      </header>

      {/* CONTENT AREA */}
      <main className="flex-1 px-6 max-w-4xl mx-auto w-full pb-32">
        {/* Story / Description */}
        {item.story ? (
           <div className="prose prose-invert prose-lg text-neutral-400 font-serif leading-relaxed max-w-none">
             <p>{item.story}</p>
           </div>
        ) : (
          <p className="text-neutral-600 italic">No story available for this item.</p>
        )}

        {/* Optional: Render Images here later if needed */}
        {item.images && item.images.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.images.map((_img, idx) => (
              <div key={idx} className="bg-neutral-900 aspect-video rounded-sm">
                {/* Image Placeholder */}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
