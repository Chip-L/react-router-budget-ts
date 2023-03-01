import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { fetchData } from "../helpers";

type dashboardLoaderData = {
  userName: string;
};

export const dashboardLoader = () => {
  const userName = fetchData("userName") as string;

  console.log("dashboardLoader:");
  return { userName };
};

function Dashboard() {
  const { userName } = useLoaderData() as dashboardLoaderData;

  return (
    <div>
      {userName ? <p>{userName}</p> : <Intro />}
      Dashboard
    </div>
  );
}

export default Dashboard;
