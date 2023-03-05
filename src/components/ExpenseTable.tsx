import ExpenseItem from "./ExpenseItem";
import { Expense } from "../types";

interface ExpenseTableProps {
  expenses: Expense[];
}

function ExpenseTable({ expenses }: ExpenseTableProps) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
