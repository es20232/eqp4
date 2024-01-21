import { Link } from 'react-router-dom';
import '../styles/Login.css'

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <p>
          Login
        </p>
        <Link to="/Home">Entrar</Link>
      </header>
    </div>
  );
}

export default Login;