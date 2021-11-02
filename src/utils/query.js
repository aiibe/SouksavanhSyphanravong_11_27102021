import data from "../constants/data.json";

/**
 * Get all data
 * @returns Array of data
 */
export function findAll() {
  return data;
}

/**
 * Find one article in data
 * @param {number} id Article ID
 * @returns Object found or null
 */
export function findById(id) {
  const filtered = data.filter((i) => i.id === id);
  return filtered.length === 0 ? null : filtered[0];
}
