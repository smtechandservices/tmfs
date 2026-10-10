// Copy shared by every jurisdiction page (mainland emirates, free zones,
// offshore): the sticky sidebar, the "speak to a specialist" form band and the
// related-card images. Page files in this folder hold everything else.

export const SIDEBAR = {
  eyebrow: 'Get expert advice',
  title: 'Get a free consultation',
  sub: 'Tell us your activity and visa needs. We’ll map the steps, timeline and cost, with government fees and our fee shown separately.',
  trustTitle: 'Why TMFS',
  trust: [
    'Licence, bank account, visas and tax under one team',
    '18 UAE partner banks',
    'Written costs before you commit',
    'Office next to Dubai Mall, walk-ins welcome',
  ],
};

export const LEAD_BAND = {
  eyebrow: 'Get expert advice',
  title: 'Speak to a UAE setup specialist',
  blurb: 'Tell us what you need and a consultant will reply within one working day, with no obligation.',
  points: [
    'The consultant you speak to stays on your file',
    'A straight answer on structure, cost and timeline',
    'A reply within one working day',
    'A free 20-minute consultation',
  ],
};

// Placeholder photos for the "compare other options" cards, keyed by catalog
// slug. Swap in emirate or free zone photos as they become available.
export const RELATED_IMAGES = {
  dubai: '/images/downtown-dubai.jpg',
  'abu-dhabi': '/images/business-district.jpg',
  sharjah: '/images/business-bay-dusk.jpg',
  ajman: '/images/difc-skyline.jpg',
  'ras-al-khaimah': '/images/business-planning.jpg',
  fujairah: '/images/advisors-report.jpg',
  'umm-al-quwain': '/images/business-district.jpg',
  ifza: '/images/business-planning.jpg',
  meydan: '/images/downtown-dubai.jpg',
  dmcc: '/images/business-district.jpg',
  difc: '/images/difc-skyline.jpg',
  rakez: '/images/advisors-report.jpg',
  shams: '/images/business-bay-dusk.jpg',
  spc: '/images/business-planning.jpg',
  'ajman-free-zone': '/images/business-district.jpg',
  srtip: '/images/difc-skyline.jpg',
  'rak-icc': '/images/advisors-report.jpg',
  overview: '/images/business-bay-dusk.jpg',
};

// ---------------------------------------------------------------------------
// Building blocks for page files. Most jurisdiction pages share their tax,
// documents, team and "TMFS advantage" copy, differing only in names, so
// these helpers fill those in and page files keep only what is unique.
// ---------------------------------------------------------------------------

export const SOURCES = {
  ct: { label: 'Federal Decree-Law No. 47 of 2022 (Corporate Tax)', href: 'https://tax.gov.ae' },
  sbr: { label: 'Ministerial Decision No. 73 of 2023 (Small Business Relief)' },
  qfzp: { label: 'Cabinet Decision No. 100 of 2023 & Ministerial Decision No. 265 of 2023 (Qualifying Free Zone Persons)' },
  vat: { label: 'Federal Decree-Law No. 8 of 2017 (VAT)', href: 'https://tax.gov.ae' },
  companies: { label: 'Federal Decree-Law No. 32 of 2021 (Commercial Companies)' },
};

