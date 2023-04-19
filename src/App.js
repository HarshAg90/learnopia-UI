import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
import Admin from "./components/admin";
import Profile from "./components/Profile";
import "./App.css";

const App = () => {
  const [isAuthenticated, authenticate] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              authenticate={authenticate}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginSignup
              isAuthenticated={isAuthenticated}
              authenticate={authenticate}
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
