import React from 'react';
import ReactDOM from "react-dom/client";
import Login from "./pages/SignIn";
import Cadastro from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import Home from "./pages/home";
import NoPage from "./pages/NoPage";
import RecuperarSenha from "./pages/RecuperarSenha";
import NovaSenha from './pages/novaSenha';
import PrivateRoutes from "./utils/PrivateRoutes";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"*",
    element: <NoPage />
  },
  {
    path:"/RecuperarSenha",
    element:<RecuperarSenha />
  },
  {
    path:"/NovaSenha",
    element:<NovaSenha />
  },
  {
    path:"/Cadastro",
    element:<Cadastro />
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"Perfil",
        element: <Perfil />
      },
      {
        path:"EditarPerfil",
        element: <EditarPerfil />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
