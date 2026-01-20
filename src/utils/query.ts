import { allContent } from "../data";
import { edges } from "../data/edges";
import { AppItem, Edge, EdgeType } from "../types";

/**
 * Get an item by its ID.
 */
export function getItemById(id: string): AppItem | undefined {
  return allContent.find((item) => item.id === id);
}

/**
 * Get all items for a category.
 * Replaces the old useItems hook.
 */
export function getItemsByCategory(categoryId: string): AppItem[] {
  return allContent.filter((item) => item.categoryId === categoryId);
}

/**
 * Get all items related TO a given item (outgoing edges).
 * Optionally filter by edge type.
 */
export function getRelatedTo(sourceId: string, type?: EdgeType): AppItem[] {
  return edges
    .filter((e) => e.sourceId === sourceId && (!type || e.type === type))
    .map((e) => getItemById(e.targetId))
    .filter((item): item is AppItem => item !== undefined);
}

/**
 * Get all items that reference this item (incoming edges).
 * Optionally filter by edge type.
 */
export function getReferencedBy(targetId: string, type?: EdgeType): AppItem[] {
  return edges
    .filter((e) => e.targetId === targetId && (!type || e.type === type))
    .map((e) => getItemById(e.sourceId))
    .filter((item): item is AppItem => item !== undefined);
}

/**
 * Get all edges for an item (both directions).
 */
export function getEdgesFor(itemId: string): Edge[] {
  return edges.filter((e) => e.sourceId === itemId || e.targetId === itemId);
}
