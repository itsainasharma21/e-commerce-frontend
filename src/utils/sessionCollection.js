export const getCollection = () => {
  const stored = sessionStorage.getItem("collection");
  return stored ? JSON.parse(stored) : [];
};

export const saveCollection = (collection) => {
  sessionStorage.setItem("collection", JSON.stringify(collection));
};
