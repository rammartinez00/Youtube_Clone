import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./LoginFormModal/index.js";
import Logo from "../img/yt_logo_rgb_dark.png";

const NavBar = () => {
  return (
    <nav>
      <ul className="navlinks">
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="homeLogo"
              src={Logo}
              alt="logo"
              width={90}
              height={20}
            />
          </NavLink>
        </li>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
