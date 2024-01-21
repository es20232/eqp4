// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm'; // Import the new component
import '../styles/Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <p>Login</p>
        <LoginForm />
        <div>
          Don't have an account? <Link to="/Register">Register</Link>
        </div>
      </header>
    </div>
  );
}

export default Login;
