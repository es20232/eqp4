// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/tigrim1.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    console.log("Username: ", username);
    console.log("Password: ", password);
    // Substitua o console.log pela sua lógica de autenticação
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
        <p>Login</p>
        <div className="login-form">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button onClick={handleLogin}>Login</button>
        </div>
        <div>
          Não tem uma conta? <Link to="/Register">Registre-se</Link>
        </div>
      </header>
    </div>
  );
};

export default Login;
