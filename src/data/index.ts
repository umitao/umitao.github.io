import { AppItem, RawItem } from "../types";
import { generateId } from "../utils/idGenerator";

import { molecules } from "./molecules";
import { formulas } from "./formulas";
import { time } from "./time";
import { software } from "./software";
import { tech } from "./tech";
import { games } from "./games";
import { people } from "./people";
import { brands } from "./brands";
import { products } from "./products";
import { music } from "./music";
import { books } from "./books";
import { movies } from "./movies";
import { tvshows } from "./tvshows";
import { travel } from "./travel";
import { scents } from "./scents";
import { research } from "./research";
import { websites } from "./websites";
import { gastronomy } from "./gastronomy";

// Helper to inject ID based on strategy
const injectId = (item: RawItem<AppItem>): AppItem => {
  const seed = getStrategySeed(item);
  return {
    ...item,
    id: generateId(seed),
  } as AppItem;
};

// Strategy configuration
// We build a specific string seed for each item based on its category/attributes.
function getStrategySeed(item: RawItem<AppItem>): string {
  const { title } = item;

  // Specific Strategies per User Request
  switch (item.categoryId) {
    case "movies":
      // Movies: title + subtitle (Year)
      return `${title}-${item.subtitle || ""}`;

    case "music":
      // Music: title + subtitle (Artist)
      return `${title}-${item.subtitle || ""}`;

    case "brands":
      // Brands: title + subtitle (Industry) - using group as fallback if subtitle missing
      return `${title}-${item.subtitle || item.group || ""}`;

    case "time":
    case "formulas":
    case "molecules":
    case "software":
    case "tech":
    case "games":
    case "people":
    case "products":
    case "books":
    case "tvshows":
    case "travel":
    case "scents":
    case "research":
    case "websites":
    case "gastronomy":
    default:
      // Default: title
      // We append categoryId to ensure uniqueness across categories if titles collide
      return `${item.categoryId}-${title}`;
  }
}

// Combine all raw lists
const rawContent: RawItem<AppItem>[] = [
  ...molecules,
  ...formulas,
  ...time,
  ...software,
  ...tech,
  ...games,
  ...people,
  ...brands,
  ...products,
  ...music,
  ...books,
  ...movies,
  ...tvshows,
  ...travel,
  ...scents,
  ...research,
  ...websites,
  ...gastronomy,
] as RawItem<AppItem>[];

// Export processed content with IDs
export const allContent: AppItem[] = rawContent.map(injectId);
