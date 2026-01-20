import { EdgeType } from "../types";

export interface Edge {
  sourceId: string;
  targetId: string;
  type: EdgeType;
}

/**
 * Edges define relationships between items.
 *
 * Example:
 * { sourceId: "molecules-Caffeine", targetId: "brands-Starbucks", type: "associated_with" }
 *
 * Common relationship types:
 * - associated_with: General connection
 * - directed_by:     Movie/show → Person
 * - created_by:      Work → Creator
 * - used_by:         Tech → Product/Software
 * - from_era:        Item → Time period
 * - relates_to:      Conceptual link
 * - inspired_by:     Creative influence
 */
export const edges: Edge[] = [
  // Add relationships as you discover/remember them
  // { sourceId: "movies-Inception", targetId: "people-Christopher Nolan", type: "directed_by" },
];
