import { MAINLAND, FREE_ZONES, OFFSHORE, BANKING, TAX, ACCOUNTING, PRO_VISAS, LICENCE_COMPLIANCE } from './catalog';

const bySlug = (g, ...slugs) => slugs.map((s) => g.items.find((i) => i.slug === s));
const link = (item) => ({ title: item.title, desc: item.tag, href: item.href });

// Header menus. Each top-level entry has one of:
//   flyout:  rows that open a side panel (`sub`) on hover, with either one
//            list (`items`) or several headed columns (`cols`)
//   columns: headed lists shown side by side
//   items:   a single list
// The mobile menu is built from `mobile` below.
export const NAV = [
  {
    label: 'Company Setup',
    flyout: [
      {
        title: 'Mainland Company Formation',
        desc: 'LLC, sole establishment & branch in all 7 emirates',
        href: MAINLAND.href,
        sub: { head: 'UAE mainland, by emirate', items: MAINLAND.items.map(link) },
      },
      {
        title: 'Free Zone Company Formation',
        desc: '100% foreign ownership, filed directly',
        href: FREE_ZONES.href,
        sub: {
          cols: [
            { head: 'Dubai free zones', items: bySlug(FREE_ZONES, 'ifza', 'meydan', 'dmcc', 'difc').map(link) },
            { head: 'Other emirates', items: bySlug(FREE_ZONES, 'rakez', 'shams', 'spc', 'ajman-free-zone', 'srtip').map(link) },
          ],
        },
      },
      {
        title: 'Offshore Company Formation',
        desc: 'RAK ICC holding companies',
        href: OFFSHORE.href,
        sub: { head: 'Offshore, by jurisdiction', items: OFFSHORE.items.map(link) },
      },
      { title: 'Compare Setup Options', desc: 'Mainland, free zone or offshore, side by side', href: '/company-setup' },
    ],
  },
  { label: 'Banking', items: BANKING.items.map(link) },
  {
    label: 'Corporate Services',
    items: [...PRO_VISAS.items, ...bySlug(LICENCE_COMPLIANCE, 'licence-renewal', 'licence-amendments', 'share-transfer', 'liquidation', 'trademark')].map(link),
  },
  {
    label: 'Tax & Compliance',
    columns: [
      { head: 'Tax', items: TAX.items.map(link) },
      { head: 'Compliance', items: [...bySlug(LICENCE_COMPLIANCE, 'aml-compliance', 'ubo-filing'), ...bySlug(ACCOUNTING, 'fta-audit-support')].map(link) },
    ],
  },
  { label: 'Accounting & Auditing', items: bySlug(ACCOUNTING, 'bookkeeping', 'payroll', 'financial-statements', 'internal-audit', 'external-audit').map(link) },
  {
    label: 'About',
    items: [
      { title: 'About TMFS', desc: 'Our story, team & approach', href: '/about' },
      { title: 'Our Team', desc: 'The people on your file', href: '/about#team' },
      { title: 'Insights', desc: 'Guides on setup, banking & tax', href: '/insights' },
      { title: 'Contact', desc: 'Call, WhatsApp or walk in', href: '/contact' },
    ],
  },
];

// Mobile menu accordions: flatten each menu into one list of links, with
// Company Setup split per jurisdiction type like the desktop flyout.
const flat = (entry) => entry.items ?? entry.columns.flatMap((c) => c.items);
const sublinks = (row) => [{ title: row.title, href: row.href }, ...(row.sub.items ?? row.sub.cols.flatMap((c) => c.items))];

export const MOBILE_NAV = [
  ...NAV[0].flyout.filter((row) => row.sub).map((row) => ({ label: `Company Setup: ${row.title.replace(' Company Formation', '')}`, items: sublinks(row) })),
  ...NAV.slice(1).map((entry) => ({ label: entry.label, items: flat(entry) })),
];

export const FOOTER_COLUMNS = [
  {
    title: 'Company setup',
    items: [
      { title: 'All setup options', href: '/company-setup' },
      ...MAINLAND.items.slice(0, 3),
      { title: 'All mainland emirates', href: MAINLAND.href },
      ...FREE_ZONES.items.filter((z) => !z.advisory),
      { title: 'Offshore (RAK ICC)', href: OFFSHORE.items[0].href },
    ],
  },
  {
    title: 'Banking & tax',
    items: [...BANKING.items, ...TAX.items],
  },
  {
    title: 'Accounting & corporate',
    items: [...ACCOUNTING.items, ...PRO_VISAS.items, ...LICENCE_COMPLIANCE.items],
  },
  {
    title: 'Company',
    items: [
      { title: 'About us', href: '/about' },
      { title: 'All services', href: '/services' },
      { title: 'Insights', href: '/insights' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

export const LEGAL_LINKS = [
  { title: 'Privacy policy', href: '/privacy' },
  { title: 'Terms of service', href: '/terms' },
];
