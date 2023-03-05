import { Budget, Expense } from "../types";

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// does multiplication on an HSL color function -- this is not actually returning HSL
// 34 is a magic number (increments the hue)
const generateRandomColor = (existingBudgetsLength: number) =>
  `${existingBudgetsLength * 34} 65% 50%`;

export const fetchData = (key: string) => {
  const storage = localStorage.getItem(key) as string | null;

  return storage ? JSON.parse(storage) : null;
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

export const createExpense = ({
  name,
  amount,
  budgetId,
}: {
  name: string;
  amount: number;
  budgetId: string;
}) => {
  const existingExpenses: Expense[] = fetchData("expenses") ?? [];

  const newItem = {
    id: crypto.randomUUID(),
    name,
    amount: amount,
    budgetId,
    createdAd: Date.now(),
  };

  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

export const calculateSpentByBudget = (budgetId: string) => {
  const expenses: Expense[] = fetchData("expenses") ?? [];

  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId === budgetId) {
      return (acc += expense.amount);
    }
    return acc;
  }, 0);

  return budgetSpent;
};
