import React, { useState } from "react";
import "./login.css";
import axios from "./../../util/axiosApiInstance.js";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false); //use react router to navigate to a page

  const url = "/api/users/login/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { email, password });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="outer-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="budspencer@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit" id="button">
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;
