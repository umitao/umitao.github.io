export type LayoutType = 'grid' | 'list' | 'sections';

export interface Category {
  id: string;
  label: string;
  color: string;
  span?: number;
  layout: LayoutType;
}

export interface Item {
  id: string;
  categoryId: string; // Links to the Category ID
  title: string;
  subtitle?: string;  // e.g., "1999" for Movies, "Chemistry" for Formulas
  group?: string;     // OPTIONAL: e.g., "Love", "Hate", "Hardware", "Software"
  rating?: string;    // e.g., "10/10", "Masterpiece"
  
  // NEW FIELDS
  story?: string;     // Personal story/markdown
  images?: string[];  // Array of image paths
  link?: string;      // External URL
}

export const CATEGORIES: Category[] = [
  // --- Theme 1: Deep Blue (Logic/Science) ---
  // Assigned: Molecules, Formulas, Tech, Software, Products, Cars, Brands
  { id: 'molecules', label: 'Molecules', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'list' },
  { id: 'formulas', label: 'Formulas', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'list' },
  { id: 'time', label: 'History', color: 'bg-gradient-to-br from-stone-800 to-neutral-900', layout: 'list' },
  { id: 'software', label: 'Software', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'sections' },
  { id: 'products', label: 'Products', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'grid' },
  { id: 'tech', label: 'Tech & Code', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'grid' }, 
  { id: 'cars', label: 'Cars', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'grid' },
  { id: 'brands', label: 'Brands', color: 'bg-gradient-to-br from-slate-900 to-slate-950', layout: 'sections' },

  // --- Theme 2: Subtle Pink (Creative/Art) ---
  // Assigned: Music, Art, Movies, TV Shows, Games, Books
  { id: 'music', label: 'Music', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'list' },
  { id: 'books', label: 'Books', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'grid' },
  { id: 'movies', label: 'Movies', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'grid' },
  { id: 'tvshows', label: 'TV Shows', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'list' },
  { id: 'games', label: 'Games', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'grid' },
  { id: 'art', label: 'Art', color: 'bg-gradient-to-br from-rose-950 to-neutral-900', layout: 'grid' },

  // --- Theme 3: Deep Teal (Sensory/Place) ---
  // Assigned: Travel, Scents, Gastronomy
  { id: 'scents', label: 'Scents', color: 'bg-gradient-to-br from-teal-950 to-neutral-900', layout: 'list' },
  { id: 'gastronomy', label: 'Gastronomy', color: 'bg-gradient-to-br from-teal-950 to-neutral-900', layout: 'list' },
  { id: 'travel', label: 'Places', color: 'bg-gradient-to-br from-teal-950 to-neutral-900', layout: 'grid' },
  
  // --- Theme 4: Warm Stone (Human/Time) ---
  // Assigned: People, Quotes, Points in Time (moved here), Languages
  { id: 'people', label: 'People', color: 'bg-gradient-to-br from-stone-800 to-neutral-900', layout: 'sections' },
  { id: 'quotes', label: 'Quotes', color: 'bg-gradient-to-br from-stone-800 to-neutral-900', layout: 'list' },
  { id: 'languages', label: 'Languages', color: 'bg-gradient-to-br from-stone-800 to-neutral-900', layout: 'list' },
];

// --- Dummy Data ---
// This would eventually come from a CMS or Database
export const ITEMS: Item[] = [
  // Molecules (List)
  { id: 'm1', categoryId: 'molecules', title: 'Caffeine', subtitle: 'C8H10N4O2' },
  { id: 'm2', categoryId: 'molecules', title: 'Dopamine', subtitle: 'C8H11NO2' },
  { id: 'm3', categoryId: 'molecules', title: 'Serotonin', subtitle: 'C10H12N2O' },
  
  // Movies (Grid)
  { id: 'mv1', categoryId: 'movies', title: 'Blade Runner 2049', subtitle: '2017', rating: 'Masterpiece' },
  { id: 'mv2', categoryId: 'movies', title: 'Interstellar', subtitle: '2014', rating: '10/10' },
  { id: 'mv3', categoryId: 'movies', title: 'Her', subtitle: '2013', rating: '9/10' },
  { id: 'mv4', categoryId: 'movies', title: 'Dune', subtitle: '2021', rating: '9/10' },
  
  // People (Sections)
  { id: 'p1', categoryId: 'people', title: 'Alan Turing', group: 'Tech Pioneers' },
  { id: 'p2', categoryId: 'people', title: 'Ada Lovelace', group: 'Tech Pioneers' },
  { id: 'p3', categoryId: 'people', title: 'Richard Feynman', group: 'Scientists' },
  { id: 'p4', categoryId: 'people', title: 'Marie Curie', group: 'Scientists' },
  { id: 'p5', categoryId: 'people', title: 'Christopher Nolan', group: 'Directors' },
  
  // Software (Sections)
  { id: 's1', categoryId: 'software', title: 'VS Code', group: 'Editors' },
  { id: 's2', categoryId: 'software', title: 'Raycast', group: 'Productivity' },
  { id: 's3', categoryId: 'software', title: 'Figma', group: 'Design' },
];

export async function getCategory(slug: string): Promise<Category | undefined> {
  return CATEGORIES.find(c => c.id === slug);
}

export async function getItems(categoryId: string): Promise<Item[]> {
  return ITEMS.filter(i => i.categoryId === categoryId);
}
