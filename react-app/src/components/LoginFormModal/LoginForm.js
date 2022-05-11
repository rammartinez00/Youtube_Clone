import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";
import { ReactComponent as GoogleLogo } from "../../img/Google.svg";

const LoginForm = ({ prop }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="modal-form-container">
      <GoogleLogo />
      <div>
        <p className="sign-in">Sign in</p>
        <p className="msg">to continue to Youtube</p>
      </div>

      <form onSubmit={onLogin}>
        <div className="errors2">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="login-container">
          <input
            className="login-input"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className="login-container">
          <input
            className="login-input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div className="login-btns">
            <div>
              <button className="modal-btn" type="submit">
                Login
              </button>
            </div>
            <button
              className="demo-btn"
              onClick={() => {
                history.push("/sign-up");
                prop.setShowModal(false);
              }}
            >
              Create account
            </button>
          </div>
        </div>
      </form>
      <button className="modal-btn" onClick={demoLogin}>
        Demo Login
      </button>
    </div>
  );
};

export default LoginForm;
