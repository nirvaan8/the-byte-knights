import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

function Header() {

    const [isActive, setIsActive] = useState(false);

    return (
        <header className="navbar">
            <h1 className="logo">Logo</h1>
            <nav className="navbar-nav">
                <NavLink exact activeClassName='active' to="/">Home</NavLink>
                <NavLink exact activeClassName='active' to="/about">About Us</NavLink>
                <NavLink exact activeClassName='active' to="/services">Services</NavLink>
                <NavLink exact activeClassName='active' to="/contact">Contact Us</NavLink>
            </nav>
            <div className="hamburger" onClick={() => setIsActive(!isActive)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </header>
    )
}

export default Header;
