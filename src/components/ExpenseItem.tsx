import { Expense } from "../types";

import { formatCurrency, formatDate } from "../utils/formatting";

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDate(expense.createdAt)}</td>
    </>
  );
}

export default ExpenseItem;
