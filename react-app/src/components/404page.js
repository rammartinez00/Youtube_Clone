import monkey from "../img/monkey.png";
import Logo from "../img/yt_logo_rgb_dark.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-inner">
        <img src={monkey} />
        <p>This page isn't available.</p>
        <p>Sorry about that.</p>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={Logo} />
        </NavLink>
      </div>
    </div>
  );
};
export default NotFound;
