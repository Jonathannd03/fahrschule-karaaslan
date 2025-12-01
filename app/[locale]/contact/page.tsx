import { getTranslations, getLocale } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: 'Wanheimer Str. 70\n47053 Duisburg',
      link: 'https://maps.google.com/?q=Wanheimer+Str.+70,+47053+Duisburg',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: '0203 664152',
      link: 'tel:+492036664152',
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: 'info@fahrschule-karaaslan.de',
      link: 'mailto:info@fahrschule-karaaslan.de',
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content:
        locale === 'de'
          ? 'Mo-Fr: 11:00 - 18:00\nSa-So: Geschlossen'
          : 'Pzt-Cum: 11:00 - 18:00\nCmt-Paz: Kapalı',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-olive-dark to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('/images/gallery-3.jpeg')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                {t('contact.title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300">{t('contact.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Kontaktinformationen' : 'İletişim Bilgileri'}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                      >
                        <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-primary-600 hover:text-primary-700 transition-colors whitespace-pre-line text-lg font-medium"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-700 whitespace-pre-line text-lg">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {locale === 'de' ? 'Wo Sie uns finden' : 'Bizi Nerede Bulabilirsiniz'}
                </h2>
                <GoogleMap />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {locale === 'de' ? 'Nachricht senden' : 'Mesaj Gönder'}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white border-t border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-gold rounded-2xl mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'de'
                ? 'Besuche uns direkt vor Ort'
                : 'Bizi yerinde ziyaret edin'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {locale === 'de'
                ? 'Du kannst gerne ohne Termin vorbeikommen oder einen Termin vereinbaren, um sicherzustellen, dass wir Zeit für dich haben.'
                : 'Randevusuz gelebilir veya sizin için zamanımız olduğundan emin olmak için bir randevu alabilirsiniz.'}
            </p>
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-xl shadow-md">
              <Clock className="w-6 h-6 text-primary-600" />
              <div className="text-left">
                <p className="font-bold text-gray-900">
                  {locale === 'de' ? 'Mo-Fr: 11:00 - 18:00' : 'Pzt-Cum: 11:00 - 18:00'}
                </p>
                <p className="text-sm text-gray-600">
                  {locale === 'de' ? 'Sa-So: Geschlossen' : 'Cmt-Paz: Kapalı'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
