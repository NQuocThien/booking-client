import React, { useEffect, useRef } from "react";

// Khai báo mở rộng cho window
declare global {
  interface Window {
    Microsoft: any;
    initMap: () => void;
  }
}

const BingMap = ({
  lat,
  lng,
  title = undefined,
}: {
  lat: number;
  lng: number;
  title?: string;
}) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // thêm thể script
    const script = document.createElement("script");
    script.src = `https://www.bing.com/api/maps/mapcontrol?key=AvudJ4Nz3hYphoV6VjOWYS7jgrOin8G-rfMb8FT_263RAsiyH1JhuvAvLWbW8qIT&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Microsoft && window.Microsoft.Maps) {
        window.initMap = () => {
          const map = new window.Microsoft.Maps.Map(mapRef.current, {
            credentials:
              "AvudJ4Nz3hYphoV6VjOWYS7jgrOin8G-rfMb8FT_263RAsiyH1JhuvAvLWbW8qIT",
            center: new window.Microsoft.Maps.Location(lat, lng),
            zoom: 14,
          });

          const pin = new window.Microsoft.Maps.Pushpin(map.getCenter(), {
            title: title || "HERE",
          });
          map.entities.push(pin);
        };
      }
    };

    return () => {
      document.body.removeChild(script);
      window.initMap;
    };
  }, [lat, lng]);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
};

export default BingMap;
