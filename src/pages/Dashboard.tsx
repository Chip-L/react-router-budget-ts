import { useLoaderData } from "react-router-dom";
import Intro from "../components/Intro";
import { fetchData } from "../helpers";

type dashboardLoaderData = {
  userName: string | null;
};

export const dashboardLoader = () => {
  console.log("dashboardLoader:");
  const userName = fetchData("userName") as string | null;
  console.log("dashboardLoader username:", { userName });

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
