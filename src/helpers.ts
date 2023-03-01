export const fetchData = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "");
};

export const deleteItem = ({ key }: { key: string }) =>
  localStorage.removeItem(key);
