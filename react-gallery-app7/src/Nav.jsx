import React from 'react';
import { NavLink } from 'react-router-dom';

//Nav component
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/mountains'>Mountains</NavLink></li>
                <li><NavLink to='/nature'>Nature</NavLink></li>
                <li><NavLink to='/cats'>Cats</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;