// Meydan Free Zone page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, specialists, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const MEYDAN = {
  href: '/company-setup/free-zones/meydan',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Meydan Free Zone Company Setup in Dubai',
    description:
      'Set up a Meydan Free Zone company in Dubai with TMFS: digital-first e-commerce, trading and consultancy licences with a Dubai address, 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['Meydan Free Zone', 'Company Formation'],
    lead: 'Set up a Dubai free zone company at the Meydan Grandstand in Nad Al Sheba, with a digital-first process built for e-commerce, online and consultancy businesses.',
    chips: ['100% Ownership', 'Dubai Address', 'E-commerce Friendly', 'Digital Setup', 'Bank Account Support'],
  },

  intro: {
    title: 'Meydan: a digital-first Dubai free zone',
    summary:
      'Meydan Free Zone is based at the Meydan Grandstand in Nad Al Sheba, minutes from Downtown Dubai. It is known for a fast, largely online setup and a wide activity list that suits e-commerce, digital and consultancy businesses.',
    body: 'Founders choose Meydan for a central Dubai address, multiple activities on one licence and flexible visa options. It is a good fit for online stores, agencies, traders and service businesses selling internationally or to other businesses.',
    image: { src: '/images/downtown-dubai.jpg', alt: 'Downtown Dubai skyline (placeholder)' },
  },

  why: {
    badge: 'Best known for: e-commerce & digital businesses',
    title: 'Why Meydan Free Zone',
    body: 'Meydan pairs a central Dubai location with a quick digital process and broad activity choice.',
    items: [
      { icon: 'map-pin', title: 'Central Dubai location', body: 'Nad Al Sheba sits a short drive from Downtown Dubai, Business Bay and DXB.' },
      { icon: 'cart', title: 'Built for e-commerce', body: 'E-commerce, online trading and digital service activities are core to Meydan’s offer.' },
      { icon: 'cpu', title: 'Digital-first setup', body: 'Applications, approvals and documents are handled online, so you can set up quickly with few visits.' },
      { icon: 'briefcase', title: 'Multiple activities', body: 'Combine several activities on one licence where the activity groups allow it.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'user-check', title: 'Flexible visa options', body: 'Packages with different visa allocations, so you can start small and add visas as you hire.' },
    ],
    idealFor: [
      'Online stores & e-commerce',
      'Digital agencies & creators',
      'Consultants & freelancers',
      'International traders',
      'Tech start-ups',
    ],
  },

  licences: {
    title: 'Meydan Free Zone Licence Types',
    body: 'Meydan groups activities into a few licence types. Your activities decide which one fits.',
    items: [
      { icon: 'cart', title: 'E-commerce Licence', body: 'For selling goods and services online.', list: ['Online retail', 'Marketplace selling', 'Dropshipping', 'Digital products', 'Subscription services'] },
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading goods internationally and with UAE businesses.', list: ['General trading', 'Import & export', 'Electronics trading', 'Cosmetics trading', 'Food trading'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy, digital and service businesses.', list: ['Management consultancy', 'Marketing & social media', 'IT services', 'Event management', 'Design services'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'Meydan Free Zone',
    body: 'Meydan offers the usual free zone forms. Most founders choose a single- or multi-shareholder company.',
  }),

  process: freeZoneProcess({
    zone: 'Meydan Free Zone',
    authority: 'Meydan Free Zone',
    office: 'Shared desk or office at the Meydan Grandstand, sized to the visas you need.',
  }),

  documents: documents({ place: 'Meydan Free Zone', extra: ['Short business profile, if requested'] }),

  benefits: {
    title: 'Why Choose a Meydan Free Zone Company',
    body: 'Meydan suits digital businesses that want a central Dubai address and a quick setup.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Central Dubai address in Nad Al Sheba',
      'Strong fit for e-commerce activities',
      'Several activities on one licence',
      'Largely online setup',
      'Visa packages that grow with you',
    ],
  },

  tax: freeZoneTax({ zone: 'Meydan Free Zone', authority: 'Meydan Free Zone', source: { label: 'Meydan Free Zone', href: 'https://www.meydanfz.ae' } }),

  industries: {
    title: 'Where Meydan Companies Operate',
    body: 'Meydan’s community leans towards online, digital and service businesses.',
    items: [
      { icon: 'cart', title: 'E-commerce' },
      { icon: 'palette', title: 'Digital Marketing & Media' },
      { icon: 'cpu', title: 'Technology' },
      { icon: 'briefcase', title: 'Consultancy' },
      { icon: 'world', title: 'International Trading' },
      { icon: 'user-star', title: 'Events & Entertainment' },
      { icon: 'book', title: 'Education & Coaching' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'Meydan Free Zone', authority: 'Meydan', kind: 'free zone' }),
  specialists: specialists('Meydan Free Zone'),
  pillars: pillars({ place: 'Meydan', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'Meydan suits digital businesses. Other zones fit different industries, budgets or emirates.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Meydan Free Zone: Frequently Asked Questions',
    body: 'Common questions about setting up a Meydan Free Zone company.',
    items: [
      { q: 'Where is Meydan Free Zone?', a: 'At the Meydan Grandstand in Nad Al Sheba, Dubai, a short drive from Downtown Dubai and Business Bay.' },
      { q: 'Is Meydan good for e-commerce?', a: 'Yes. E-commerce and online trading are among its core activities. If you sell to UAE consumers, we also check how that affects your licence and 0% Corporate Tax status.' },
      { q: 'Can I add more than one activity?', a: 'Usually, yes, as long as the activities sit in groups Meydan allows together. We map your activities before you apply.' },
      { q: 'How many visas can I get?', a: 'It depends on the package and office you choose. You can start with a small allocation and upgrade as you hire.' },
      { q: 'Will my Meydan company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile, including e-commerce payment flows.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'Meydan Free Zone', government: 'the Government of Dubai' }),

  cta: {
    title: 'Ready to Set Up in Meydan Free Zone?',
    body: 'Talk to a TMFS consultant about a Meydan company for your online or service business, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default MEYDAN;
