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
  const userImages = [
    "https://midias.correiobraziliense.com.br/_midias/jpg/2023/08/21/1000x1000/1_o_batman_easy_resize_com_-29069579.jpg?20230821092600?20230821092600",
    "https://i.ytimg.com/vi/uEySwcw7u5A/maxresdefault.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="Perfil">
      <header className="Perfil-header">
        <img className="Perfil-Photo" src={logo} alt="Logo" />
        <div className="user-info">
          <h1>{userData.username}</h1>
          <p>{userData.bio}</p>
        </div>
        <div className="user-images">
          {userImages.map((imageUrl) => (
            <img className="user-image" src={imageUrl} alt="User" />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Perfil;
