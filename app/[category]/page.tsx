import { notFound } from "next/navigation";
import { CATEGORIES, getCategory, getItems } from "@/lib/data";
import GridValueView from "@/components/layout-views/GridValueView";
import ListIndexView from "@/components/layout-views/ListIndexView";
import SectionalView from "@/components/layout-views/SectionalView";

// Generate static params for all categories to enable SSG
export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.id,
  }));
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categoryId } = await params;
  const category = await getCategory(categoryId);
  const items = await getItems(categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Category Header */}
      <header className={`w-full py-12 md:py-20 px-6 ${category.color} text-center`}>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-md">
          {category.label}
        </h1>
        <p className="mt-4 text-white/60 uppercase tracking-widest text-xs font-medium">
          {category.layout} View
        </p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-neutral-950">
        {renderLayout(category.layout, items)}
      </main>
    </div>
  );
}

function renderLayout(layout: string, items: any[]) {
  switch (layout) {
    case 'list':
      return <ListIndexView items={items} />;
    case 'sections':
      return <SectionalView items={items} />;
    case 'grid':
    default:
      return <GridValueView items={items} />;
  }
}
