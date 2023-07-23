import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="logo">WeatherApp</div>
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
