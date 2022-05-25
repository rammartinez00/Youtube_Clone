import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./LoginFormModal/index.js";
import Logo from "../img/yt_logo_rgb_dark.png";
import SignUpFormModal from "./SignUpModal";
import SearchBar from "./search";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navlinks">
        {/* <li>
          <i className="fa-solid fa-bars"></i>
        </li> */}
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
          <p className="credit">by Rami Martinez</p>
        </li>
        <SearchBar />
        {!user && (
          <>
            <li>
              <SignUpFormModal />
            </li>
            <li>
              <LoginFormModal />
            </li>
          </>
        )}
        {user && (
          <>
            <button
              className="user-icon"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <i className="fa-solid fa-user-astronaut"></i>
            </button>
            {isOpen && (
              <div className="user-menu">
                <ul>
                  <li className="menu-item">
                    <NavLink
                      to="/upload"
                      exact={true}
                      activeClassName="active"
                      className="vid-title"
                    >
                      upload &nbsp;
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <LogoutButton />
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
        {/* <li>
          <LogoutButton />
        </li>
        <li>
          <NavLink
            to="/upload"
            exact={true}
            activeClassName="active"
            className="vid-title"
          >
            Upload
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
