'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const navigation = [
    { name: t('nav.home'), href: `/${locale}` },
    { name: t('nav.about'), href: `/${locale}/about` },
    { name: t('nav.services'), href: `/${locale}/services` },
    { name: t('nav.pricing'), href: `/${locale}/pricing` },
    { name: t('nav.contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Karaaslan-logo.png"
                  alt="Fahrschule Karaaslan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Fahrschule Karaaslan</div>
                <div className="text-sm text-gray-400">4,7 ⭐ (299 {t('hero.rating')})</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Wanheimer Str. 70<br />
                  47053 Duisburg
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="tel:+492036664152" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  0203 664152
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <a href="mailto:info@fahrschule-karaaslan.de" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  info@fahrschule-karaaslan.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Fahrschule Karaaslan. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
