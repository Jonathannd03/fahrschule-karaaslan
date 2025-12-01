'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Trophy,
  Award,
  TrendingUp
} from 'lucide-react';

interface HeroSectionProps {
  locale: string;
  translations: {
    headline1: string;
    headline2: string;
    rating: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export default function HeroSection({ locale, translations }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpeg',
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* Video Background (Image Carousel Fallback) */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Fahrschule Karaaslan"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/85" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

        {/* Main Content - Centered */}
        <div className="text-center max-w-5xl mx-auto mb-16">

          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8 hover:bg-white/20 transition-all shadow-2xl">
            <Star className="w-6 h-6 text-primary-400 fill-primary-400 mr-2 animate-pulse" />
            <span className="text-white font-bold text-xl">4,7</span>
            <span className="mx-2 text-white/60">•</span>
            <span className="text-white/90 text-sm font-medium">299 {translations.rating}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            <span className="block mb-2">{translations.headline1}</span>
            <span className="block bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
              {translations.headline2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
            {translations.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href={`/${locale}/contact`}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg shadow-xl"
            >
              <span className="flex items-center">
                {translations.cta}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            <Link
              href={`/${locale}/about`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all text-lg shadow-xl"
            >
              {translations.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Floating Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            {
              icon: Users,
              value: '2000+',
              label: locale === 'en' ? 'Students' : 'Öğrenci',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Star,
              value: '4.7',
              label: 'Rating',
              color: 'from-yellow-500 to-yellow-600'
            },
            {
              icon: Trophy,
              value: '95%',
              label: locale === 'en' ? 'Success' : 'Başarı',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: Award,
              value: '10+',
              label: locale === 'en' ? 'Years' : 'Yıl',
              color: 'from-purple-500 to-purple-600'
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.5}s both`,
                }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-white/80">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary-400" />
            <span className="font-medium">{locale === 'en' ? 'TÜV Certified' : 'TÜV Sertifikalı'}</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full hidden sm:block" />
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary-400" />
            <span className="font-medium">{locale === 'en' ? 'Modern Vehicles' : 'Modern Araçlar'}</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full hidden sm:block" />
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary-400" />
            <span className="font-medium">{locale === 'en' ? 'Experienced Instructors' : 'Deneyimli Eğitmenler'}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-400 rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-white/60 font-medium tracking-wider uppercase">Scroll</p>
        </div>
      </div>

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
    </section>
  );
}
