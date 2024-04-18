// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import LoginForm from "./loginForm";
import RegistrationForm from "./Registration";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
