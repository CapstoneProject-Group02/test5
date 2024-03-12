import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
function Login1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login1 = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/login1", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Logged in successfully");
      }
    });
  };

  return (
    <div className="bg">
      <div className="loginForm">
        <form>
          <h1>Login Here</h1>
          <label htmlFor="username">Officer ID</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your Officer Number"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
            required
          />
          <input
            className="button"
            type="submit"
            onClick={login1}
            value="Login"
          />
          <h1
            style={{
              color: "red",
              fontSize: "15px",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {loginStatus}
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Are you new member</h3>
          <Link to="/signup1">
            <button className="button">Create an Account</button>
          </Link>
          <Link to="/">
            <button className="button">Back</button>
          </Link>
          <Link to="/inter">
            <button className="button1">Inter</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login1;
