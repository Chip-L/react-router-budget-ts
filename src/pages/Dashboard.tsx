import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import Intro from "../components/Intro";
import { createBudget, fetchData } from "../helpers";

type dashboardLoaderData = {
  userName: string | null;
  budgets: string | null;
};

export const dashboardLoader = () => {
  const userName = fetchData("userName") as string | null;
  const budgets = fetchData("budgets") as string | null;

  return { userName, budgets };
};

export const dashboardAction = async ({ request }: ActionFunctionArgs) => {
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
            {/* {budgets ? ():() } */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}

export default Dashboard;
