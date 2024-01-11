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



// import './MapSection.css';
// // src/components/MapSection.jsx
// import React, { useEffect, useState } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css'; // Include the Maptiler SDK CSS file
// import * as maptilersdk from '@maptiler/sdk';

// const MapSection = () => {
//   const [popup, setPopup] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     const map = new maptilersdk.Map({
//       container: 'map',
//       style: maptilersdk.MapStyle.STREETS,
//       geolocate: maptilersdk.GeolocationType.POINT,
//     });

//     // Example data for the popup
//     const popupData = {
//       coordinates: [83.9827, 28.2180], // Update with your desired coordinates
//       image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg',
//       title: 'Tomato',
//       farmName: 'Example Farm',
//       quantity: '10 kg',
//       price: '$2.50',
//     };

//     // Create a marker at a specific location
//     const marker = new maptilersdk.Marker()
//       .setLngLat(popupData.coordinates)
//       .setPopup(createPopup(popupData))
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
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false,
//     })
//       .setLngLat(data.coordinates)
//       .setHTML(renderPopupContent(data));

//     setPopup(newPopup);

//     return newPopup;
//   };

//   const renderPopupContent = (data) => {
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

//   window.navigate = () => {
//     console.log('Navigate button clicked');
//     // Implement your navigation logic here
//   };

//   return <div id="map" style={{ height: '100vh' }}></div>;
// };

// export default MapSection;

// import React, { useEffect } from 'react';
// import { Map } from 'maplibre-gl';
// import { AnyRouting } from '@any-routing/core';
// import { HereProvider, HereRoutingData } from '@any-routing/here-data-provider';
// import { defaultMapLibreProjectorOptions, MapLibreProjector } from '@any-routing/maplibre-engine';
// import { AnnotationPlugin } from '@any-routing/annotation-plugin';

// const MapSection = () => {
//   useEffect(() => {
//     const map = new Map({
//       container: 'map', // Replace 'map' with the id or ref of your map container
//       style: 'maplibre://styles/mapbox/streets-v11', // Replace with your desired map style
//       center: [0, 0], // Replace with your desired map center
//       zoom: 1, // Replace with your desired zoom level
//     });

//     const dataProvider = new HereProvider({ apiKey: 'i5SNt5gzLB42EuF1VtPa' }); // Replace with your Here API key
//     const projector = new MapLibreProjector({
//       ...defaultMapLibreProjectorOptions,
//       map,
//     });

//     const routing = new AnyRouting<HereRoutingData>({
//       dataProvider,
//       waypointsSyncStrategy: 'none',
//       plugins: [projector, new AnnotationPlugin({ map })],
//     });

//     // Event listeners
//     routing.on('routesFound', (data) => console.log('Routes Found:', data));
//     routing.on('routeSelected', (data) => console.log('Route Selected:', data));

//     // Initialize routing
//     map.on('load', () => {
//       routing.initialize();

//       // Set waypoints and recalculate route
//       routing.setWaypoints([
//         { position: { lat: 49.9539315, lng: 18.8531001 }, properties: { label: 'A' } },
//         { position: { lng: 21.01178, lat: 52.22977 }, properties: { label: 'B' } },
//       ]);

//       routing.recalculateRoute({ fitViewToData: true });
//     });

//     // Cleanup
//     return () => {
//       routing.off('routesFound');
//       routing.off('routeSelected');
//       map.remove();
//     };
//   }, []);

//   return <div id="map" style={{ height: '100vh' }}></div>; // Replace 'map' with the id or ref of your map container
// };

// export default MapSection;

