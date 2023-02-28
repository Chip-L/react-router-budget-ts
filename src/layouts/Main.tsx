import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

import wave from "../assets/wave.svg";

type dashboardLoaderData = {
  userName: string;
};

export const mainLoader = () => {
  const userName = fetchData("userName");

  return { userName };
};

function Main() {
  const { userName } = useLoaderData() as dashboardLoaderData;

  return (
    <div className="layout">
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}

export default Main;
