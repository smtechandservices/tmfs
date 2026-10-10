// Fujairah mainland page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, pillars, TESTIMONIALS, MAINLAND_PILLAR, disclaimer } from './shared';

// Sources disagree on the exact name of Fujairah's mainland licensing body
// (DED, municipality, Department of Industry and Economy), so it is described
// generically here. Name it once confirmed.
const AUTHORITY = 'the Fujairah licensing authority';

const FUJAIRAH_MAINLAND = {
  href: '/company-setup/mainland/fujairah',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Fujairah Mainland Company Formation',
    description:
      'Set up a Fujairah mainland company with TMFS: east-coast licence near the Port of Fujairah for shipping, logistics, energy and trading businesses, with visas, bank account and tax handled.',
  },

  hero: {
    title: ['Fujairah Mainland', 'Company Formation'],
    lead: 'Set up a mainland company on the UAE’s east coast, next to the Port of Fujairah, for shipping, bunkering, logistics and trading businesses that want full UAE trading rights.',
    chips: ['100% Ownership', 'East-Coast Port Access', 'Lower Setup Cost', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Fujairah: the UAE’s gateway on the Gulf of Oman',
    summary:
      'Fujairah is the only emirate entirely on the east coast, on the Gulf of Oman rather than the Arabian Gulf. Its mainland companies are licensed by the emirate’s economic department and can trade across all seven emirates.',
    body: 'The Port of Fujairah is one of the world’s largest bunkering and oil storage hubs, so shipping, marine services, energy trading and logistics businesses cluster here. Quarrying, construction and east-coast tourism round out the economy.',
    image: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents (placeholder)' },
  },

  why: {
    badge: 'Best known for: shipping, bunkering & logistics',
    title: 'Why Fujairah Mainland',
    body: 'Fujairah suits businesses tied to the sea, energy and logistics, with lower costs than the west-coast cities.',
    items: [
      { icon: 'truck', title: 'Port of Fujairah', body: 'A major bunkering, oil storage and cargo port on the Gulf of Oman, serving ships without the passage through the Strait of Hormuz.' },
      { icon: 'building-factory', title: 'Energy & marine cluster', body: 'Storage terminals, ship chandlers, surveyors and marine contractors create a dense supplier network for maritime businesses.' },
      { icon: 'receipt-tax', title: 'Lower costs', body: 'Licence fees, rents and staff costs are generally lower than in Dubai or Abu Dhabi.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'world', title: 'Trade anywhere in the UAE', body: 'A Fujairah mainland licence lets you sell, contract and open branches in every emirate.' },
      { icon: 'building-community', title: 'Quarrying & construction', body: 'The Hajar mountains supply aggregates and stone, supporting construction and building materials businesses.' },
    ],
    idealFor: [
      'Shipping & marine services',
      'Bunkering & energy trading',
      'Logistics & freight forwarding',
      'Quarrying & building materials',
      'East-coast tourism & hospitality',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Fujairah',
    body: 'Fujairah issues the standard licence families. Marine and energy activities may need extra approvals.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading, supply and distribution across the UAE.', list: ['General trading', 'Ship chandling & marine supply', 'Petroleum products trading', 'Building materials', 'Import & export'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and specialist service businesses.', list: ['Marine & ship management services', 'Freight forwarding', 'Engineering consultancy', 'Business consultancy', 'Tourism services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing, processing and quarrying.', list: ['Crushers & quarry products', 'Concrete & block making', 'Metal fabrication', 'Food processing', 'Marine repair workshops'] },
    ],
  },

  structures: mainlandStructures({
    authority: AUTHORITY,
    title: 'Legal Structures in Fujairah',
    body: 'The usual federal company forms are all available. Shipping and energy groups often start with a branch.',
  }),

  process: mainlandProcess({
    place: 'Fujairah',
    authority: AUTHORITY,
    approvals: 'Marine, petroleum, food and health activities often do.',
    lease: 'You lease office, yard or warehouse space in Fujairah and register the tenancy. Your premises decide how many visas you can apply for.',
  }),

  documents: documents({ place: 'Fujairah' }),

  benefits: {
    title: 'Why Choose a Fujairah Mainland Structure',
    body: 'Fujairah suits businesses that need to be near the port, the energy terminals or the east coast.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Next to one of the world’s largest bunkering ports',
      'Lower licence, rent and staff costs',
      'Yards and warehouses near the port',
      'East-coast access without crossing the Strait of Hormuz',
      'Good road links to Dubai and the northern emirates',
    ],
  },

  tax: mainlandTax({
    place: 'Fujairah',
    authority: AUTHORITY,
    source: { label: 'Government of Fujairah', href: 'https://www.fujairah.ae' },
    zoneTip: 'a free zone such as RAKEZ or IFZA',
  }),

  industries: {
    title: 'Where Fujairah Mainland Companies Operate',
    body: 'Fujairah’s economy is shaped by its port, its energy terminals and its mountains.',
    items: [
      { icon: 'truck', title: 'Shipping & Marine Services' },
      { icon: 'building-factory', title: 'Energy & Bunkering' },
      { icon: 'world', title: 'Trading' },
      { icon: 'briefcase', title: 'Freight & Logistics' },
      { icon: 'building-community', title: 'Quarrying & Construction' },
      { icon: 'bed', title: 'Tourism & Hospitality' },
      { icon: 'chef-hat', title: 'Food & Fisheries' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'Fujairah mainland', authority: 'Fujairah' }),
  pillars: pillars({ place: 'Fujairah', first: MAINLAND_PILLAR }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'Fujairah suits port and energy businesses. Other emirates serve different markets.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Fujairah Mainland: Frequently Asked Questions',
    body: 'Common questions about licensing and setting up on the Fujairah mainland.',
    items: [
      { q: 'Is a Fujairah mainland licence valid across the UAE?', a: 'Yes. A Fujairah mainland licence lets your company trade and sign contracts anywhere in the UAE. A physical branch in another emirate is registered with that emirate’s authority.' },
      { q: 'Why set up in Fujairah instead of Dubai?', a: 'Mainly for the port. Shipping, bunkering and marine businesses benefit from being next to the Port of Fujairah, and costs are generally lower.' },
      { q: 'Can I own 100% of a Fujairah mainland company?', a: 'For most activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity first.' },
      { q: 'Do I need premises in Fujairah?', a: 'Yes. You need registered premises in the emirate. Marine and trading companies often lease an office plus yard or warehouse space near the port.' },
      { q: 'Do petroleum or marine activities need extra approvals?', a: 'Often, yes. Petroleum trading, storage and some marine services need approvals beyond the trade licence. We map these before you apply.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile, including banks used to shipping and commodity businesses.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'Government of Fujairah', government: 'the Government of Fujairah' }),

  cta: {
    title: 'Ready to Set Up on the Fujairah Mainland?',
    body: 'Talk to a TMFS consultant about an east-coast company for shipping, energy, logistics or trading.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default FUJAIRAH_MAINLAND;
