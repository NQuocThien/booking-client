import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center?: [number, number];
  zoom?: number;
}

const MapComponent: React.FC<MapProps> = ({ center = [0, 0], zoom = 1 }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Khởi tạo bản đồ khi component được mount
      mapRef.current = L.map("map", {
        center,
        zoom,
      });

      // Thêm layer OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Trả về hàm clean-up cho useEffect
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, zoom]); // Kích hoạt lại useEffect khi center hoặc zoom thay đổi

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
