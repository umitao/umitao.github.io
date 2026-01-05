// Remove conflicting import

// Actually, Category is still defined here or should move to types?
// The user asked to "Refactor the current AppItem interface... into src/types".
// They didn't explicitly ask to move Category, but it makes sense to keep it cleanly.
// However, to minimize breakage, I will re-export Item/AppItem from types, and Category definition can stay or move.
// Let's look at the instruction: "Update the original entry point... to import allContent".

import { AppItem } from "@/src/types";
import { allContent } from "@/src/data";

export * from "@/src/types"; // Re-export types for compatibility

export type LayoutType = "grid" | "list" | "sections";

export interface Category {
  id: string;
  label: string;
  color: string;
  span?: number;
  layout: LayoutType;
}

// Re-exporting AppItem as Item for backward compatibility if needed,
// or just aliasing it if the codebase uses 'Item'.
export type Item = AppItem;

export const CATEGORIES: Category[] = [
  // --- Theme 1: Deep Blue (Logic/Science) ---
  {
    id: "molecules",
    label: "Molecules",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "list",
  },
  {
    id: "formulas",
    label: "Formulas",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "list",
  },
  {
    id: "research",
    label: "Research",
    color: "bg-gradient-to-br from-emerald-950 to-black",
    layout: "list",
  },
  {
    id: "time",
    label: "History",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
  {
    id: "software",
    label: "Software",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "sections",
  },
  {
    id: "products",
    label: "Products",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "tech",
    label: "Tech & Code",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "websites",
    label: "Web Discovery",
    color: "bg-gradient-to-br from-violet-950 to-black",
    layout: "grid",
  },
  {
    id: "cars",
    label: "Cars",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "grid",
  },
  {
    id: "brands",
    label: "Brands",
    color: "bg-gradient-to-br from-slate-900 to-slate-950",
    layout: "sections",
  },

  // --- Theme 2: Subtle Pink (Creative/Art) ---
  {
    id: "music",
    label: "Music",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "books",
    label: "Books",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "movies",
    label: "Movies",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "tvshows",
    label: "TV Shows",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "games",
    label: "Games",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },
  {
    id: "art",
    label: "Art",
    color: "bg-gradient-to-br from-rose-950 to-neutral-900",
    layout: "grid",
  },

  // --- Theme 3: Deep Teal (Sensory/Place) ---
  {
    id: "scents",
    label: "Scents",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "gastronomy",
    label: "Gastronomy",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "list",
  },
  {
    id: "travel",
    label: "Places",
    color: "bg-gradient-to-br from-teal-950 to-neutral-900",
    layout: "grid",
  },

  // --- Theme 4: Warm Stone (Human/Time) ---
  {
    id: "people",
    label: "People",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "sections",
  },
  {
    id: "quotes",
    label: "Quotes",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
  {
    id: "languages",
    label: "Languages",
    color: "bg-gradient-to-br from-stone-800 to-neutral-900",
    layout: "list",
  },
];

export const ITEMS: AppItem[] = allContent;

export async function getCategory(slug: string): Promise<Category | undefined> {
  return CATEGORIES.find((c) => c.id === slug);
}

export async function getItems(categoryId: string): Promise<AppItem[]> {
  return ITEMS.filter((i) => i.categoryId === categoryId);
}
