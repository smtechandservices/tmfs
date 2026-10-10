// Ajman mainland page, section by section in page order (Avyanco jurisdiction
// layout). Shared blocks come from ./shared.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, specialists, pillars, TESTIMONIALS, MAINLAND_PILLAR, disclaimer } from './shared';

const AJMAN_MAINLAND = {
  href: '/company-setup/mainland/ajman',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Ajman Mainland Company Formation: Ajman DED Licence',
    description:
      'Set up an Ajman mainland company with TMFS: one of the most affordable mainland licences in the UAE, full UAE trading rights and 100% foreign ownership for most activities.',
  },

  hero: {
    title: ['Ajman Mainland', 'Company Formation'],
    lead: 'Set up a mainland company licensed by the Ajman Department of Economic Development (Ajman DED), with full UAE trading rights at one of the lowest cost bases in the country.',
    chips: ['100% Ownership', 'Ajman DED Licence', 'Low Setup Cost', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Ajman: a small emirate with low costs and a short commute',
    summary:
      'Ajman is the UAE’s smallest emirate by area, bordering Sharjah and within easy reach of Dubai. Its mainland companies are licensed by Ajman DED and can trade in all seven emirates under the same federal company law as everywhere else.',
    body: 'Lower licence fees and rents make Ajman popular with trading companies, small manufacturers and service businesses that need a real mainland licence but not a Dubai address. Ajman Port and the emirate’s industrial areas support importers and workshops.',
    image: { src: '/images/difc-skyline.jpg', alt: 'City skyline (placeholder)' },
  },

  why: {
    badge: 'Best known for: low-cost trading & small business',
    title: 'Why Ajman Mainland',
    body: 'Ajman gives you a full mainland licence with lower running costs, for businesses that don’t need a Dubai or Abu Dhabi address.',
    items: [
      { icon: 'receipt-tax', title: 'Among the lowest costs in the UAE', body: 'Licence fees, office rents and warehouse space are typically lower than in Dubai and Sharjah.' },
      { icon: 'world', title: 'Full UAE market access', body: 'Trade with customers, sign contracts and open branches in every emirate, like any other mainland company.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'truck', title: 'Port & industrial areas', body: 'Ajman Port and the emirate’s industrial zones serve importers, workshops and light manufacturers.' },
      { icon: 'map-pin', title: 'Close to Sharjah and Dubai', body: 'Border-to-border with Sharjah and a short drive from Dubai, so customers and staff stay within reach.' },
      { icon: 'user-check', title: 'Straightforward licensing', body: 'A smaller authority with simple processes, which often means quick turnaround once documents are ready.' },
    ],
    idealFor: [
      'Trading & import businesses',
      'Small manufacturers & workshops',
      'Car & spare parts trading',
      'Contracting & maintenance',
      'First-time founders on a budget',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Ajman',
    body: 'Ajman DED issues the standard licence families. Your activities decide the licence and any extra approvals.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading, retail and distribution across the UAE.', list: ['General trading', 'Import & export', 'Auto parts trading', 'Building materials', 'Retail shops'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For service businesses and consultancies.', list: ['Business consultancy', 'Maintenance services', 'IT services', 'Typing & document services', 'Marketing services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing and processing in Ajman’s industrial areas.', list: ['Light manufacturing', 'Furniture & joinery', 'Metal fabrication', 'Food processing', 'Packaging'] },
    ],
  },

  structures: mainlandStructures({
    authority: 'Ajman DED',
    body: 'The usual federal company forms are all available. Sole establishments and small LLCs are common here.',
  }),

  process: mainlandProcess({
    place: 'Ajman',
    authority: 'Ajman DED',
    approvals: 'Food, health and education activities usually do.',
    lease: 'You lease office, shop or workshop space and the tenancy is registered with the Ajman authorities. Your premises decide how many visas you can apply for.',
  }),

  documents: documents({ place: 'Ajman' }),

  benefits: {
    title: 'Why Choose an Ajman Mainland Structure',
    body: 'Ajman suits cost-conscious businesses that still need full mainland rights.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Lower licence and rent costs than Dubai and Sharjah',
      'Affordable warehouses and workshops',
      'Quick licensing once documents are ready',
      'Close to Sharjah and Dubai customers',
      'Good fit for first companies and small teams',
    ],
  },

  tax: mainlandTax({
    place: 'Ajman',
    authority: 'Ajman DED',
    source: { label: 'Ajman Department of Economic Development', href: 'https://www.ajmanded.ae' },
    zoneTip: 'Ajman Free Zone, SHAMS or SPC',
  }),

  industries: {
    title: 'Where Ajman Mainland Companies Operate',
    body: 'Ajman’s economy is built on trading, light industry and small businesses.',
    items: [
      { icon: 'world', title: 'Trading & Import' },
      { icon: 'building-factory', title: 'Light Manufacturing' },
      { icon: 'building-community', title: 'Contracting & Maintenance' },
      { icon: 'cart', title: 'Retail' },
      { icon: 'truck', title: 'Logistics' },
      { icon: 'chef-hat', title: 'Food & Restaurants' },
      { icon: 'users', title: 'Professional Services' },
      { icon: 'bed', title: 'Hospitality' },
    ],
  },

  advantage: advantage({ place: 'Ajman mainland', authority: 'Ajman DED' }),
  specialists: specialists('Ajman'),
  pillars: pillars({ place: 'Ajman', first: MAINLAND_PILLAR }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'Ajman keeps costs down. Other emirates offer bigger markets or sector strengths.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Ajman Mainland: Frequently Asked Questions',
    body: 'Common questions about Ajman DED licensing and setting up on the Ajman mainland.',
    items: [
      { q: 'Is an Ajman mainland licence valid across the UAE?', a: 'Yes. An Ajman DED licence lets your company trade and sign contracts anywhere in the UAE. A physical branch in another emirate is registered with that emirate’s authority.' },
      { q: 'Is Ajman cheaper than Dubai?', a: 'Usually, yes. Licence fees and rents are typically lower. We give you a written cost comparison for your activity before you choose.' },
      { q: 'Can I own 100% of an Ajman mainland company?', a: 'For most activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity first.' },
      { q: 'Do I need an office in Ajman?', a: 'Yes. You need registered premises in Ajman, such as an office, shop or workshop. The space affects how many visas you can apply for.' },
      { q: 'Ajman mainland or Ajman Free Zone?', a: 'Choose mainland if you sell directly to UAE customers or need a shop. Ajman Free Zone suits import, re-export and businesses that may qualify for 0% Corporate Tax on qualifying income.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'Ajman DED', government: 'the Government of Ajman' }),

  cta: {
    title: 'Ready to Set Up on the Ajman Mainland?',
    body: 'Talk to a TMFS consultant about an affordable Ajman mainland company with full UAE trading rights.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default AJMAN_MAINLAND;
