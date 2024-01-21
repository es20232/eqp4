import { Outlet, Link } from "react-router-dom";
import '../styles/Layout.css'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home/">Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
