import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  return (
    <MapContainer
      center={[23.2146, 72.6842]} // IIT Gandhinagar coordinates
      zoom={17}
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Standard OpenStreetMap Tiles (2D Map) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MapComponent;
