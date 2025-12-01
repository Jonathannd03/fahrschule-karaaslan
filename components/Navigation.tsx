'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronDown, Check } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('pricing'), href: `/${locale}/pricing` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const changeLocale = (newLocale: string) => {
    // Build the new path preserving the current route
    const currentPath = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${currentPath || ''}`;
    window.location.href = newPath;
    setIsLangOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/images/Karaaslan-logo.png"
                alt="Fahrschule Karaaslan Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Fahrschule</div>
              <div className="text-sm text-gray-600">Karaaslan</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                aria-label="Change language"
              >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage.name}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLocale(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors ${
                        locale === lang.code ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{lang.flag}</span>
                        <span className={`text-sm font-medium ${
                          locale === lang.code ? 'text-primary-600' : 'text-gray-700'
                        }`}>
                          {lang.name}
                        </span>
                      </div>
                      {locale === lang.code && (
                        <Check className="w-4 h-4 text-primary-600" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('getStarted')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="px-2 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {locale === 'de' ? 'Sprache' : locale === 'en' ? 'Language' : 'Dil'}
                  </div>
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLocale(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all duration-200 ${
                        locale === lang.code
                          ? 'bg-gradient-gold text-white shadow-lg scale-105'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="text-2xl mb-1">{lang.flag}</span>
                      <span className={`text-xs font-semibold ${
                        locale === lang.code ? 'text-white' : 'text-gray-600'
                      }`}>
                        {lang.name}
                      </span>
                      {locale === lang.code && (
                        <Check className="w-3 h-3 mt-1 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:shadow-lg transition-all mx-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('getStarted')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
