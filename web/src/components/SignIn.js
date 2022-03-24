import "../styles/layout/SignIn.scss";
import "../styles/core/Reset.scss"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//LocalStorage
import ls from "../services/localStorage";

const SignIn = (props) => {
  const [email, setEmail] = useState(ls.get("email", ""));
  const [password, setPassword] = useState(ls.get("password", ""));
  const [remeberMe, setRememberMe] = useState(false);

  useEffect(() => {
    ls.set("email", email);
    ls.set("password", password);
  }, [remeberMe]);

  const handleEmailOrPhone = (ev) => {
    setEmail(ev.currentTarget.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.currentTarget.value);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    props.sendLoginToApi({
      email: email,
      password: password,
    });
  };

  const handleRememberMe = () => {
    setRememberMe(!remeberMe);
  };

  const renderErrorMessage = () => {
    if (props.loginErrorMessage !== "") {
      return (
        <p className="errorLoginMessage">
        <span>{props.loginErrorMessage}</span>
        </p>
      );
    }
  };
  return (
    <main>
      <div className="SignInContainer">
        <h2 className="SignInContainer__title">Sign in</h2>
        <form className="SignInContainer__form" onSubmit={handleForm}>
          <input
            className="SignInContainer__form--input"
            id="email"
            type="text"
            placeholder="Email"
            title="email"
            value={email}
            onChange={handleEmailOrPhone}
            required
          />
          <input
            className="SignInContainer__form--input"
            id="password"
            type="password"
            placeholder="Password"
            title="password"
            value={password}
            onChange={handlePassword}
            required
          />
          <div className="">
            <input
              className="SignInContainer__form--btn"
              type="submit"
              value="Sign in "
            />
          </div>
          <div className="formDetails">
            <div>
              <input
                type="checkbox"
                checked={remeberMe}
                onClick={handleRememberMe}
              />
              <label className="formDetails__remember" htmlFor="">
                Remember me
              </label>
            </div>

            <small className="formDetails__help">Need help?</small>
          
          </div>         
             {renderErrorMessage()}
             <Link style={{ textDecoration: 'none' }}>
              <h5 className="formDetails__createAnAccount">You don't have an account? Click here to Sign up!</h5>
            </Link>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
