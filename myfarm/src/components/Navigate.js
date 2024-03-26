import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const Navigate = ({ data, map }) => {
  const [routingControl, setRoutingControl] = useState(null);

  useEffect(() => {
    if (map) {
      const { lat, lng } = data;
      const userLocation = map.getCenter();

      setRoutingControl(
        L.Routing.control({
          waypoints: [
            L.latLng(userLocation.lat, userLocation.lng), // User location
            L.latLng(lat, lng), // Product location
          ],
          routeWhileDragging: true,
        }).addTo(map)
      );
    }

    return () => {
      if (routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [data, map]);

  return null; // This component doesn't render anything visible
};

export default Navigate;

