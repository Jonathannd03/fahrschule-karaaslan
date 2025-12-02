import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fahrschule-karaaslan.de';
  const locales = ['de', 'en', 'tr'];
  const pages = ['', '/about', '/services', '/pricing', '/contact', '/instructors'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add all pages for all locales
  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${page}`,
            en: `${baseUrl}/en${page}`,
            tr: `${baseUrl}/tr${page}`,
          },
        },
      });
    });
  });

  return sitemap;
}
