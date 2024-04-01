import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Modal } from "react-bootstrap";

interface MapModalProps {
  show: boolean;
  onHide: () => void;
}

const MapModal: React.FC<MapModalProps> = ({ show, onHide }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (show && !mapRef.current) {
      // Khởi tạo bản đồ khi modal được hiển thị
      mapRef.current = L.map("map-modal", {
        center: [0, 0],
        zoom: 1,
      });

      // Thêm layer OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Clean up khi modal bị ẩn
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Map Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="map-modal" style={{ width: "100%", height: "400px" }}></div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default MapModal;
