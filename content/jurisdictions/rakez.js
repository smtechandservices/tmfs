// RAKEZ page, section by section in page order (Avyanco jurisdiction layout).
// Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, specialists, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const RAKEZ = {
  href: '/company-setup/free-zones/rakez',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'RAKEZ Company Setup: Ras Al Khaimah Economic Zone',
    description:
      'Set up a RAKEZ company with TMFS: low-cost industrial, trading, service and e-commerce licences in Ras Al Khaimah, with warehouses, industrial land, 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['RAKEZ Free Zone', 'Company Formation'],
    lead: 'Set up with the Ras Al Khaimah Economic Zone (RAKEZ): low-cost licences for industrial, trading and service businesses, with everything from flexi-desks to warehouses and industrial land.',
    chips: ['100% Ownership', 'Industrial Land', 'Warehouses', 'Low Setup Cost', 'Bank Account Support'],
  },

  intro: {
    title: 'RAKEZ: Ras Al Khaimah’s economic zone for business and industry',
    summary:
      'RAKEZ was formed in 2017 by merging Ras Al Khaimah’s free trade zone and investment authority. It runs business, industrial and academic zones across the emirate, licensing everything from freelancers to large manufacturers.',
    body: 'RAKEZ is one of the few free zones that can offer an office, a warehouse and a plot of industrial land under one authority, at prices well below Dubai. That makes it a strong choice for manufacturers and traders, as well as for service businesses looking for a low-cost licence.',
    image: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents (placeholder)' },
  },

  why: {
    badge: 'Best known for: industry, trading & low-cost licences',
    title: 'Why RAKEZ',
    body: 'RAKEZ covers the full range from a flexi-desk to a factory, at Ras Al Khaimah prices.',
    items: [
      { icon: 'building-factory', title: 'Industrial land & units', body: 'Land plots, ready-built warehouses and industrial units for manufacturers and logistics businesses.' },
      { icon: 'receipt-tax', title: 'Low-cost licences', body: 'Licence packages and rents generally below those of Dubai free zones.' },
      { icon: 'briefcase', title: 'Wide licence choice', body: 'Commercial, industrial, service, e-commerce, education and freelance licences from one authority.' },
      { icon: 'truck', title: 'Port & airport access', body: 'Close to Saqr Port and RAK International Airport, and about an hour from Dubai.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'user-check', title: 'Business support services', body: 'In-house support for visas, banking and compliance helps companies get running quickly.' },
    ],
    idealFor: [
      'Manufacturers & industrial SMEs',
      'Traders needing warehouses',
      'Logistics businesses',
      'Cost-conscious service companies',
      'Freelancers & sole founders',
    ],
  },

  licences: {
    title: 'RAKEZ Licence Types',
    body: 'RAKEZ offers more licence types than most zones. The main three are below; e-commerce, education and freelance licences are also available.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading, import, export and distribution.', list: ['General trading', 'Building materials', 'Food & beverage trading', 'Machinery & equipment', 'E-commerce'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing, processing and assembly on RAKEZ land or units.', list: ['Light & heavy manufacturing', 'Food processing', 'Plastics & packaging', 'Metal fabrication', 'Building products'] },
      { icon: 'briefcase', title: 'Service Licence', body: 'For consultancy and professional services.', list: ['Business consultancy', 'IT services', 'Marketing services', 'Logistics services', 'Training'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'RAKEZ',
    body: 'RAKEZ offers the usual free zone forms. Industrial investors often set up a branch of their parent company.',
  }),

  process: freeZoneProcess({
    zone: 'RAKEZ',
    authority: 'RAKEZ',
    office: 'Flexi-desk, office, warehouse or land, depending on your activity and the visas you need.',
  }),

  documents: documents({ place: 'RAKEZ', extra: ['Short business profile, if requested'] }),

  benefits: {
    title: 'Why Choose a RAKEZ Company',
    body: 'RAKEZ suits businesses that need physical space, or a licence at the lowest sensible cost.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Industrial land, warehouses and units available',
      'Lower licence and rent costs than Dubai',
      'Close to Saqr Port and RAK airport',
      'Freelance and e-commerce licences',
      'One authority from desk to factory',
    ],
  },

  tax: freeZoneTax({ zone: 'RAKEZ', authority: 'RAKEZ', source: { label: 'Ras Al Khaimah Economic Zone (RAKEZ)', href: 'https://rakez.com' } }),

  industries: {
    title: 'Where RAKEZ Companies Operate',
    body: 'RAKEZ hosts a strong industrial base alongside many service and trading companies.',
    items: [
      { icon: 'building-factory', title: 'Manufacturing' },
      { icon: 'world', title: 'Trading' },
      { icon: 'truck', title: 'Logistics & Warehousing' },
      { icon: 'building-community', title: 'Building Materials' },
      { icon: 'chef-hat', title: 'Food Processing' },
      { icon: 'cart', title: 'E-commerce' },
      { icon: 'book', title: 'Education & Training' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'RAKEZ', authority: 'RAKEZ', kind: 'free zone' }),
  specialists: specialists('RAKEZ'),
  pillars: pillars({ place: 'RAKEZ', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'RAKEZ suits industry and cost-conscious founders. Other zones offer a Dubai or Sharjah address.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'RAKEZ: Frequently Asked Questions',
    body: 'Common questions about setting up a RAKEZ company.',
    items: [
      { q: 'Do I need to live in Ras Al Khaimah?', a: 'No. A RAKEZ visa lets you live anywhere in the UAE. Your licensed premises, if you have them, are in RAK.' },
      { q: 'Can RAKEZ companies get industrial land?', a: 'Yes. RAKEZ offers land plots, warehouses and ready-built industrial units, which few free zones can match.' },
      { q: 'RAKEZ or RAK mainland?', a: 'Choose RAKEZ for manufacturing, export and possible 0% Corporate Tax on qualifying income. Choose mainland if you sell directly to UAE consumers or bid for local contracts. We compare both.' },
      { q: 'Does RAKEZ offer freelance licences?', a: 'Yes. RAKEZ has freelance options for individuals, as well as e-commerce and education licences.' },
      { q: 'Will my RAKEZ company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Qualifying manufacturing and export can count; other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'RAKEZ', government: 'the Government of Ras Al Khaimah' }),

  cta: {
    title: 'Ready to Set Up in RAKEZ?',
    body: 'Talk to a TMFS consultant about a RAKEZ licence, from a flexi-desk to a warehouse or factory, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default RAKEZ;
