"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

import type { Website } from "@/types/homepage";

interface OfficeLeafletProps {
  website: Website;
}

const marker = new L.Icon({
  iconUrl: "/marker/marker-gold.svg",
  iconRetinaUrl: "/marker/marker-gold.svg",
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -34],
  tooltipAnchor: [0, -32],
});

export default function OfficeLeaflet({ website }: OfficeLeafletProps) {
  const latitude = website.latitude ?? -6.1646006;
  const longitude = website.longitude ?? 106.914547;
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      scrollWheelZoom
      zoomControl
      dragging
      touchZoom
      doubleClickZoom
      attributionControl={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[latitude, longitude]} icon={marker} riseOnHover>
        <Tooltip direction="top" sticky offset={[0, -30]}>
          {website.company_name}
        </Tooltip>

        <Popup>
          <div className="space-y-2">
            <h3 className="font-bold">{website.company_name}</h3>

            <p>{website.address}</p>

            <a
              href={
                website.google_maps
                  ? website.google_maps
                  : `https://maps.google.com/?q=${latitude},${longitude}`
              }
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
