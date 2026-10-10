import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { OFFSHORE } from '@/content/catalog';

// Only offshore registries with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute(OFFSHORE, {
  // The offshore hub isn't built yet, so point at its card on the setup page.
  hub: { title: 'Offshore Company Formation', href: '/company-setup#offshore' },
  overview: {
    title: 'Mainland, Free Zone or Offshore?',
    desc: 'What each UAE structure can and can’t do, side by side. Start here if you are still choosing.',
    href: '/company-setup',
  },
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
