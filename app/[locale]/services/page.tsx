import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import { Car, BookOpen, CheckCircle, ArrowRight, GraduationCap, Trophy } from 'lucide-react';

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = await getTranslations();

  const services = [
    {
      icon: Car,
      title: t('services.classB.title'),
      description: t('services.classB.description'),
      features: [
        locale === 'de' ? 'Theorieunterricht' : 'Teori dersleri',
        locale === 'de' ? 'Praktische Fahrstunden' : 'Pratik sürüş dersleri',
        locale === 'de' ? 'Prüfungsvorbereitung' : 'Sınav hazırlığı',
        locale === 'de' ? 'Moderne Fahrzeuge' : 'Modern araçlar',
        locale === 'de' ? 'Erfahrene Fahrlehrer' : 'Deneyimli eğitmenler',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: BookOpen,
      title: t('services.theory.title'),
      description: t('services.theory.description'),
      features: [
        locale === 'de' ? 'Digitale Lernmittel' : 'Dijital öğrenme araçları',
        locale === 'de' ? 'Interaktiver Unterricht' : 'Etkileşimli ders',
        locale === 'de' ? 'Prüfungssimulation' : 'Sınav simülasyonu',
        locale === 'de' ? 'Deutsch & Türkisch' : 'Almanca ve Türkçe',
      ],
      color: 'from-blue-500 to-blue-600',
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: locale === 'de' ? 'Professionelle Ausbildung' : 'Profesyonel Eğitim',
      description:
        locale === 'de'
          ? 'Qualifizierte Fahrlehrer mit langjähriger Erfahrung'
          : 'Uzun yıllara dayanan deneyime sahip kalifiye eğitmenler',
    },
    {
      icon: Trophy,
      title: locale === 'de' ? 'Hohe Erfolgsquote' : 'Yüksek Başarı Oranı',
      description:
        locale === 'de'
          ? '95% unserer Schüler bestehen beim ersten Versuch'
          : 'Öğrencilerimizin %95\'i ilk denemede geçiyor',
    },
    {
      icon: Car,
      title: locale === 'de' ? 'Moderne Fahrzeuge' : 'Modern Araçlar',
      description:
        locale === 'de'
          ? 'Gut gewartete Fahrzeuge mit neuester Sicherheitstechnik'
          : 'En son güvenlik teknolojisine sahip iyi bakımlı araçlar',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('/images/gallery-2.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300">{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Class B Badge */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-gold rounded-full text-white font-bold text-xl shadow-lg">
            <Car className="w-7 h-7 mr-3" />
            {locale === 'de' ? 'Wir bieten Führerschein Klasse B' : 'B Sınıfı Ehliyet Sunuyoruz'}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-10 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start space-x-6 mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'de'
                ? 'Warum Fahrschule Karaaslan?'
                : 'Neden Fahrschule Karaaslan?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'de'
                ? 'Wie läuft die Ausbildung ab?'
                : 'Eğitim nasıl ilerler?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'de'
                ? 'Dein Weg zum Führerschein in einfachen Schritten'
                : 'Ehliyetinize giden yolda basit adımlar'}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: locale === 'de' ? 'Anmeldung' : 'Kayıt',
                desc: locale === 'de'
                  ? 'Kostenlose Beratung und Anmeldung'
                  : 'Ücretsiz danışma ve kayıt',
              },
              {
                step: '2',
                title: locale === 'de' ? 'Theorie' : 'Teori',
                desc: locale === 'de'
                  ? 'Theorieunterricht und Prüfung'
                  : 'Teori dersleri ve sınav',
              },
              {
                step: '3',
                title: locale === 'de' ? 'Praxis' : 'Pratik',
                desc: locale === 'de'
                  ? 'Fahrstunden mit erfahrenen Lehrern'
                  : 'Deneyimli eğitmenlerle sürüş dersleri',
              },
              {
                step: '4',
                title: locale === 'de' ? 'Prüfung' : 'Sınav',
                desc: locale === 'de'
                  ? 'Praktische Prüfung und Führerschein'
                  : 'Pratik sınav ve ehliyet',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl text-white text-3xl font-bold mb-6 hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
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
              ? 'Kontaktiere uns für eine kostenlose Beratung und starte deine Fahrausbildung.'
              : 'Ücretsiz danışma için bizimle iletişime geçin ve sürücü eğitiminize başlayın.'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center px-10 py-6 bg-gradient-gold text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
