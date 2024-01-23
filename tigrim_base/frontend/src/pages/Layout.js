import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Layout.css";
import logo from "../assets/tigrim1.jpg";

function Layout() {
  const navigate = useNavigate();

  const handlePerfil = () => {
    navigate("/Home/Perfil");
  };

  const handleDashboard = () => {
    navigate("/Home");
  };

  return (
    <div className="Home-Bar">
      <div className="Home-Options">
        <img
          className="Home-Icon"
          onClick={handleDashboard}
          src={logo}
          alt="Logo"
        />
        <button className="Buttom-Homebar" onClick={handlePerfil}>
          Perfil
        </button>
      </div>
      <div className="Home-Content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
