// Company-wide facts. Anything that appears in more than one component
// (contact details, headline numbers, legal copy) lives here so it only has
// to be changed once.

export const SITE = {
  name: 'Time Machine Financial Services',
  short: 'TMFS',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://timemachine.ae',
  since: 2019,
  phone: '+971522149086',
  phoneDisplay: '+971 52 214 9086',
  whatsapp: 'https://wa.me/971522149086',
  email: 'manager@timemachine.ae',
  emailHref: 'mailto:manager@timemachine.ae?subject=TMFS%20Website',
  address: 'Millennium Central Hotel, Al Asayel Street, Next to Dubai Mall',
  poBox: 'PO Box 8405, Dubai Central Post Office',
  socials: [
    { href: 'https://www.facebook.com/profile.php?id=61560742015182', label: 'Facebook', icon: 'facebook', bg: '#1877F2' },
    { href: 'https://www.linkedin.com/in/tmfs-financial-services-64763a330/', label: 'LinkedIn', icon: 'linkedin', bg: '#0A66C2' },
    {
      href: 'https://www.instagram.com/timemachinefinancialservices/',
      label: 'Instagram',
      icon: 'instagram',
      bg: 'radial-gradient(circle at 30% 107%, #FDF497 0%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%)',
    },
  ],
};

export const STATS = [
  { value: '1,200', sup: '+', label: 'Licences & renewals', sub: 'Mainland · Free zone · Offshore' },
  { value: '18', label: 'Partner banks', sub: 'Corporate, personal & non-resident' },
  { value: '20', label: 'Years of group experience', sub: 'Time Machine Group, UAE' },
];

export const FOOTER_BLURB =
  'Time Machine Financial Services helps founders, SMEs and investors set up, bank and stay compliant in the UAE: company formation across mainland, free zone and offshore, bank accounts and finance, VAT and Corporate Tax, accounting and audit, and visa and PRO support, all from one team in Dubai.';

export const DISCLAIMER =
  'Time Machine Financial Services is a privately owned advisory firm. We are not a government entity and are not affiliated with, endorsed by or acting for any UAE authority, free zone or bank. Content on this website is general information only and is not legal, tax, financial or immigration advice. Government fees, timelines, visa eligibility and bank approvals are decided by the relevant authority or institution, vary case by case and are not guaranteed.';
