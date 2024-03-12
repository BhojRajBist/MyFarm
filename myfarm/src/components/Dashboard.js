import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationControl, ScaleControl, FullscreenControl  } from 'maplibre-gl';

import delhiData from '../wmslayers/delhi.json';
import mumbaiData from '../wmslayers/mumbai.json';

function Dashboard() {
  const [map, setMap] = useState(null);
  const [selectedLayers, setSelectedLayers] = useState([]);
  const [selectedAerodrome, setSelectedAerodrome] = useState(null);
  const location = useLocation(); // Access location object
  
  useEffect(() => {
    const aerodrome = location.state?.selectedAerodrome || 'New Delhi';
    const aerodromeData = aerodrome === 'New Delhi' ? delhiData : mumbaiData;
    if(!map){
    const initializedmap = new maplibregl.Map({
      container: 'map-panel',
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=Otbh9YhFMbwux7HyoffB',
      center: aerodromeData.center,
      zoom: 12,
    });
    console.log("hello")

    initializedmap.addControl(new ScaleControl(), 'bottom-left');
    initializedmap.addControl(new NavigationControl(), 'top-right');
    initializedmap.addControl(new FullscreenControl(), 'bottom-right'); // Add FullscreenControl
    
    setMap( initializedmap);
  }
    setSelectedAerodrome(aerodrome);
    setSelectedLayers(aerodromeData.wmslayers);

  
  }, [location.state, map]);

  const handleSelectClick = (e) => {
    const value = e.target.value;
    const aerodromeData = value === 'New Delhi' ? delhiData : mumbaiData;
    const coordinates = aerodromeData.center;

    setSelectedAerodrome(value);
    setSelectedLayers(aerodromeData.wmslayers);

    if (map) {
      map.setCenter(coordinates);
    }
  };

  const handleMapClick = (e) => {
    // Your existing map click handling code
  };

  const handleLayerChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      addWmsLayer(value);
    } else {
      removeWmsLayer(value);
    }
  };

  const addWmsLayer = (layer) => {
    const [aerodrome] = layer.split(':'); // Splitting the layer value at the colon
    map.addLayer({
      'id': `${layer}`,
      'type': 'raster',
      'source': {
        'type': 'raster',
        'tiles': [`http://localhost:8080/geoserver/${aerodrome}/wms?service=WMS&version=1.1.0&request=GetMap&layers=${layer}&bbox={bbox-epsg-3857}&transparent=true&width=256&height=256&srs=EPSG%3A3857&format=image/png`],
        'tileSize': 256
      },
      'paint': {}
    });
  };

  const removeWmsLayer = (layer) => {
    map.removeLayer(`${layer}`);
  };

  return (
    <div className='dashboard'>
      <div className='layer-panel'>
        <div className='aerodrome'>
          <h5>Aerodrome *</h5>
          <select className='select-box' value={selectedAerodrome} onChange={handleSelectClick}>
            <option>New Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className='layers'>
          <h5>Layers *</h5>
          <div className="scrollable-panel">
            {selectedLayers.map((layer, index) => (
              <label key={index} className="layer-option">
                <input type="checkbox" name="layer" value={layer} onChange={handleLayerChange} />
                <span className="radio-custom"></span> {layer}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div id='map-panel' className='map-panel' onClick={handleMapClick}></div>
    </div>
  );
}

export default Dashboard;
