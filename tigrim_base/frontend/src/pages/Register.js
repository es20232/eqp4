import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import logo from "../assets/tigrim2.png";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    dateOfBith: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    fetch('/api/register', {

      method: 'POST', 
      mode: 'cors', 
      body: jsonData // body data type must match "Content-Type" header

    })
    console.log("Dados do formulário:", formData);
  };

  const handleLogin = () => {
    // Adicione aqui a lógica para fazer login.
    // Redirecionar para a tela de login ou enviar os dados ao backend, conforme necessário.
    console.log(
      "Fazer login com os dados:",
      formData.username,
      formData.password
    );
    navigate("/Home");
  };

  return (
    <div className="Register-container">
      <div className="Register-header">
        <header>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
          <h1>Registrar</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Gabriel Nunes"
              required
            />
          </label>
          <label>
            Usuario
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="GabNunes3"
              required
            />
          </label>
          <label>
            Senha
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="senha123"
              required
            />
          </label>
          <label>
            Confirmar Senha
            <input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repetir a Senha"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
              required
            />
          </label>
          <label>
            Data de Nascimento
            <input
              type="date"
              name="dateOfBith"
              value={formData.dateOfBith}
              onChange={handleChange}
              placeholder="dd/mm/aaaa"
              required
            />
          </label>

          <div className="button-container">
            <buttonRegister onClick={handleSubmit}>Registrar</buttonRegister>
            <buttonLogin className="Buttom-Return-Login" onClick={handleLogin}>
              Ja possui uma conta
            </buttonLogin>
          </div>
        </form>
      </div>
    </div>
  );
}
/*
function Register() {

  var jsonData = {
    "users": [
        {
            "name": "alan", 
            "age": 23,
            "username": "aturing"
        },
        {
            "name": "john", 
            "age": 29,
            "username": "__john__"
        }
    ]
  }

  function handleClick() {
    
    // Send data to the backend via POST
    fetch('http://------------:8080/', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

    })
    
  }

  return (
    <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Send data to backend
    </div>
  );

}

export { Register };*/

export default Register;
