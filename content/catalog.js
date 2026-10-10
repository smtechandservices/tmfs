// Every practice, jurisdiction and service the site has a page for. The
// header mega-menu, footer, homepage and (later) the dynamic page routes all
// read from here, so adding a free zone or service is a one-line change.
//
// Item URLs are `${group.base}/${item.slug}`. `tag` is the one-line label
// shown under the item in the mega-menu. `advisory: true` marks
// jurisdictions we advise on but don't file in directly.

function group({ key, title, base, href, items }) {
  return { key, title, base, href, items: items.map((item) => ({ ...item, href: `${base}/${item.slug}` })) };
}

export const MAINLAND = group({
  key: 'mainland',
  title: 'Mainland',
  base: '/company-setup/mainland',
  href: '/company-setup/mainland',
  items: [
    { slug: 'dubai', tag: 'Licensed by DET', title: 'Dubai Mainland', short: 'LLC, sole establishment or branch, licensed to trade anywhere in the UAE and bid for government work.' },
    { slug: 'abu-dhabi', tag: 'Licensed by ADDED', title: 'Abu Dhabi Mainland', short: 'Mainland licences in the capital, for businesses serving Abu Dhabi clients and government entities.' },
    { slug: 'sharjah', tag: 'Licensed by SEDD', title: 'Sharjah Mainland', short: 'Lower-cost mainland setup with full UAE trading rights, a short drive from Dubai.' },
    { slug: 'ajman', tag: 'Licensed by Ajman DED', title: 'Ajman Mainland', short: 'One of the most affordable mainland licences, popular with trading and small service businesses.' },
    { slug: 'ras-al-khaimah', tag: 'Licensed by RAK DED', title: 'Ras Al Khaimah Mainland', short: 'Mainland setup in RAK for industrial, trading and tourism businesses outside the Dubai cost base.' },
    { slug: 'fujairah', tag: 'Licensed by Fujairah DED', title: 'Fujairah Mainland', short: 'East-coast mainland licences near Fujairah port, for shipping, logistics and trading.' },
    { slug: 'umm-al-quwain', tag: 'Licensed by UAQ DED', title: 'Umm Al Quwain Mainland', short: 'Low-overhead mainland licences for small trading and service companies.' },
  ],
});

export const FREE_ZONES = group({
  key: 'free-zones',
  title: 'Free Zones',
  base: '/company-setup/free-zones',
  href: '/company-setup/free-zones',
  items: [
    { slug: 'ifza', tag: 'Cost-efficient SME licences', title: 'IFZA', short: 'Fast, cost-efficient consultancy and services licences. The usual first company for solo founders.' },
    { slug: 'meydan', tag: 'E-commerce & digital', title: 'Meydan Free Zone', short: 'E-commerce and digital licences with a Dubai address and quick issuance.' },
    { slug: 'rakez', tag: 'Industrial & trading', title: 'RAKEZ', short: 'Ras Al Khaimah Economic Zone. Low-cost industrial, trading and service licences.' },
    { slug: 'shams', tag: 'Media & creative', title: 'SHAMS', short: 'Sharjah Media City. Media, creative and consultancy licences, plus freelance permits.' },
    { slug: 'spc', tag: 'Publishing & services', title: 'SPC Free Zone', short: 'Sharjah Publishing City. Low-cost setup for publishing, media and services.' },
    { slug: 'ajman-free-zone', tag: 'Trading & warehousing', title: 'Ajman Free Zone', short: 'Cost-efficient trading, industrial and services licences with warehouse options.' },
    { slug: 'srtip', tag: 'Tech & R&D', title: 'SRTIP', short: 'Sharjah Research Technology and Innovation Park. Tech, R&D and industrial licences.' },
    { slug: 'dmcc', tag: 'Commodities & trading', title: 'DMCC', short: 'Commodities and trading hub with strong bank acceptance. We advise on DMCC structures.', advisory: true },
    { slug: 'difc', tag: 'Finance & holding structures', title: 'DIFC', short: 'Common-law jurisdiction for finance, funds and holding structures. We advise on DIFC setups.', advisory: true },
  ],
});

