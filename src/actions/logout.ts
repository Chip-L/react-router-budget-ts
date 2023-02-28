import { redirect } from "react-router-dom";
import { deleteItem } from "../helpers";

export const logoutAction = async () => {
  // delete the user
  deleteItem({ key: "userName" });
  // return redirect
  return redirect("/");
};
