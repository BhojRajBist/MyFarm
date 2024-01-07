// src/components/MapSection.jsx
import './MapSection.css';

import React, { useEffect } from 'react';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';

const MapSection = () => {
  useEffect(() => {
    maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

    const map = new maptilersdk.Map({
      container: 'map', // container's id or the HTML element in which SDK will render the map
      style: maptilersdk.MapStyle.STREETS,
      geolocate: maptilersdk.GeolocationType.POINT
    });

    return () => {
      // Clean up if needed
      map.remove();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      {/* You can add any additional content or components here */}
      <div id="map" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default MapSection;