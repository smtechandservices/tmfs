// RAK ICC offshore page, section by section in page order (Avyanco
// jurisdiction layout). Offshore companies can't trade in the UAE or sponsor
// visas, so the licence, process, advantage and tax copy is written here
// rather than taken from the mainland and free zone helpers.
import { SOURCES, specialists, pillars, TESTIMONIALS, disclaimer } from './shared';

const RAK_ICC = {
  href: '/company-setup/offshore/rak-icc',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'RAK ICC Offshore Company Formation',
    description:
      'Set up a RAK ICC offshore company with TMFS: an international business company for holding shares, property and IP, with no office or visas needed and Corporate Tax registration handled.',
  },

  // RAK ICC is the only offshore item, so compare it with the alternatives
  // people usually weigh it against.
  compare: ['/company-setup/free-zones/difc', '/company-setup/free-zones/rakez', '/company-setup/free-zones/ifza', '/company-setup/mainland/dubai'],

  hero: {
    title: ['RAK ICC Offshore', 'Company Formation'],
    lead: 'Set up an international business company with the Ras Al Khaimah International Corporate Centre (RAK ICC) to hold shares, property and intellectual property, without a UAE office or visas.',
    chips: ['100% Ownership', 'Holding & Asset Protection', 'No Office Needed', 'Quick Incorporation', 'Bank Account Support'],
  },

  intro: {
    title: 'RAK ICC: the UAE’s offshore registry for holding structures',
    summary:
      'RAK ICC is the corporate registry in Ras Al Khaimah for offshore companies and foundations. A RAK ICC company is a UAE-incorporated international business company used to own assets and run business outside the UAE. It cannot trade inside the UAE or sponsor residence visas.',
    body: 'Founders and families use RAK ICC companies to hold shares in UAE and overseas companies, own property, hold intellectual property and keep investments in one place for succession planning. Companies are formed through a RAK ICC registered agent and do not need office space.',
    image: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents (placeholder)' },
  },

  why: {
    badge: 'Best known for: holding, asset protection & succession',
    title: 'Why RAK ICC',
    body: 'RAK ICC offers a simple, low-maintenance UAE vehicle for owning things rather than trading.',
    items: [
      { icon: 'affiliate', title: 'Holding company vehicle', body: 'Hold shares in UAE mainland, free zone and foreign companies through one entity.' },
      { icon: 'building-skyscraper', title: 'Property ownership', body: 'RAK ICC companies can own real estate in areas approved by the relevant land department, including parts of Dubai.' },
      { icon: 'shield-lock', title: 'Privacy', body: 'Shareholders aren’t listed on a public register. Beneficial owners are still disclosed to the registry, as UAE law requires.' },
      { icon: 'receipt-tax', title: 'Low running costs', body: 'No office lease, no visas and a simple annual renewal through the registered agent.' },
      { icon: 'scale', title: 'Modern legal framework', body: 'Governed by the RAK ICC Business Companies Regulations 2018, with foundations available under their own regulations.' },
      { icon: 'users', title: 'Succession planning', body: 'Shares in one holding company are simpler to pass on than assets held personally in several places.' },
    ],
    idealFor: [
      'Holding UAE and foreign companies',
      'Owning property',
      'Holding intellectual property',
      'Family wealth & succession',
      'International consulting & trade outside the UAE',
    ],
  },

  licences: {
    title: 'What a RAK ICC Company Is Used For',
    body: 'A RAK ICC company doesn’t hold a trade licence for the UAE market. These are the purposes it serves.',
    items: [
      { icon: 'affiliate', title: 'Holding Company', body: 'Owning and managing shareholdings.', list: ['Shares in UAE companies', 'Shares in foreign companies', 'Group restructuring', 'Joint venture vehicles', 'Investment portfolios'] },
      { icon: 'building-skyscraper', title: 'Asset Holding', body: 'Owning assets in one protected entity.', list: ['Real estate in approved areas', 'Intellectual property', 'Trademarks & licences', 'Ships & yachts', 'Investment accounts'] },
      { icon: 'world', title: 'International Business', body: 'Trading and services with clients outside the UAE.', list: ['International trading', 'Consulting outside the UAE', 'Invoicing for overseas work', 'Royalty collection', 'Cross-border contracts'] },
    ],
  },

  structures: {
    title: 'Structures Available at RAK ICC',
    body: 'RAK ICC registers companies and foundations, and allows foreign companies to move in.',
    items: [
      { title: 'International Business Company', body: 'The standard RAK ICC company, with one or more shareholders and directors and liability limited to share capital.' },
      { title: 'Foundation', body: 'A separate legal entity that holds assets for beneficiaries, often used for family wealth and succession.' },
      { title: 'Continuation (Redomiciliation)', body: 'A company incorporated abroad moves its registration to RAK ICC, keeping its history and contracts.' },
      { title: 'Holding Structure for a UAE Group', body: 'A RAK ICC company sits above mainland or free zone operating companies to hold the shares.' },
    ],
  },

  process: {
    title: 'How a RAK ICC Company Is Formed',
    body: 'RAK ICC companies are incorporated through a registered agent. We prepare everything and coordinate each step.',
    steps: [
      { title: 'Confirm Offshore Is Right', body: 'We check that you don’t need to trade in the UAE or sponsor visas; if you do, a free zone or mainland company fits better.' },
      { title: 'Choose a Name', body: 'Name options checked against RAK ICC rules and reserved.' },
      { title: 'Due Diligence', body: 'Shareholder, director and beneficial owner documents collected for the registered agent’s compliance checks.' },
      { title: 'Prepare the Memorandum & Articles', body: 'Constitutional documents drafted to fit the company’s purpose.' },
      { title: 'Incorporation', body: 'The registered agent files with RAK ICC, which issues the certificate of incorporation.' },
      { title: 'Registers & Share Certificates', body: 'Registers of members, directors and beneficial owners set up, and share certificates issued.' },
      { title: 'Bank & Corporate Tax', body: 'We prepare the bank application and register the company for UAE Corporate Tax.' },
    ],
  },

  documents: {
    title: 'Documents Required for RAK ICC Setup',
    body: 'Registered agents carry out full due diligence. Documents issued abroad may need notarising or certifying; we arrange this for you.',
    groups: [
      {
        label: 'Individual Shareholders & Directors',
        items: [
          'Passport copy',
          'Proof of residential address',
          'Bank reference letter',
          'CV or professional profile',
          'Three company name options',
          'Source of funds declaration',
        ],
      },
      {
        label: 'Corporate Shareholders',
        items: [
          'Certificate of incorporation',
          'Memorandum & Articles of Association',
          'Board resolution approving the investment',
          'Certificate of good standing',
          'Register of directors and shareholders',
          'Ultimate beneficial owner (UBO) declaration',
        ],
      },
    ],
  },

  benefits: {
    title: 'Why Choose a RAK ICC Company',
    body: 'RAK ICC suits structures that hold assets or do business outside the UAE.',
    items: [
      '100% foreign ownership',
      'No office lease or physical presence needed',
      'Can own property in approved areas',
      'Holds shares in UAE and foreign companies',
      'Shareholders not on a public register',
      'Foundations available for succession',
      'Simple annual renewal',
    ],
  },

  tax: {
    title: 'Tax & Compliance Position: RAK ICC',
    body: 'A RAK ICC company is incorporated in the UAE, so it falls inside the UAE Corporate Tax system like any other UAE company.',
    cards: [
      {
        eyebrow: 'UAE Corporate Tax',
        headline: '9% above AED 375,000 · registration required',
        body: 'RAK ICC companies are UAE resident for Corporate Tax and must register and file returns, even if they only hold investments. Dividends and qualifying gains from shareholdings can be exempt under the participation exemption rules.',
        note: { tone: 'warn', label: 'Not a free zone company', text: 'RAK ICC is an offshore registry, not a free zone, so the Qualifying Free Zone Person 0% regime does not apply.' },
      },
      {
        eyebrow: 'UAE VAT',
        headline: 'Only if you make taxable UAE supplies',
        body: 'Most RAK ICC holding companies don’t make taxable supplies in the UAE and don’t need to register. If yours does and passes AED 375,000 in 12 months, registration is mandatory.',
        note: { label: 'Holding rental property?', text: 'Commercial property rent is subject to VAT, so a company letting commercial property may need to register. We check this with you.' },
      },
    ],
    ongoing: [
      'Corporate Tax return within 9 months of year end',
      'Annual renewal through the registered agent',
      'Registered agent and registered office maintained',
      'UBO register kept up to date',
      'Accounting records kept for at least 7 years',
      'VAT returns, if registered',
    ],
    sources: [SOURCES.ct, SOURCES.vat, { label: 'RAK ICC Business Companies Regulations 2018' }, { label: 'Ras Al Khaimah International Corporate Centre (RAK ICC)', href: 'https://www.rakicc.com' }],
  },

  industries: {
    title: 'What RAK ICC Companies Hold',
    body: 'The most common uses we set up.',
    items: [
      { icon: 'affiliate', title: 'Group Holding Companies' },
      { icon: 'building-skyscraper', title: 'Real Estate' },
      { icon: 'certificate', title: 'Intellectual Property' },
      { icon: 'users', title: 'Family Wealth' },
      { icon: 'building-bank', title: 'Investment Portfolios' },
      { icon: 'world', title: 'International Trading' },
      { icon: 'briefcase', title: 'Overseas Consulting' },
      { icon: 'truck', title: 'Ships & Yachts' },
    ],
  },

  advantage: {
    title: 'The TMFS Advantage',
    body: 'We handle RAK ICC setups end to end, from structure advice to a banked company registered for Corporate Tax.',
    items: [
      { icon: 'scale', title: 'Structure Advice', body: 'Whether offshore, free zone or DIFC suits your assets, banks and succession plans.' },
      { icon: 'affiliate', title: 'Group Structuring', body: 'Where the RAK ICC company sits above your operating companies, and how shares move into it.' },
      { icon: 'file-text', title: 'Documents & Due Diligence', body: 'Documents collected, certified and prepared for the registered agent’s checks.' },
      { icon: 'building-bank', title: 'Corporate Bank Account', body: 'Your application prepared and matched to the partner bank most open to offshore holding companies.' },
      { icon: 'shield-check', title: 'Registry Compliance', body: 'Annual renewals, registers and UBO filings kept current.' },
      { icon: 'receipt-tax', title: 'Corporate Tax', body: 'Corporate Tax registration and returns, including participation exemption claims.' },
    ],
  },

  specialists: specialists('RAK ICC'),
  pillars: pillars({ place: 'RAK ICC', first: { icon: 'award', title: 'Honest about what offshore can’t do', body: 'If you need to trade in the UAE or want a visa, we’ll tell you upfront and suggest a free zone or mainland company instead.' } }),

  related: {
    title: 'Compare Other UAE Options',
    body: 'RAK ICC suits holding and asset protection. If you need to trade in the UAE or want visas, compare these.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'RAK ICC: Frequently Asked Questions',
    body: 'Common questions about RAK ICC offshore companies.',
    items: [
      { q: 'Can a RAK ICC company trade in the UAE?', a: 'No. It can’t trade with UAE customers or operate from premises in the UAE. For that you need a mainland or free zone company, which the RAK ICC company can own.' },
      { q: 'Does a RAK ICC company give me a UAE visa?', a: 'No. RAK ICC companies can’t sponsor residence visas. If you need a visa, a free zone or mainland company is the usual route.' },
      { q: 'Can a RAK ICC company own property in Dubai?', a: 'RAK ICC companies can own property in areas approved by the relevant land department, including parts of Dubai. We confirm the current rules for the property you have in mind.' },
      { q: 'Does a RAK ICC company pay Corporate Tax?', a: 'It must register and file returns as a UAE resident company. Taxable profit above AED 375,000 is taxed at 9%, but dividends and qualifying gains from shareholdings can be exempt.' },
      { q: 'Can a RAK ICC company open a UAE bank account?', a: 'Yes, though banks apply extra scrutiny to offshore companies. A clear purpose, ownership chart and source of funds make the difference. We prepare these and match you to the right bank.' },
      { q: 'Do I need to visit the UAE?', a: 'Not usually for incorporation. Banks often want to meet the signatories, so plan a visit for account opening.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'RAK ICC', government: 'the Government of Ras Al Khaimah' }),

  cta: {
    title: 'Ready to Set Up a RAK ICC Company?',
    body: 'Talk to a TMFS consultant about a RAK ICC holding structure, and whether it should sit alongside a free zone or mainland company.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default RAK_ICC;
