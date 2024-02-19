import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <h1 class='display-4'>Bem-Vindo ao Tigrim!</h1>
                <p class='lead'>A rede social dos nerds ligados a tecnologia!</p>
                <hr class='my-4' />
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
};

export default Home;