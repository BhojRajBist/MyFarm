// src/components/Home.jsx

// import React from 'react';
// import './Home.css';

// const Home = () => {
//   return (

//     <div>

//       <    nav className="navbar">
//               <div className="navbar-brand">
//                 <h1>My Farm</h1>
//               </div>
//               <div className="navbar-links">
//                 <a href="/">Home</a>
//                 <a href="/farmers">Farmers</a>
//                 <a href="/products">Products</a>
//                 <a href="/about">About</a>
//               </div>
//             </nav>
//     <div className="home-container">
//       {/* <h1>Hello brpothers how are you i thik you alll are doung good</h1> */}
//       {/* Navbar */}


//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <h2>Discover Fresh, Local Produce</h2>
//           <p>Connect with local farmers and enjoy high-quality fruits and vegetables.</p>
//           <button>Explore Now</button>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="featured-products">
//         <h2>Featured Products</h2>
//         <div className="product-grid">
//           <div className="product-card">Product 1</div>
//           <div className="product-card">Product 2</div>
//           <div className="product-card">Product 3</div>
//         </div>
//       </section>

//       {/* Farmers' Posts Section */}
//       <section className="farmers-posts">
//         <h2>Farmers' Posts</h2>
//         <div className="post-grid">
//           <div className="post-card">Post 1</div>
//           <div className="post-card">Post 2</div>
//           <div className="post-card">Post 3</div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="map-section">
//         <h2>Farmers' Locations</h2>
//         {/* Add a map to display farmers' locations */}
//         {/* You can use a mapping library like Leaflet or Mapbox */}
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; 2023 My Farm</p>
//       </footer>
//     </div>
//     </div>
//   );
// };

// export default Home;


// // src/components/Home.jsx
import React from 'react';
import Navbar from './homeComponents/Navbar';
import HeroSection from './homeComponents/HeroSection';
import FeaturedProducts from './homeComponents/FeaturedProducts';
import FarmersPosts from './homeComponents/FarmersPosts';
import MapSection from './homeComponents/MapSection';
import './Home.css';
import AuthComponent from './auth/AuthComponent'
import SecondPage from './homeComponents/SecondPage'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <AuthComponent/>
      {/* <HeroSection />
      <FeaturedProducts />
      <FarmersPosts />
      <MapSection /> */}
      <SecondPage />
      
      <footer className="footer">
      <p>&copy; 2023 My Farm</p>
       </footer>
   </div>

   
  );
}

export default Home;