export const OFFSHORE = group({
  key: 'offshore',
  title: 'Offshore',
  base: '/company-setup/offshore',
  href: '/company-setup/offshore',
  items: [
    { slug: 'rak-icc', tag: 'Holding & asset protection', title: 'RAK ICC', short: 'Offshore company for holding assets and international contracting. Cannot trade inside the UAE.' },
  ],
});

export const BANKING = group({
  key: 'banking',
  title: 'Banking & Finance',
  base: '/banking',
  href: '/banking',
  items: [
    { slug: 'corporate-account', tag: 'Matched to the right bank', title: 'Corporate Bank Account', short: 'Business accounts opened alongside your licence, matched to the bank most likely to approve your profile.' },
    { slug: 'personal-account', tag: 'For UAE residents', title: 'Personal Bank Account', short: 'Current and savings accounts for UAE residents, with documents checked before you apply.' },
    { slug: 'non-resident-account', tag: 'No UAE visa needed', title: 'Offshore & Non-Resident Accounts', short: 'Accounts for founders and investors without a UAE residence visa.' },
    { slug: 'business-loans', tag: 'Working capital & SME finance', title: 'Business Loans', short: 'Working capital and SME finance compared across our 18 partner banks.' },
    { slug: 'personal-loans', tag: 'Compared across lenders', title: 'Personal Loans', short: 'Personal finance compared across partner banks, with eligibility checked upfront.' },
    { slug: 'mortgages', tag: 'Residents & non-residents', title: 'Mortgages', short: 'Home finance for residents and non-residents, compared across lenders.' },
  ],
});

export const TAX = group({
  key: 'tax',
  title: 'Tax',
  base: '/tax',
  href: '/tax',
  items: [
    { slug: 'corporate-tax', tag: '9% CT, free zone relief', title: 'Corporate Tax', short: 'Registration, computation and returns under the 9% UAE Corporate Tax, including free zone qualifying income.' },
    { slug: 'vat-registration', tag: 'TRN with the FTA', title: 'VAT Registration', short: 'Registration assessment and TRN application with the FTA.' },
    { slug: 'vat-returns', tag: 'Filing & refund claims', title: 'VAT Returns & Refunds', short: 'Periodic VAT return filing and refund claims, filed on time.' },
    { slug: 'vat-health-check', tag: 'Catch errors before the FTA', title: 'VAT Health Check', short: 'A review that catches reverse-charge, credit-note and TRN errors before the FTA does.' },
  ],
});

export const ACCOUNTING = group({
  key: 'accounting-audit',
  title: 'Accounting & Audit',
  base: '/accounting-audit',
  href: '/accounting-audit',
  items: [
    { slug: 'bookkeeping', tag: 'Books ready for VAT & audit', title: 'Bookkeeping', short: 'Day-to-day books kept current and ready for VAT, tax and audit.' },
    { slug: 'payroll', tag: 'Salaries & WPS transfers', title: 'Payroll & WPS', short: 'Monthly payroll processing and WPS salary transfers.' },
    { slug: 'financial-statements', tag: 'For banks & regulators', title: 'Financial Statements', short: 'Statements prepared for management, banks and regulators.' },
    { slug: 'internal-audit', tag: 'Controls & process reviews', title: 'Internal Audit', short: 'Controls and process reviews that find problems before external auditors do.' },
    { slug: 'external-audit', tag: 'Statutory audit', title: 'External Audit', short: 'Statutory audit for licence renewals, banks and shareholders.' },
    { slug: 'fta-audit-support', tag: 'Representation in FTA audits', title: 'FTA Audit Support', short: 'Preparation and representation if your business is selected for an FTA tax audit.' },
  ],
});

