import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>Página Inicial</p>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default Home;