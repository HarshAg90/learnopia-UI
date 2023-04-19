import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./login.css";

export default function LoginSignup({ isAuthenticated, authenticate }) {
  let [username, changename] = useState("");
  let [pass, changepass] = useState("");
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const login = () => {
    console.log(username + "," + pass);
    if (username === "harsh" && pass === "harsh") {
      console.log("Login successfull");
      authenticate(true);
      return <Navigate to="/" />;
    }
  };

  return (
    <div id="login-page">
      <div className="info">
        <h1>EdHub site</h1>
      </div>
      <div className="cred-form">
        <div>
          <div>
            <h1>Login / Sign-Up</h1>
            <h2>Please enter your Credentials</h2>
          </div>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                changename(e.target.value);
              }}
            />
            <input
              type="text"
              name="password"
              id=""
              value={pass}
              onChange={(e) => {
                changepass(e.target.value);
              }}
            />
            <div className="choice">
              <button id="login" onClick={login}>
                Login
              </button>
              <button id="signup">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
