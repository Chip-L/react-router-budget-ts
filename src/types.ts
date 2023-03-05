export interface Budget {
  id: string;
  name: string;
  amount: number;
  createdAt: number;
  color: string;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  budgetId: string;
  createdAd: number;
}
