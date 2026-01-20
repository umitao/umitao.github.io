import { Category } from "@/src/constants/categories";
import { getItemsByCategory } from "@/src/utils/query";
import GridValueView from "@/components/layout-views/GridValueView";
import ListIndexView from "@/components/layout-views/ListIndexView";
import SectionalView from "@/components/layout-views/SectionalView";

export default function CategoryContent({ category }: { category: Category }) {
  const items = getItemsByCategory(category.id);

  switch (category.layout) {
    case "list":
      return <ListIndexView items={items} />;
    case "sections":
      return <SectionalView items={items} />;
    case "grid":
    default:
      return <GridValueView items={items} />;
  }
}
