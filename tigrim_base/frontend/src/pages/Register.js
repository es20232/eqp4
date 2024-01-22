import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar os dados ao backend (Django).
    // Pode ser usando fetch() ou axios.

    // Exemplo de como você pode lidar com os dados no frontend:
    console.log('Dados do formulário:', formData);
  };

  const handleLogin = () => {
    // Adicione aqui a lógica para fazer login.
    // Redirecionar para a tela de login ou enviar os dados ao backend, conforme necessário.
    console.log('Fazer login com os dados:', formData.username, formData.password);
    navigate('/');
  };

  return (
    <div className="Register-container">
      <header className="Register-header">
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
            type="password"
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
            type="password"
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
          Número de Celular
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Somente numeros com o DDD"
            required
          />
        </label>

        <div className="button-container">
          <buttonRegister type="submit">Registrar</buttonRegister>
          <buttonLogin onClick={handleLogin}>Ja possui uma conta</buttonLogin>
        </div>
      </form>
    </div>
  );
}

export default Register;