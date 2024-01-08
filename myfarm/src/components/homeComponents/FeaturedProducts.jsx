// src/components/FeaturedProducts.jsx
import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="product-grid">
          <h2>Featured Products</h2>
        <div className="product-card">
            <div className="product-card">Product 1</div>
            <div className="product-card">Product 2</div>
            <div className="product-card">Product 3</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
