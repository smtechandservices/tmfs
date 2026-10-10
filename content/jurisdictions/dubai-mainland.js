// Dubai mainland page, section by section in page order (Avyanco jurisdiction
// layout). Shared blocks come from ./shared; this file holds what is unique.
import { mainlandTax, mainlandStructures, mainlandProcess, documents, advantage, specialists, pillars, TESTIMONIALS, disclaimer } from './shared';

const DUBAI_MAINLAND = {
  href: '/company-setup/mainland/dubai',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'Dubai Mainland Company Formation: DET Licence',
    description:
      'Set up a Dubai mainland company with TMFS: DET licence, 100% foreign ownership for most activities, trade anywhere in the UAE and bid for government work, with visas, bank account and tax handled.',
  },

  hero: {
    title: ['Dubai Mainland', 'Company Formation'],
    lead: 'Set up a mainland company licensed by Dubai’s Department of Economy and Tourism (DET), with no restriction on where in the UAE you trade, who you sell to or which contracts you bid for.',
    chips: ['100% Ownership', 'DET Licence', 'Trade Anywhere in the UAE', 'Government Contracts', 'Bank Account Support'],
  },

  intro: {
    title: 'Dubai: the UAE’s commercial capital',
    summary:
      'A Dubai mainland company is licensed by DET and can trade directly with customers, sign contracts and open branches in all seven emirates. Since the 2021 company law reforms, most activities can be 100% foreign-owned with no local partner.',
    body: 'Dubai combines Jebel Ali Port, two international airports, most of the country’s bank head offices and the largest pool of skilled staff in the region. A mainland licence is the right fit when your customers are in the UAE, when you need a shop, showroom or site office, or when you want to bid for government and semi-government work.',
    image: { src: '/images/downtown-dubai.jpg', alt: 'Downtown Dubai skyline' },
  },

  why: {
    badge: 'Best known for: UAE-wide trade, contracting & services',
    title: 'Why Dubai Mainland',
    body: 'Dubai mainland gives you the widest market access in the UAE and the deepest pool of customers, suppliers, banks and talent.',
    items: [
      { icon: 'world', title: 'Trade anywhere, with anyone', body: 'Sell directly to consumers and businesses across the UAE, open branches in any emirate and work without a free zone’s location limits.' },
      { icon: 'building-community', title: 'Government & semi-government work', body: 'Mainland companies can register as suppliers and bid for contracts with Dubai Government entities and their partners.' },
      { icon: 'shield-check', title: '100% foreign ownership (most activities)', body: 'Most commercial, professional and industrial activities no longer need a UAE national shareholder. A short list of strategic activities still does; we check yours first.' },
      { icon: 'truck', title: 'Global connectivity', body: 'Jebel Ali Port, Dubai International and Al Maktoum airports put most of the world within an eight-hour flight and connect you to regional supply chains.' },
      { icon: 'building-bank', title: 'Strongest banking access', body: 'Most UAE banks are headquartered or heavily present in Dubai and are familiar with mainland profiles, which helps account opening.' },
      { icon: 'users', title: 'Largest talent pool', body: 'Recruit from the UAE’s biggest multinational workforce, with visa allocation linked to your office size rather than a fixed package.' },
    ],
    idealFor: [
      'Retail, showrooms & restaurants',
      'Contracting & fit-out',
      'Trading & distribution in the UAE',
      'Professional services with UAE clients',
      'Companies bidding for government work',
    ],
  },

  licences: {
    title: 'Mainland Licence Categories in Dubai',
    body: 'DET issues three main licence families. Your activities decide the licence and whether another authority also has to approve.',
    items: [
      { icon: 'building-store', title: 'Commercial Licence', body: 'For buying, selling and distributing goods, in Dubai and across the UAE.', list: ['General trading', 'Import & export', 'Retail & e-commerce', 'Wholesale & distribution', 'Real estate brokerage'] },
      { icon: 'briefcase', title: 'Professional Licence', body: 'For service businesses built on skills, qualifications and expertise.', list: ['Management consultancy', 'IT & software services', 'Marketing & advertising', 'Engineering consultancy', 'Accounting & HR services'] },
      { icon: 'building-factory', title: 'Industrial Licence', body: 'For manufacturing, processing and assembly, usually in Dubai’s industrial areas.', list: ['Light manufacturing', 'Food production', 'Printing & packaging', 'Furniture & joinery', 'Metal & plastic fabrication'] },
    ],
  },

  structures: mainlandStructures({
    authority: 'DET',
    body: 'Every federal company form is available in Dubai. Most foreign founders choose an LLC; overseas groups often start with a branch.',
  }),

  process: mainlandProcess({
    place: 'Dubai',
    authority: 'DET',
    approvals: 'Healthcare, education, food and some trading activities do.',
    lease: 'You lease an office, shop or warehouse and the tenancy is registered through Ejari. Your space decides how many visas you can apply for.',
  }),

  documents: documents({ place: 'Dubai' }),

  benefits: {
    title: 'Why Choose a Dubai Mainland Structure',
    body: 'Dubai mainland suits businesses whose customers, contracts or premises are in the UAE.',
    items: [
      'Trade across all seven emirates with one licence',
      '100% foreign ownership for most activities',
      'Eligible for government and semi-government tenders',
      'No limit on visas beyond what your premises support',
      'Widest choice of banks and financing',
      'Open shops, showrooms and branches anywhere',
      'Direct access to Jebel Ali Port and two airports',
    ],
  },

  tax: mainlandTax({
    place: 'Dubai',
    authority: 'DET',
    source: { label: 'Dubai Department of Economy and Tourism (DET)', href: 'https://www.dubaidet.gov.ae' },
    zoneTip: 'IFZA or Meydan in Dubai',
  }),

  industries: {
    title: 'Where Dubai Mainland Companies Operate',
    body: 'Almost every sector is represented on the Dubai mainland. These are the setups we see most.',
    items: [
      { icon: 'world', title: 'Trading & Distribution' },
      { icon: 'building-skyscraper', title: 'Real Estate Services' },
      { icon: 'building-community', title: 'Construction & Contracting' },
      { icon: 'chef-hat', title: 'Restaurants & Hospitality' },
      { icon: 'cart', title: 'Retail & E-commerce' },
      { icon: 'users', title: 'Professional Services' },
      { icon: 'cpu', title: 'Technology' },
      { icon: 'truck', title: 'Logistics' },
    ],
  },

  advantage: advantage({ place: 'Dubai mainland', authority: 'DET' }),
  specialists: specialists('Dubai'),
  pillars: pillars({ place: 'Dubai', first: { icon: 'map-pin', title: 'Next door, not a call centre', body: 'Our office is next to Dubai Mall. Walk in, meet the consultant handling your file and sign in person when you need to.' } }),

  related: {
    title: 'Compare Other UAE Mainland Options',
    body: 'Dubai offers the widest reach. Other emirates can cost less or suit specific sectors better.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'Dubai Mainland: Frequently Asked Questions',
    body: 'Common questions about DET licensing and setting up on the Dubai mainland.',
    items: [
      { q: 'Can a foreigner own 100% of a Dubai mainland company?', a: 'For most commercial, professional and industrial activities, yes. A short list of strategic activities still needs UAE national participation. We confirm the rule for your activity before anything is filed.' },
      { q: 'Do I need a physical office in Dubai?', a: 'Yes. A mainland company needs a registered address with an Ejari-registered tenancy. Business-centre offices work for many activities; the size of the space affects how many visas you can apply for.' },
      { q: 'Dubai mainland or a Dubai free zone?', a: 'Choose mainland if your customers, contracts or premises are in the UAE. A free zone can be cheaper and may offer 0% Corporate Tax on qualifying income, but restricts direct trade with the mainland. We compare both for your activity.' },
      { q: 'How long does Dubai mainland formation take?', a: 'Once your documents and premises are ready, DET licensing usually takes days rather than weeks. Activities needing another authority’s approval take longer. We give you a written timeline at the start.' },
      { q: 'Can a Dubai mainland company work in other emirates?', a: 'Yes. You can trade with customers anywhere in the UAE. To open a physical branch in another emirate, you register a branch with that emirate’s economic department.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'DET', government: 'the Government of Dubai' }),

  cta: {
    title: 'Ready to Set Up on the Dubai Mainland?',
    body: 'Talk to a TMFS consultant about a DET-licensed company built around your business, from the first activity check to a working bank account.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default DUBAI_MAINLAND;
