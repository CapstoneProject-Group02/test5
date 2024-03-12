import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import Translation from "./Data.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "tamil") {
      setContent(Translation.tamil);
    } else if (language === "sinhalese") {
      setContent(Translation.sinhalese);
    }
  }, [language]);

  const login = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginStatus("Username and password are required");
      return;
    }
    Axios.post("http://localhost:3001/login", {
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
          <h1>{content.Title}</h1>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            style={{
              padding: "5px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "white",
              cursor: "pointer",
              outline: "none",
              background: "#007bff",
              width: "10rem",
              position: "relative",
              left: "40rem",
              top: "-6rem",
              height: "3rem",
            }}
          >
            <option value="english">English</option>
            <option value="tamil">Tamil</option>
            <option value="sinhalese">sinhalese</option>
          </select>
          <label htmlFor="username">{content.UsernameLabel}</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder={content.UsernamePlaceholder}
            required
          />
          <label htmlFor="password">{content.PasswordLabel}</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder={content.PasswordPlaceholder}
            required
          />
          <input
            className="button"
            type="submit"
            onClick={login}
            value={content.LoginButton}
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
          <h3 className="member">{content.NewMemberMessage}</h3>
          <Link to="/signup">
            <button className="button1">{content.CreateAccountButton}</button>
          </Link>
          <Link to="/">
            <button className="button1">Back</button>
          </Link>
         

        </form>
      </div>
    </div>
  );
}

export default Login;
