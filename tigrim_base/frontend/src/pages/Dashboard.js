// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <h2>Welcome to the Dashboard</h2>
        <p>
          This is your personalized dashboard. You can add your content here.
        </p>
        <Link to="/Home/Perfil">
          <button className="dashboard-button">Perfil</button>
        </Link>
      </header>
    </div>
  );
}

export default Dashboard;