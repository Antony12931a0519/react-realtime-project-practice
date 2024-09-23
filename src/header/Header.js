import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dheeraj</div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
};

export default Header;
