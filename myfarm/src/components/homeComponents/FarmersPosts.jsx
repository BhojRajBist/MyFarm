// src/components/FarmersPosts.jsx
import React from 'react';
import './FarmersPosts.css';

const FarmersPosts = () => {
  return (
    <section className="farmers-posts">
      <div className="post-grid">
          <h2>Farmers' Posts</h2>
        <div className="post-card">
            <div className="post-card">Post 1</div>
            <div className="post-card">Post 2</div>
            <div className="post-card">Post 3</div>
        </div>
      </div>
    </section>
  );
}

export default FarmersPosts;
