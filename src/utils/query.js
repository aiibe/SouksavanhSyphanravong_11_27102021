import data from "../data.json";

export function findAll() {
  return data;
}

export function findById(id) {
  return data.filter((i) => i.id === id);
}