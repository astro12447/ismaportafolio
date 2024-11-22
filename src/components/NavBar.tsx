import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";
export const NavBar: React.FC = () => {
    return (
        <nav className='navbar flex'>
            <div className='navbar-logo'>
                <h1>Ismael Dev.</h1>
            </div>
            <ul className='flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/portafolio">Portafolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