export const PRO_VISAS = group({
  key: 'pro-visas',
  title: 'PRO & Visas',
  base: '/corporate-services',
  items: [
    { slug: 'pro-services', tag: 'Government liaison & approvals', title: 'PRO Services', short: 'Government liaison and approvals handled so your setup doesn’t stall.' },
    { slug: 'document-clearing', tag: 'Attestation & translation', title: 'Document Clearing & Attestation', short: 'Attestation, translation and document clearing for UAE authorities.' },
    { slug: 'residence-visas', tag: 'Owners & staff', title: 'Residence Visas', short: 'Medical, Emirates ID and residence visa processing for owners and staff.' },
    { slug: 'family-visas', tag: 'Spouse, children & parents', title: 'Family Visas', short: 'Dependent visa sponsorship for spouse, children and parents.' },
    { slug: 'golden-visa', tag: '5 & 10-year residency', title: 'Golden Visa', short: 'Eligibility check and application for UAE long-term residence.' },
  ],
});

export const LICENCE_COMPLIANCE = group({
  key: 'licence-compliance',
  title: 'Licence & Compliance',
  base: '/corporate-services',
  items: [
    { slug: 'licence-renewal', tag: 'Annual renewals, on time', title: 'Licence Renewal', short: 'Trade licence renewals tracked and filed before they lapse.' },
    { slug: 'licence-amendments', tag: 'Activity, name & shareholders', title: 'Licence & MoA Amendments', short: 'Activity, name, shareholder and MoA changes filed with the authority.' },
    { slug: 'share-transfer', tag: 'Ownership changes', title: 'Share Transfer', short: 'Ownership changes documented, notarised and registered.' },
    { slug: 'liquidation', tag: 'Company closure', title: 'Liquidation & Deregistration', short: 'Closing a company properly, from liquidator appointment to licence cancellation.' },
    { slug: 'trademark', tag: 'Registration with the MoE', title: 'Trademark Registration', short: 'Brand and logo registration with the UAE Ministry of Economy.' },
    { slug: 'aml-compliance', tag: 'AML programmes & goAML', title: 'AML Compliance', short: 'AML programmes and goAML registration for regulated activities.' },
    { slug: 'ubo-filing', tag: 'Beneficial-owner registers', title: 'UBO Filing', short: 'Ultimate beneficial owner registers prepared and filed with your licensing authority.' },
  ],
});

// The five practices, in display order. `groups` are the sub-lists shown in
// the mega-menu and on each practice's hub page.
export const PRACTICES = [
  {
    key: 'company-setup',
    title: 'Company Setup',
    href: '/company-setup',
    summary: 'Mainland in all seven emirates, seven free zones filed directly, and RAK ICC offshore. Licence, MoA, visas and Emirates ID.',
    groups: [MAINLAND, FREE_ZONES, OFFSHORE],
  },
  {
    key: 'banking',
    title: 'Banking & Finance',
    href: '/banking',
    summary: 'Corporate, personal and non-resident accounts, plus business loans, personal loans and mortgages compared across 18 partner banks.',
    groups: [BANKING],
  },
  {
    key: 'tax',
    title: 'Tax',
    href: '/tax',
    summary: 'VAT registration, returns, refunds and health checks, plus UAE Corporate Tax registration and filing.',
    groups: [TAX],
  },
  {
    key: 'accounting-audit',
    title: 'Accounting & Audit',
    href: '/accounting-audit',
    summary: 'Bookkeeping, payroll, financial statements, internal and external audit, and FTA tax audit support.',
    groups: [ACCOUNTING],
  },
  {
    key: 'corporate-services',
    title: 'Corporate Services',
    href: '/corporate-services',
    summary: 'PRO and attestation, residence, family and Golden Visas, licence renewals and amendments, trademarks and liquidation.',
    groups: [PRO_VISAS, LICENCE_COMPLIANCE],
  },
];

// Every catalog item in one flat list, for lookups by href.
export const ALL_ITEMS = PRACTICES.flatMap((p) => p.groups.flatMap((g) => g.items));
