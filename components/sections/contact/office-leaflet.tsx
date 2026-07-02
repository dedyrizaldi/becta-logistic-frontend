"use client";

import { useEffect } from "react";
import L from "leaflet";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const office = {
  name: "PT Becta Logistics",
  address: "Jl. Raya Pelabuhan No.88, Jakarta Utara, Indonesia",
  latitude: -6.1045,
  longitude: 106.8863,
};

const marker = new L.Icon({
  iconUrl: "/marker/marker-gold.svg",
  iconRetinaUrl: "/marker/marker-gold.svg",
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  tooltipAnchor: [0, -32],
  popupAnchor: [0, -34],
});

const bounds: [[number, number], [number, number]] = [
  [office.latitude - 0.01, office.longitude - 0.01],
  [office.latitude + 0.01, office.longitude + 0.01],
];

function MapController() {
  const map = useMap();

  useEffect(() => {
    const updateMap = () => {
      setTimeout(() => {
        map.invalidateSize();

        map.fitBounds(bounds, {
          padding: [80, 80],
          animate: false,
        });
      }, 100);
    };

    updateMap();

    window.addEventListener("resize", updateMap);

    return () => {
      window.removeEventListener("resize", updateMap);
    };
  }, [map]);

  return null;
}

export default function OfficeLeaflet() {
  return (
    <MapContainer
      zoomControl
      attributionControl={false}
      scrollWheelZoom
      dragging
      touchZoom
      doubleClickZoom
      className="h-full w-full"
    >
      <MapController />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[office.latitude, office.longitude]}
        icon={marker}
        riseOnHover
      >
        <Tooltip
          direction="top"
          sticky
          opacity={1}
          offset={[0, -30]}
          className="coverage-tooltip"
        >
          {office.name}
        </Tooltip>

        <Popup>
          <div className="space-y-2">
            <strong>{office.name}</strong>

            <p>{office.address}</p>

            <a
              href={`https://maps.google.com/?q=${office.latitude},${office.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D8A41D]"
            >
              Open Google Maps →
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
