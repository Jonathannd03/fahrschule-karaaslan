'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const images = [
  { src: '/images/gallery-1.jpg', alt: 'Fahrschule Karaaslan - Training' },
  { src: '/images/gallery-2.jpg', alt: 'Fahrschule Karaaslan - Vehicles' },
  { src: '/images/gallery-3.jpeg', alt: 'Fahrschule Karaaslan - Students' },
  { src: '/images/gallery-4.jpeg', alt: 'Fahrschule Karaaslan - Classroom' },
  { src: '/images/gallery-5.png', alt: 'Fahrschule Karaaslan - Success' },
  { src: '/images/gallery-6.png', alt: 'Fahrschule Karaaslan - Team' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const openModal = (index: number) => {
    setIsAnimating(true);
    setSelectedImage(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsAnimating(false);
    }, 200);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    setIsAnimating(true);
    setTimeout(() => {
      if (direction === 'prev') {
        setSelectedImage((selectedImage - 1 + images.length) % images.length);
      } else {
        setSelectedImage((selectedImage + 1) % images.length);
      }
      setIsAnimating(false);
    }, 150);
  };

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 active:scale-95"
            onClick={() => openModal(index)}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Loading Skeleton */}
            {!imageLoaded[index] && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
            )}

            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-all duration-700 ${
                imageLoaded[index] ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-110 group-hover:brightness-75`}
              onLoad={() => handleImageLoad(index)}
            />

            {/* Overlay with Gold Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Zoom Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-2xl">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Image Number Badge */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-gradient-gold active:bg-gradient-gold rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 hover:scale-110 active:scale-95 group"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-gradient-gold active:bg-gradient-gold rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:-translate-x-1"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-gradient-gold active:bg-gradient-gold rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 hover:translate-x-1"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Container */}
          <div
            className={`relative w-full h-full max-w-6xl max-h-[85vh] transition-all duration-300 ${
              isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain drop-shadow-2xl"
            />

            {/* Image Counter */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-gold rounded-full shadow-2xl">
              <p className="text-white font-semibold text-xs sm:text-sm">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Thumbnails Navigation */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === selectedImage
                    ? 'w-6 sm:w-8 bg-gradient-to-r from-primary-400 to-primary-600'
                    : 'w-1.5 sm:w-2 bg-white/40 active:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
