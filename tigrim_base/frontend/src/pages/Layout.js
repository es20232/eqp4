import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Layout.css";

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
        <button className="Buttom-Dashboard" onClick={handleDashboard}>
          Dashboard
        </button>
        <button className="Buttom-Perfil" onClick={handlePerfil}>
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
