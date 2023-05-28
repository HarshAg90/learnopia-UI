import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/login/LoginSignup";
import Home from "./components/home/Home";
import Admin from "./components/profile/admin";
import Profile from "./components/profile/Profile";
import "./App.css";

const App = () => {
  const [isAuthenticated, authenticate] = useState(false);
  //   if (!isAuthenticated) return <Navigate to="/login" />;
  function setLoggedInState(loggedIn) {
    localStorage.setItem("logged_in", loggedIn);
    authenticate(true);
  }
  // Function to check if the user is logged in
  function isLoggedIn() {
    const loggedIn = localStorage.getItem("logged_in");
    authenticate(loggedIn === "true");
    return loggedIn === "true";
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              authenticate={authenticate}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginSignup
              isAuthenticated={isAuthenticated}
              setLoggedInState={setLoggedInState}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
