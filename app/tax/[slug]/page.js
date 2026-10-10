import { jurisdictionRoute } from '@/components/jurisdiction/route';
import { TAX } from '@/content/catalog';
import { serviceFor } from '@/content/services';

// Only services with page copy are built; every other slug 404s.
export const dynamicParams = false;

const route = jurisdictionRoute(TAX, {
  // The practice hub isn't built yet, so point at its section on /services.
  hub: { title: 'Tax', href: '/services#vat' },
  lookup: serviceFor,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
