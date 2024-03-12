import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import bannerImage1 from '../images/etod1.png';
import bannerImage2 from '../images/etod2.png';
import bannerImage3 from '../images/etod3.png';
import airport from '../images/banner1.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function LandingPage({ isAuthActive, OnSignInState }) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [selectedAerodrome, setSelectedAerodrome] = useState(null);
  const [manuals, setManuals] = useState([]);

  // Check if access token exists in browser storage
  const access_token_stored = localStorage.getItem('access_token');
  const location = useLocation(); // Access location object
  const signInStateValue = location.state?.signInState;
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch manuals from the API
    const fetchManuals = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/user/files/');
        const data = await response.json();
        setManuals(data);
      } catch (error) {
        console.error('Error fetching manuals:', error);
      }
    };

    fetchManuals();
  }, []);

  const handleViewClick = (aerodrome) => {
    // Navigate to the dashboard with the selected aerodrome
    if (access_token_stored) {
      setSelectedAerodrome(aerodrome);
      navigate('/dashboard', { state: { selectedAerodrome: aerodrome } });
    } else {
      toast.error('Please login to view data.');
    }
  };

  const handleDownloadClick = (manual) => {
    // Check if authenticated, otherwise show toast
    if (!access_token_stored) {
      toast.error('Please login to download manuals.');
    } else {
      // Trigger download link
      const downloadLink = document.createElement('a');
      downloadLink.href = manual.file; // Assuming manual.file contains the download link
      downloadLink.download = manual.title; // Set the filename for the downloaded file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  

  return (
    <div className={`landing-page ${isAuthActive ? 'auth-active' : ''}`}>
      <section className="banner" style={{ backgroundImage: `url(${[bannerImage1, bannerImage2, bannerImage3][currentBannerIndex]})` }}>
        <div className="container">
          <div className="banner-wrap">
            <h1 className="banner-title">
              Welcome <span>to</span> Electronic Terrain and Obstacle Data (eTOD) Geoportal
            </h1>
            <h3 className="banner-subtitle">
              Find aerodrome data, building data, terrain data for specific aerodromes, NOTAM (Notice to Airmen) data, API data, and high-rise building information through our portal.
            </h3>
          </div>
        </div>
        </section>
      <section className="aerodrome-selection">
        <div className="container">
          <h2>Aerodrome List</h2>
          <div className="options">
            <div className="card">
              <div className="thumbnail">
                <img src={airport} alt="Airport" />
              </div>
              <div className="description">
                <h3>Mumbai</h3>
              </div>
              <div className="buttons">
                <button className="link-button" onClick={() => handleViewClick('Mumbai')}><i className="fa fa-eye"></i> View</button>
              </div>
            </div>
            <div className="card">
              <div className="thumbnail">
                <img src={airport} alt="Airport" />
              </div>
              <div className="description">
                <h3>New Delhi</h3>
              </div>
              <div className="buttons">
                <button className="link-button" onClick={() => handleViewClick('New Delhi')}><i className="fa fa-eye"></i> View</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='card-manual-section'>
        <h2>Manuals</h2>
        <div className="card-manual-div">
          {manuals.map((manual, index) => (
            <div className="card-manual" key={index}>
              <h3>{manual.title}</h3>
              <button title='download' onClick={() => handleDownloadClick(manual)}>
  <i className="fa fa-download"></i>
</button>

            </div>
          ))}
        </div>
      </section>
      <section className="etod-info">
        <div className="container">
          <div className='description'>
            <h2>What is eTOD data portal?</h2>
            <p className="answer">The eTOD portal offers access to various electronic terrain and obstacle datasets for different aerodromes. To access specific airport data, users must register and log in to the portal. The datasets include information on obstacle projections and more. Additionally, the portal provides features for users to analyze and visualize the data, facilitating better decision-making and safety measures for aviation operations.</p>
          </div>
          <div className="youtube-video">
            {/* Replace the URL with the embed URL of your YouTube video */}
            <iframe  src="https://www.youtube.com/embed/GOR33RFA4xY?si=x8dqWcvGhrkSVM7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default LandingPage;
