// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Welcome to MyFarm</h2>
        <p>Connecting Farmers and Buyers for Fresh Produce</p>
        <button>Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
