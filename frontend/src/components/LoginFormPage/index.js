import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setCredential("demo@user.io");
    setPassword("password");
  };

  return (
    <div id="login-container">
      <h1 id="title">Called It</h1>
      <div id="login-page">
        <form id="login-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <input
            id="email"
            type="text"
            placeholder="Email or username"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="login-button">
            Log In
          </button>

          <div id="signup-link">
            <p>Don't have an account?</p>
            <NavLink to="/signup">SignUp</NavLink>
          </div>
        </form>
        <form id="demo-button" onSubmit={handleDemo}>
          <button type="submit">Demo</button>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
