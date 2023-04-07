import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-link'>
            <Link to="/home">Home</Link>
            <Link to="/order">Order rivew</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;