import React from 'react';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import MapSection from './MapSection';
import './second.css';
const MainLayout = () => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        {/* For larger screens, display side by side */}
        <div className="featured-product">
          <FeaturedProducts />
        </div>
        <div className="map-section">
          <MapSection />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
