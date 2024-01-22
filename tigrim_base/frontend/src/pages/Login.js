import { Link } from 'react-router-dom';
import '../styles/Login.css'

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <p>
          Login
        </p>
        <Link to="/Register">Registrar</Link>
        <Link to="/Home/">Dashboard</Link>
      </header>
    </div>
  );
}

export default Login;