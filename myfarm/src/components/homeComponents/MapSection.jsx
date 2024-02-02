// import React, { useEffect, useState } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';

// import './MapSection.css';


// const MapSection = () => {
//   const [popup, setPopup] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     const map = new maptilersdk.Map({
//       container: 'map',
//       style: maptilersdk.MapStyle.STREETS,
//       center: [83.9856, 28.2096], // Replace with your desired coordinates
//       zoom: 13,
//       geolocate: maptilersdk.GeolocationType.POINT
//     });

//     const popupData = {
//       image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg', // Replace with the actual image URL
//       title: 'Tomato',
//       farmName: 'Example Farm',
//       quantity: '10 kg',
//       price: '$2.50'
//     };

//     const marker = new maptilersdk.Marker()
//       .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
//       .setPopup(createPopup(popupData))
//       .addTo(map);

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
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false
//     })
//       .setLngLat([83.9856, 28.2096]) // Replace with your desired coordinates
//       .setHTML(renderPopupContent(data));

//     setPopup(newPopup);

//     return newPopup;
//   };

//   const renderPopupContent = (data) => {
//     return `
//       <div>
//         <img src="${data.image}" alt="${data.title}" style="max-width: 100%; height: auto;">
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
//   };

//   return (
//     <div>
//       <div id="map" style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default MapSection;



// this is woking mapsection end


import React, { useEffect, useState } from 'react';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

import './MapSection.css';

const MapSection = () => {
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.STREETS,
      center: [83.9856, 28.2096],
      zoom: 13,
      geolocate: maptilersdk.GeolocationType.POINT,
    });

    const popupData = {
      image: '/home/bhoj/Desktop/Final Year/MyFarm/myfarm/src/components/assets/istockphoto-90634594-612x612.jpg',
      title: 'Tomato',
      farmName: 'Example Farm',
      quantity: '10 kg',
      price: '$2.50',
    };

    const marker = new maptilersdk.Marker()
      .setLngLat([83.9856, 28.2096])
      .setPopup(createPopup(popupData))
      .addTo(map);

    map.on('click', () => {
      if (popup) {
        popup.remove();
        setPopup(null);
      }
    });

    // Add routing from user location to marker
    map.on('load', () => {
      maptilersdk.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }).addTo(map);

      const directions = new MapboxDirections({
        accessToken: 'YOUR_MAPBOX_API_KEY', // Replace with your Mapbox API key
        unit: 'metric',
        profile: 'mapbox/driving',
        controls: {
          instructions: false,
        },
      });

      map.addControl(directions, 'top-left');
      directions.setDestination([83.9856, 28.2096]); // Set the destination to the marker's coordinates
    });

    return () => {
      map.remove();
    };
  }, []);

  const createPopup = (data) => {
    const newPopup = new maptilersdk.Popup({
      closeButton: true,
      closeOnClick: false,
    })
      .setLngLat([83.9856, 28.2096])
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