/** Corporate Tax and VAT block for a mainland emirate. `zoneTip` names free zones worth comparing. */
export function mainlandTax({ place, authority, source, zoneTip }) {
  return {
    title: `Tax & Compliance Position: ${place} Mainland`,
    body: `${place} mainland companies follow the standard UAE Corporate Tax and VAT rules. What changes between emirates is fees, rent and approvals, not tax.`,
    cards: [
      {
        eyebrow: 'UAE Corporate Tax',
        headline: '9% above AED 375,000 · 0% below',
        body: 'Every mainland company registers for Corporate Tax and files a return within nine months of its financial year end. Small Business Relief can apply to resident businesses with revenue up to AED 3 million for tax periods ending on or before 31 December 2026.',
        note: { label: 'Need 0% on qualifying income?', text: `The Qualifying Free Zone Person regime only applies to free zone companies, not mainland. If it matters for your model, compare ${zoneTip}.` },
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
      `Annual trade licence renewal with ${authority}`,
      'Sector permits renewed where your activity needs them',
      'Audited financial statements where required',
      'UBO register kept up to date',
    ],
    sources: [SOURCES.ct, SOURCES.sbr, SOURCES.vat, SOURCES.companies, source],
  };
}

/** Corporate Tax and VAT block for a free zone, built around the QFZP regime. */
export function freeZoneTax({ zone, authority, source }) {
  return {
    title: `Tax & Compliance Position: ${zone}`,
    body: `Companies in ${zone} can pay 0% Corporate Tax on qualifying income, but only if they meet the Qualifying Free Zone Person conditions every year. We check this before you choose the zone, not after.`,
    cards: [
      {
        eyebrow: 'UAE Corporate Tax',
        headline: '0% on qualifying income · 9% on the rest',
        body: 'To be a Qualifying Free Zone Person, the company needs real substance in the zone, qualifying income, audited financial statements and arm’s-length dealings with related parties. Taxable income that doesn’t qualify is taxed at 9% above AED 375,000.',
        note: { label: 'Selling to mainland customers?', text: 'Most mainland revenue isn’t qualifying income. If non-qualifying revenue passes 5% of total revenue or AED 5 million, whichever is lower, QFZP status is lost for that year and the next four. We model this with you upfront.' },
      },
      {
        eyebrow: 'UAE VAT',
        headline: '5% standard rate · same rules for services',
        body: 'Registration is mandatory once taxable supplies pass AED 375,000 in 12 months and optional from AED 187,500. Free zone services are taxed exactly as they are on the mainland.',
        note: { label: 'Designated zone status', text: `Some free zones are VAT designated zones, where certain supplies of goods inside or between them fall outside UAE VAT. It never covers services. We confirm how ${zone}’s status applies to your trade.` },
      },
    ],
    ongoing: [
      'Corporate Tax return within 9 months of year end',
      'Audited financial statements (needed for QFZP status)',
      'VAT returns once registered',
      `Annual licence renewal with ${authority}`,
      'Office or flexi-desk lease renewed with the licence',
      'UBO register kept up to date',
    ],
    sources: [SOURCES.ct, SOURCES.qfzp, SOURCES.vat, source],
  };
}

/** Shareholder documents. Foreign documents need notarising and attesting, which we arrange. */
export function documents({ place, extra = [] }) {
  return {
    title: `Documents Required for ${place} Setup`,
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
          ...extra,
        ],
      },
      {
        label: 'Corporate Shareholders',
        items: [
          'Certificate of incorporation or trade licence',
          'Memorandum & Articles of Association',
          `Board resolution approving the ${place} company`,
          'Certificate of good standing',
          'Passport copy of the appointed manager',
          'Ultimate beneficial owner (UBO) declaration',
        ],
      },
    ],
  };
}

/** "The TMFS Advantage" cards. `first` replaces the opening card where a page needs its own. */
export function advantage({ place, authority, kind = 'mainland', first }) {
  const zone = kind === 'free zone';
  return {
    title: 'The TMFS Advantage',
    body: `We handle ${place} setups end to end, from activity selection and ${authority} licensing to a banked, visa-ready company registered for Corporate Tax and VAT.`,
    items: [
      first ?? { icon: 'briefcase', title: 'Activity & Licence Advice', body: `Matching your business to the right ${authority} activities and licence category.` },
      zone
        ? { icon: 'building-skyscraper', title: 'Package & Office Choice', body: 'Flexi-desk, office or warehouse sized to the visas you need, so you don’t pay for space you won’t use.' }
        : { icon: 'building-skyscraper', title: 'Company Structure', body: 'Shareholding and holding structures set up for Corporate Tax and future growth.' },
      zone
        ? { icon: 'file-text', title: 'Application & Constitutional Documents', body: 'Application forms, resolutions and Articles prepared and filed with the zone for you.' }
        : { icon: 'file-text', title: 'MoA Drafting & Notarisation', body: 'Memorandum of Association drafted and notarised on your behalf.' },
      { icon: 'building-bank', title: 'Corporate Bank Account', body: 'Your application prepared alongside the licence and matched across our 18 partner banks.' },
      { icon: 'user-check', title: 'Investor & Staff Visas', body: 'Investor, partner and employee visas with medicals and Emirates ID.' },
      zone
        ? { icon: 'receipt-tax', title: 'QFZP & VAT Compliance', body: 'Corporate Tax and VAT registrations, audited accounts and the yearly checks that keep 0% status intact.' }
        : { icon: 'receipt-tax', title: 'Corporate Tax & VAT', body: 'FTA registrations and the ongoing filings that keep you penalty-free.' },
    ],
  };
}

export const specialists = (place) => ({
  title: 'Meet Our Team',
  body: `The people who will handle your ${place} setup, from first call to renewal.`,
});

export const TESTIMONIALS = {
  title: 'What Clients Say',
  body: 'Feedback from founders who set up with TMFS.',
};

/** "Why founders choose TMFS" pillars. `first` swaps in a jurisdiction-specific opener. */
export function pillars({ place, first }) {
  return {
    title: `Why Founders Choose TMFS in ${place}`,
    body: 'Three things clients mention most.',
    image: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents with a client' },
    items: [
      first,
      { icon: 'shield-check', title: 'One team, end to end', body: 'Licence, documents, premises, bank account, visas and tax with one consultant, from first call to renewal.' },
      { icon: 'bulb', title: 'Written costs upfront', body: 'A written breakdown of government fees and our fee before you commit, with no surprises at renewal.' },
    ],
  };
}

