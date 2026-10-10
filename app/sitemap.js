import { SITE } from '@/content/site';

// Only routes that exist today. Practice hubs and detail pages are added here
// as their templates go live.
const ROUTES = ['', '/company-setup', '/services', '/about', '/insights', '/contact', '/privacy', '/terms'];

export default function sitemap() {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
