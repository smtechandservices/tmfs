// Ajman Free Zone page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, specialists, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const AJMAN_FREE_ZONE = {
  href: '/company-setup/free-zones/ajman-free-zone',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Ajman Free Zone Company Setup',
    description:
      'Set up an Ajman Free Zone company with TMFS: cost-efficient trading, industrial and service licences next to Ajman Port, with warehouses, 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['Ajman Free Zone', 'Company Formation'],
    lead: 'Set up with the Ajman Free Zone Authority, one of the UAE’s longest-running free zones, with cost-efficient licences and warehouses next to Ajman Port.',
    chips: ['100% Ownership', 'Next to Ajman Port', 'Warehouses', 'Low Setup Cost', 'Bank Account Support'],
  },

  intro: {
    title: 'Ajman Free Zone: an established zone for trade and industry',
    summary:
      'Ajman Free Zone was established in 1988, making it one of the oldest free zones in the UAE. It sits next to Ajman Port and licenses trading, industrial, service and e-commerce businesses.',
    body: 'The zone offers everything from flexi-desks to offices, warehouses and industrial units, at prices below Dubai’s. Its location by the port and near Sharjah and Dubai makes it practical for importers, distributors and light manufacturers.',
    image: { src: '/images/business-district.jpg', alt: 'Business district (placeholder)' },
  },

  why: {
    badge: 'Best known for: trading, warehousing & light industry',
    title: 'Why Ajman Free Zone',
    body: 'Ajman Free Zone pairs low costs with port access and physical space for goods-based businesses.',
    items: [
      { icon: 'truck', title: 'Next to Ajman Port', body: 'Import, export and re-export directly through the neighbouring port.' },
      { icon: 'building-factory', title: 'Warehouses & industrial units', body: 'Ready-built warehouses and units for storage, assembly and light manufacturing.' },
      { icon: 'receipt-tax', title: 'Cost-efficient packages', body: 'Licence and rent costs generally below those of Dubai free zones.' },
      { icon: 'award', title: 'Long track record', body: 'Operating since 1988, with an established community of trading and industrial companies.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'map-pin', title: 'Close to Sharjah and Dubai', body: 'A short drive to Sharjah and Dubai customers, suppliers and airports.' },
    ],
    idealFor: [
      'Importers & re-exporters',
      'Distributors needing storage',
      'Light manufacturers',
      'E-commerce with stock',
      'Cost-conscious service businesses',
    ],
  },

  licences: {
    title: 'Ajman Free Zone Licence Types',
    body: 'Ajman Free Zone groups activities into a few licence types. Your activities decide which one fits.',
    items: [
      { icon: 'building-store', title: 'Trade Licence', body: 'For importing, exporting, distributing and storing goods.', list: ['General trading', 'Import & re-export', 'Auto parts trading', 'Foodstuff trading', 'E-commerce'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing, processing and assembly in the zone’s units.', list: ['Light manufacturing', 'Assembly & packaging', 'Food processing', 'Garments', 'Plastics'] },
      { icon: 'briefcase', title: 'Service Licence', body: 'For consultancy and professional services.', list: ['Business consultancy', 'IT services', 'Marketing services', 'Logistics services', 'Maintenance services'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'Ajman Free Zone',
    body: 'Ajman Free Zone offers the usual free zone forms. Most founders choose a single- or multi-shareholder company.',
  }),

  process: freeZoneProcess({
    zone: 'Ajman Free Zone',
    authority: 'the Ajman Free Zone Authority',
    office: 'Flexi-desk, office, warehouse or industrial unit, depending on your activity and the visas you need.',
  }),

  documents: documents({ place: 'Ajman Free Zone', extra: ['Short business profile, if requested'] }),

  benefits: {
    title: 'Why Choose an Ajman Free Zone Company',
    body: 'Ajman Free Zone suits goods-based businesses that need port access and affordable space.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Next to Ajman Port',
      'Warehouses and industrial units',
      'Lower costs than Dubai free zones',
      'Established since 1988',
      'Close to Sharjah and Dubai',
    ],
  },

  tax: freeZoneTax({ zone: 'Ajman Free Zone', authority: 'the Ajman Free Zone Authority', source: { label: 'Ajman Free Zone Authority' } }),

  industries: {
    title: 'Where Ajman Free Zone Companies Operate',
    body: 'Trading and light industry make up much of the zone, with a growing services community.',
    items: [
      { icon: 'world', title: 'Import & Re-export' },
      { icon: 'truck', title: 'Logistics & Warehousing' },
      { icon: 'building-factory', title: 'Light Manufacturing' },
      { icon: 'cart', title: 'E-commerce' },
      { icon: 'chef-hat', title: 'Food Trading & Processing' },
      { icon: 'building-community', title: 'Building Materials' },
      { icon: 'briefcase', title: 'Consultancy' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'Ajman Free Zone', authority: 'Ajman Free Zone', kind: 'free zone' }),
  specialists: specialists('Ajman Free Zone'),
  pillars: pillars({ place: 'Ajman Free Zone', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'Ajman Free Zone suits trading and light industry. Other zones fit services or a Dubai address.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Ajman Free Zone: Frequently Asked Questions',
    body: 'Common questions about setting up an Ajman Free Zone company.',
    items: [
      { q: 'Ajman Free Zone or Ajman mainland?', a: 'Choose the free zone for import, re-export, light industry and possible 0% Corporate Tax on qualifying income. Choose mainland if you sell directly to UAE consumers or need a shop.' },
      { q: 'Can I rent a warehouse in Ajman Free Zone?', a: 'Yes. The zone offers warehouses and industrial units as well as offices and flexi-desks.' },
      { q: 'Do I need to live in Ajman?', a: 'No. An Ajman Free Zone visa lets you live anywhere in the UAE.' },
      { q: 'How many visas can I get?', a: 'It depends on the package and premises you choose. Warehouses and larger offices support more visas.' },
      { q: 'Will my Ajman Free Zone company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'the Ajman Free Zone Authority', government: 'the Government of Ajman' }),

  cta: {
    title: 'Ready to Set Up in Ajman Free Zone?',
    body: 'Talk to a TMFS consultant about an Ajman Free Zone licence and premises, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default AJMAN_FREE_ZONE;
