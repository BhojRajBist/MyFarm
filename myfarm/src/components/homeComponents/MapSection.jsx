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


// this is woking mapsection


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



// this is woking mapsection end

// import React, { useState ,useEffect } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';
// import axios from 'axios';

// import './MapSection.css';

// const MapSection = () => {

//   const [popup, setPopup] = useState(null);
//   const [formData, setFormData] = useState({
//     image: '',
//     title: '',
//     quantity: '',
//     price: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Send the form data to the backend
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/farmer/farmer-posts/', formData);
//       console.log('Form data sent successfully:', response.data);
//       // You can handle success actions here, e.g., close the form or show a success message
//     } catch (error) {
//       console.error('Error sending form data:', error);
//       // Handle error cases here
//     }
//   };

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
//       image: '/path/to/placeholder-image.jpg',
//       title: 'Tomato',
//       farmName: 'Example Farm',
//       quantity: '10 kg',
//       price: '$2.50'
//     };

//     const marker = new maptilersdk.Marker()
//       .setLngLat([83.9856, 28.2096])
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
//   }, []);

//   const createPopup = (data) => {
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false
//     })
//       .setLngLat([83.9856, 28.2096])
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
//         </div>

//         <div> 
//         <button onclick="openCreatePostForm()">Create Post</button>

//         <form id="createPostForm" style="display: none;" onSubmit="${handleFormSubmit}">
//           <label for="image">Image:</label>
//           <input type="text" id="image" name="image" value="${formData.image}" onChange="${handleInputChange}" required>

//           <label for="title">Title:</label>
//           <input type="text" id="title" name="title" value="${formData.title}" onChange="${handleInputChange}" required>

//           <label for="quantity">Quantity:</label>
//           <input type="text" id="quantity" name="quantity" value="${formData.quantity}" onChange="${handleInputChange}" required>

//           <label for="price">Price:</label>
//           <input type="text" id="price" name="price" value="${formData.price}" onChange="${handleInputChange}" required>

//           <button type="submit">Submit</button>
//         </form>
// </div>

  
//     `;
//   };

//   window.navigate = () => {
//     console.log('Navigate button clicked');
//   };

//   window.openCreatePostForm = () => {
//     const createPostForm = document.getElementById('createPostForm');
//     if (createPostForm) {
//       createPostForm.style.display = 'block';
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleCreatePost}>Create Post</button>
//       <div id="map" style={{ height: '100vh' }}></div>
//     </div>

    
//   );
// };

// export default MapSection;


// import React, { useEffect, useState } from 'react';
// import '@maptiler/sdk/dist/maptiler-sdk.css';
// import * as maptilersdk from '@maptiler/sdk';

// import './MapSection.css';

// const MapSection = () => {
//   const [popup, setPopup] = useState(null);
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     maptilersdk.config.apiKey = 'i5SNt5gzLB42EuF1VtPa';

//     // Get user's location
//     if ('geolocation' in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation([longitude, latitude]);
//         },
//         (error) => {
//           console.error('Error getting user location:', error.message);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by your browser');
//     }
//   }, []);

//   useEffect(() => {
//     if (userLocation) {
//       // Initialize the map
//       const map = new maptilersdk.Map({
//         container: 'map',
//         style: maptilersdk.MapStyle.STREETS,
//         center: userLocation,
//         zoom: 13,
//         geolocate: maptilersdk.GeolocationType.POINT,
//       });

//       const popupData = {
//         image: '/path/to/farmer-image.jpg',
//         title: 'Farmer Name',
//         farmName: 'Farmer Farm',
//         quantity: '10 kg',
//         price: '$2.50',
//       };

//       // Use the user's location as the origin
//       const origin = userLocation;

//       // Use the farmer's location as the destination (replace with actual farmer's coordinates)
//       const destination = [83.9856, 28.2096];

//       const marker = new maptilersdk.Marker()
//         .setLngLat(destination)
//         .setPopup(createPopup(popupData))
//         .addTo(map);

//       // Display route from user's location to the farmer's location
//       maptilersdk.RouteControl({
//         showAlternatives: true,
//         profile: maptilersdk.ProfileType.DRIVING,
//         container: 'map',
//       })
//         .setOrigin(origin)
//         .setDestination(destination)
//         .addTo(map);

//       map.on('click', () => {
//         if (popup) {
//           popup.remove();
//           setPopup(null);
//         }
//       });

//       return () => {
//         map.remove();
//       };
//     }
//   }, [userLocation]);

//   const createPopup = (data) => {
//     const newPopup = new maptilersdk.Popup({
//       closeButton: true,
//       closeOnClick: false,
//     })
//       .setLngLat(userLocation)
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


