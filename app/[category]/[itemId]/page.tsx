import { notFound } from "next/navigation";
import { allContent } from "@/src/data";
import { getCategory } from "@/src/constants/categories";
import ItemDetailContent from "@/src/components/ItemDetailContent";

// Generate static params ONLY for items with hasDetail: true
export async function generateStaticParams() {
  const detailedItems = allContent.filter((i) => i.hasDetail);
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
  const category = await getCategory(categoryId);

  if (!category) {
    notFound();
  }

  // We do not fetch item here securely/completely because it's a server component
  // and our DB is client-side. We delegate rendering to the client component.
  // However, we could check if item exists in static data to 404 early,
  // but let's let the client component handle the "loading -> found/not found" state
  // to be true to the "DB First" source of truth.

  return <ItemDetailContent category={category} itemId={itemId} />;
}
