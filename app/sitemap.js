import { SITE } from '@/content/site';
import { JURISDICTION_PAGES } from '@/content/jurisdictions';
import { SERVICE_PAGES } from '@/content/services';

// Only routes that exist today. Practice hubs and detail pages are added here
// as their templates go live; jurisdiction and service pages are picked up automatically.
const ROUTES = ['', '/company-setup', '/services', '/about', '/insights', '/contact', '/privacy', '/terms'];

export default function sitemap() {
  return [
    ...ROUTES.map((path) => ({
      url: `${SITE.url}${path}`,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.7,
    })),
    ...[...JURISDICTION_PAGES, ...SERVICE_PAGES].map((page) => ({
      url: `${SITE.url}${page.href}`,
      lastModified: page.updated,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
