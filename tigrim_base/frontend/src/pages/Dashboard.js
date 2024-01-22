// Dashboard.js
import React from "react";
import "../styles/Dashboard.css";
import logo from "../assets/tigrim1.jpg";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
        <h2>Welcome to the Dashboard</h2>
        <p>
          This is your personalized dashboard. You can add your content here.
        </p>
      </header>
    </div>
  );
}

export default Dashboard;
