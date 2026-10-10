// Sharjah mainland page, section by section in page order (Avyanco jurisdiction
// layout). Images marked "placeholder" are stock photos to replace with
// Sharjah shots.

const SHARJAH_MAINLAND = {
  href: '/company-setup/mainland/sharjah',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Sharjah Mainland Company Formation: SEDD Licence',
    description:
      'Set up a mainland company in Sharjah with TMFS: SEDD licence, 100% foreign ownership for most activities, lower costs than Dubai, plus visas, bank account and tax handled.',
  },

  hero: {
    title: ['Sharjah Mainland', 'Company Formation'],
    lead: 'Set up a mainland company in Sharjah, licensed by the Sharjah Economic Development Department (SEDD), with the right to trade across the UAE at a lower cost base than Dubai.',
    chips: ['100% Ownership', 'SEDD Licence', 'Lower Setup Cost', 'Investor Visa', 'Bank Account Support'],
  },

  intro: {
    title: 'Sharjah: the UAE’s third-largest economy, next door to Dubai',
    summary:
      'Sharjah sits between Dubai and the northern emirates. Its mainland companies are licensed by SEDD and can trade and contract in all seven emirates, under the same federal company law and ownership rules as Dubai, usually with lower licence, office and staff costs.',
    body: 'The emirate has a deep education and publishing base, from University City to the Sharjah International Book Fair, a large light-industrial sector and fast road links to Dubai. That makes it a common choice for trading, manufacturing, education and family businesses that need a physical presence without Dubai rents.',
    image: { src: '/images/business-bay-dusk.jpg', alt: 'City skyline at dusk (placeholder)' },
  },

  why: {
    badge: 'Best known for: education, publishing & cost-efficient industry',
    title: 'Why Sharjah Mainland',
    body: 'Sharjah combines full UAE market access with lower operating costs than Dubai, an established industrial base and a stable SEDD licensing framework.',
    items: [
      { icon: 'receipt-tax', title: 'Lower cost base than Dubai', body: 'Licence fees, office rents and warehouse space are generally cheaper than in Dubai, which adds up for businesses that need premises and staff.' },
      { icon: 'book', title: 'Education & publishing ecosystem', body: 'University City clusters several universities, and Sharjah hosts the Sharjah International Book Fair. Education, publishing and creative businesses find suppliers, talent and customers close by.' },
      { icon: 'building-factory', title: 'Established industrial base', body: 'Industrial areas across the emirate, next to the Hamriyah and SAIF free zones, give manufacturers workshops, warehousing and an experienced labour pool.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Since the 2021 company law changes, most commercial and industrial activities can be fully foreign-owned. A short list of strategic activities still needs UAE national participation; we check yours first.' },
      { icon: 'world', title: 'Gateway to the northern emirates', body: 'Central Sharjah is around 20–30 minutes from Dubai, with Sharjah International Airport, Khalid Port and quick road access to Ajman, Umm Al Quwain and RAK.' },
      { icon: 'user-check', title: 'Trade anywhere in the UAE', body: 'A SEDD licence lets you sell to customers, sign contracts and open branches across all seven emirates, including bidding for government work.' },
    ],
    idealFor: [
      'Light manufacturing & industrial SMEs',
      'Education, training & publishing',
      'Retail & businesses with premises',
      'Food & beverage processing',
      'Distribution to the northern emirates',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Sharjah',
    body: 'SEDD issues the same three licence families as the rest of the UAE. Your activities decide the licence and any extra approvals.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For trading, retail and distribution businesses serving Sharjah and the wider UAE.', list: ['General trading', 'Wholesale & distribution', 'Retail outlets', 'Building materials trading', 'E-commerce'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For consultancy and service businesses, including education and creative services.', list: ['Management consultancy', 'Education & training consultancy', 'Marketing & design', 'Publishing & editorial services', 'Translation & business services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing and processing, backed by Sharjah’s long-standing industrial areas.', list: ['Light manufacturing', 'Food & beverage production', 'Printing & packaging', 'Furniture & fit-out', 'Plastics & metal fabrication'] },
    ],
  },

  structures: {
    title: 'Legal Structures Under SEDD',
    body: 'The usual UAE company forms are all available in Sharjah. Family businesses and partnerships are common given the emirate’s SME base.',
    items: [
      { title: 'Limited Liability Company (LLC)', body: 'The usual choice for trading and commercial activities, with one or more shareholders and liability limited to capital.' },
      { title: 'Sole Establishment', body: 'A single owner trading in their own name, common for professional and service activities.' },
      { title: 'Civil Company', body: 'A partnership for licensed professionals such as engineers, consultants and other specialists.' },
      { title: 'Branch of a Foreign Company', body: 'An overseas company operating in Sharjah under its own name, with the parent liable for the branch.' },
      { title: 'Private Joint Stock Company', body: 'For larger ventures with several shareholders and plans to raise capital.' },
      { title: 'Branch of a UAE or Free Zone Company', body: 'An existing UAE company, including a free zone company, opens a Sharjah mainland branch to trade outside its zone under its own name.' },
    ],
  },

  process: {
    title: 'How a Sharjah Mainland Company Is Formed',
    body: 'We run each step with SEDD and the other Sharjah authorities for you.',
    steps: [
      { title: 'Confirm the Business Activity', body: 'We match your business to SEDD’s activity list and check whether it needs approval from another Sharjah authority. Education and healthcare usually do.' },
      { title: 'Choose the Legal Structure', body: 'LLC, sole establishment, civil company or branch, chosen to fit your shareholders and liability.' },
      { title: 'Reserve the Trade Name', body: 'We submit your name options to SEDD under UAE naming rules.' },
      { title: 'Get Initial Approval', body: 'SEDD approves the activity and ownership in principle.' },
      { title: 'Sign the MoA', body: 'We draft the Memorandum of Association and arrange notarisation.' },
      { title: 'Lease Your Premises', body: 'You lease suitable commercial space and the tenancy is registered with Sharjah Municipality.' },
      { title: 'Licence Issued', body: 'SEDD issues the trade licence. We then open your establishment card, process visas and prepare the bank application.' },
    ],
  },

  documents: {
    title: 'Documents Required for Sharjah Setup',
    body: 'What we need depends on whether each shareholder is a person or a company. Documents issued abroad must be notarised and attested for use in the UAE; we arrange this for you.',
    groups: [
      {
        label: 'Individual Shareholders',
        items: [
          'Passport copy of each shareholder and manager',
          'UAE visa or entry stamp, if any',
          'Emirates ID, if resident in the UAE',
          'Passport-size photo',
          'Three trade name options',
          'Proof of home address',
        ],
      },
      {
        label: 'Corporate Shareholders',
        items: [
          'Certificate of incorporation or trade licence',
          'Memorandum & Articles of Association',
          'Board resolution approving the Sharjah company',
          'Certificate of good standing',
          'Passport copy of the appointed manager',
          'Ultimate beneficial owner (UBO) declaration',
        ],
      },
    ],
  },

  benefits: {
    title: 'Why Choose a Sharjah Mainland Structure',
    body: 'Sharjah suits businesses that want UAE-wide market access at a lower cost than Dubai.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Lower licence and office costs than Dubai',
      'Close to University City’s graduate talent',
      'Established printing, publishing and light-industry suppliers',
      'Quick access to Sharjah and Dubai airports',
      'Strong SME and family-business network',
    ],
  },

  tax: {
    title: 'Tax & Compliance Position: Sharjah Mainland',
    body: 'Sharjah mainland companies follow the standard UAE Corporate Tax and VAT rules. The savings here come from fees and rent, not tax.',
    cards: [
      {
        eyebrow: 'UAE Corporate Tax',
        headline: '9% above AED 375,000 · 0% below',
        body: 'Every mainland company registers for Corporate Tax and files a return within nine months of its financial year end. Small Business Relief can apply to resident businesses with revenue up to AED 3 million for tax periods ending on or before 31 December 2026.',
        note: { label: 'Need 0% on qualifying income?', text: 'The Qualifying Free Zone Person regime only applies to free zone companies, not mainland. If it matters for your model, compare SHAMS, SPC or SRTIP in Sharjah.' },
      },
      {
        eyebrow: 'UAE VAT',
        headline: '5% standard rate · standard VAT rules',
        body: 'Registration is mandatory once taxable supplies pass AED 375,000 in 12 months and optional from AED 187,500. Returns are usually filed quarterly.',
        note: { tone: 'warn', label: 'Not a designated zone', text: 'Designated zone VAT treatment only applies inside certain free zones, never to mainland companies.' },
      },
    ],
    ongoing: [
      'Corporate Tax return within 9 months of year end',
      'VAT returns once registered',
      'Annual trade licence renewal with SEDD',
      'Sector permits renewed where your activity needs them',
      'Audited financial statements where required',
      'UBO register kept up to date',
    ],
    sources: [
      { label: 'Federal Decree-Law No. 47 of 2022 (Corporate Tax)', href: 'https://tax.gov.ae' },
      { label: 'Ministerial Decision No. 73 of 2023 (Small Business Relief)' },
      { label: 'Federal Decree-Law No. 8 of 2017 (VAT)', href: 'https://tax.gov.ae' },
      { label: 'Federal Decree-Law No. 32 of 2021 (Commercial Companies)' },
      { label: 'Sharjah Economic Development Department (SEDD)', href: 'https://www.sedd.ae' },
    ],
  },

  industries: {
    title: 'Where Sharjah Mainland Companies Operate',
    body: 'The emirate’s economy favours education, publishing, light manufacturing and family-run trading houses.',
    items: [
      { icon: 'book', title: 'Education & Training' },
      { icon: 'file-text', title: 'Publishing & Printing' },
      { icon: 'building-factory', title: 'Light Manufacturing' },
      { icon: 'world', title: 'Trading & Distribution' },
      { icon: 'truck', title: 'Logistics & Warehousing' },
      { icon: 'users', title: 'Professional Services' },
      { icon: 'chef-hat', title: 'Food & Hospitality' },
      { icon: 'cart', title: 'Retail' },
    ],
  },

  advantage: {
    title: 'The TMFS Advantage',
    body: 'We handle Sharjah mainland setups end to end, from activity selection and SEDD licensing to a banked, visa-ready company registered for Corporate Tax and VAT.',
    items: [
      { icon: 'briefcase', title: 'Activity & Licence Advice', body: 'Matching your business to the right SEDD activities and licence category.' },
      { icon: 'building-skyscraper', title: 'Company Structure', body: 'Shareholding and holding structures set up for Corporate Tax and future growth.' },
      { icon: 'file-text', title: 'MoA Drafting & Notarisation', body: 'Memorandum of Association drafted and notarised on your behalf.' },
      { icon: 'building-bank', title: 'Corporate Bank Account', body: 'Your application prepared alongside the licence and matched across our 18 partner banks.' },
      { icon: 'user-check', title: 'Investor & Staff Visas', body: 'Investor, partner and employee visas with medicals and Emirates ID.' },
      { icon: 'receipt-tax', title: 'Corporate Tax & VAT', body: 'FTA registrations and the ongoing filings that keep you penalty-free.' },
    ],
  },

  specialists: {
    title: 'Meet Our Team',
    body: 'The people who will handle your Sharjah setup, from first call to renewal.',
  },

  pillars: {
    title: 'Why Founders Choose TMFS in Sharjah',
    body: 'Three things clients mention most.',
    image: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents with a client' },
    items: [
      { icon: 'award', title: 'Mainland in all seven emirates', body: 'We file mainland licences across the UAE, including Sharjah, and know where extra approvals come in.' },
      { icon: 'shield-check', title: 'One team, end to end', body: 'Licence, MoA, premises, bank account, visas and tax with one consultant, from first call to renewal.' },
      { icon: 'bulb', title: 'Written costs upfront', body: 'A written breakdown of government fees and our fee before you commit, with no surprises at renewal.' },
    ],
  },

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'Sharjah suits education, publishing and SME founders. Other emirates serve different sectors and cost bases.',
  },

  testimonials: {
    title: 'What Clients Say',
    body: 'Feedback from founders who set up with TMFS.',
  },

  faq: {
    title: 'Sharjah Mainland: Frequently Asked Questions',
    body: 'Common questions about SEDD licensing and setting up on the Sharjah mainland.',
    items: [
      { q: 'Is a Sharjah mainland licence valid across the UAE?', a: 'Yes. A SEDD licence lets your company trade, sign contracts and open branches anywhere in the UAE.' },
      { q: 'Is Sharjah cheaper than Dubai for a mainland company?', a: 'Usually, yes. Licence fees and office rents tend to be lower than in Dubai. We give you a written comparison for your activity before you choose.' },
      { q: 'Can I own 100% of a Sharjah mainland company?', a: 'For most commercial, professional and industrial activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity before anything is filed.' },
      { q: 'How long does Sharjah mainland formation take?', a: 'Once your documents and premises are ready, SEDD licensing usually takes days rather than weeks. Activities that need another authority’s approval, such as education or health, take longer. We give you a written timeline at the start.' },
      { q: 'Do I need an office in Sharjah?', a: 'You need a registered business address in Sharjah, usually a leased office or business-centre space with a registered tenancy. The size of the premises can affect how many visas you can get.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: [
    'Checked against publicly available SEDD and UAE federal sources in October 2026. Time Machine Financial Services is independent of SEDD and is not affiliated with or endorsed by the Government of Sharjah or any UAE authority.',
    'Activity lists, approvals and tax rules change. Confirm the current position for your activity with SEDD and the Federal Tax Authority, or ask us, before acting on this page.',
  ],

  cta: {
    title: 'Ready to Set Up on the Sharjah Mainland?',
    body: 'Talk to a TMFS consultant about a SEDD-licensed company built around your business, whether you are entering the UAE through Sharjah or expanding from Dubai.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default SHARJAH_MAINLAND;
