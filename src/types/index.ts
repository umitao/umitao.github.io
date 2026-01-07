export interface BaseItem {
  id: string;
  title: string;
  story?: string;
  images?: string[];
  link?: string; // External URL
  hasDetail?: boolean; // If true, generates internal detail page
  subtitle?: string; // Common metadata, optional by default
  group?: string; // Common grouping, optional by default
  rating?: string; // Common rating, optional by default
  image?: string; // Tile background image (Poster/Cover)
}

export interface MoleculeItem extends BaseItem {
  categoryId: "molecules";
  subtitle: string; // Chemical Formula e.g. "C8H10N4O2"
}

export interface FormulaItem extends BaseItem {
  categoryId: "formulas";
  subtitle: string; // Equation e.g. "E = mc^2"
}

export interface TimeItem extends BaseItem {
  categoryId: "time";
  subtitle: string; // Year/Range/Location
}

export interface SoftwareItem extends BaseItem {
  categoryId: "software";
  subtitle?: string;
  group: string; // "Origins", "Nostalgia", "Science", "Love", "Hate", "Daily"
}

export interface TechItem extends BaseItem {
  categoryId: "tech";
  subtitle: string; // "Language", "Library", etc.
}

export interface GameItem extends BaseItem {
  categoryId: "games";
  subtitle: string; // Platform e.g. "PS1", "PC"
}

export interface PersonItem extends BaseItem {
  categoryId: "people";
  group: string; // "Legends", "Writers", "Artists"
}

export interface BrandItem extends BaseItem {
  categoryId: "brands";
  group: string; // "Love", "Hate", "Sim Racing", "Tech", "Heritage"
}

export interface ProductItem extends BaseItem {
  categoryId: "products";
  subtitle: string; // Brand or Category
}

export interface MusicItem extends BaseItem {
  categoryId: "music";
  subtitle: string; // Genre or Artist info
}

export interface BookItem extends BaseItem {
  categoryId: "books";
  subtitle: string; // Author
}

export interface MovieItem extends BaseItem {
  categoryId: "movies";
  subtitle: string; // Year
  dateAdded?: string;
  length?: string;
  imdbScore?: number;
  votes?: string;
  myScore?: number;
}

export interface TVShowItem extends BaseItem {
  categoryId: "tvshows";
  subtitle: string; // Genre
  dateAdded?: string;
  length?: string;
  imdbScore?: number;
  votes?: string;
  myScore?: number;
}

export interface TravelItem extends BaseItem {
  categoryId: "travel";
  group?: string; // "Home", "Sweden"
  subtitle?: string; // Country or Region
}

export interface ScentItem extends BaseItem {
  categoryId: "scents";
  subtitle: string; // Scent profile
}

export interface GastronomyItem extends BaseItem {
  categoryId: "gastronomy";
  subtitle: string; // Location or Type
}

export interface ResearchItem extends BaseItem {
  categoryId: "research";
  subtitle: string; // Author/Organization
}

export interface WebsiteItem extends BaseItem {
  categoryId: "websites";
  subtitle: string; // Organization/Type
  link: string;
}

export interface QuoteItem extends BaseItem {
  categoryId: "quotes";
  subtitle?: string;
}

export interface LanguageItem extends BaseItem {
  categoryId: "languages";
  subtitle?: string;
}

export type AppItem =
  | MoleculeItem
  | FormulaItem
  | TimeItem
  | SoftwareItem
  | TechItem
  | GameItem
  | PersonItem
  | BrandItem
  | ProductItem
  | MusicItem
  | BookItem
  | MovieItem
  | TVShowItem
  | TravelItem
  | ScentItem
  | GastronomyItem
  | ResearchItem
  | WebsiteItem
  | QuoteItem
  | LanguageItem;

export type RawItem<T> = Omit<T, "id">;
