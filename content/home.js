// Homepage copy, section by section, in page order. The layout follows the
// Avyanco homepage; every fact here is TMFS's own. Headings written as arrays
// render the `{ em }` pieces in red.

export const HERO = {
  eyebrow: 'Dubai · UAE · Since 2019',
  title: ['Company Setup in the ', { em: 'UAE Made Simple.' }],
  sub: 'Start, structure and grow your business in the UAE with confidence.',
  intro: 'We simplify UAE business setup for startups, investors, and established businesses with expert guidance and seamless support.',
  tagline: 'Your vision, our expertise.',
  image: { src: '/images/image.png', alt: 'Business Bay, Dubai at dusk' },
  primary: { label: 'Start Your Business', href: '#contact' },
  secondary: { label: 'Talk to an Expert', href: '#contact' },
  tools: [
    { label: 'Business setup', title: 'Compare Setup Options', href: '/company-setup', icon: 'building-skyscraper' },
    { label: 'UAE residence', title: 'Golden Visa', href: '/corporate-services/golden-visa', icon: 'id-badge' },
  ],
};

export const STATS_HEAD = {
  eyebrow: 'Proven impact',
  title: 'Trusted by founders, SMEs and investors across the UAE.',
};

// Press coverage for the "As featured in" strip. The strip stays hidden while
// this list is empty. Shape: { outlet: ['Gulf', 'News'], articles: [{ title, href }] }
export const PRESS = [];

export const STORY = {
  eyebrow: 'Who we are',
  title: 'Built so founders deal with one team, not five.',
  pull: 'Setting up in the UAE usually means a formation agent, a bank relationship manager, an accountant, a PRO and a visa typist, none of whom talk to each other. TMFS was set up in Dubai to replace that chain with one team that owns the whole file.',
  paragraphs: [
    'We start with what you are building: who you will invoice, where your customers are, which bank is likely to say yes, and what you will owe the FTA. Then we recommend the jurisdiction and structure that fit, and handle the licence, the visas, the bank account and the filings that follow.',
    'Behind us is Time Machine Group’s 20 years in UAE business setup, and an office next to Dubai Mall you can walk into.',
  ],
  facts: [
    { label: 'Based', value: 'Dubai, next to Dubai Mall' },
    { label: 'Since', value: '2019' },
    { label: 'Group', value: 'Time Machine Group' },
  ],
  image: { src: '/images/business-district.jpg', alt: 'Dubai business district skyline' },
  badgeTop: { icon: 'world', value: '8', label: ['Jurisdictions', 'filed directly'] },
  badge: { value: '18', label: ['UAE banking', 'partners'] },
  action: { label: 'Read about TMFS', href: '/about' },
};

export const PRACTICES_HEAD = {
  eyebrow: 'Practice areas',
  title: 'Six practices, one accountable team.',
  intro: 'Setup, banking, tax, accounting and visas are run by the same team that handles your licence, so nothing gets lost between providers.',
};

// Icons for each practice card, keyed by catalog group key.
export const PRACTICE_ICONS = {
  'company-setup': 'building-skyscraper',
  banking: 'building-bank',
  tax: 'receipt-tax',
  'accounting-audit': 'book',
  'pro-visas': 'id-badge',
  'licence-compliance': 'shield-lock',
};

export const PROCESS = {
  eyebrow: 'How we work',
  title: 'From first call to fully operational.',
  intro: 'Six steps, one point of contact. The consultant on your first call stays with you through licence, bank and renewal.',
  steps: [
    {
      n: '01',
      icon: 'phone-call',
      title: 'Free consultation',
      desc: 'Twenty minutes on your activity, ownership and budget. You leave with a written cost breakdown.',
      highlights: ['20-minute call', 'Written cost estimate', 'No obligation'],
    },
    {
      n: '02',
      icon: 'building-skyscraper',
      title: 'Jurisdiction & structure',
      desc: 'Mainland, free zone or offshore, chosen by who you will invoice and which bank will take you, not by the cheapest headline price.',
      highlights: ['Zone matched to activity', 'Ownership structure set', 'Bank fit checked early'],
    },
    {
      n: '03',
      icon: 'file-text',
      title: 'Documents',
      desc: 'We draft the MoA and applications and handle attestation and translation, so nothing comes back for a missing stamp.',
      highlights: ['MoA drafted', 'Attestation handled', 'Checklist per shareholder'],
    },
    {
      n: '04',
      icon: 'certificate',
      title: 'Filing & licence',
      desc: 'Filed directly with the authority and tracked to issuance. Free zone licences typically land in 3–7 working days.',
      highlights: ['Filed directly', 'Queries answered for you', '3–7 working days'],
    },
    {
      n: '05',
      icon: 'building-bank',
      title: 'Visas & bank account',
      desc: 'Medical, Emirates ID and residence visa, alongside a bank application prepared for the partner bank most likely to approve it.',
      highlights: ['Emirates ID & residency', '18 partner banks', 'Compliance-ready application'],
    },
    {
      n: '06',
      icon: 'shield-check',
      title: 'Stay compliant',
      desc: 'Bookkeeping, VAT and Corporate Tax filings and renewal reminders, so the second year is quieter than the first.',
      highlights: ['Bookkeeping & VAT', 'Corporate Tax returns', 'Renewal reminders'],
    },
  ],
  cta: {
    label: 'Ready to start?',
    headline: ['Book a free 20-minute consultation, ', { em: 'no obligation.' }],
    action: { label: 'Book a consultation', href: '/contact' },
  },
};

