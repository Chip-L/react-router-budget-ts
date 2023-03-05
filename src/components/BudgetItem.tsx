import { formatCurrency, formatPercentage } from "../utils/formatting";
import { Budget } from "../types";
import { calculateSpentByBudget } from "../utils/helpers";

interface BudgetItemProps {
  budget: Budget;
}

function BudgetItem({ budget }: BudgetItemProps) {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    // @ts-ignore
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
    </div>
  );
}

export default BudgetItem;
