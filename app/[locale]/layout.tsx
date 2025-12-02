import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PrototypeBanner from '@/components/PrototypeBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const metadata = {
    de: {
      title: 'Fahrschule Karaaslan - Professionelle Fahrausbildung in Duisburg',
      description: 'Professionelle Fahrausbildung mit erfahrenen und geduldigen Fahrlehrern. 4,7 Sterne Bewertung aus 299 Reviews. Über 2000 erfolgreich ausgebildete Schüler.',
    },
    en: {
      title: 'Fahrschule Karaaslan - Professional Driving School in Duisburg',
      description: 'Professional driver training with experienced and patient instructors. 4.7 star rating from 299 reviews. Over 2000 successfully trained students.',
    },
    tr: {
      title: 'Fahrschule Karaaslan - Duisburg\'da Profesyonel Sürücü Kursu',
      description: 'Deneyimli ve sabırlı eğitmenlerle profesyonel sürücü eğitimi. 299 yorumdan 4,7 yıldız değerlendirme. 2000\'den fazla başarılı öğrenci.',
    },
  };

  const meta = metadata[locale as keyof typeof metadata] || metadata.de;
  const baseUrl = 'https://fahrschule-karaaslan.de';

  return {
    title: meta.title,
    description: meta.description,
    keywords: locale === 'de'
      ? 'Fahrschule, Duisburg, Führerschein, Fahrausbildung, Klasse B, Fahrlehrer'
      : locale === 'en'
      ? 'Driving School, Duisburg, Driver License, Driving Training, Class B, Driving Instructor'
      : 'Sürücü Kursu, Duisburg, Ehliyet, Sürücü Eğitimi, B Sınıfı, Sürücü Eğitmeni',
    authors: [{ name: 'Fahrschule Karaaslan' }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Fahrschule Karaaslan',
      locale: locale === 'de' ? 'de_DE' : locale === 'en' ? 'en_US' : 'tr_TR',
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'de': `${baseUrl}/de`,
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  // Structured Data for Google Local Business
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: 'Fahrschule Karaaslan',
    image: 'https://fahrschule-karaaslan.de/images/Karaaslan-logo.png',
    '@id': 'https://fahrschule-karaaslan.de',
    url: `https://fahrschule-karaaslan.de/${locale}`,
    telephone: '+492036664152',
    email: 'info@fahrschule-karaaslan.de',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wanheimer Str. 70',
      addressLocality: 'Duisburg',
      postalCode: '47053',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4575,
      longitude: 6.7504,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '299',
    },
    sameAs: [
      'https://www.facebook.com/fahrschule-karaaslan',
      'https://www.instagram.com/fahrschule-karaaslan',
    ],
  };

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <PrototypeBanner />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
