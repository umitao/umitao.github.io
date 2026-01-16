import CategoryTile from "@/components/CategoryTile";
import { CATEGORIES } from "@/src/constants/categories";

export default function Home() {
  return (
    <div className="h-full w-full flex-1 p-2">
      {/* 
        Grid Layout:
        - Mobile: 1 column
        - Tablet (sm/md): 2 columns
        - Desktop (lg): 3 columns
        - Large Desktop (xl): 4 columns
        
        Using 'auto-rows' to ensure tiles have consistent height constraints but can grow.
      */}
      <div className="grid w-full grid-cols-1 gap-2 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CATEGORIES.map((cat) => (
          <CategoryTile
            key={cat.id}
            title={cat.label}
            color={cat.color}
            span={cat.span}
            href={`/${cat.id}`}
          />
        ))}
      </div>
    </div>
  );
}
