import 'leaflet/dist/leaflet.css';
import './globals.css';

export const metadata = {
  title: 'Time Machine Financial Services | Your Vision, Our Expertise',
  description:
    'Company formation, banking, tax and property in the UAE, handled end to end by one approachable team. Licence to bank account to keys, without the runaround.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
