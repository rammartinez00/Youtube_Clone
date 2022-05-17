import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import LoginFormModal from "./LoginFormModal/index.js";
import Logo from "../img/yt_logo_rgb_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AWS from "../img/aws.png";
import Python from "../img/python.png";
import linked from "../img/linkedin.png";
import github from "../img/github.png";
import redux from "../img/redux.png";
import react from "../img/react.png";
import postgresql from "../img/postgresql.png";
import house from "../img/house.png";
import javascript from "../img/javascript.png";
import flask from "../img/flask.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconExpand = () => {
    setIsOpen(!isOpen);
  };

  const logoSize = 30;
  return (
    <nav className="sideBar">
      <ul className="navlinks sideBar">
        <li>
          <NavLink to="/" exact={true} className="sideBar-link">
            <img src={house} width={logoSize} />
            home
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/rammartinez00" className="sideBar-link">
            <img src={github} width={logoSize} />
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/rami-martinez-2931099b/"
            className="sideBar-link"
          >
            <img src={linked} width={logoSize} />
            linkedin
          </a>
        </li>
        <button className="sideBar-expand" onClick={iconExpand}>
          {!isOpen && <i className="fa-solid fa-angle-down"></i>}
          {isOpen && <i className="fa-solid fa-angle-up"></i>}
        </button>
        {isOpen && (
          <>
            <li className="sideBar-link">
              <img src={Python} width={logoSize}></img>
              python
            </li>
            <li className="sideBar-link">
              <img src={javascript} width={logoSize}></img>
              javascript
            </li>
            <li className="sideBar-link">
              <img src={AWS} width={logoSize} alt="logo" />
            </li>
            <li className="sideBar-link">
              <img src={react} width={logoSize}></img>
              react
            </li>
            <li className="sideBar-link">
              <img src={redux} width={logoSize}></img>
              redux
            </li>
            <li className="sideBar-link">
              <img src={postgresql} width={logoSize}></img>
              psql
            </li>
            <li>
              <img src={flask} width={logoSize}></img>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
