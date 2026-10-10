// Homepage copy, section by section, in page order.

export const STORY = {
  eyebrow: 'Who we are',
  title: 'Built so founders deal with one team, not five.',
  paragraphs: [
    'Setting up in the UAE usually means a formation agent, a bank relationship manager, an accountant, a PRO and a visa typist, none of whom talk to each other. TMFS was set up in Dubai to replace that chain with one team that owns the whole file.',
    'We start with what you are building: who you will invoice, where your customers are, which bank is likely to say yes, and what you will owe the FTA. Then we recommend the jurisdiction and structure that fit, and handle the licence, the visas, the bank account and the filings that follow.',
    'Behind us is Time Machine Group’s 20 years in UAE business setup, and an office next to Dubai Mall you can walk into.',
  ],
  facts: [
    { label: 'Based', value: 'Dubai, next to Dubai Mall' },
    { label: 'Since', value: '2019' },
    { label: 'Group', value: 'Time Machine Group' },
  ],
  highlights: [
    { value: '8', label: 'Jurisdictions we file in directly' },
    { value: '18', label: 'UAE banking partners' },
  ],
  action: { label: 'Read about TMFS', href: '/about' },
};

export const PROCESS = {
  eyebrow: 'How we work',
  title: 'From first call to fully operational',
  intro: 'Six steps, one point of contact. The consultant on your first call stays with you through licence, bank and renewal.',
  steps: [
    {
      n: '01',
      title: 'Free consultation',
      desc: 'Twenty minutes on your activity, ownership and budget. You leave with a written cost breakdown.',
      highlights: ['20-minute call', 'Written cost estimate', 'No obligation'],
    },
    {
      n: '02',
      title: 'Jurisdiction & structure',
      desc: 'Mainland, free zone or offshore, chosen by who you will invoice and which bank will take you, not by the cheapest headline price.',
      highlights: ['Zone matched to activity', 'Ownership structure set', 'Bank fit checked early'],
    },
    {
      n: '03',
      title: 'Documents',
      desc: 'We draft the MoA and applications and handle attestation and translation, so nothing comes back for a missing stamp.',
      highlights: ['MoA drafted', 'Attestation handled', 'Checklist per shareholder'],
    },
    {
      n: '04',
      title: 'Filing & licence',
      desc: 'Filed directly with the authority and tracked to issuance. Free zone licences typically land in 3–7 working days.',
      highlights: ['Filed directly', 'Queries answered for you', '3–7 working days'],
    },
    {
      n: '05',
      title: 'Visas & bank account',
      desc: 'Medical, Emirates ID and residence visa, alongside a bank application prepared for the partner bank most likely to approve it.',
      highlights: ['Emirates ID & residency', '18 partner banks', 'Compliance-ready application'],
    },
    {
      n: '06',
      title: 'Stay compliant',
      desc: 'Bookkeeping, VAT and Corporate Tax filings and renewal reminders, so the second year is quieter than the first.',
      highlights: ['Bookkeeping & VAT', 'Corporate Tax returns', 'Renewal reminders'],
    },
  ],
};

export const WHERE_WE_FILE = {
  eyebrow: 'Where we file',
  title: 'Every emirate, the free zones that matter, one team.',
  intro: 'Mainland in all seven emirates, seven free zones filed directly, advisory on DMCC and DIFC, and RAK ICC for offshore holding.',
  action: { label: 'Compare setup options', href: '/company-setup' },
};

export const INDUSTRIES = {
  eyebrow: 'Industries',
  title: 'The businesses we set up most',
  intro: 'Each sector has a zone, a licence and a bank that suit it best. These are the ones we file for every month.',
  items: [
    { title: 'Trading', desc: 'General trading, import/export and distribution, on mainland or in RAKEZ and Ajman Free Zone with warehouse options.' },
    { title: 'E-commerce', desc: 'Online stores, marketplace sellers and D2C brands, usually licensed in Meydan or IFZA with a Dubai address.' },
    { title: 'Consultancy & Professional Services', desc: 'Management consultants, agencies and freelancers. IFZA is the usual first company for solo founders.' },
    { title: 'Media & Creative', desc: 'Content studios, publishers, production and marketing, licensed in SHAMS or SPC Free Zone.' },
    { title: 'Technology & R&D', desc: 'Software, hardware and research companies, with lab and industrial space available at SRTIP.' },
    { title: 'Real Estate', desc: 'Brokerages, property management and holding structures, with offshore options for owning assets.' },
    { title: 'Hospitality & F&B', desc: 'Restaurants, cafés and cloud kitchens, which need a mainland licence to serve customers directly.' },
    { title: 'Holding & Investment', desc: 'Holding companies and investment vehicles through RAK ICC, with DIFC advisory for fund structures.' },
  ],
};

export const LEADERSHIP = {
  eyebrow: 'Leadership',
  title: 'The people on your file',
  intro: 'You will meet the team below, not a call centre. They stay with your company from the first call to the annual renewal.',
  action: { label: 'Meet the team', href: '/about#team' },
};

export const DIFFERENTIATORS = {
  eyebrow: 'Why TMFS',
  title: 'One team. One point of contact. No runaround.',
  intro: 'Setup, banking, tax and visas under one roof, so nothing gets lost between providers.',
  items: [
    { title: 'One contact from call to renewal', desc: 'The consultant you meet first owns your file through licence, bank account, visas and every renewal after.' },
    { title: 'Banking built in, not bolted on', desc: 'Your bank application is prepared alongside your licence and matched across 18 partner banks, so banking isn’t a second scramble.' },
    { title: 'Filed directly, not passed on', desc: 'We file in eight jurisdictions ourselves, which means we see the queries and fix them, rather than waiting on a sub-agent.' },
    { title: 'Written costs before you commit', desc: 'Every consultation ends with a written cost breakdown: government fees, our fee and what renews each year.' },
  ],
};

export const INSIGHTS = {
  eyebrow: 'Insights',
  title: 'Notes from the filing desk',
  action: { label: 'View all insights', href: '/insights' },
};

export const FAQS = {
  eyebrow: 'Common questions',
  title: 'Answers to what we get asked most',
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
  title: 'Start the conversation',
  intro: 'Tell us what you are building and the right consultant will call you back within one working day. Or skip the form and call, WhatsApp or walk in.',
};
