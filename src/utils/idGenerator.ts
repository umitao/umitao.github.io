/**
 * FNV-1a Hash implementation
 * Returns a deterministic 8-character hex string from a seed.
 */
function fnv1aHash(str: string): string {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    // Multiply by FNV prime (16777619) using bitwise shifts for 32-bit int simulation
    hash +=
      (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  // Force unsigned 32-bit integer and convert to hex
  return (hash >>> 0).toString(16).padStart(8, "0");
}

/**
 * Generates a deterministic ID based on a seed string.
 * This allows us to avoid storing hardcoded IDs in data files.
 *
 * @param seed The string to hash (e.g. "Title-Year")
 * @returns A unique 8-character ID
 */
export function generateId(seed: string): string {
  return fnv1aHash(seed);
}
