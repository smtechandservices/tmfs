// Abu Dhabi mainland page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, specialists, pillars, TESTIMONIALS, MAINLAND_PILLAR, disclaimer } from './shared';

const ABU_DHABI_MAINLAND = {
  href: '/company-setup/mainland/abu-dhabi',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Abu Dhabi Mainland Company Formation: ADDED Licence',
    description:
      'Set up an Abu Dhabi mainland company with TMFS: ADDED licence, 100% foreign ownership for most activities and access to government and energy-sector clients, with visas, bank account and tax handled.',
  },

  hero: {
    title: ['Abu Dhabi Mainland', 'Company Formation'],
    lead: 'Set up a mainland company in the UAE capital, licensed by the Abu Dhabi Department of Economic Development (ADDED), to serve government, energy and industrial clients across the UAE.',
    chips: ['100% Ownership', 'ADDED Licence', 'Government & Energy Clients', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Abu Dhabi: the capital and the UAE’s largest economy',
    summary:
      'Abu Dhabi mainland companies are licensed by ADDED and can trade and contract across all seven emirates. Licensing runs through the Abu Dhabi Business Centre and the TAMM government services platform, and most activities can be fully foreign-owned.',
    body: 'Abu Dhabi is the seat of the federal government and home to the UAE’s energy sector and its largest sovereign investors. Much of the work here flows from government entities and their suppliers, so a local mainland licence and premises in the emirate often carry weight with clients.',
    image: { src: '/images/business-district.jpg', alt: 'Business district skyline (placeholder)' },
  },

  why: {
    badge: 'Best known for: government, energy & industrial work',
    title: 'Why Abu Dhabi Mainland',
    body: 'Abu Dhabi suits businesses that want to be close to government decision-makers, the energy sector and large industrial projects.',
    items: [
      { icon: 'building-community', title: 'Seat of the federal government', body: 'Ministries, federal authorities and many government-owned companies are based here, along with the embassies.' },
      { icon: 'building-factory', title: 'Energy & industrial supply chains', body: 'Oil and gas, utilities and heavy industry create steady demand for contractors, suppliers and service providers with a local licence.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'truck', title: 'Khalifa Port & industrial zones', body: 'Deep-water port facilities and large industrial and logistics areas support manufacturers and distributors.' },
      { icon: 'world', title: 'Trade anywhere in the UAE', body: 'An ADDED licence lets you sell, contract and open branches in all seven emirates.' },
      { icon: 'building-bank', title: 'Capital & investment base', body: 'The emirate’s investment funds and its push to diversify its economy keep demand high in healthcare, tech, manufacturing and tourism.' },
    ],
    idealFor: [
      'Government & semi-government suppliers',
      'Oil, gas & energy services',
      'Construction & engineering',
      'Healthcare providers',
      'Industrial & manufacturing businesses',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Abu Dhabi',
    body: 'ADDED issues the standard licence families. Regulated sectors such as health and education also need approval from their Abu Dhabi regulator.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading, supply and distribution businesses serving Abu Dhabi and the wider UAE.', list: ['General trading', 'Oilfield equipment trading', 'Building materials', 'Import & export', 'Retail'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and specialist service businesses.', list: ['Management consultancy', 'Engineering consultancy', 'IT services', 'HR & recruitment consultancy', 'Training services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing and processing, often in Abu Dhabi’s industrial cities and zones.', list: ['Fabrication & machining', 'Food processing', 'Building products', 'Plastics & packaging', 'Assembly & maintenance'] },
    ],
  },

  structures: mainlandStructures({
    authority: 'ADDED',
    body: 'The usual federal company forms are all available. Foreign groups working on Abu Dhabi projects often start with a branch.',
  }),

  process: mainlandProcess({
    place: 'Abu Dhabi',
    authority: 'ADDED',
    approvals: 'Healthcare, education, food and energy-related activities often do.',
    lease: 'You lease office or industrial space and the tenancy is registered through Tawtheeq. Your premises decide how many visas you can apply for.',
  }),

  documents: documents({ place: 'Abu Dhabi' }),

  benefits: {
    title: 'Why Choose an Abu Dhabi Mainland Structure',
    body: 'An Abu Dhabi licence matters most when your clients, projects or regulators are in the capital.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'A local presence for government and energy clients',
      'Eligible to register as a supplier with government entities',
      'Access to Khalifa Port and industrial land',
      'Strong demand in healthcare, industry and infrastructure',
      'Stable regulation and long-term investment plans',
    ],
  },

  tax: mainlandTax({
    place: 'Abu Dhabi',
    authority: 'ADDED',
    source: { label: 'Abu Dhabi Department of Economic Development (ADDED)', href: 'https://www.added.gov.ae' },
    zoneTip: 'a free zone such as IFZA or RAKEZ',
  }),

  industries: {
    title: 'Where Abu Dhabi Mainland Companies Operate',
    body: 'The capital’s economy leans on energy, government spending and a growing list of diversification sectors.',
    items: [
      { icon: 'building-factory', title: 'Oil, Gas & Energy Services' },
      { icon: 'building-community', title: 'Construction & Engineering' },
      { icon: 'shield-check', title: 'Healthcare' },
      { icon: 'briefcase', title: 'Government Supply' },
      { icon: 'cpu', title: 'Technology' },
      { icon: 'truck', title: 'Logistics' },
      { icon: 'users', title: 'Professional Services' },
      { icon: 'bed', title: 'Tourism & Hospitality' },
    ],
  },

  advantage: advantage({ place: 'Abu Dhabi mainland', authority: 'ADDED' }),
  specialists: specialists('Abu Dhabi'),
  pillars: pillars({ place: 'Abu Dhabi', first: MAINLAND_PILLAR }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'Abu Dhabi suits government and energy work. Other emirates suit different sectors and budgets.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Abu Dhabi Mainland: Frequently Asked Questions',
    body: 'Common questions about ADDED licensing and setting up on the Abu Dhabi mainland.',
    items: [
      { q: 'Can I own 100% of an Abu Dhabi mainland company?', a: 'For most activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity before anything is filed.' },
      { q: 'Do I need an office in Abu Dhabi?', a: 'Yes. You need premises in the emirate with a tenancy registered through Tawtheeq. The size of the space affects how many visas you can apply for.' },
      { q: 'Can I run an Abu Dhabi company from Dubai?', a: 'The company’s licensed premises must be in Abu Dhabi, but you can live elsewhere in the UAE and trade with customers in every emirate.' },
      { q: 'How long does Abu Dhabi mainland formation take?', a: 'With documents and premises ready, ADDED licensing usually takes days to a few weeks. Activities that need another regulator’s approval, such as healthcare, take longer.' },
      { q: 'Does a mainland licence help with government tenders?', a: 'A mainland licence is usually needed to register as a supplier with government entities. Each entity has its own vendor registration, which we can help prepare.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'ADDED', government: 'the Government of Abu Dhabi' }),

  cta: {
    title: 'Ready to Set Up on the Abu Dhabi Mainland?',
    body: 'Talk to a TMFS consultant about an ADDED-licensed company built for government, energy or industrial clients.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default ABU_DHABI_MAINLAND;
