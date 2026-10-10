// DMCC page, section by section in page order (Avyanco jurisdiction layout).
// DMCC is an advisory jurisdiction for TMFS (we advise and coordinate, we
// don't file there directly), so the copy says "advise" rather than "file".
import { freeZoneTax, freeZoneStructures, documents, advantage, pillars, TESTIMONIALS, disclaimer } from './shared';

const DMCC = {
  href: '/company-setup/free-zones/dmcc',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'DMCC Company Setup Advice: Dubai Multi Commodities Centre',
    description:
      'Advice on setting up in DMCC, Dubai’s commodities and trading free zone in JLT: structure, licence, banking, visas and Corporate Tax planned before you apply, from TMFS.',
  },

  hero: {
    title: ['DMCC Free Zone', 'Company Formation'],
    lead: 'Plan a company in the Dubai Multi Commodities Centre (DMCC), the free zone for commodities, trading and international business in Jumeirah Lakes Towers, with advice on structure, banking and tax before you apply.',
    chips: ['100% Ownership', 'Commodities Hub', 'Strong Bank Acceptance', 'Advisory Service', 'Tax Planning'],
  },

  intro: {
    title: 'DMCC: Dubai’s commodities and trading hub',
    summary:
      'DMCC is based in Jumeirah Lakes Towers and Uptown Dubai. It was created to build Dubai’s commodities trade and now hosts a very large community of trading, technology and service companies.',
    body: 'DMCC’s reputation and its commodity infrastructure, such as the Dubai Diamond Exchange and its precious metals, tea and coffee centres, make it a natural choice for serious trading businesses. It costs more than most free zones, so we help you decide whether its brand and bank acceptance are worth it for your model.',
    image: { src: '/images/business-district.jpg', alt: 'Business district towers (placeholder)' },
  },

  why: {
    badge: 'Best known for: commodities, trading & bank acceptance',
    title: 'Why DMCC',
    body: 'DMCC’s brand and infrastructure carry weight with banks, counterparties and regulators worldwide.',
    items: [
      { icon: 'world', title: 'Global commodities hub', body: 'Gold and precious metals, diamonds, tea, coffee and other commodities are traded through DMCC’s specialist centres.' },
      { icon: 'building-bank', title: 'Strong bank acceptance', body: 'Banks know DMCC companies well, which helps with account opening for trading businesses.' },
      { icon: 'map-pin', title: 'JLT & Uptown Dubai', body: 'A large business district with metro access, close to Dubai Marina and Jebel Ali.' },
      { icon: 'briefcase', title: 'Very wide activity list', body: 'Trading, services, technology, crypto and gaming activities, among many others.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'users', title: 'Large business community', body: 'Thousands of member companies, with networking, events and specialist sector centres.' },
    ],
    idealFor: [
      'Commodity & physical trading',
      'Precious metals & diamonds',
      'Regional headquarters',
      'Technology & crypto businesses',
      'Companies that need strong bank acceptance',
    ],
  },

  licences: {
    title: 'DMCC Licence Types',
    body: 'DMCC issues three main licence types. Some activities, such as precious metals, need extra approvals.',
    items: [
      { icon: 'building-store', title: 'Trading Licence', body: 'For trading goods and commodities.', list: ['General trading', 'Precious metals & stones', 'Energy & petrochemicals', 'Agri-commodities', 'Electronics trading'] },
      { icon: 'briefcase', title: 'Service Licence', body: 'For consultancy, technology and service businesses.', list: ['Management consultancy', 'Software & IT services', 'Marketing services', 'Crypto & blockchain services', 'Gaming services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For light manufacturing and processing.', list: ['Jewellery manufacturing', 'Diamond cutting & polishing', 'Packaging', 'Assembly', 'Processing of goods'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'DMCC',
    body: 'DMCC companies are limited liability companies. Groups often use a branch to bring an existing brand into DMCC.',
  }),

  process: {
    title: 'How We Help You Set Up in DMCC',
    body: 'DMCC is an advisory jurisdiction for us: we plan and prepare everything around the application so it goes in right the first time.',
    steps: [
      { title: 'Check That DMCC Fits', body: 'We compare DMCC with lower-cost zones for your activity, visas and tax, so you only pay DMCC prices if they make sense.' },
      { title: 'Plan the Structure', body: 'Shareholding, holding company and Corporate Tax position designed before anything is filed.' },
      { title: 'Prepare the Documents', body: 'Shareholder documents collected, notarised and attested, with your business plan prepared.' },
      { title: 'Application & Approvals', body: 'We coordinate the DMCC application and any extra approvals your activity needs.' },
      { title: 'Office or Flexi-Desk', body: 'Office or flexi-desk in JLT or Uptown Dubai, sized to the visas you need.' },
      { title: 'Licence Issued', body: 'DMCC issues the licence and certificate of incorporation.' },
      { title: 'Visas, Bank & Tax', body: 'Investor and staff visas, bank application and Corporate Tax and VAT registration handled alongside.' },
    ],
  },

  documents: documents({ place: 'DMCC', extra: ['Business plan'] }),

  benefits: {
    title: 'Why Choose a DMCC Company',
    body: 'DMCC suits businesses where brand, bank acceptance and commodity infrastructure matter more than the lowest price.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Strong recognition with banks and counterparties',
      'Specialist commodity centres and exchanges',
      'Large, established business community',
      'Metro-connected JLT and Uptown Dubai',
      'Wide activity list, including crypto and gaming',
    ],
  },

  tax: freeZoneTax({ zone: 'DMCC', authority: 'DMCC', source: { label: 'Dubai Multi Commodities Centre (DMCC)', href: 'https://www.dmcc.ae' } }),

  industries: {
    title: 'Where DMCC Companies Operate',
    body: 'DMCC is best known for trading, but its member base has grown well beyond commodities.',
    items: [
      { icon: 'award', title: 'Gold & Precious Metals' },
      { icon: 'certificate', title: 'Diamonds & Gemstones' },
      { icon: 'world', title: 'Commodity Trading' },
      { icon: 'building-factory', title: 'Energy & Petrochemicals' },
      { icon: 'cpu', title: 'Technology & Crypto' },
      { icon: 'player-play', title: 'Gaming' },
      { icon: 'briefcase', title: 'Consultancy' },
      { icon: 'building-skyscraper', title: 'Regional Headquarters' },
    ],
  },

  advantage: advantage({
    place: 'DMCC',
    authority: 'DMCC',
    kind: 'free zone',
    first: { icon: 'scale', title: 'Independent Zone Advice', body: 'An honest comparison of DMCC against lower-cost zones before you commit.' },
  }),
  pillars: pillars({ place: 'DMCC', first: { icon: 'award', title: 'Advice before you apply', body: 'We plan structure, banking and tax first, so your DMCC application goes in complete and your company is usable from day one.' } }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'DMCC suits serious trading businesses. Other zones can cost less for consultancy and services.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'DMCC: Frequently Asked Questions',
    body: 'Common questions about setting up a DMCC company.',
    items: [
      { q: 'Where is DMCC?', a: 'DMCC covers Jumeirah Lakes Towers (JLT) and Uptown Dubai, next to Dubai Marina and on the Dubai Metro.' },
      { q: 'Is DMCC more expensive than other free zones?', a: 'Usually, yes. Licence and office costs are higher than zones such as IFZA or Meydan. Its value is in reputation, bank acceptance and commodity infrastructure. We compare the options for you.' },
      { q: 'Do you file DMCC applications?', a: 'DMCC is an advisory jurisdiction for us. We plan the structure, prepare documents, coordinate the application and handle the banking, visas and tax around it.' },
      { q: 'Do precious metals or crypto activities need extra approvals?', a: 'Yes. Some activities, including precious metals and crypto, need extra approvals and compliance checks. We map these before you apply.' },
      { q: 'Will my DMCC company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Qualifying commodity trading can count; other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application and match it to the partner bank most likely to approve your trading profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'DMCC', government: 'the Government of Dubai' }),

  cta: {
    title: 'Considering DMCC?',
    body: 'Talk to a TMFS consultant about whether DMCC is right for your business and how to structure it for banking and tax.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default DMCC;
