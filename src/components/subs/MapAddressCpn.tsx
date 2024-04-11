// MapContainer.tsx
import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
interface IMapProp {
  lat: number;
  lng: number;
}
const MapAddressCpn: React.FC<IMapProp> = ({ lat, lng }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [marker, setMarker] = useState({ lat: lat, lng: lng });
  useEffect(() => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
    }
    setMarker({ lat: lat, lng: lng });
  }, [lat, lng]);

  const onMountMap = (map: google.maps.Map) => {
    if (window.google && window.google.maps) {
      setScriptLoaded(true);
    }
    setMarker({ lat: lat, lng: lng });
  };

  const onUnmountMap = () => {
    setScriptLoaded(false);
  };

  return (
    <>
      {scriptLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={9}
          center={marker}
          onLoad={onMountMap}
          onUnmount={onUnmountMap}>
          {<Marker position={marker} />}
        </GoogleMap>
      )}
    </>
  );
};

export default MapAddressCpn;
