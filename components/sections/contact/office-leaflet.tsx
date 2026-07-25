"use client";

import { useEffect, useMemo } from "react";
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

import type { Website } from "@/types/homepage";

interface OfficeLeafletProps {
  website: Website;
}

const marker = new L.Icon({
  iconUrl: "/marker/marker-gold.svg",
  iconRetinaUrl: "/marker/marker-gold.svg",
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  tooltipAnchor: [0, -32],
  popupAnchor: [0, -34],
});

function MapController({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const map = useMap();

  useEffect(() => {
    const bounds: [[number, number], [number, number]] = [
      [latitude - 0.01, longitude - 0.01],
      [latitude + 0.01, longitude + 0.01],
    ];

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
  }, [latitude, longitude, map]);

  return null;
}

export default function OfficeLeaflet({ website }: OfficeLeafletProps) {
  const latitude = website.latitude ?? -6.1045;
  const longitude = website.longitude ?? 106.8863;

  const position = useMemo(
    () => [latitude, longitude] as [number, number],
    [latitude, longitude],
  );

  return (
    <MapContainer
      center={position}
      zoom={15}
      zoomControl
      attributionControl={false}
      scrollWheelZoom
      dragging
      touchZoom
      doubleClickZoom
      className="h-[520px] w-full"
    >
      <MapController latitude={latitude} longitude={longitude} />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={marker} riseOnHover>
        <Tooltip
          direction="top"
          sticky
          opacity={1}
          offset={[0, -30]}
          className="coverage-tooltip"
        >
          {website.company_name}
        </Tooltip>

        <Popup>
          <div className="space-y-3">
            <h4 className="font-bold">{website.company_name}</h4>

            <p className="text-sm text-slate-600">{website.address}</p>

            <a
              href={
                website.google_maps ||
                `https://maps.google.com/?q=${latitude},${longitude}`
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
