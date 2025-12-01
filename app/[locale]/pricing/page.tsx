import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Euro, Car, BookOpen, FileText } from 'lucide-react';

export default async function PricingPage() {
  const locale = await getLocale();
  const t = await getTranslations();

  const mainPrices = [
    {
      icon: FileText,
      title: t('pricing.registration.title'),
      price: t('pricing.registration.price'),
      description: t('pricing.registration.description'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Car,
      title: t('pricing.lesson.title'),
      price: t('pricing.lesson.price'),
      description: t('pricing.lesson.description'),
      color: 'from-primary-500 to-primary-600',
    },
  ];

  const included = [
    locale === 'de' ? 'Theorieunterricht' : 'Teori dersleri',
    locale === 'de' ? 'Lehrmaterial' : 'Eğitim materyalleri',
    locale === 'de' ? 'TÜV-Anmeldung' : 'TÜV kaydı',
    locale === 'de' ? 'Vorstellung zur Prüfung' : 'Sınava sunulma',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('/images/gallery-5.png')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                {t('pricing.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300">{t('pricing.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-gold rounded-full text-white font-bold text-lg mb-6">
              <Car className="w-6 h-6 mr-2" />
              {t('pricing.classB')}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {locale === 'de'
                ? 'Transparente Preisgestaltung'
                : 'Şeffaf Fiyatlandırma'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {mainPrices.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary-300"
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <div className="flex items-baseline mb-4">
                        <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                          {item.price.split(' ')[0]}
                        </span>
                        <span className="text-2xl font-semibold text-gray-600 ml-2">
                          €
                        </span>
                      </div>
                      <p className="text-lg text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* What's Included */}
          <div className="bg-gradient-to-br from-primary-50 to-white p-10 rounded-3xl border-2 border-primary-100 shadow-md">
            <div className="flex items-start space-x-6 mb-8">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('pricing.included.title')}
                </h3>
                <p className="text-lg text-gray-600">
                  {locale === 'de'
                    ? 'Folgendes ist im Anmeldepreis bereits enthalten:'
                    : 'Kayıt ücretine aşağıdakiler dahildir:'}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-6">
                <Euro className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Faire Preise' : 'Adil Fiyatlar'}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {locale === 'de'
                  ? 'Keine versteckten Kosten. Transparente Preisgestaltung von Anfang an.'
                  : 'Gizli maliyet yok. Başından itibaren şeffaf fiyatlandırma.'}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Flexible Zahlung' : 'Esnek Ödeme'}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {locale === 'de'
                  ? 'Bezahle deine Fahrstunden einzeln. Keine großen Vorauszahlungen nötig.'
                  : 'Sürüş derslerinizi tek tek ödeyin. Büyük ön ödeme gerekmez.'}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Alles Inklusive' : 'Her Şey Dahil'}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {locale === 'de'
                  ? 'Theorie, Material und TÜV-Anmeldung sind bereits im Preis enthalten.'
                  : 'Teori, materyal ve TÜV kaydı fiyata dahildir.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white border-y border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 mb-4">
            {t('pricing.note')}
          </p>
          <p className="text-gray-500">
            {locale === 'de'
              ? 'Die durchschnittlichen Gesamtkosten für den Führerschein Klasse B liegen bei ca. 2.000-2.500€, abhängig von der Anzahl der benötigten Fahrstunden.'
              : 'B sınıfı ehliyet için ortalama toplam maliyet, gereken sürüş dersi sayısına bağlı olarak yaklaşık 2.000-2.500€ arasındadır.'}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/gallery-6.png')] opacity-5 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {locale === 'de'
              ? 'Bereit anzufangen?'
              : 'Başlamaya hazır mısınız?'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Kontaktiere uns für eine kostenlose Beratung und starte deine Fahrausbildung noch heute.'
              : 'Ücretsiz danışma için bizimle iletişime geçin ve bugün sürücü eğitiminize başlayın.'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center px-10 py-6 bg-gradient-gold text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            {locale === 'de' ? 'Jetzt Kontakt aufnehmen' : 'Şimdi İletişime Geçin'}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
