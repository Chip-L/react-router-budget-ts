export const fetchData = (key: string) =>
  JSON.parse(localStorage.getItem(key) || "");

export const deleteItem = ({ key }: { key: string }) =>
  localStorage.removeItem(key);
