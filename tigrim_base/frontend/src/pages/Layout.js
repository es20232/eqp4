// Layout.js
import { Outlet, Link } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  return (
    <div className="Home-Bar">
      <nav className="Home-Options">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
