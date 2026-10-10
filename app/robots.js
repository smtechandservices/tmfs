import { SITE } from '@/content/site';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
