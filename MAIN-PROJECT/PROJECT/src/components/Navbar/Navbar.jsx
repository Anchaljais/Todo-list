import React, { useContext } from 'react';
import './Navbar.css';
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from 'react-icons/fa'; // Icons for navbar
import logodo from '../../assets/clogo.png';
import { DarkModeContext } from '../Darkmode' // Import the DarkModeContext

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Use the context

    return (
        <div className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Left Section: Menu Icon and Logo */}
            <div className="navbar-left">
                <FaBars className="menu-icon" />
                <div className="logo">
                    <img src={logodo} alt="" />
                </div>
            </div>

            {/* Right Section: Search, App Grid, Dark Mode Toggle */}
            <div className="navbar-right">
                <FaSearch className="nav-icon" />
                <FaTh className="nav-icon" />
                <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {isDarkMode ? <FaSun className="nav-icon" /> : <FaMoon className="nav-icon" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;