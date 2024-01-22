import { Link } from "react-router-dom";
import LoginForm from "./LoginForm"; // Import the new component
import "../styles/Login.css";
import logo from "../assets/tigrim1.jpg";

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
        <p>Login</p>
        <LoginForm />
        <div>
          Não tem uma conta? <Link to="/Register">Registre-se</Link>
        </div>
      </header>
    </div>
  );
}

export default Login;
