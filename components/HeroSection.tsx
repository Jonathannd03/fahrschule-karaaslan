'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Award,
  Trophy,
  Users,
  Target,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  locale: string;
  translations: {
    rating: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

export default function HeroSection({ locale, translations }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden flex items-center">

      {/* Animated Background Elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full opacity-20 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 - scrollY * 0.3}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-15 blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30 - scrollY * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-gold rounded-full opacity-10 blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15 - scrollY * 0.4}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div
        className="absolute top-32 left-[15%] w-20 h-20 border-4 border-primary-300 rounded-2xl opacity-30 rotate-12"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25 - scrollY * 0.6}px) rotate(${mousePosition.x * 10}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-40 right-[20%] w-16 h-16 bg-gradient-gold rounded-full opacity-40"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20 - scrollY * 0.7}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-[60%] right-[10%] w-12 h-12 border-4 border-primary-400 rounded-full opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30 - scrollY * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Floating Icons Ring */}
          <div className="relative inline-block mb-12">

            {/* Center Trust Badge */}
            <div className="relative z-10 inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all">
              <Star className="w-7 h-7 text-white fill-white mr-3 animate-pulse" />
              <span className="font-bold text-3xl text-white">4,7</span>
              <span className="mx-3 text-white/80 text-xl">★</span>
              <span className="text-sm font-semibold text-white">299 {translations.rating}</span>
            </div>

            {/* Orbiting Icons */}
            <div
              className="absolute -top-12 -left-12 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              <Trophy className="w-8 h-8 text-primary-600" />
            </div>

            <div
              className="absolute -top-8 -right-16 w-14 h-14 bg-gradient-gold rounded-2xl shadow-xl flex items-center justify-center animate-float"
              style={{
                transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 8}px)`,
                animation: 'float 3s ease-in-out infinite 0.5s',
              }}
            >
              <Award className="w-7 h-7 text-white" />
            </div>

            <div
              className="absolute -bottom-10 -right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float"
              style={{
                transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * -10}px)`,
                animation: 'float 3s ease-in-out infinite 1s',
              }}
            >
              <Target className="w-8 h-8 text-primary-600" />
            </div>

            <div
              className="absolute -bottom-6 -left-14 w-14 h-14 bg-gradient-gold rounded-2xl shadow-xl flex items-center justify-center animate-float"
              style={{
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -8}px)`,
                animation: 'float 3s ease-in-out infinite 1.5s',
              }}
            >
              <Users className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[1.1] tracking-tight mb-8 animate-fadeInUp">
            <span className="block text-gray-900 mb-3">
              Dein Weg zum
            </span>
            <span className="block bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Führerschein
            </span>
          </h1>

          {/* Subtitle with Sparkles */}
          <div className="flex items-center justify-center mb-10 animate-fadeInUp animation-delay-200">
            <Sparkles className="w-6 h-6 text-primary-500 mr-3 animate-pulse" />
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              Fahrschule Karaaslan
            </p>
            <Sparkles className="w-6 h-6 text-primary-500 ml-3 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
            {translations.subtitle}
          </p>

          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 animate-fadeInUp animation-delay-600">
            {[
              { icon: Users, value: '299+', label: locale === 'de' ? 'Schüler' : 'Öğrenci', delay: 0 },
              { icon: Star, value: '4.7', label: 'Rating', delay: 0.1 },
              { icon: Trophy, value: '95%', label: locale === 'de' ? 'Erfolg' : 'Başarı', delay: 0.2 },
              { icon: Heart, value: '10+', label: locale === 'de' ? 'Jahre' : 'Yıl', delay: 0.3 },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
                  style={{
                    transform: `translateY(${scrollY * -0.05}px)`,
                    animationDelay: `${stat.delay}s`,
                  }}
                >
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-800">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {translations.cta}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center justify-center px-12 py-6 bg-white/90 backdrop-blur-sm text-gray-900 font-bold rounded-2xl hover:bg-white transition-all border-2 border-gray-200 hover:border-primary-400 text-lg shadow-md hover:shadow-xl"
            >
              {translations.ctaSecondary}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 animate-fadeInUp animation-delay-1000">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-600" />
              <span className="font-medium">{locale === 'de' ? 'TÜV Zertifiziert' : 'TÜV Sertifikalı'}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-600" />
              <span className="font-medium">{locale === 'de' ? 'Moderne Fahrzeuge' : 'Modern Araçlar'}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-600" />
              <span className="font-medium">{locale === 'de' ? 'Erfahrene Lehrer' : 'Deneyimli Eğitmenler'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gradient-gold rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Scroll</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
