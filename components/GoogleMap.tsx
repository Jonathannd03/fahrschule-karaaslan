'use client';

import { useEffect, useRef } from 'react';

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if (mapRef.current && (window as any).google) {
          const map = new (window as any).google.maps.Map(mapRef.current, {
            center: { lat: 51.1657, lng: 10.4515 },
            zoom: 12,
          });

          new (window as any).google.maps.Marker({
            position: { lat: 51.1657, lng: 10.4515 },
            map: map,
            title: 'Fahrschule Karaaslan',
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-2xl overflow-hidden bg-gray-100"
      style={{ minHeight: '400px' }}
    >
      <div className="h-full flex items-center justify-center text-gray-500">
        <div className="text-center">
          <p className="text-lg mb-2">Google Maps Placeholder</p>
          <p className="text-sm">
            API-Schlüssel erforderlich für Live-Karte
          </p>
        </div>
      </div>
    </div>
  );
}
