// SPC Free Zone page, section by section in page order (Avyanco jurisdiction
// layout). Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const SPC = {
  href: '/company-setup/free-zones/spc',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'SPC Free Zone Company Setup: Sharjah Publishing City',
    description:
      'Set up an SPC Free Zone company with TMFS: low-cost publishing, media and services licences in Sharjah Publishing City, with 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['SPC Free Zone', 'Company Formation'],
    lead: 'Set up in Sharjah Publishing City (SPC) Free Zone, a low-cost Sharjah free zone built around publishing and printing that now licenses a wide range of media, trading and service businesses.',
    chips: ['100% Ownership', 'Publishing & Media', 'Low Setup Cost', 'Wide Activity List', 'Bank Account Support'],
  },

  intro: {
    title: 'SPC: from publishing city to all-round Sharjah free zone',
    summary:
      'SPC Free Zone was created by the Government of Sharjah and is part of the Sharjah Book Authority. It is located in Al Zahia, Sharjah, close to the main roads into Dubai.',
    body: 'SPC was built to make Sharjah a publishing hub, and it still has the printing and publishing infrastructure to match. Today it also licenses media, technology, consultancy and trading activities, with packages that are among the most affordable in the UAE.',
    image: { src: '/images/business-planning.jpg', alt: 'Planning session (placeholder)' },
  },

  why: {
    badge: 'Best known for: publishing, media & low-cost licences',
    title: 'Why SPC Free Zone',
    body: 'SPC combines Sharjah’s publishing heritage with low-cost licences for a broad range of businesses.',
    items: [
      { icon: 'book', title: 'Publishing ecosystem', body: 'Printers, publishers and distributors sit together, backed by the Sharjah Book Authority and the Sharjah International Book Fair.' },
      { icon: 'receipt-tax', title: 'Low-cost packages', body: 'Licence packages and flexi-desks priced below most Dubai free zones.' },
      { icon: 'briefcase', title: 'Wide activity list', body: 'Publishing, media, technology, consultancy and trading activities on one platform.' },
      { icon: 'map-pin', title: 'Easy Dubai access', body: 'Al Zahia sits on the main highway network, a short drive from Dubai.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'cpu', title: 'Mostly online setup', body: 'Applications and documents are largely handled online.' },
    ],
    idealFor: [
      'Publishers & printers',
      'Media & content businesses',
      'Consultants & agencies',
      'Small trading companies',
      'Founders on a tight budget',
    ],
  },

  licences: {
    title: 'SPC Free Zone Licence Types',
    body: 'SPC offers licences across publishing, media, services and trade.',
    items: [
      { icon: 'book', title: 'Publishing & Media Licence', body: 'For publishing, printing and media businesses.', list: ['Book & magazine publishing', 'Printing services', 'Digital publishing', 'Media production', 'Translation services'] },
      { icon: 'briefcase', title: 'Service Licence', body: 'For consultancy and professional services.', list: ['Management consultancy', 'Marketing services', 'IT services', 'Education services', 'Event management'] },
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading goods.', list: ['General trading', 'Books & stationery trading', 'E-commerce', 'Electronics trading', 'Import & export'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'SPC Free Zone',
    body: 'SPC offers the usual free zone forms. Most founders choose a single- or multi-shareholder company.',
  }),

  process: freeZoneProcess({
    zone: 'SPC Free Zone',
    authority: 'SPC Free Zone',
    office: 'Flexi-desk or office in the zone, sized to the visas you need.',
  }),

  documents: documents({ place: 'SPC Free Zone', extra: ['Short business profile, if requested'] }),

  benefits: {
    title: 'Why Choose an SPC Free Zone Company',
    body: 'SPC suits publishers, media businesses and cost-conscious founders.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Among the most affordable UAE free zones',
      'Publishing and printing infrastructure',
      'Wide activity list',
      'Close to the Sharjah–Dubai highways',
      'Mostly online setup',
    ],
  },

  tax: freeZoneTax({ zone: 'SPC Free Zone', authority: 'SPC Free Zone', source: { label: 'Sharjah Publishing City (SPC) Free Zone', href: 'https://www.spcfz.ae' } }),

  industries: {
    title: 'Where SPC Companies Operate',
    body: 'SPC’s community spans publishing, media and a wide range of small businesses.',
    items: [
      { icon: 'book', title: 'Publishing' },
      { icon: 'file-text', title: 'Printing' },
      { icon: 'palette', title: 'Media & Design' },
      { icon: 'cpu', title: 'Technology' },
      { icon: 'briefcase', title: 'Consultancy' },
      { icon: 'world', title: 'Trading' },
      { icon: 'cart', title: 'E-commerce' },
      { icon: 'book', title: 'Education & Training' },
    ],
  },

  advantage: advantage({ place: 'SPC Free Zone', authority: 'SPC', kind: 'free zone' }),
  pillars: pillars({ place: 'SPC', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'SPC suits publishing and budget-conscious founders. Other zones fit different industries.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'SPC Free Zone: Frequently Asked Questions',
    body: 'Common questions about setting up an SPC Free Zone company.',
    items: [
      { q: 'Is SPC only for publishing companies?', a: 'No. Publishing is its origin, but SPC now licenses media, technology, consultancy and trading activities too.' },
      { q: 'Where is SPC Free Zone?', a: 'In Al Zahia, Sharjah, close to the main highways into Dubai.' },
      { q: 'Do I need to live in Sharjah?', a: 'No. An SPC visa lets you live anywhere in the UAE.' },
      { q: 'SPC or SHAMS?', a: 'Both are low-cost Sharjah free zones. SHAMS is focused on media and freelancers; SPC on publishing with a broad general activity list. We compare packages for your activity.' },
      { q: 'Will my SPC company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'SPC Free Zone', government: 'the Government of Sharjah' }),

  cta: {
    title: 'Ready to Set Up in SPC Free Zone?',
    body: 'Talk to a TMFS consultant about an affordable SPC licence, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default SPC;
