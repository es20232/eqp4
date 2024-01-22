// Perfil.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Perfil.css';

function Perfil() {
  // Example user data
  const userData = {
    username: 'JohnDoe',
    bio: 'Web Developer',
    // Add more user information as needed
  };

  // Example image data
  const userImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="Perfil">
      <header className="Perfil-header">
        <div className="user-info">
          <h2>{userData.username}</h2>
          <p>{userData.bio}</p>
          {/* Add more user information boxes as needed */}
        </div>

        <Link to="/Home">Go to Home page</Link>
        
        <div className="image-gallery">
          {userImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </div>     

      </header>
    </div>
  );
}

export default Perfil;