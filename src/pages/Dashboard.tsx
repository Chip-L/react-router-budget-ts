import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";
import Intro from "../components/Intro";
import { createExpense, createBudget, fetchData, wait } from "../helpers";
import { Budget } from "../types";

type dashboardLoaderData = {
  userName: string | null;
  budgets: Budget[];
};

export const dashboardLoader = () => {
  const userName = fetchData("userName") as string | null;
  const budgets: Budget[] = fetchData("budgets") ?? [];

  return { userName, budgets };
};

export const dashboardAction = async ({ request }: ActionFunctionArgs) => {
  await wait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  switch (_action) {
    case "newUser":
      try {
        localStorage.setItem("userName", JSON.stringify(values.userName));
        return toast.success(`Welcome ${values.userName}`);
      } catch (e) {
        throw new Error("There was a problem creating your account.");
      }
      break;
    case "createBudget":
      try {
        createBudget({
          name: values.newBudget as string,
          amount: +(values.newBudgetAmount as string),
        });
        return toast.success("Budget created!");
      } catch (e) {
        throw new Error("There was a problem creating your budget.");
      }
      break;
    case "createExpense":
      try {
        createExpense({
          name: values.addExpense as string,
          amount: +(values.newExpenseAmount as string),
          budgetId: values.newExpenseBudget as string,
        });
        return toast.success(`Expense ${values.newExpense} created`);
      } catch (e) {
        throw new Error("There was a problem creating your expense.");
      }
      break;

    default:
      throw new Error(`${_action} is not a recognized form.`);
      break;
  }
};

function Dashboard() {
  const { userName, budgets } = useLoaderData() as dashboardLoaderData;

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the key to financial freedom!</p>
                <p>Create a budget to get started.</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default Dashboard;
