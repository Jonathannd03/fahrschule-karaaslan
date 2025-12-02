'use client';

export default function GoogleMap() {
  // Address: Wanheimer Str. 70, 47053 Duisburg
  // Using standard Google Maps embed with search query

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
      <iframe
        src="https://maps.google.com/maps?q=Wanheimer+Str.+70,+47053+Duisburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Fahrschule Karaaslan Location"
        className="absolute inset-0"
      />
    </div>
  );
}
