"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect } from "react";

// Fix Leaflet's default icon paths (important for Next.js/Vite/Webpack)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// custom icons I used: https://www.flaticon.com/
const cafeIcon = new L.Icon({
  iconUrl: "/icons/coffee-heart.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const sightIcon = new L.Icon({
  iconUrl: "/icons/fort.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function FitBounds({ places }) {
  const map = useMap();

  useEffect(() => {
    if (places.length > 0) {
      const bounds = L.latLngBounds(places.map((p) => p.coords));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, places]);

  return null;
}

export default function MapPage() {
  const lublinCenter = [51.2469, 22.5684]; // 

  const places = [
    { name: "Mrau Cafe", coords: [51.24495332767373, 22.555896210289543], type: "cafe" },
    { name: "Anabilis", coords: [51.24818357015024, 22.566153710289825], type: "cafe" },
    { name: "Pelier Bistro", coords: [51.24761792433394, 22.564766625634455], type: "cafe" },
    { name: "Cafe Mari", coords: [51.245934644306566, 22.548992567962056], type: "cafe" },
    { name: "Kawiarnia Nie wylej", coords: [51.24745154054111, 22.550214296798195], type: "cafe" },
    { name: "Lublin Castle", coords: [51.25059817100529, 22.57246968330693], type: "sight" },
    { name: "Old Town", coords: [51.2485, 22.5678], type: "sight" },
    { name: "Nad Zalewem", coords: [51.179864659603346, 22.53982656795776], type: "sight" },
    { name: "Ogród Botaniczny UMCS", coords: [51.265880260439225, 22.516625581454853], type: "sight" },
  ];

  return (
    <main className="h-screen w-full bg-black">
      <MapContainer
        center={lublinCenter}
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors &copy; <a href="https://www.carto.com/">CARTO</a>'
        />

        {/* Circle around Lublin */}
        <Circle
          center={lublinCenter}
          radius={10000} // ~4km
          pathOptions={{
            color: "#89cff0", //baby blue
            weight: 2,
            fillColor: "#89cff0",
            fillOpacity: 0.1,
          }}
        />

        {/* Markers */}
        {places.map((place, idx) => (
          <Marker
            key={idx}
            position={place.coords}
            icon={place.type === "cafe" ? cafeIcon : sightIcon}
          >
            <Popup>
              <div className="text-center">
                <strong>{place.name}</strong>
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds places={places} />
      </MapContainer>
    </main>
  );
}
