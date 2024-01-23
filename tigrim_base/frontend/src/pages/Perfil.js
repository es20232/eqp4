// Perfil.js
import React from "react";
import "../styles/Perfil.css";
import logo from "../assets/tigrim1.jpg";

function Perfil() {
  // Example user data
  const userData = {
    username: "JohnDoe",
    bio: "Web Developer",
    // Add more user information as needed
  };

  // Example image data
  /*const userImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    // Add more image URLs as needed
  ];*/

  return (
    <div className="Perfil">
      <header className="Perfil-header">
        <img className="Perfil-Photo" src={logo} alt="Logo" />
        <div className="user-info">
          <h1>{userData.username}</h1>
          <p>{userData.bio}</p>
        </div>
      </header>
    </div>
  );
}

export default Perfil;
