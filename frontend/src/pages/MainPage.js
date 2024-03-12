import React, { Component } from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

export default class MainLogin extends Component {
  render() {
    return (
      <div className="bg">
        <div className="mainpage">
          <div className="head">
            <h1>
              <b>EZ FINE</b>
            </h1>
            <p>AI Assisted Fine Management System</p>
          </div>

          <div className="body">
            <p>
              <strong>Login As</strong>
            </p>

            <p className="user"> A Driver</p>
            <div>
              <Link to="/log">
                <img src="./images/driver.jpg" alt="" className="image" />
              </Link>
            </div>

            <p className="user"> A Traffic Officer</p>
            <Link to="/log1">
              <img src="./images/officer.jpg" alt="" className="image" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
