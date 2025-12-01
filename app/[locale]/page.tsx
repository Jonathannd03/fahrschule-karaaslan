import { getTranslations, getLocale } from 'next-intl/server';
import Link from 'next/link';
import {
  GraduationCap,
  Users,
  Trophy,
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations();

  const features = [
    {
      icon: GraduationCap,
      title: t('features.professional.title'),
      description: t('features.professional.description'),
    },
    {
      icon: Users,
      title: t('features.patient.title'),
      description: t('features.patient.description'),
    },
    {
      icon: Trophy,
      title: t('features.success.title'),
      description: t('features.success.description'),
    },
    {
      icon: Calendar,
      title: t('features.flexible.title'),
      description: t('features.flexible.description'),
    },
  ];

  const services = [
    {
      title: t('services.classB.title'),
      description: t('services.classB.description'),
    },
    {
      title: t('services.theory.title'),
      description: t('services.theory.description'),
    },
  ];

  const reviews = [
    {
      name: 'Zufriedene Kundin',
      rating: 5,
      text: locale === 'de'
        ? 'Heute habe ich die Prüfung mit Erkan bestanden 😍 💯 Kundin Zufriedenheit'
        : locale === 'en'
        ? 'Today I passed the exam with Erkan 😍 💯 Customer satisfaction'
        : 'Bugün Erkan ile sınavı geçtim 😍 💯 Müşteri Memnuniyeti',
      instructor: 'Erkan',
    },
    {
      name: 'Zufriedener Kunde',
      rating: 5,
      text: locale === 'de'
        ? 'Mein Fahrlehrer Cem Yildiz war super nett und total sympathisch.'
        : locale === 'en'
        ? 'My driving instructor Cem Yildiz was super nice and totally friendly.'
        : 'Sürüş öğretmenim Cem Yildiz çok nazik ve sempatikti.',
      instructor: 'Cem Yildiz',
    },
    {
      name: 'Zufriedener Kunde',
      rating: 5,
      text: locale === 'de'
        ? 'Die Fahrschule Karaaslan ist für mich die beste Fahrschule der Stadt. Dank Ingine habe ich sowohl die Theorie- als auch die Praxisprüfung direkt beim ersten Versuch bestanden!'
        : locale === 'en'
        ? 'Fahrschule Karaaslan is the best driving school in the city for me. Thanks to Ingine, I passed both the theory and practical exams on my first attempt!'
        : 'Fahrschule Karaaslan benim için şehrin en iyi sürücü kursu. Ingine sayesinde hem teori hem de pratik sınavını ilk denemede geçtim!',
      instructor: 'Ingine',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Interactive Parallax */}
      <HeroSection
        locale={locale}
        translations={{
          headline1: t("hero.headline1"),
          headline2: t("hero.headline2"),
          rating: t("hero.rating"),
          subtitle: t("hero.subtitle"),
          cta: t("hero.cta"),
          ctaSecondary: t("hero.ctaSecondary"),
        }}
      />

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("features.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-gold rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("services.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-gold rounded-xl sm:rounded-2xl flex items-center justify-center opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {locale === "de"
                ? "Unsere Galerie"
                : locale === "en"
                ? "Our Gallery"
                : "Galerimiz"}
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              {locale === "de"
                ? "Einblicke in unsere Fahrschule"
                : locale === "en"
                ? "Insights into our driving school"
                : "Sürücü kursumuza göz atın"}
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("reviews.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              {t("reviews.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary-100"
              >
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 fill-primary-500"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  `{review.text}`
                </p>
                <div className="border-t border-primary-200 pt-4 sm:pt-6">
                  <p className="font-bold text-gray-900 text-base sm:text-lg">
                    {review.name}
                  </p>
                  <p className="text-xs sm:text-sm text-primary-700 font-medium mt-1">
                    {locale === "de"
                      ? "Fahrlehrer"
                      : locale === "en"
                      ? "Instructor"
                      : "Eğitmen"}
                    : {review.instructor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/gallery-2.jpg')] opacity-5 bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            {locale === "de"
              ? "Bereit, deinen Führerschein zu machen?"
              : locale === "en"
              ? "Ready to get your driver's license?"
              : "Ehliyetinizi almaya hazır mısınız?"}
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            {locale === "de"
              ? "Vereinbare jetzt ein kostenloses Beratungsgespräch und starte deine Fahrausbildung."
              : locale === "en"
              ? "Schedule a free consultation now and start your driver training."
              : "Şimdi ücretsiz bir danışma görüşmesi ayarlayın ve sürücü eğitiminize başlayın."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-6 bg-gradient-gold text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base sm:text-lg"
          >
            {t("hero.cta")}
            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
