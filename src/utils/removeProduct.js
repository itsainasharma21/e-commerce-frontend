import { getCollection, saveCollection } from "./sessionCollection";

export const removeProduct = (id) => {
  const collection = getCollection();
  const filtered = collection.filter((item) => item.id !== id);
  saveCollection(filtered);
};
