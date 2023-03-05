export const fetchData = (key: string) => {
  const storage = localStorage.getItem(key) as any;

  return JSON.parse(storage);
};

export const deleteItem = ({ key }: { key: string }) =>
  localStorage.removeItem(key);
