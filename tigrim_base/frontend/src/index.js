// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Home/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Perfil" element={<Perfil />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
