'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('services'), href: `/${locale}/services` },
    { name: t('pricing'), href: `/${locale}/pricing` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'de' ? 'tr' : 'de';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = path;
  };

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
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-700 uppercase">
                {locale}
              </span>
            </button>
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
              <button
                onClick={toggleLocale}
                className="flex items-center space-x-2 px-2 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase">{locale === 'de' ? 'Türkçe' : 'Deutsch'}</span>
              </button>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:shadow-lg transition-all"
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
