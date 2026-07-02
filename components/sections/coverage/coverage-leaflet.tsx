"use client";

import { useEffect } from "react";
import L from "leaflet";

import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { coverageLocations } from "@/constants/coverage-location";

const indonesiaBounds: [[number, number], [number, number]] = [
  [-11.2, 94.5],
  [6.5, 141.5],
];

/* ========================================================= */

const goldMarker = new L.Icon({
  iconUrl: "/marker/marker-gold.svg",
  iconRetinaUrl: "/marker/marker-gold.svg",
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  tooltipAnchor: [0, -32],
});

/* ========================================================= */

function MapController() {
  const map = useMap();

  useEffect(() => {
    const updateMap = () => {
      setTimeout(() => {
        map.invalidateSize();

        map.fitBounds(indonesiaBounds, {
          padding: [30, 30],
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

/* ========================================================= */

const CoverageLeaflet = () => {
  return (
    <MapContainer
      zoom={5}
      center={[-2.5, 118]}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      boxZoom={false}
      keyboard={false}
      dragging={false}
      touchZoom={false}
      className="h-full w-full"
    >
      <MapController />

      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />

      {coverageLocations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={goldMarker}
          riseOnHover
        >
          <Tooltip
            direction="top"
            offset={[0, -30]}
            opacity={1}
            sticky
            className="coverage-tooltip"
          >
            {location.city}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CoverageLeaflet;
