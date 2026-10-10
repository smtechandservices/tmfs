import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { FREE_ZONES } from '@/content/catalog';

// Only free zones with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute(FREE_ZONES, {
  // The free zone hub isn't built yet, so point at its card on the setup page.
  hub: { title: 'Free Zone Company Formation', href: '/company-setup#free-zone' },
  overview: {
    title: 'UAE Free Zones Overview',
    desc: 'How the UAE’s free zones compare on cost, activities, visas and tax. Start here to choose.',
    href: '/company-setup#free-zone',
  },
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
