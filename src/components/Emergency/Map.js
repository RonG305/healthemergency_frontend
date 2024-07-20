import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});




const Map = ({ emergencies }) => {
  return (
    <div className="w-2/3 rounded-lg border border-slate-200 h-[80vh] p-4 my-4">
    <h3 className="text-center text-red-500 text-xl my-2">Emergencies</h3>
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
      <TileLayer
      className=" w-full h-full"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {emergencies.map((emergency, index) => (
        <Marker key={index} position={[emergency.latitude, emergency.longitude]}>
          <Popup>
            <div>
              <h4>{emergency.emergency_type}</h4>
              <p>{emergency.report_time}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
  );
};

export default Map;
