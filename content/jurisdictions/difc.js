// DIFC page, section by section in page order (Avyanco jurisdiction layout).
// DIFC is an advisory jurisdiction for TMFS (we advise and coordinate, we
// don't file there directly), so the copy says "advise" rather than "file".
import { freeZoneTax, documents, advantage, specialists, pillars, TESTIMONIALS, disclaimer } from './shared';

const DIFC = {
  href: '/company-setup/free-zones/difc',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'DIFC Company Setup Advice: Holding, Finance & Fund Structures',
    description:
      'Advice on setting up in the Dubai International Financial Centre (DIFC): common-law holding companies, prescribed companies, foundations and DFSA-regulated firms, planned with TMFS.',
  },

  hero: {
    title: ['DIFC', 'Company Formation'],
    lead: 'Plan a company in the Dubai International Financial Centre (DIFC), the common-law financial free zone, for holding structures, family wealth, funds and regulated financial services.',
    chips: ['Common Law', 'Holding Structures', 'Foundations', 'Advisory Service', 'Tax Planning'],
  },

  intro: {
    title: 'DIFC: Dubai’s common-law financial centre',
    summary:
      'DIFC is a financial free zone with its own English-language common-law framework and its own courts. Financial services are regulated by the Dubai Financial Services Authority (DFSA); other companies are registered with the DIFC Registrar of Companies.',
    body: 'DIFC is the natural home for banks, asset managers and fintechs, but it is also used for holding companies, family foundations and special purpose vehicles that benefit from common-law certainty. We advise on whether DIFC is the right home for your structure and plan the tax and banking around it.',
    image: { src: '/images/difc-skyline.jpg', alt: 'DIFC skyline' },
  },

  why: {
    badge: 'Best known for: finance, funds & holding structures',
    title: 'Why DIFC',
    body: 'DIFC gives international investors a legal system they recognise, in the middle of Dubai.',
    items: [
      { icon: 'scale', title: 'Common-law framework', body: 'DIFC has its own civil and commercial laws based on English common law, applied by the independent DIFC Courts.' },
      { icon: 'shield-lock', title: 'Independent regulator', body: 'Financial services are licensed and supervised by the DFSA, which follows international standards.' },
      { icon: 'affiliate', title: 'Holding & SPV structures', body: 'Prescribed companies and foundations offer efficient vehicles for holding assets and family wealth.' },
      { icon: 'building-bank', title: 'Financial ecosystem', body: 'Banks, asset managers, law firms and auditors are all on the doorstep.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and free repatriation of profits and capital.' },
      { icon: 'cpu', title: 'Fintech & innovation', body: 'An innovation licence and a large fintech community support early-stage technology businesses.' },
    ],
    idealFor: [
      'Holding companies & SPVs',
      'Family offices & foundations',
      'Asset & wealth managers',
      'Fintech businesses',
      'Regional headquarters',
    ],
  },

  licences: {
    title: 'DIFC Licence Routes',
    body: 'Which route applies depends on whether your business is regulated and what the entity is for.',
    items: [
      { icon: 'briefcase', title: 'Non-Financial Licence', body: 'For companies not offering financial services, registered with the DIFC Registrar of Companies.', list: ['Consultancy', 'Professional services', 'Technology', 'Regional headquarters', 'Retail & hospitality in DIFC'] },
      { icon: 'building-bank', title: 'Regulated Financial Services', body: 'For businesses that need a DFSA licence.', list: ['Asset & fund management', 'Advisory & arranging', 'Banking', 'Insurance', 'Custody'] },
      { icon: 'affiliate', title: 'Holding & Wealth Structures', body: 'For vehicles that hold assets rather than trade.', list: ['Prescribed companies', 'Foundations', 'Holding companies', 'Special purpose vehicles', 'Family office structures'] },
    ],
  },

  structures: {
    title: 'Legal Structures in DIFC',
    body: 'DIFC offers more entity types than most free zones, reflecting its common-law framework.',
    items: [
      { title: 'Private Company (Ltd)', body: 'The standard DIFC company, with shareholders’ liability limited to their shares.' },
      { title: 'Prescribed Company', body: 'A lighter structure for holding, SPV and similar purposes that meet the qualifying conditions.' },
      { title: 'Foundation', body: 'A separate legal entity for holding assets for family, charitable or succession purposes.' },
      { title: 'Branch of a Foreign Company', body: 'An overseas company operating in DIFC under its own name.' },
      { title: 'Limited Liability Partnership', body: 'For professional firms that want partnership flexibility with limited liability.' },
      { title: 'Public Company', body: 'For larger businesses planning to offer shares to the public.' },
    ],
  },

  process: {
    title: 'How We Help You Set Up in DIFC',
    body: 'DIFC is an advisory jurisdiction for us: we design the structure and coordinate the work around the application.',
    steps: [
      { title: 'Define the Purpose', body: 'Holding, wealth, operating or regulated business: the purpose decides the entity and the route.' },
      { title: 'Design the Structure', body: 'Entity type, ownership and Corporate Tax position planned with you, alongside your lawyers where needed.' },
      { title: 'Prepare the Documents', body: 'Shareholder and UBO documents collected, notarised and attested, with a business plan where required.' },
      { title: 'Application & Approvals', body: 'We coordinate the application with DIFC, and with the DFSA where your activity is regulated.' },
      { title: 'Registered Office', body: 'Office or registered address in DIFC, depending on the entity and whether you need visas.' },
      { title: 'Registration Issued', body: 'DIFC issues the certificate of incorporation or registration and the commercial licence.' },
      { title: 'Bank, Visas & Tax', body: 'Bank application, visas where applicable and Corporate Tax and VAT registration handled alongside.' },
    ],
  },

  documents: documents({ place: 'DIFC', extra: ['Business plan, where required'] }),

  benefits: {
    title: 'Why Choose a DIFC Structure',
    body: 'DIFC suits structures where legal certainty and reputation matter as much as cost.',
    items: [
      'English common-law framework and courts',
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Prescribed companies for holding and SPVs',
      'Foundations for family wealth and succession',
      'Respected, independent financial regulator',
      'Banks and advisors on the doorstep',
    ],
  },

  tax: freeZoneTax({ zone: 'DIFC', authority: 'DIFC', source: { label: 'Dubai International Financial Centre (DIFC)' } }),

  industries: {
    title: 'Where DIFC Companies Operate',
    body: 'Finance dominates, but DIFC hosts a wide range of holding and professional businesses.',
    items: [
      { icon: 'building-bank', title: 'Banking' },
      { icon: 'affiliate', title: 'Asset & Fund Management' },
      { icon: 'user-star', title: 'Family Offices' },
      { icon: 'cpu', title: 'Fintech' },
      { icon: 'shield-lock', title: 'Insurance' },
      { icon: 'scale', title: 'Legal & Professional Services' },
      { icon: 'building-skyscraper', title: 'Holding Companies' },
      { icon: 'briefcase', title: 'Consultancy' },
    ],
  },

  advantage: advantage({
    place: 'DIFC',
    authority: 'DIFC',
    kind: 'free zone',
    first: { icon: 'scale', title: 'Structure Advice', body: 'The right DIFC entity, or a cheaper alternative, for what you actually need it to do.' },
  }),
  specialists: specialists('DIFC'),
  pillars: pillars({ place: 'DIFC', first: { icon: 'award', title: 'Advice before you apply', body: 'We plan structure, banking and tax first, so your DIFC vehicle does what you need from day one.' } }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'DIFC suits finance and holding structures. Other zones can cost less for trading and services.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'DIFC: Frequently Asked Questions',
    body: 'Common questions about setting up in DIFC.',
    items: [
      { q: 'Do I need a financial services business to set up in DIFC?', a: 'No. Many DIFC entities are holding companies, foundations or non-financial businesses. Only regulated financial services need a DFSA licence.' },
      { q: 'What is a prescribed company?', a: 'A DIFC company type for holding, SPV and similar purposes that meet set qualifying conditions. It has lighter requirements than a standard operating company.' },
      { q: 'Do you file DIFC applications?', a: 'DIFC is an advisory jurisdiction for us. We design the structure, prepare documents, coordinate the application and handle the banking, visas and tax around it.' },
      { q: 'Is DIFC or RAK ICC better for a holding company?', a: 'It depends on the assets, the banks involved and the budget. DIFC offers common law and a strong reputation; RAK ICC is simpler and cheaper. We compare both for your situation.' },
      { q: 'Will my DIFC company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application and match it to the partner bank most likely to approve your structure.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'DIFC', government: 'the Government of Dubai' }),

  cta: {
    title: 'Considering DIFC?',
    body: 'Talk to a TMFS consultant about whether DIFC is the right home for your holding, wealth or financial structure.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default DIFC;
