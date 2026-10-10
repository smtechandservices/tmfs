import { MAINLAND, FREE_ZONES, OFFSHORE, BANKING, TAX, ACCOUNTING, PRO_VISAS, LICENCE_COMPLIANCE } from './catalog';

// A mega-menu column: optional `href` makes the column title a link to the
// group's hub page.
const column = (g, title = g.title) => ({ title, href: g.href, items: g.items });

export const NAV = [
  {
    label: 'Company Setup',
    href: '/company-setup',
    columns: [column(MAINLAND), column(FREE_ZONES), column(OFFSHORE)],
  },
  {
    label: 'Banking',
    href: '/banking',
    columns: [column(BANKING)],
  },
  {
    label: 'Tax & Accounting',
    columns: [column(TAX), column(ACCOUNTING)],
  },
  {
    label: 'Corporate Services',
    href: '/corporate-services',
    columns: [column(PRO_VISAS), column(LICENCE_COMPLIANCE)],
  },
  {
    label: 'About',
    href: '/about',
    columns: [
      {
        title: 'Company',
        items: [
          { title: 'About TMFS', href: '/about' },
          { title: 'Our team', href: '/about#team' },
          { title: 'Insights', href: '/insights' },
          { title: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
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
