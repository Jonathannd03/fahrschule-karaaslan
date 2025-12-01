import { getTranslations, getLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Shield, Target, ArrowRight, Users, Star, Trophy } from 'lucide-react';

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations();

  const values = [
    {
      icon: Award,
      title: t('about.values.quality'),
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Heart,
      title: t('about.values.patience'),
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Shield,
      title: t('about.values.transparency'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Target,
      title: t('about.values.success'),
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '2000+',
      label: locale === 'de' ? 'Zufriedene Schüler' : locale === 'en' ? 'Satisfied Students' : 'Memnun Öğrenci'
    },
    {
      icon: Star,
      value: '4.7',
      label: locale === 'de' ? 'Durchschnittliche Bewertung' : locale === 'en' ? 'Average Rating' : 'Ortalama Puan'
    },
    {
      icon: Trophy,
      value: '10+',
      label: locale === 'de' ? 'Jahre Erfahrung' : locale === 'en' ? 'Years Experience' : 'Yıl Deneyim'
    },
    {
      icon: Target,
      value: '95%',
      label: locale === 'de' ? 'Erfolgsquote' : locale === 'en' ? 'Success Rate' : 'Başarı Oranı'
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/images/gallery-4.jpeg')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-white relative -mt-12 sm:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                {t('about.description')}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {t('about.mission.description')}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-gold text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                {locale === 'de' ? 'Jetzt kontaktieren' : locale === 'en' ? 'Contact Now' : 'Şimdi iletişime geçin'}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8">
                    <Image
                      src="/images/Karaaslan-logo.png"
                      alt="Fahrschule Karaaslan Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Fahrschule Karaaslan</h3>
                  <p className="text-primary-700 font-medium text-base sm:text-lg">
                    {locale === 'de' ? 'Seit vielen Jahren in Duisburg' : locale === 'en' ? 'For Many Years in Duisburg' : 'Duisburg\'da Uzun Yıllardır'}
                  </p>
                </div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-3xl opacity-20"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-gold rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'de'
                ? 'Diese Werte leiten uns in allem, was wir tun'
                : locale === 'en'
                ? 'These values guide us in everything we do'
                : 'Bu değerler yaptığımız her şeyde bize rehberlik eder'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-primary-300 transition-all hover:shadow-2xl hover:-translate-y-2 text-center"
                >
                  <div
                    className={`w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-base sm:text-2xl font-bold text-gray-900">{value.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {locale === 'de'
                ? 'Warum Fahrschule Karaaslan?'
                : locale === 'en'
                ? 'Why Fahrschule Karaaslan?'
                : 'Neden Fahrschule Karaaslan?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Erfahren & Professionell' : locale === 'en' ? 'Experienced & Professional' : 'Deneyimli ve Profesyonel'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {locale === 'de'
                  ? 'Über 10 Jahre Erfahrung in der Fahrausbildung mit qualifizierten Fahrlehrern.'
                  : locale === 'en'
                  ? 'Over 10 years of experience in driver training with qualified instructors.'
                  : '10 yılı aşkın sürücü eğitimi tecrübesi ile kalifiye eğitmenler.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Individuelle Betreuung' : locale === 'en' ? 'Individual Support' : 'Bireysel Destek'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {locale === 'de'
                  ? 'Jeder Schüler wird individuell betreut und gefördert, bis er sein Ziel erreicht.'
                  : locale === 'en'
                  ? 'Each student receives individual support and attention until they reach their goal.'
                  : 'Her öğrenciye hedefe ulaşana kadar bireysel destek ve ilgi gösterilir.'}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'de' ? 'Hohe Erfolgsquote' : locale === 'en' ? 'High Success Rate' : 'Yüksek Başarı Oranı'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {locale === 'de'
                  ? '95% unserer Schüler bestehen die Prüfung beim ersten Versuch.'
                  : locale === 'en'
                  ? '95% of our students pass the exam on their first attempt.'
                  : 'Öğrencilerimizin %95\'i ilk denemede sınavı geçiyor.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/gallery-5.png')] opacity-5 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {locale === 'de'
              ? 'Bereit, mit uns zu starten?'
              : locale === 'en'
              ? 'Ready to Start With Us?'
              : 'Bizimle başlamaya hazır mısınız?'}
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {locale === 'de'
              ? 'Werde Teil unserer erfolgreichen Fahrschul-Familie. Kontaktiere uns jetzt für ein kostenloses Beratungsgespräch.'
              : locale === 'en'
              ? 'Become part of our successful driving school family. Contact us now for a free consultation.'
              : 'Başarılı sürücü kursu ailemizin bir parçası olun. Ücretsiz danışma için şimdi bize ulaşın.'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center px-10 py-6 bg-gradient-gold text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            {locale === 'de' ? 'Jetzt Kontakt aufnehmen' : locale === 'en' ? 'Contact Us Now' : 'Şimdi İletişime Geçin'}
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
