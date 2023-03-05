import { Budget } from "./types";

// does multiplication on an HSL color function -- this is not actually returning HSL
// 34 is a magic number (increments the hue)
const generateRandomColor = (existingBudgetsLength: number) =>
  `${existingBudgetsLength * 34} 65% 50%`;

export const fetchData = (key: string) => {
  const storage = localStorage.getItem(key) as any;

  return JSON.parse(storage);
};

export const deleteItem = ({ key }: { key: string }) =>
  localStorage.removeItem(key);

export const createBudget = ({
  name,
  amount,
}: {
  name: string;
  amount: number;
}) => {
  const existingBudgets: Budget[] = fetchData("budgets") ?? [];

  const newItem = {
    id: crypto.randomUUID(),
    name,
    amount: amount,
    color: generateRandomColor(existingBudgets.length),
    createdAd: Date.now(),
  };

  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};