// "Where we file" map. Pins are emirates; each lists what we file there.
// Positions are percentages of the map image (public/images/uae-map.svg).
export const MARKETS = {
  eyebrow: 'Where we file',
  title: ['Seven emirates, ', { em: 'one' }, ' coordinated team.'],
  intro: 'From our office next to Dubai Mall we file on the mainland in every emirate, in seven free zones directly, and offshore through RAK ICC.',
  filters: [
    { key: 'all', label: 'All' },
    { key: 'mainland', label: 'Mainland' },
    { key: 'free-zone', label: 'Free zones' },
    { key: 'offshore', label: 'Offshore' },
  ],
  stripHead: 'Our home market: all seven emirates',
  action: { label: 'Discuss your setup', href: '/contact' },
  // `ll` is [lat, lng]. `side` is which side of that point the name sits,
  // set per emirate so the crowded northern emirates don't overlap. Free zones and
  // offshore entries are catalog slugs.
  emirates: [
    { key: 'dubai', code: 'DXB', name: 'Dubai', ll: [25.2, 55.27], hq: true, side: 'left', meta: 'Head office · mainland licensed by DET', freeZones: ['ifza', 'meydan', 'dmcc', 'difc'] },
    { key: 'abu-dhabi', code: 'AUH', name: 'Abu Dhabi', ll: [24.45, 54.38], side: 'right', meta: 'The capital · mainland licensed by ADDED' },
    { key: 'sharjah', code: 'SHJ', name: 'Sharjah', ll: [25.357, 55.391], side: 'left', meta: 'Mainland licensed by SEDD', freeZones: ['shams', 'spc', 'srtip'] },
    { key: 'ajman', code: 'AJM', name: 'Ajman', ll: [25.405, 55.513], side: 'right', meta: 'Mainland licensed by Ajman DED', freeZones: ['ajman-free-zone'] },
    { key: 'umm-al-quwain', code: 'UAQ', name: 'Umm Al Quwain', ll: [25.565, 55.553], side: 'left', meta: 'Mainland licensed by UAQ DED' },
    { key: 'ras-al-khaimah', code: 'RAK', name: 'Ras Al Khaimah', ll: [25.79, 55.94], side: 'right', meta: 'Mainland, RAKEZ and RAK ICC offshore', freeZones: ['rakez'], offshore: ['rak-icc'] },
    { key: 'fujairah', code: 'FUJ', name: 'Fujairah', ll: [25.13, 56.33], side: 'right', meta: 'East coast · mainland licensed by Fujairah DED' },
  ],
};

export const INDUSTRIES = {
  eyebrow: 'Industries',
  title: 'The businesses we set up most.',
  intro: 'Each sector has a zone, a licence and a bank that suit it best. These are the ones we file for every month.',
  items: [
    { icon: 'truck', title: 'Trading', desc: 'General trading, import/export and distribution, on mainland or in RAKEZ and Ajman Free Zone with warehouse options.' },
    { icon: 'cart', title: 'E-commerce', desc: 'Online stores, marketplace sellers and D2C brands, usually licensed in Meydan or IFZA with a Dubai address.' },
    { icon: 'scale', title: 'Consultancy & Professional Services', desc: 'Management consultants, agencies and freelancers. IFZA is the usual first company for solo founders.' },
    { icon: 'palette', title: 'Media & Creative', desc: 'Content studios, publishers, production and marketing, licensed in SHAMS or SPC Free Zone.' },
    { icon: 'cpu', title: 'Technology & R&D', desc: 'Software, hardware and research companies, with lab and industrial space available at SRTIP.' },
    { icon: 'building-community', title: 'Real Estate', desc: 'Brokerages, property management and holding structures, with offshore options for owning assets.' },
    { icon: 'bed', title: 'Hospitality & F&B', desc: 'Restaurants, cafés and cloud kitchens, which need a mainland licence to serve customers directly.' },
    { icon: 'affiliate', title: 'Holding & Investment', desc: 'Holding companies and investment vehicles through RAK ICC, with DIFC advisory for fund structures.' },
  ],
};

