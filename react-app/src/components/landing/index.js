import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./index.css";

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="landing-content-box-1">
        <div className="landing-content-box-1-textbox">
          <h1>Youtube</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
