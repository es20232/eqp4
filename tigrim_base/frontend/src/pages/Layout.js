import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="Home-Bar">
      <nav className="Home-Options">
        <ul>
          <li>
            <Link to="/Home/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Home/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