export const LEADERSHIP = {
  eyebrow: 'Leadership',
  title: ['The people ', { em: 'on your file.' }],
  intro: 'You will meet the team below, not a call centre. They stay with your company from the first call to the annual renewal.',
};

export const DIFFERENTIATORS = {
  eyebrow: 'Why TMFS',
  title: ['One team. ', { em: 'One contact.' }, ' No runaround.'],
  intro: 'Setup, banking, tax and visas under one roof, so nothing gets lost between providers.',
  items: [
    { icon: 'user-star', title: 'One contact from call to renewal', desc: 'The consultant you meet first owns your file through licence, bank account, visas and every renewal after.' },
    { icon: 'building-bank', title: 'Banking built in, not bolted on', desc: 'Your bank application is prepared alongside your licence and matched across 18 partner banks, so banking isn’t a second scramble.' },
    { icon: 'shield-check', title: 'Filed directly, not passed on', desc: 'We file in eight jurisdictions ourselves, which means we see the queries and fix them, rather than waiting on a sub-agent.' },
    { icon: 'file-text', title: 'Written costs before you commit', desc: 'Every consultation ends with a written cost breakdown: government fees, our fee and what renews each year.' },
  ],
};

export const INSIGHTS = {
  eyebrow: 'Insights',
  title: ['Notes from ', { em: 'the filing' }, ' desk.'],
  action: { label: 'View all insights', href: '/insights' },
};

export const TESTIMONIALS_HEAD = {
  eyebrow: 'Client voices',
  title: 'Trusted by founders, families and finance leaders.',
  rating: { value: '4.9', label: 'Average client rating' },
  reviewsUrl: '', // Google Business Profile link; the "Read all reviews" button appears once set.
};

export const FAQS = {
  eyebrow: 'Common questions',
  title: ['Answers to what we ', { em: 'get asked most.' }],
  intro: 'If your question isn’t here, our team replies within one working day.',
  action: { label: 'Ask our team', href: '/contact' },
  items: [
    {
      q: 'What types of company can TMFS set up?',
      a: 'Mainland LLCs, sole establishments and branches in all seven emirates; free zone companies in IFZA, Meydan, RAKEZ, SHAMS, SPC, Ajman Free Zone and SRTIP; and offshore companies through RAK ICC. We also advise on DMCC and DIFC structures.',
    },
    {
      q: 'What is the difference between mainland, free zone and offshore?',
      a: 'A mainland company can trade anywhere in the UAE and hold government contracts. A free zone company gives you 100% foreign ownership and sector-specific licences, but selling directly to the UAE mainland is restricted. An offshore company is for holding assets and international contracting, and cannot trade inside the UAE.',
    },
    {
      q: 'How long does company formation take?',
      a: 'Free zone licences typically issue in 3–7 working days once documents are complete. Mainland timelines depend on the activity and any external approvals it needs. Visas and bank accounts follow the licence; we run them in parallel where the authority allows and give you a written timeline at your first consultation.',
    },
    {
      q: 'Can I set up without being in the UAE?',
      a: 'For most free zones, the licence itself can be issued remotely. You will need to be in the UAE for the visa medical and Emirates ID biometrics, and most banks meet account signatories in person. We plan those steps into a single short visit.',
    },
    {
      q: 'Do you help with the bank account after setup?',
      a: 'Yes, and we start before setup. We prepare your bank application alongside the licence and match it across our 18 partner banks. We also arrange personal and non-resident accounts, business and personal loans, and mortgages.',
    },
    {
      q: 'What taxes apply to a UAE company?',
      a: 'UAE Corporate Tax is 9% on taxable income above AED 375,000, and qualifying free zone income can be taxed at 0% if the conditions are met. VAT is 5%, and registration is mandatory once taxable supplies pass AED 375,000 a year. Every company must register for Corporate Tax, even where none is due. We handle registration, returns and the bookkeeping behind them.',
    },
  ],
};

export const CONSULTATION = {
  eyebrow: 'Book a consultation',
  title: 'Start the conversation.',
  intro: 'Tell us what you are building and the right consultant will call you back within one working day. Or skip the form and call, WhatsApp or walk in.',
};
