// SHAMS page, section by section in page order (Avyanco jurisdiction layout).
// Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const SHAMS = {
  href: '/company-setup/free-zones/shams',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'SHAMS Company Setup: Sharjah Media City Free Zone',
    description:
      'Set up a SHAMS company with TMFS: media, creative and consultancy licences plus freelance permits in Sharjah Media City, with 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['SHAMS Free Zone', 'Company Formation'],
    lead: 'Set up in Sharjah Media City (SHAMS), the free zone for media, creative and consultancy businesses, with low-cost licences and freelance permits.',
    chips: ['100% Ownership', 'Media & Creative', 'Freelance Permits', 'Low Setup Cost', 'Bank Account Support'],
  },

  intro: {
    title: 'SHAMS: Sharjah’s free zone for media and creative business',
    summary:
      'Sharjah Media City (SHAMS) was set up by the Government of Sharjah to grow the emirate’s media and creative industries. It now licenses a broad range of media, creative, consultancy and service businesses.',
    body: 'SHAMS is a popular choice for content creators, agencies, consultants and freelancers who want a low-cost licence and visa, often on a flexi-desk. It sits under the Sharjah Media Council and close to the Sharjah–Dubai road network.',
    image: { src: '/images/business-bay-dusk.jpg', alt: 'City skyline at dusk (placeholder)' },
  },

  why: {
    badge: 'Best known for: media, creative & freelance licences',
    title: 'Why SHAMS',
    body: 'SHAMS gives creative and consultancy businesses an affordable route to a UAE licence and visa.',
    items: [
      { icon: 'palette', title: 'Media & creative focus', body: 'Activities for content creation, production, publishing, marketing and design are at the heart of the zone.' },
      { icon: 'receipt-tax', title: 'Low-cost packages', body: 'Licence packages priced below most Dubai free zones, with flexi-desk options.' },
      { icon: 'user-star', title: 'Freelance permits', body: 'Individuals can work under a freelance permit instead of forming a full company.' },
      { icon: 'briefcase', title: 'Broad activity list', body: 'Consultancy, technology, trading and service activities sit alongside media.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'map-pin', title: 'Sharjah base, Dubai reach', body: 'Most clients and staff can reach Dubai easily, while costs stay at Sharjah levels.' },
    ],
    idealFor: [
      'Content creators & influencers',
      'Marketing & creative agencies',
      'Consultants',
      'Freelancers',
      'Small media production companies',
    ],
  },

  licences: {
    title: 'SHAMS Licence Types',
    body: 'SHAMS offers licences for companies and permits for individuals.',
    items: [
      { icon: 'palette', title: 'Media Licence', body: 'For media, content and creative businesses.', list: ['Content creation', 'Film & video production', 'Publishing', 'Photography', 'Graphic design'] },
      { icon: 'briefcase', title: 'Consultancy & Service Licence', body: 'For consultancy and professional services.', list: ['Management consultancy', 'Marketing consultancy', 'IT services', 'Event management', 'Training'] },
      { icon: 'user-star', title: 'Freelance Permit', body: 'For individuals working on their own account.', list: ['Writers & editors', 'Designers', 'Photographers', 'Social media specialists', 'Consultants'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'SHAMS',
    body: 'SHAMS offers the usual free zone forms, plus freelance permits for individuals.',
    extra: [
      { title: 'Freelance Permit', body: 'An individual permit to trade in your own name, with a residence visa, without forming a company.' },
      { title: 'Holding Structure', body: 'A SHAMS company owned by a holding company in another zone or abroad, where the activity allows.' },
    ],
  }),

  process: freeZoneProcess({
    zone: 'SHAMS',
    authority: 'SHAMS',
    office: 'Flexi-desk or office in the zone, sized to the visas you need.',
  }),

  documents: documents({ place: 'SHAMS', extra: ['Portfolio or CV, for freelance permits'] }),

  benefits: {
    title: 'Why Choose a SHAMS Company',
    body: 'SHAMS suits creative and consultancy founders who want a licence and visa without big fixed costs.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Low-cost licence packages',
      'Freelance permits for individuals',
      'Strong media and creative focus',
      'Flexi-desk options',
      'Mostly online setup',
    ],
  },

  tax: freeZoneTax({ zone: 'SHAMS', authority: 'SHAMS', source: { label: 'Sharjah Media City (SHAMS)', href: 'https://www.shams.ae' } }),

  industries: {
    title: 'Where SHAMS Companies Operate',
    body: 'SHAMS is home to a large creative community and many small consultancies.',
    items: [
      { icon: 'palette', title: 'Creative & Design' },
      { icon: 'player-play', title: 'Film & Video Production' },
      { icon: 'user-star', title: 'Content Creation' },
      { icon: 'file-text', title: 'Publishing' },
      { icon: 'briefcase', title: 'Marketing & Advertising' },
      { icon: 'cpu', title: 'Technology' },
      { icon: 'book', title: 'Education & Training' },
      { icon: 'users', title: 'Consultancy' },
    ],
  },

  advantage: advantage({ place: 'SHAMS', authority: 'SHAMS', kind: 'free zone' }),
  pillars: pillars({ place: 'SHAMS', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'SHAMS suits media and creative founders. Other zones fit trading, industry or a Dubai address.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'SHAMS: Frequently Asked Questions',
    body: 'Common questions about setting up a SHAMS company or freelance permit.',
    items: [
      { q: 'Is SHAMS only for media companies?', a: 'No. Media and creative activities are its focus, but SHAMS also licenses consultancy, technology, trading and other service activities.' },
      { q: 'Company or freelance permit?', a: 'A freelance permit suits an individual working alone. A company suits you if you plan to hire, take on partners or want a separate legal entity.' },
      { q: 'Do I need to live in Sharjah?', a: 'No. A SHAMS visa lets you live anywhere in the UAE.' },
      { q: 'How many visas can I get?', a: 'It depends on the package and office you choose. Flexi-desk packages come with a limited allocation; more visas need more space.' },
      { q: 'Will my SHAMS company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'SHAMS', government: 'the Government of Sharjah' }),

  cta: {
    title: 'Ready to Set Up in SHAMS?',
    body: 'Talk to a TMFS consultant about a SHAMS company or freelance permit, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default SHAMS;
