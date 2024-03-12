import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      setRegisterStatus("All fields are required");
      return;
    }
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      // console.log(response);
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    });
  };

  return (
    <div className="bg">
      <div className="loginForm">
        <form>
          <h1>Register Here</h1>
          <label htmlFor="email">Email Address</label>
          <input
            className="textInput"
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email Address"
            required
          />
          <label htmlFor="username">NIC No</label>
          <input
            className="textInput"
            type="username"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Enter your NIC Number"
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
            onClick={register}
            value="Create an account"
          />
          <h1
            style={{
              fontSize: "15px",
              textAlign: "center",
              marginTop: "20px",
              color: "red",
            }}
          >
            {registerStatus}
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Are you existing member</h3>

          <Link to="/log">
            <button className="button">Login</button>
          </Link>

              
        </form>

        
      </div>
      
    </div>
  );
}

export default Signup;
