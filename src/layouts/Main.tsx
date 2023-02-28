import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

import wave from "../assets/wave.svg";
import Nav from "../components/Nav";

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
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
}

export default Main;
