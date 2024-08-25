import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import AuthWrapper from "./AuthWrapper";
import Header from "./components/dashboard/Header";
import PageNotFound from "./components/404";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in when the app loads
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <Router>
      {user && <Header setUser={setUser} />}
      <Routes>
        <Route
          path="/"
          element={
            <AuthWrapper requiresAuth={false}>
              <Login setUser={setUser} />
            </AuthWrapper>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthWrapper requiresAuth={false}>
              <Signup setUser={setUser} />
            </AuthWrapper>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthWrapper requiresAuth={true}>
              <Dashboard />
            </AuthWrapper>
          }
        />
        <Route
          path="*"
          element={
              <PageNotFound  />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
