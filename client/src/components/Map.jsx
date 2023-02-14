import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import "./map.css";
function MyComponent() {
    const map = useMapEvent('click', () => {
      map.setCenter([50.5, 30.5])
    })
    return null
  }
const Map = ({ location, zoomLevel, user }) => (
  <MapContainer center={location} zoom={11} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={location}>
      <Popup>
        {user}
      </Popup>
    </Marker>
  </MapContainer>
);
export default Map;
