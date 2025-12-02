'use client';

import { useState, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function PrototypeBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const messages = {
    de: {
      title: 'Prototyp-Website',
      description: 'Dies ist keine offizielle Website der Fahrschule Karaaslan. Dies ist nur ein Prototyp zu Demonstrationszwecken.',
      button: 'Verstanden',
    },
    en: {
      title: 'Prototype Website',
      description: 'This is not an official website of Fahrschule Karaaslan. This is only a prototype for demonstration purposes.',
      button: 'I Understand',
    },
    tr: {
      title: 'Prototip Web Sitesi',
      description: 'Bu, Fahrschule Karaaslan\'ın resmi web sitesi değildir. Bu sadece gösteri amaçlı bir prototiptir.',
      button: 'Anladım',
    },
  };

  const message = messages[locale as keyof typeof messages] || messages.de;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 pointer-events-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {message.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {message.description}
            </p>

            {/* Action Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {message.button}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
