// Umm Al Quwain mainland page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, specialists, pillars, TESTIMONIALS, MAINLAND_PILLAR, disclaimer } from './shared';

const UAQ_MAINLAND = {
  href: '/company-setup/mainland/umm-al-quwain',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Umm Al Quwain Mainland Company Formation: UAQ DED Licence',
    description:
      'Set up an Umm Al Quwain mainland company with TMFS: low-overhead UAQ DED licence for small trading and service companies, with full UAE trading rights and visas, bank account and tax handled.',
  },

  hero: {
    title: ['Umm Al Quwain Mainland', 'Company Formation'],
    lead: 'Set up a mainland company licensed by the Umm Al Quwain Department of Economic Development (UAQ DED), with full UAE trading rights and some of the lowest running costs in the country.',
    chips: ['100% Ownership', 'UAQ DED Licence', 'Low Overheads', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Umm Al Quwain: low overheads between Ajman and RAK',
    summary:
      'Umm Al Quwain is one of the UAE’s smallest and quietest emirates, on the coast between Ajman and Ras Al Khaimah. Its mainland companies are licensed by UAQ DED and can trade in all seven emirates.',
    body: 'Low rents and licence fees make UAQ a practical base for small trading and service companies, workshops and businesses serving the northern emirates. The emirate has an industrial area, a commercial port and quick access to the Emirates Road.',
    image: { src: '/images/business-district.jpg', alt: 'Business district (placeholder)' },
  },

  why: {
    badge: 'Best known for: low-overhead trading & services',
    title: 'Why Umm Al Quwain Mainland',
    body: 'UAQ gives you a full mainland licence with minimal overheads, for businesses that don’t need a big-city address.',
    items: [
      { icon: 'receipt-tax', title: 'Very low running costs', body: 'Licence fees, rents and warehouse space are among the lowest in the UAE.' },
      { icon: 'world', title: 'Full UAE market access', body: 'Trade with customers, sign contracts and open branches in every emirate, like any other mainland company.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'building-factory', title: 'Industrial area & port', body: 'Workshops, warehouses and a commercial port support light industry and importers.' },
      { icon: 'map-pin', title: 'Northern emirates location', body: 'Between Ajman and RAK on the Emirates Road, within reach of Sharjah and Dubai.' },
      { icon: 'user-check', title: 'Simple, personal licensing', body: 'A smaller authority with straightforward processes and quick responses once documents are in order.' },
    ],
    idealFor: [
      'Small trading companies',
      'Workshops & light industry',
      'Service businesses with remote clients',
      'Marine & fisheries businesses',
      'Founders keeping overheads low',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Umm Al Quwain',
    body: 'UAQ DED issues the standard licence families. Your activities decide the licence and any extra approvals.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading and distribution across the UAE.', list: ['General trading', 'Import & export', 'Building materials', 'Auto parts trading', 'Retail'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and service businesses.', list: ['Business consultancy', 'IT services', 'Maintenance services', 'Marketing services', 'Administrative services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing and workshops in UAQ’s industrial area.', list: ['Light manufacturing', 'Boat building & repair', 'Metal fabrication', 'Food processing', 'Packaging'] },
    ],
  },

  structures: mainlandStructures({
    authority: 'UAQ DED',
    body: 'The usual federal company forms are all available. Sole establishments and small LLCs are the most common.',
  }),

  process: mainlandProcess({
    place: 'Umm Al Quwain',
    authority: 'UAQ DED',
    approvals: 'Food, health and marine activities often do.',
    lease: 'You lease office, shop or workshop space in UAQ and register the tenancy. Your premises decide how many visas you can apply for.',
  }),

  documents: documents({ place: 'Umm Al Quwain' }),

  benefits: {
    title: 'Why Choose an Umm Al Quwain Mainland Structure',
    body: 'UAQ suits small businesses that want full mainland rights for the lowest possible fixed costs.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Among the lowest licence and rent costs in the UAE',
      'Affordable workshops and warehouses',
      'Quick, straightforward licensing',
      'Easy access to the northern emirates',
      'Good fit for small teams and first companies',
    ],
  },

  tax: mainlandTax({
    place: 'Umm Al Quwain',
    authority: 'UAQ DED',
    source: { label: 'Umm Al Quwain Department of Economic Development', href: 'https://ded.uaq.ae' },
    zoneTip: 'a free zone such as Ajman Free Zone or RAKEZ',
  }),

  industries: {
    title: 'Where Umm Al Quwain Mainland Companies Operate',
    body: 'UAQ’s economy is made up of small traders, workshops and marine businesses.',
    items: [
      { icon: 'world', title: 'Trading' },
      { icon: 'building-factory', title: 'Light Industry' },
      { icon: 'truck', title: 'Logistics & Warehousing' },
      { icon: 'building-community', title: 'Contracting' },
      { icon: 'chef-hat', title: 'Food & Fisheries' },
      { icon: 'bed', title: 'Tourism & Leisure' },
      { icon: 'cart', title: 'Retail' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'Umm Al Quwain mainland', authority: 'UAQ DED' }),
  specialists: specialists('Umm Al Quwain'),
  pillars: pillars({ place: 'Umm Al Quwain', first: MAINLAND_PILLAR }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'UAQ keeps overheads to a minimum. Other emirates offer bigger markets or sector strengths.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Umm Al Quwain Mainland: Frequently Asked Questions',
    body: 'Common questions about UAQ DED licensing and setting up on the Umm Al Quwain mainland.',
    items: [
      { q: 'Is an Umm Al Quwain mainland licence valid across the UAE?', a: 'Yes. A UAQ DED licence lets your company trade and sign contracts anywhere in the UAE. A physical branch in another emirate is registered with that emirate’s authority.' },
      { q: 'Is Umm Al Quwain the cheapest emirate for a mainland company?', a: 'It is among the lowest-cost options, along with Ajman. The cheapest choice depends on your activity and premises, so we compare them in writing before you decide.' },
      { q: 'Can I own 100% of a UAQ mainland company?', a: 'For most activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity first.' },
      { q: 'Do I need premises in Umm Al Quwain?', a: 'Yes. You need registered premises in the emirate. The space affects how many visas you can apply for.' },
      { q: 'Will banks accept a UAQ mainland company?', a: 'Banks look at your activity, ownership and expected transactions more than the emirate. We prepare the application and match it to the partner bank most likely to approve your profile.' },
      { q: 'How long does UAQ mainland formation take?', a: 'With documents and premises ready, licensing usually takes days to a couple of weeks. We give you a written timeline at the start.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'UAQ DED', government: 'the Government of Umm Al Quwain' }),

  cta: {
    title: 'Ready to Set Up on the Umm Al Quwain Mainland?',
    body: 'Talk to a TMFS consultant about a low-overhead UAQ mainland company with full UAE trading rights.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default UAQ_MAINLAND;
