import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { MAINLAND } from '@/content/catalog';

// Only emirates with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute(MAINLAND, {
  // The mainland hub isn't built yet, so point at its card on the setup page.
  hub: { title: 'Mainland Company Formation', href: '/company-setup#mainland' },
  overview: {
    title: 'UAE Mainland Overview',
    desc: 'All seven emirates under one federal mainland system. Start here to compare.',
    href: '/company-setup#mainland',
  },
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
