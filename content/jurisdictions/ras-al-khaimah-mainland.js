// Ras Al Khaimah mainland page, section by section in page order (Avyanco
// jurisdiction layout). Shared blocks come from ./shared.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, pillars, TESTIMONIALS, MAINLAND_PILLAR, disclaimer } from './shared';

const RAK_MAINLAND = {
  href: '/company-setup/mainland/ras-al-khaimah',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Ras Al Khaimah Mainland Company Formation: RAK DED Licence',
    description:
      'Set up a Ras Al Khaimah mainland company with TMFS: RAK DED licence for industrial, trading and tourism businesses, 100% foreign ownership for most activities and lower costs than Dubai.',
  },

  hero: {
    title: ['Ras Al Khaimah Mainland', 'Company Formation'],
    lead: 'Set up a mainland company licensed by the Ras Al Khaimah Department of Economic Development (RAK DED), in an emirate known for industry, building materials and fast-growing tourism.',
    chips: ['100% Ownership', 'RAK DED Licence', 'Industrial Land', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Ras Al Khaimah: industry, ports and a growing tourism economy',
    summary:
      'Ras Al Khaimah is the UAE’s northernmost emirate. Its mainland companies are licensed by RAK DED and can trade across all seven emirates, with costs well below Dubai’s.',
    body: 'RAK has a long industrial record in ceramics, cement, glass and pharmaceuticals, a working port at Saqr and its own international airport. Tourism is growing quickly too, around Jebel Jais and Al Marjan Island, which brings demand for hospitality, construction and services.',
    image: { src: '/images/business-planning.jpg', alt: 'Planning session (placeholder)' },
  },

  why: {
    badge: 'Best known for: industry, building materials & tourism',
    title: 'Why Ras Al Khaimah Mainland',
    body: 'RAK combines full mainland rights with industrial land, port access and a lower cost of living and doing business.',
    items: [
      { icon: 'building-factory', title: 'Established industrial base', body: 'Ceramics, cement, aggregates and pharmaceuticals have made RAK a manufacturing centre, with suppliers and skilled labour to match.' },
      { icon: 'truck', title: 'Saqr Port & RAK airport', body: 'A deep-water port for bulk and container cargo, plus an international airport, without Dubai’s congestion.' },
      { icon: 'bed', title: 'Tourism growth', body: 'New resorts and attractions around Al Marjan Island and Jebel Jais are creating demand for hospitality, leisure and construction businesses.' },
      { icon: 'receipt-tax', title: 'Lower costs than Dubai', body: 'Licence fees, rents and industrial land are generally cheaper, which matters for businesses with large premises.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'world', title: 'Trade anywhere in the UAE', body: 'A RAK DED licence lets you sell, contract and open branches in every emirate.' },
    ],
    idealFor: [
      'Manufacturers & industrial SMEs',
      'Building materials trading',
      'Hospitality & tourism businesses',
      'Construction & contracting',
      'Businesses needing large, affordable premises',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Ras Al Khaimah',
    body: 'RAK DED issues the standard licence families. Industrial and tourism activities may need extra approvals.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading and distribution businesses across the UAE.', list: ['General trading', 'Building materials trading', 'Import & export', 'Retail', 'Auto & equipment trading'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and service businesses.', list: ['Business consultancy', 'Engineering services', 'Tourism services', 'IT services', 'Maintenance services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing and processing on RAK’s industrial land.', list: ['Building products', 'Ceramics & glass', 'Food processing', 'Metal fabrication', 'Plastics & packaging'] },
    ],
  },

  structures: mainlandStructures({
    authority: 'RAK DED',
    body: 'The usual federal company forms are all available. Industrial investors often choose an LLC or a branch of their parent company.',
  }),

  process: mainlandProcess({
    place: 'Ras Al Khaimah',
    authority: 'RAK DED',
    approvals: 'Industrial, tourism, food and health activities often do.',
    lease: 'You lease office, industrial or retail space in RAK and register the tenancy. Your premises decide how many visas you can apply for.',
  }),

  documents: documents({ place: 'Ras Al Khaimah' }),

  benefits: {
    title: 'Why Choose a Ras Al Khaimah Mainland Structure',
    body: 'RAK suits businesses that need space, port access or a foothold in a growing tourism market.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Lower licence, rent and land costs than Dubai',
      'Industrial land and established suppliers',
      'Saqr Port and RAK International Airport',
      'Growing tourism and hospitality demand',
      'Lower cost of living for staff',
    ],
  },

  tax: mainlandTax({
    place: 'Ras Al Khaimah',
    authority: 'RAK DED',
    source: { label: 'Ras Al Khaimah Department of Economic Development', href: 'https://ded.rak.ae' },
    zoneTip: 'RAKEZ, the emirate’s own free zone',
  }),

  industries: {
    title: 'Where Ras Al Khaimah Mainland Companies Operate',
    body: 'RAK’s economy rests on industry and building materials, with tourism growing fast.',
    items: [
      { icon: 'building-factory', title: 'Manufacturing' },
      { icon: 'building-community', title: 'Building Materials & Construction' },
      { icon: 'bed', title: 'Tourism & Hospitality' },
      { icon: 'world', title: 'Trading' },
      { icon: 'truck', title: 'Logistics & Shipping' },
      { icon: 'building-skyscraper', title: 'Real Estate' },
      { icon: 'chef-hat', title: 'Food & Beverage' },
      { icon: 'users', title: 'Professional Services' },
    ],
  },

  advantage: advantage({ place: 'Ras Al Khaimah mainland', authority: 'RAK DED' }),
  pillars: pillars({ place: 'Ras Al Khaimah', first: MAINLAND_PILLAR }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'RAK suits industry and tourism. Other emirates suit different markets and budgets.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Ras Al Khaimah Mainland: Frequently Asked Questions',
    body: 'Common questions about RAK DED licensing and setting up on the Ras Al Khaimah mainland.',
    items: [
      { q: 'Is a RAK mainland licence valid across the UAE?', a: 'Yes. A RAK DED licence lets your company trade and sign contracts anywhere in the UAE. A physical branch in another emirate is registered with that emirate’s authority.' },
      { q: 'RAK mainland or RAKEZ?', a: 'Choose mainland if you sell directly to UAE customers, need a shop or bid for local contracts. RAKEZ suits manufacturers, exporters and businesses that may qualify for 0% Corporate Tax on qualifying income. We compare both for you.' },
      { q: 'Can I own 100% of a RAK mainland company?', a: 'For most activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity first.' },
      { q: 'Do I need premises in Ras Al Khaimah?', a: 'Yes. You need registered premises in RAK. The type and size of space depend on your activity and the number of visas you need.' },
      { q: 'How long does RAK mainland formation take?', a: 'With documents and premises ready, licensing usually takes days to a couple of weeks. Industrial activities needing extra approvals take longer.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'RAK DED', government: 'the Government of Ras Al Khaimah' }),

  cta: {
    title: 'Ready to Set Up on the Ras Al Khaimah Mainland?',
    body: 'Talk to a TMFS consultant about a RAK DED-licensed company for industry, trading or tourism.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default RAK_MAINLAND;
