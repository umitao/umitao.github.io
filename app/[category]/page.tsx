import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/src/constants/categories";
import CategoryContent from "@/src/components/CategoryContent";

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

  if (!category) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Category Header */}
      <header
        className={`w-full px-6 py-12 md:py-20 ${category.color} text-center`}
      >
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl">
          {category.label}
        </h1>
        <p className="mt-4 text-xs font-medium tracking-widest text-white/60 uppercase">
          {category.layout} View
        </p>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 bg-neutral-950">
        <CategoryContent category={category} />
      </main>
    </div>
  );
}
