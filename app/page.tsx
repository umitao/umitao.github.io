import CategoryTile from "@/components/CategoryTile";
import { CATEGORIES } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex-1 w-full h-full p-2">
      {/* 
        Grid Layout:
        - Mobile: 1 column
        - Tablet (sm/md): 2 columns
        - Desktop (lg): 3 columns
        - Large Desktop (xl): 4 columns
        
        Using 'auto-rows' to ensure tiles have consistent height constraints but can grow.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full pb-10">
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
