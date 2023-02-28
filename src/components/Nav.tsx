import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import logoMark from "../assets/logomark.svg";

interface NavProps {
  userName: string;
}

function Nav({ userName }: NavProps) {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to Home">
        <img src={logoMark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Nav;
