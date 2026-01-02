import Link from 'next/link';

interface CategoryTileProps {
  title: string;
  color: string;
  span?: number;
  href?: string;
  icon?: React.ReactNode;
}

export default function CategoryTile({ title, color, span = 1, href = "#", icon }: CategoryTileProps) {
  // Determine grid span class
  const spanClass = span === 2 ? "md:col-span-2" : "col-span-1";

  return (
    <Link 
      href={href}
      className={`group relative overflow-hidden ${spanClass} h-64 md:h-auto min-h-[250px] rounded-sm shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:z-10`}
    >
      {/* Background Color */}
      <div className={`absolute inset-0 ${color} opacity-90 transition-opacity duration-300 group-hover:opacity-100`} />
      
      {/* Grain/Texture Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-20 bg-neutral-900 mix-blend-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="transform transition-transform duration-300 group-hover:translate-y-[-4px]">
          {icon && <div className="mb-4 text-white/80">{icon}</div>}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-sm group-hover:text-shadow-lg">
            {title}
          </h2>
          <div className="mt-2 w-12 h-1 bg-white/50 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75" />
        </div>
      </div>
    </Link>
  );
}
