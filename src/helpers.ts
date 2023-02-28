export const fetchData = (key: string) =>
  JSON.parse(localStorage.getItem(key) || "");
