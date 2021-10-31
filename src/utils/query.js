import data from "../constants/data.json";

export function findAll() {
  return data;
}

export function findById(id) {
  const filtered = data.filter((i) => i.id === id);
  return filtered.length === 0 ? null : filtered[0];
}
