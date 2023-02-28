import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

type dashboardLoaderData = {
  userName: string;
};

export const dashboardLoader = () => {
  const userName = fetchData("userName");

  return { userName };
};

function Dashboard() {
  const { userName } = useLoaderData() as dashboardLoaderData;

  return (
    <div>
      <h1>{userName}</h1>
      Dashboard
    </div>
  );
}

export default Dashboard;
