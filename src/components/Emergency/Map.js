// components/Emergency/Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for leaflet's default marker icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  const emergencies = [
    { lat: 37.7749, lng: -122.4194, title: 'Emergency 1', description: 'Fire in downtown' },
    { lat: 34.0522, lng: -118.2437, title: 'Emergency 2', description: 'Car accident' },
    { lat: 40.7128, lng: -74.0060, title: 'Emergency 3', description: 'Medical emergency' },
    // Add more emergency locations as needed
  ];

  return (
    <div className="w-2/3 rounded-lg border border-slate-200 h-[90vh] p-4 my-4">
      <h3>Emergencies</h3>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {emergencies.map((emergency, index) => (
          <Marker key={index} position={[emergency.lat, emergency.lng]}>
            <Popup>
              <div>
                <h4>{emergency.title}</h4>
                <p>{emergency.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
