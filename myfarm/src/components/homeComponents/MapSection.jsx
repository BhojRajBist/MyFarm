// // src/components/MapSection.jsx
// import './MapSection.css';

// import React, { useEffect } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';

// const MapSection = () => {
//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     const map = new maptilersdk.Map({
//       container: 'map', // container's id or the HTML element in which SDK will render the map
//       style: maptilersdk.MapStyle.STREETS,
//       geolocate: maptilersdk.GeolocationType.POINT
//     });

//     return () => {
//       // Clean up if needed
//       map.remove();
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   return (
//     <div>
//       {/* You can add any additional content or components here */}
//       <div id="map" style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default MapSection;


// src/components/MapSection.jsx
// import './MapSection.css';

// import React, { useEffect, useState } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';


// const MapSection = () => {
//   const [popup, setPopup] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     const map = new maptilersdk.Map({
//       container: 'map',
//       style: maptilersdk.MapStyle.STREETS,
//       geolocate: maptilersdk.GeolocationType.POINT
//     });

//     // Example data for the popup
//     const popupData = {
//       image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg' ,
//       title: 'Tomato',
//       farmName: 'Example Farm',
//       quantity: '10 kg',
//       price: '$2.50'
//     };

//     // Create a marker at a specific location
//     const marker = new maptilersdk.Marker()
//       .setLngLat([28.2096, 83.9856]) // Replace with your desired coordinates
//       .setPopup(createPopup(popupData)) // Set the popup for the marker
//       .addTo(map);

//     // Close the popup when the map is clicked
//     map.on('click', () => {
//       if (popup) {
//         popup.remove();
//         setPopup(null);
//       }
//     });

//     return () => {
//       map.remove();
//     };
//   }, [popup]);

//   const createPopup = (data) => {
//     // Create a popup
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false
//     })
//       .setLngLat([28.2096, 83.9856]) // Replace with your desired coordinates
//       .setHTML(renderPopupContent(data)); // Set the HTML content for the popup

//     setPopup(newPopup);

//     return newPopup;
//   };

//   const renderPopupContent = (data) => {
//     // Render the content of the popup
//     return `
//       <div>
//         <img src="${data.image}" alt="${data.title}" style="max-width: 100%;">
//         <h3>${data.title}</h3>
//         <p>Farm: ${data.farmName}</p>
//         <p>Quantity: ${data.quantity}</p>
//         <p>Price: ${data.price}</p>
//         <button onclick="navigate()">Navigate</button>
//       </div>
//     `;
//   };

//   // Function to handle the navigate button click
//   window.navigate = () => {
//     // Implement navigation logic here
//     console.log('Navigate button clicked');
//   };

//   return (
//     <div>
//       <div id="map" style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default MapSection;
// src/components/MapSection.jsx
// import './MapSection.css';

// import React, { useEffect, useState } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';

// const MapSection = () => {
//   const [popup, setPopup] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     const map = new maptilersdk.Map({
//       container: 'map',
//       style: maptilersdk.MapStyle.STREETS,
//       center: [83.9856, 28.2096], // Set your initial center coordinates
//       zoom: 13,
//     });

//     // Example data for the popup
//     const popupData = {
//       image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg',
//       title: 'Tomato',
//       farmName: 'Example Farm',
//       quantity: '10 kg',
//       price: '$2.50',
//     };

//     // Create a marker at a specific location
//     const marker = new maptilersdk.Marker()
//       .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
//       .setPopup(createPopup(popupData)) // Set the popup for the marker
//       .addTo(map);

//     // Close the popup when the map is clicked
//     map.on('click', () => {
//       if (popup) {
//         popup.remove();
//         setPopup(null);
//       }
//     });

//     return () => {
//       map.remove();
//     };
//   }, []); // Empty dependency array to run the effect only once on mount

//   const createPopup = (data) => {
//     // Create a popup
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false,
//     })
//       .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
//       .setHTML(renderPopupContent(data)); // Set the HTML content for the popup

//     setPopup(newPopup);

//     return newPopup;
//   };

//   const renderPopupContent = (data) => {
//     // Render the content of the popup
//     return `
//       <div>
//         <img src="${data.image}" alt="${data.title}" style="max-width: 100%;">
//         <h3>${data.title}</h3>
//         <p>Farm: ${data.farmName}</p>
//         <p>Quantity: ${data.quantity}</p>
//         <p>Price: ${data.price}</p>
//         <button onclick="navigate()">Navigate</button>
//       </div>
//     `;
//   };

//   // Function to handle the navigate button click
//   window.navigate = () => {
//     // Implement navigation logic here
//     console.log('Navigate button clicked');
//   };

//   return (
//     <div>
//       <div id="map" style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default MapSection;

// src/components/MapSection.jsx
// src/components/MapSection.jsx




import React, { useEffect, useState } from 'react';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';

import './MapSection.css';


const MapSection = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.STREETS,
      center: [83.9856, 28.2096], // Replace with your desired coordinates
      zoom: 13,
      geolocate: maptilersdk.GeolocationType.POINT
    });

    const popupData = {
      image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg', // Replace with the actual image URL
      title: 'Tomato',
      farmName: 'Example Farm',
      quantity: '10 kg',
      price: '$2.50'
    };

    const marker = new maptilersdk.Marker()
      .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
      .setPopup(createPopup(popupData))
      .addTo(map);

    map.on('click', () => {
      if (popup) {
        popup.remove();
        setPopup(null);
      }
    });

    return () => {
      map.remove();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const createPopup = (data) => {
    const newPopup = new maptilersdk.Popup({
      closeButton: true,
      closeOnClick: false
    })
      .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
      .setHTML(renderPopupContent(data));

    setPopup(newPopup);

    return newPopup;
  };

  const renderPopupContent = (data) => {
    return `
      <div>
        <img src="${data.image}" alt="${data.title}" style="max-width: 100%; height: auto;">
        <h3>${data.title}</h3>
        <p>Farm: ${data.farmName}</p>
        <p>Quantity: ${data.quantity}</p>
        <p>Price: ${data.price}</p>
        <button onclick="navigate()">Navigate</button>
      </div>
    `;
  };

  window.navigate = () => {
    console.log('Navigate button clicked');
  };

  return (
    <div>
      <div id="map" style={{ height: '100vh' }}></div>
    </div>
  );
};

export default MapSection;