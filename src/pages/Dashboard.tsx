import { ActionFunctionArgs, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Intro from "../components/Intro";
import { fetchData } from "../helpers";

type dashboardLoaderData = {
  userName: string | null;
};

export const dashboardLoader = () => {
  const userName = fetchData("userName") as string | null;

  return { userName };
};

export const dashboardAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);

  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome ${formData.userName}`);
  } catch (error) {
    throw new Error("There was a problem creating your account.");
  }
};

function Dashboard() {
  const { userName } = useLoaderData() as dashboardLoaderData;

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}

export default Dashboard;
