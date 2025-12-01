# Fahrschule Karaaslan Website

Modern, professional driving school website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multilingual Support**: German (DE) and Turkish (TR) languages
- **Modern UI/UX**: Clean, German-inspired design with excellent user experience
- **Responsive Design**: Mobile-first approach, works on all devices
- **Pages**:
  - Homepage with hero, features, services, and reviews
  - About Us page with mission and values
  - Services page with all course offerings
  - Instructors page showcasing the teaching team
  - Contact page with form and Google Maps integration
- **SEO Optimized**: Server-side rendering with Next.js 15
- **Performance**: Fast loading times with optimized assets

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Forms**: react-hook-form
- **Icons**: lucide-react

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Branding
Update the logo and brand colors in:
- `components/Navigation.tsx` - Header logo
- `components/Footer.tsx` - Footer logo
- `tailwind.config.ts` - Color scheme

### Contact Information
Update your contact details in:
- `components/Footer.tsx` - Footer contact info
- `app/[locale]/contact/page.tsx` - Contact page details

### Google Maps
To enable Google Maps:
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Replace `YOUR_API_KEY` in `components/GoogleMap.tsx`

### Translations
Edit translations in:
- `messages/de.json` - German translations
- `messages/tr.json` - Turkish translations

### Reviews
Update real reviews in:
- `app/[locale]/page.tsx` - Homepage reviews section

### Instructors
Update instructor information in:
- `app/[locale]/instructors/page.tsx` - Instructor profiles

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization Tips

1. **Colors**: Update the primary color in `tailwind.config.ts`
2. **Fonts**: Change the font in `app/[locale]/layout.tsx`
3. **Images**: Add your own images to `public/images/`
4. **Content**: Update all text in the `messages/*.json` files

## Project Structure

```
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── about/         # About page
│       ├── services/      # Services page
│       ├── instructors/   # Instructors page
│       ├── contact/       # Contact page
│       ├── page.tsx       # Homepage
│       ├── layout.tsx     # Root layout
│       └── globals.css    # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer
│   ├── ContactForm.tsx    # Contact form
│   └── GoogleMap.tsx      # Google Maps component
├── messages/              # Translation files
│   ├── de.json           # German
│   └── tr.json           # Turkish
├── public/               # Static assets
└── i18n.ts              # i18n configuration
```

## Rating & Reviews

Current rating: **4.7/5** from 299 reviews

## Support

For questions or issues, contact: info@fahrschule-karaaslan.de

## License

© 2024 Fahrschule Karaaslan. All rights reserved.
