// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Replace the console.log with your authentication logic
  };

  return (
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

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default LoginForm;