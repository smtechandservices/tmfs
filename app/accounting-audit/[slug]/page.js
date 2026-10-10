import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { ACCOUNTING } from '@/content/catalog';
import { serviceFor } from '@/content/services';

// Only services with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute(ACCOUNTING, {
  // The practice hub isn't built yet, so point at its section on /services.
  hub: { title: 'Accounting & Audit', href: '/services#accounting' },
  lookup: serviceFor,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
