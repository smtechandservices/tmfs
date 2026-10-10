import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { PRO_VISAS, LICENCE_COMPLIANCE } from '@/content/catalog';
import { serviceFor } from '@/content/services';

// Only services with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute({ base: '/corporate-services', items: [...PRO_VISAS.items, ...LICENCE_COMPLIANCE.items] }, {
  // The practice hub isn't built yet, so point at its section on /services.
  hub: { title: 'Corporate Services', href: '/services#compliance' },
  lookup: serviceFor,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
