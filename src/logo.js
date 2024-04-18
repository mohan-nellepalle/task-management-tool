import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <span style={{ color: "Red", marginLeft: "13px" }}>T</span>
      </div>
      <div className="logo-text">Task Management Tool</div>
    </div>
  );
};

export default Logo;
