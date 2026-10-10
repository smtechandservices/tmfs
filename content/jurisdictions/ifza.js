// IFZA free zone page, section by section in page order (Avyanco jurisdiction
// layout). Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, specialists, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const IFZA = {
  href: '/company-setup/free-zones/ifza',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'IFZA Free Zone Company Setup in Dubai',
    description:
      'Set up an IFZA free zone company in Dubai with TMFS: cost-efficient consultancy, trading and services licences, flexible visa packages, 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['IFZA Free Zone', 'Company Formation'],
    lead: 'Set up a company with the International Free Zone Authority (IFZA) in Dubai Silicon Oasis: a cost-efficient Dubai licence for consultants, traders and service businesses, with flexible visa packages.',
    chips: ['100% Ownership', 'Dubai Address', 'Flexible Visa Packages', 'Fast Online Setup', 'Bank Account Support'],
  },

  intro: {
    title: 'IFZA: a cost-efficient Dubai free zone for SMEs',
    summary:
      'IFZA started in Fujairah and moved to Dubai Digital Park in Dubai Silicon Oasis in 2020. It is one of the most popular free zones for first companies, because it combines a Dubai address with low-cost packages, a wide activity list and a mostly online process.',
    body: 'IFZA suits consultants, agencies, traders and holding structures whose customers are mostly outside the UAE or other businesses. Packages are priced by the number of visas you need, and many founders start on a flexi-desk before taking a physical office.',
    image: { src: '/images/business-planning.jpg', alt: 'Founders planning a business (placeholder)' },
  },

  why: {
    badge: 'Best known for: cost-efficient SME & consultancy licences',
    title: 'Why IFZA',
    body: 'IFZA keeps setup simple and costs predictable, which is why it is often the first company for solo founders and small teams.',
    items: [
      { icon: 'receipt-tax', title: 'Competitive packages', body: 'Licence packages priced by visa allocation, so you only pay for the visas you plan to use.' },
      { icon: 'map-pin', title: 'Dubai address', body: 'A Dubai Silicon Oasis address, close to Dubai’s business districts and both airports.' },
      { icon: 'briefcase', title: 'Wide activity list', body: 'Consultancy, trading, technology, media and many service activities, with several activities possible on one licence.' },
      { icon: 'cpu', title: 'Mostly online process', body: 'Applications, signing and documents are largely handled online, so you rarely need to visit in person.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'building-skyscraper', title: 'Flexi-desk to full office', body: 'Start on a flexi-desk and move to a dedicated office as the team grows, without changing zones.' },
    ],
    idealFor: [
      'Solo founders & consultants',
      'Agencies & digital businesses',
      'International trading',
      'Holding structures',
      'Small teams needing a few visas',
    ],
  },

  licences: {
    title: 'IFZA Licence Types',
    body: 'IFZA groups its activities into a few licence types. Your activities decide which one, and whether a combined licence is possible.',
    items: [
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and service businesses.', list: ['Management consultancy', 'IT & software services', 'Marketing & advertising', 'HR consultancy', 'Education & training services'] },
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading goods internationally and with UAE businesses.', list: ['General trading', 'Import & export', 'E-commerce', 'Electronics trading', 'Food & beverage trading'] },
      { icon: 'affiliate', title: 'Holding & Combined Licences', body: 'For holding structures and businesses mixing trade and services.', list: ['Holding company', 'Trading + consultancy', 'Media + marketing', 'Technology + trading', 'Family investment vehicles'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'IFZA',
    body: 'IFZA offers the usual free zone forms. Most founders choose a single- or multi-shareholder company.',
  }),

  process: freeZoneProcess({
    zone: 'IFZA',
    authority: 'IFZA',
    office: 'Flexi-desk or office included in your package, sized to the visas you need.',
  }),

  documents: documents({ place: 'IFZA', extra: ['Short business profile, if requested'] }),

  benefits: {
    title: 'Why Choose an IFZA Company',
    body: 'IFZA suits businesses that want a Dubai free zone licence without paying for more than they need.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Dubai address in Dubai Silicon Oasis',
      'Packages sized to your visa needs',
      'Several activities on one licence',
      'Mostly online setup and renewals',
      'Flexi-desk options for new companies',
    ],
  },

  tax: freeZoneTax({ zone: 'IFZA', authority: 'IFZA', source: { label: 'International Free Zone Authority (IFZA)', href: 'https://ifza.com' } }),

  industries: {
    title: 'Where IFZA Companies Operate',
    body: 'IFZA is broad, but these are the businesses we set up there most often.',
    items: [
      { icon: 'briefcase', title: 'Consultancy' },
      { icon: 'cpu', title: 'Technology & Software' },
      { icon: 'palette', title: 'Marketing & Media' },
      { icon: 'world', title: 'International Trading' },
      { icon: 'cart', title: 'E-commerce' },
      { icon: 'book', title: 'Education & Training' },
      { icon: 'affiliate', title: 'Holding Companies' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'IFZA', authority: 'IFZA', kind: 'free zone' }),
  specialists: specialists('IFZA'),
  pillars: pillars({ place: 'IFZA', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'IFZA suits cost-conscious SMEs. Other zones fit specific industries, budgets or emirates better.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'IFZA: Frequently Asked Questions',
    body: 'Common questions about setting up an IFZA free zone company.',
    items: [
      { q: 'Where is IFZA located?', a: 'IFZA is based at Dubai Digital Park in Dubai Silicon Oasis. It moved there from Fujairah in 2020, so IFZA companies have a Dubai address.' },
      { q: 'Can an IFZA company trade with mainland UAE customers?', a: 'It can sell services and goods to UAE businesses in many cases, but retail sales and work on the mainland usually need a mainland licence or branch. Mainland income can also affect 0% Corporate Tax status. We check this for your model.' },
      { q: 'How many visas can I get with IFZA?', a: 'IFZA packages come with a set visa allocation, and you choose the package to match. More visas need a larger package or a physical office.' },
      { q: 'Do I need to visit Dubai to set up?', a: 'Most of the process is online. You will need to be in the UAE for visa medicals and Emirates ID biometrics, and banks usually want to meet you.' },
      { q: 'Will my IFZA company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'IFZA', government: 'the Government of Dubai' }),

  cta: {
    title: 'Ready to Set Up in IFZA?',
    body: 'Talk to a TMFS consultant about the right IFZA package for your activities and visas, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default IFZA;
