// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>MyFarm</h1>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
}

export default Navbar;
