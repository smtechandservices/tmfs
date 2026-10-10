import 'leaflet/dist/leaflet.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE } from '@/content/site';

// Falls back to localhost during local dev; set NEXT_PUBLIC_SITE_URL to the
// real production domain once the site is deployed so absolute URLs (OG
// images, canonical links) resolve correctly for social crawlers.
const siteUrl = SITE.url;
const title = 'Time Machine Financial Services | Your Vision, Our Expertise';
const description =
  'Company formation, banking and tax in the UAE, handled end to end by one approachable team. Licence to bank account, without the runaround.';
const ogImage = '/images/business-bay-dusk.jpg';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Time Machine Financial Services',
  },
  description,
  keywords: [
    'company formation Dubai',
    'business setup UAE',
    'free zone licence Dubai',
    'mainland company setup',
    'corporate bank account UAE',
    'VAT consultancy Dubai',
    'corporate compliance UAE',
    'Time Machine Financial Services',
  ],
  authors: [{ name: 'Time Machine Financial Services' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Time Machine Financial Services',
    images: [{ url: ogImage, width: 1600, height: 1000, alt: 'Business Bay, Dubai at dusk' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  // Guidelines call for the pinwheel sub mark at small sizes.
  icons: {
    icon: '/pinwheel.svg',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.name,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: 'AE',
  sameAs: SITE.socials.map((s) => s.href),
};

export const viewport = {
  themeColor: '#1800ad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;700&display=swap"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <WhatsAppButton />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