export const MAINLAND_PILLAR = { icon: 'award', title: 'Mainland in all seven emirates', body: 'We file mainland licences across the UAE and know where each emirate needs extra approvals.' };
export const FREE_ZONE_PILLAR = { icon: 'award', title: 'Free zones compared, not sold', body: 'We work across several free zones and recommend the one that fits your activity, visas and tax, not the one with the biggest commission.' };

export function disclaimer({ authority, government }) {
  return [
    `Checked against publicly available ${authority} and UAE federal sources in October 2026. Time Machine Financial Services is independent of ${authority} and is not affiliated with or endorsed by ${government} or any UAE authority.`,
    `Activity lists, package prices, approvals and tax rules change. Confirm the current position for your activity with ${authority} and the Federal Tax Authority, or ask us, before acting on this page.`,
  ];
}

/** The usual federal company forms, available in every emirate. */
export function mainlandStructures({ authority, body, title = `Legal Structures Under ${authority}` }) {
  return {
    title,
    body,
    items: [
      { title: 'Limited Liability Company (LLC)', body: 'The usual choice for trading and commercial activities, with one or more shareholders and liability limited to capital.' },
      { title: 'Sole Establishment', body: 'A single owner trading in their own name, common for professional and service activities.' },
      { title: 'Civil Company', body: 'A partnership for licensed professionals such as engineers, consultants and other specialists.' },
      { title: 'Branch of a Foreign Company', body: 'An overseas company operating under its own name, with the parent liable for the branch.' },
      { title: 'Private Joint Stock Company', body: 'For larger ventures with several shareholders and plans to raise capital.' },
      { title: 'Branch of a UAE or Free Zone Company', body: 'An existing UAE company, including a free zone company, opens a mainland branch to trade outside its zone under its own name.' },
    ],
  };
}

const capitalise = (s) => s[0].toUpperCase() + s.slice(1);

/** Mainland formation steps. `lease` describes how the tenancy is registered in that emirate. */
export function mainlandProcess({ place, authority, approvals, lease }) {
  return {
    title: `How a ${place} Mainland Company Is Formed`,
    body: `We run each step with ${authority} and the other ${place} authorities for you.`,
    steps: [
      { title: 'Confirm the Business Activity', body: `We match your business to ${authority}’s activity list and check whether it needs approval from another authority. ${approvals}` },
      { title: 'Choose the Legal Structure', body: 'LLC, sole establishment, civil company or branch, chosen to fit your shareholders and liability.' },
      { title: 'Reserve the Trade Name', body: `We submit your name options to ${authority} under UAE naming rules.` },
      { title: 'Get Initial Approval', body: `${capitalise(authority)} approves the activity and ownership in principle.` },
      { title: 'Sign the MoA', body: 'We draft the Memorandum of Association and arrange notarisation.' },
      { title: 'Lease Your Premises', body: lease },
      { title: 'Licence Issued', body: `${capitalise(authority)} issues the trade licence. We then open your establishment card, process visas and prepare the bank application.` },
    ],
  };
}

/** Free zone formation steps, from activity check to visas and bank. */
export function freeZoneProcess({ zone, authority, office }) {
  return {
    title: `How a ${zone} Company Is Formed`,
    body: `Free zone setup is mostly online. We prepare and file each step with ${authority} for you.`,
    steps: [
      { title: 'Choose Activities & Package', body: `We match your business to ${zone}’s activity list and pick the licence package and visa allocation that fits.` },
      { title: 'Reserve the Company Name', body: 'We check your name options against the zone’s naming rules and reserve the best one.' },
      { title: 'Submit the Application', body: 'Application forms, shareholder documents and any business profile filed with the zone, with compliance (KYC) checks.' },
      { title: 'Sign the Constitutional Documents', body: 'Articles of Association and resolutions signed, in person or by e-signature where the zone allows it.' },
      { title: 'Office or Flexi-Desk', body: office },
      { title: 'Licence Issued', body: `${capitalise(authority)} issues the licence and certificate of incorporation, usually as digital documents.` },
      { title: 'Establishment Card, Visas & Bank', body: 'We open the immigration file, run investor and staff visas, and prepare the bank application in parallel.' },
    ],
  };
}

/** Free zone company forms. Zones use different suffixes (FZE, FZCO, FZ-LLC), so the names stay generic. */
export function freeZoneStructures({ zone, body, extra = [] }) {
  return {
    title: `Legal Structures in ${zone}`,
    body,
    items: [
      { title: 'Single-Shareholder Free Zone Company', body: 'One individual or corporate owner, with liability limited to share capital. The usual start for solo founders.' },
      { title: 'Multi-Shareholder Free Zone Company', body: 'Two or more shareholders, individual or corporate, with shares and voting set in the Articles.' },
      { title: 'Branch of a Foreign Company', body: 'An overseas company operating in the zone under its own name, with the parent liable for the branch.' },
      { title: 'Branch of a UAE Company', body: 'A mainland or other free zone company adds a presence in the zone without forming a new entity.' },
      ...extra,
    ],
  };
}
