// SRTIP page, section by section in page order (Avyanco jurisdiction layout).
// Shared blocks come from ./shared.
import { freeZoneTax, freeZoneStructures, freeZoneProcess, documents, advantage, pillars, TESTIMONIALS, FREE_ZONE_PILLAR, disclaimer } from './shared';

const SRTIP = {
  href: '/company-setup/free-zones/srtip',
  published: '2026-10-10',
  updated: '2026-10-10',
  meta: {
    title: 'SRTIP Company Setup: Sharjah Research Technology and Innovation Park',
    description:
      'Set up in SRTIP with TMFS: technology, R&D and advanced industry licences next to Sharjah University City, with 100% ownership and possible 0% Corporate Tax on qualifying income.',
  },

  hero: {
    title: ['SRTIP Free Zone', 'Company Formation'],
    lead: 'Set up in the Sharjah Research, Technology and Innovation Park (SRTIP), the free zone for technology, research and advanced industry next to Sharjah’s University City.',
    chips: ['100% Ownership', 'Tech & R&D', 'University Links', 'Start-up Friendly', 'Bank Account Support'],
  },

  intro: {
    title: 'SRTIP: Sharjah’s free zone for technology and research',
    summary:
      'SRTIP is a free zone and innovation park beside University City Sharjah, home to the American University of Sharjah and the University of Sharjah. It licenses technology, research and advanced industry companies, from start-ups to established firms.',
    body: 'Companies choose SRTIP for its links to universities and research talent, its focus areas such as sustainability, advanced manufacturing, mobility and water, and space that ranges from desks to labs and industrial units.',
    image: { src: '/images/difc-skyline.jpg', alt: 'City skyline (placeholder)' },
  },

  why: {
    badge: 'Best known for: technology, R&D & innovation',
    title: 'Why SRTIP',
    body: 'SRTIP puts technology and research businesses next to the universities that supply their talent and ideas.',
    items: [
      { icon: 'book', title: 'University partnerships', body: 'Next to University City Sharjah, with access to researchers, graduates and joint projects.' },
      { icon: 'cpu', title: 'Technology focus', body: 'Software, AI, IoT, sustainability and advanced manufacturing are at the centre of the park.' },
      { icon: 'bulb', title: 'Start-up support', body: 'Programmes and space for early-stage companies, alongside established tech firms.' },
      { icon: 'building-factory', title: 'Labs & industrial space', body: 'Offices, labs and units for companies that build and test, not just write code.' },
      { icon: 'shield-check', title: '100% foreign ownership', body: 'Full ownership with no local partner, and profits and capital can be repatriated freely.' },
      { icon: 'map-pin', title: 'Sharjah location', body: 'Close to Sharjah International Airport and the highways into Dubai.' },
    ],
    idealFor: [
      'Tech start-ups',
      'R&D & engineering companies',
      'Sustainability & clean-tech',
      'Advanced manufacturing',
      'University spin-outs',
    ],
  },

  licences: {
    title: 'SRTIP Licence Types',
    body: 'SRTIP licenses technology, research and related service and industrial activities.',
    items: [
      { icon: 'cpu', title: 'Technology Licence', body: 'For software, digital and technology businesses.', list: ['Software development', 'AI & data analytics', 'IoT solutions', 'Cybersecurity', 'IT consultancy'] },
      { icon: 'bulb', title: 'Research & Development', body: 'For companies doing R&D, testing and product development.', list: ['Applied research', 'Product development', 'Testing & certification', 'Engineering design', 'Clean-tech R&D'] },
      { icon: 'building-factory', title: 'Industrial & Advanced Manufacturing', body: 'For companies that build, assemble or prototype.', list: ['Advanced manufacturing', '3D printing', 'Electronics assembly', 'Mobility solutions', 'Water & energy technology'] },
    ],
  },

  structures: freeZoneStructures({
    zone: 'SRTIP',
    body: 'SRTIP offers the usual free zone forms, for both start-ups and established companies.',
  }),

  process: freeZoneProcess({
    zone: 'SRTIP',
    authority: 'SRTIP',
    office: 'Desk, office, lab or industrial unit, depending on your activity and the visas you need.',
  }),

  documents: documents({ place: 'SRTIP', extra: ['Business plan or company profile'] }),

  benefits: {
    title: 'Why Choose an SRTIP Company',
    body: 'SRTIP suits technology and research businesses that value talent and space over a Dubai address.',
    items: [
      '100% foreign ownership',
      'Possible 0% Corporate Tax on qualifying income',
      'Next to University City Sharjah',
      'Labs and industrial space available',
      'Start-up programmes and support',
      'Focus on tech, sustainability and R&D',
      'Close to Sharjah airport and Dubai',
    ],
  },

  tax: freeZoneTax({ zone: 'SRTIP', authority: 'SRTIP', source: { label: 'Sharjah Research, Technology and Innovation Park (SRTIP)', href: 'https://srtip.ae' } }),

  industries: {
    title: 'Where SRTIP Companies Operate',
    body: 'SRTIP concentrates on technology and the industries it is changing.',
    items: [
      { icon: 'cpu', title: 'Software & AI' },
      { icon: 'bulb', title: 'Research & Development' },
      { icon: 'building-factory', title: 'Advanced Manufacturing' },
      { icon: 'world', title: 'Sustainability & Clean-tech' },
      { icon: 'truck', title: 'Mobility' },
      { icon: 'shield-lock', title: 'Cybersecurity' },
      { icon: 'book', title: 'EdTech' },
      { icon: 'briefcase', title: 'Tech Consultancy' },
    ],
  },

  advantage: advantage({ place: 'SRTIP', authority: 'SRTIP', kind: 'free zone' }),
  pillars: pillars({ place: 'SRTIP', first: FREE_ZONE_PILLAR }),

  related: {
    title: 'Compare Other UAE Free Zones',
    body: 'SRTIP suits technology and R&D. Other zones fit trading, media or a Dubai address.',
  },

  testimonials: TESTIMONIALS,

  faq: {
    title: 'SRTIP: Frequently Asked Questions',
    body: 'Common questions about setting up an SRTIP company.',
    items: [
      { q: 'Is SRTIP only for technology companies?', a: 'Its focus is technology, research and advanced industry. Activities outside those areas may be better suited to SHAMS, SPC or another zone.' },
      { q: 'Where is SRTIP?', a: 'Next to University City Sharjah, close to Sharjah International Airport and the highways into Dubai.' },
      { q: 'Can start-ups set up in SRTIP?', a: 'Yes. SRTIP runs programmes for early-stage companies as well as hosting established firms.' },
      { q: 'Do I need to live in Sharjah?', a: 'No. An SRTIP visa lets you live anywhere in the UAE.' },
      { q: 'Will my SRTIP company pay 0% Corporate Tax?', a: 'Only on qualifying income, and only if it meets the Qualifying Free Zone Person conditions every year. Qualifying R&D and manufacturing can count; other income is taxed at 9% above AED 375,000.' },
      { q: 'Can you open the company bank account?', a: 'Yes. We prepare the bank application alongside the licence and match it to the partner bank most likely to approve your profile.' },
    ],
  },

  disclaimer: disclaimer({ authority: 'SRTIP', government: 'the Government of Sharjah' }),

  cta: {
    title: 'Ready to Set Up in SRTIP?',
    body: 'Talk to a TMFS consultant about an SRTIP company for your technology or research business, with banking and tax set up alongside.',
    action: { label: 'Book a Consultation', href: '/contact' },
  },
};

export default SRTIP;
