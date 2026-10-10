// Licence & compliance service pages, section by section in page order
// (Avyanco service layout).
import { servicePage, cta, SRC, IMG } from './shared';

const LICENSING = 'your licensing authority';

const LICENCE_RENEWAL = servicePage({
  href: '/corporate-services/licence-renewal',
  topic: 'licence renewal',
  authority: LICENSING,
  changes: 'Renewal requirements, fees and penalties',
  meta: {
    title: 'Trade Licence Renewal in Dubai & the UAE',
    description: 'Trade licence renewal with TMFS: mainland and free zone licences tracked and renewed before they lapse, with tenancy, audit and visa prerequisites handled.',
  },
  hero: {
    title: ['Trade Licence', 'Renewal'],
    lead: 'Mainland and free zone licences tracked and renewed before they lapse, with the tenancy, audit, insurance and other prerequisites lined up in time.',
    chips: ['Mainland & Free Zone', 'Renewal Tracking', 'Prerequisites Handled', 'Late Fines Avoided', 'Establishment Card'],
  },
  intro: {
    title: 'Renew Before It Becomes a Problem',
    summary: 'UAE trade licences are usually renewed every year. An expired licence can lead to fines and can block visa renewals, bank transactions and government services until it is renewed.',
    body: 'Renewal often depends on other things being in place first: a renewed tenancy or flexi-desk, audited financial statements for some free zones, or updated approvals. We track your expiry date, start early, line up each prerequisite and file the renewal so the licence never lapses.',
    image: IMG.district,
  },
  process: {
    title: 'How Licence Renewal Works',
    body: 'Five steps, starting well before expiry.',
    steps: [
      { title: 'Early Reminder', body: 'We contact you well before the expiry date to start the renewal.' },
      { title: 'Prerequisites', body: 'Tenancy, audit report, insurance and approvals checked and renewed where needed.' },
      { title: 'Application', body: 'Renewal application filed with your licensing authority.' },
      { title: 'Fees Paid', body: 'Renewal fees paid, with government fees shown separately from ours.' },
      { title: 'Licence Issued', body: 'Renewed licence issued and related records, such as the establishment card, updated.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for renewal. Requirements vary by authority.',
    items: ['Current trade licence', 'Renewed tenancy contract or flexi-desk agreement', 'Audited financial statements, if your authority requires them', 'Passport and visa copies of shareholders and manager', 'Any sector approvals due for renewal'],
  },
  benefits: {
    title: 'Why Use TMFS for Licence Renewal',
    body: 'Renewing on time protects everything that depends on the licence.',
    items: ['Expiry dates tracked for you', 'Prerequisites lined up early', 'Late renewal fines avoided', 'Visa and bank disruption avoided', 'Mainland and free zone renewals', 'Changes made at renewal where useful'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our renewal service apart.',
    items: [
      { icon: 'certificate', title: 'Tracked Deadlines', body: 'Renewals started well ahead of expiry.' },
      { icon: 'file-text', title: 'Prerequisites First', body: 'Tenancy, audit and approvals sorted before filing.' },
      { icon: 'building-store', title: 'All Authorities', body: 'Mainland departments and free zones handled alike.' },
      { icon: 'shield-check', title: 'Nothing Lapses', body: 'Licence, establishment card and visas kept aligned.' },
    ],
  },
  pillars: {
    title: 'Why Companies Choose TMFS for Renewals',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Never late', body: 'Renewals filed before expiry, every year.' },
      { icon: 'shield-check', title: 'No surprises', body: 'Fees and prerequisites known in advance.' },
      { icon: 'bulb', title: 'A chance to tidy up', body: 'Activities or details updated at renewal where it helps.' },
    ],
  },
  faq: {
    title: 'Licence Renewal: Frequently Asked Questions',
    body: 'Common questions about renewing a UAE trade licence.',
    items: [
      { q: 'How often do I renew my trade licence?', a: 'Usually every year. Some authorities offer multi-year licences.' },
      { q: 'What happens if my licence expires?', a: 'Authorities can charge late renewal fines, and an expired licence can block visa renewals, banking and other government services.' },
      { q: 'Do I need an audit to renew?', a: 'Some free zones and authorities require audited financial statements for renewal. We check what yours needs.' },
      { q: 'Can I change my activities at renewal?', a: 'Often, yes. Renewal is a good time to add or remove activities or update details.' },
      { q: 'When should I start the renewal?', a: 'At least a month before expiry, longer if your tenancy or audit also needs renewing.' },
    ],
  },
  sources: [SRC.uae],
  cta: cta('Licence Coming Up for Renewal?', 'Talk to a TMFS consultant about renewing on time, with every prerequisite in place.'),
});

const LICENCE_AMENDMENTS = servicePage({
  href: '/corporate-services/licence-amendments',
  topic: 'licence amendment',
  authority: LICENSING,
  changes: 'Amendment procedures, approvals and fees',
  meta: {
    title: 'Trade Licence & MoA Amendments in the UAE',
    description: 'Licence and MoA amendments with TMFS: activity, trade name, manager, shareholder, capital and legal form changes filed with your licensing authority and notarised where required.',
  },
  hero: {
    title: ['Licence & MoA', 'Amendments'],
    lead: 'Activity, trade name, manager, shareholder, capital and legal form changes filed with your licensing authority, with the Memorandum of Association amended and notarised where required.',
    chips: ['Activity Changes', 'Trade Name', 'Manager & Shareholders', 'Capital Changes', 'MoA Notarisation'],
  },
  intro: {
    title: 'Keep Your Licence in Step with Your Business',
    summary: 'When a business changes, its licence and Memorandum of Association must change with it. Activities, trade name, manager, shareholders, capital and legal form are all recorded with the licensing authority, and most changes need an amended MoA.',
    body: 'An out-of-date licence can cause problems with banks, customers, visas and tax registrations. We work out exactly which documents need updating, prepare and notarise the amendments, file them with your authority and update related records such as the establishment card, VAT and Corporate Tax registrations.',
    image: IMG.planning,
  },
  process: {
    title: 'How Licence Amendments Work',
    body: 'Six steps from change to updated records.',
    steps: [
      { title: 'Change Review', body: 'We confirm what is changing and which documents and approvals it affects.' },
      { title: 'Approvals', body: 'Any pre-approvals, such as for new regulated activities or trade names, obtained.' },
      { title: 'Amendment Documents', body: 'Resolutions and the amended MoA drafted.' },
      { title: 'Notarisation', body: 'Documents signed and notarised where your authority requires it.' },
      { title: 'Filing', body: 'Amendment filed with the licensing authority and the updated licence issued.' },
      { title: 'Related Updates', body: 'Establishment card, bank, VAT and Corporate Tax records updated.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for an amendment.',
    items: ['Current trade licence and MoA', 'Shareholder resolution approving the change', 'Passports and Emirates IDs of shareholders and manager', 'Details of the new activity, name or person', 'Approvals for regulated activities, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for Amendments',
    body: 'One change often touches several records.',
    items: ['Every affected document identified', 'Resolutions and MoA drafted', 'Notarisation arranged', 'Filed with your licensing authority', 'Tax registrations updated', 'Bank notified with the right documents'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our amendment service apart.',
    items: [
      { icon: 'file-text', title: 'Drafting', body: 'Resolutions and MoA amendments drafted correctly.' },
      { icon: 'scale', title: 'Notarisation', body: 'Signing and notary appointments arranged.' },
      { icon: 'receipt-tax', title: 'Tax Updates', body: 'VAT and Corporate Tax records amended to match.' },
      { icon: 'building-bank', title: 'Bank Updates', body: 'Updated documents prepared for your bank.' },
    ],
  },
  pillars: {
    title: 'Why Companies Choose TMFS for Amendments',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Nothing missed', body: 'Every record that depends on the change updated.' },
      { icon: 'shield-check', title: 'Correct documents', body: 'Amendments accepted first time.' },
      { icon: 'bulb', title: 'Joined-up', body: 'Licence, tax and banking changed together.' },
    ],
  },
  faq: {
    title: 'Licence Amendments: Frequently Asked Questions',
    body: 'Common questions about amending a UAE licence.',
    items: [
      { q: 'What can be amended?', a: 'Commonly activities, trade name, manager, shareholders, share capital, legal form and address.' },
      { q: 'Does every change need an MoA amendment?', a: 'Changes to shareholders, capital, legal form and some management details usually do. Adding an activity may not. We confirm what applies.' },
      { q: 'Do I need to update my tax registrations?', a: 'Yes. Changes to name, address, activities or ownership should be reflected in your VAT and Corporate Tax registrations.' },
      { q: 'How long does an amendment take?', a: 'Simple changes can be quick; changes needing approvals or notarisation take longer.' },
      { q: 'Can I amend my licence at renewal?', a: 'Often, yes, and it can be convenient to combine the two.' },
    ],
  },
  sources: [SRC.companies, SRC.fta],
  cta: cta('Need to Change Your Licence?', 'Talk to a TMFS consultant about amending your licence and MoA, with tax and bank records updated too.'),
});

const SHARE_TRANSFER = servicePage({
  href: '/corporate-services/share-transfer',
  topic: 'share transfer',
  authority: LICENSING,
  changes: 'Share transfer procedures, approvals and fees',
  meta: {
    title: 'Share Transfer in Dubai & the UAE',
    description: 'UAE share transfers with TMFS: ownership changes documented, notarised and registered with your licensing authority, with UBO, bank and tax records updated.',
  },
  hero: {
    title: ['Share Transfer', '& Ownership Changes'],
    lead: 'Ownership changes, partner exits and buy-ins documented, notarised and registered with your licensing authority, with UBO, bank and tax records updated to match.',
    chips: ['Partner Exits & Buy-Ins', 'Share Transfer Agreement', 'Notarisation', 'Licence Updated', 'UBO Records'],
  },
  intro: {
    title: 'Ownership Changes, Done Properly',
    summary: 'Transferring shares in a UAE company means amending the Memorandum of Association and registering the change with the licensing authority. Mainland transfers are usually notarised; free zones follow their own procedures and forms.',
    body: 'A share transfer touches more than the licence. Visas sponsored by an exiting partner, bank signatories, beneficial owner records and tax registrations all need updating. We document the transfer, handle notarisation and filing, and update every related record.',
    image: IMG.advisors,
  },
  process: {
    title: 'How a Share Transfer Works',
    body: 'Six steps from agreement to updated records.',
    steps: [
      { title: 'Transfer Review', body: 'We review the deal, the parties and what must happen for each of them.' },
      { title: 'Approvals & Clearances', body: 'Authority approvals and any required clearances obtained.' },
      { title: 'Transfer Documents', body: 'Share transfer agreement, resolutions and amended MoA drafted.' },
      { title: 'Notarisation', body: 'Documents signed and notarised where required.' },
      { title: 'Registration', body: 'Transfer registered and the updated licence issued.' },
      { title: 'Related Updates', body: 'UBO register, bank mandates, visas and tax records updated.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a share transfer.',
    items: ['Current trade licence and MoA', 'Passports and Emirates IDs of buyer and seller', 'Board or shareholder resolution approving the transfer', 'Corporate documents, if a shareholder is a company', 'Agreed transfer terms'],
  },
  benefits: {
    title: 'Why Use TMFS for Share Transfers',
    body: 'Clean transfers avoid disputes later.',
    items: ['Transfer documents drafted', 'Notarisation arranged', 'Registered with your authority', 'UBO records updated', 'Bank signatories changed', 'Visa and tax impacts handled'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our share transfer service apart.',
    items: [
      { icon: 'file-text', title: 'Proper Documentation', body: 'Agreements and resolutions that reflect what was agreed.' },
      { icon: 'affiliate', title: 'Ownership Records', body: 'UBO and shareholder registers updated.' },
      { icon: 'receipt-tax', title: 'Tax Awareness', body: 'Corporate Tax and VAT records updated, and tax effects flagged.' },
      { icon: 'id-badge', title: 'Visa Changes', body: 'Exiting partners’ visas cancelled and new ones arranged.' },
    ],
  },
  pillars: {
    title: 'Why Owners Choose TMFS for Share Transfers',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Clean exits', body: 'Departing partners removed from every record.' },
      { icon: 'shield-check', title: 'Proper paperwork', body: 'Documents that stand up later.' },
      { icon: 'bulb', title: 'Nothing left behind', body: 'Bank, visas and tax updated together.' },
    ],
  },
  faq: {
    title: 'Share Transfers: Frequently Asked Questions',
    body: 'Common questions about transferring shares in a UAE company.',
    items: [
      { q: 'Do both parties need to be present?', a: 'For notarisation, usually yes, either in person or through a properly authorised representative. Some authorities offer remote signing.' },
      { q: 'Is a share transfer different in a free zone?', a: 'Yes. Free zones have their own forms and procedures, and may not require notarisation in the same way as the mainland.' },
      { q: 'What happens to the exiting partner’s visa?', a: 'Visas sponsored through the company for the exiting partner are usually cancelled as part of the process.' },
      { q: 'Are there tax implications?', a: 'There can be, for example under Corporate Tax for gains on the transfer. We flag issues so you can take tax advice where needed.' },
      { q: 'Do I need to update the UBO register?', a: 'Yes. Beneficial owner records must be updated when ownership changes.' },
    ],
  },
  sources: [SRC.companies, SRC.ubo],
  cta: cta('Changing Ownership?', 'Talk to a TMFS consultant about documenting and registering your share transfer properly.'),
});

const LIQUIDATION = servicePage({
  href: '/corporate-services/liquidation',
  topic: 'liquidation',
  authority: LICENSING,
  changes: 'Liquidation procedures, notice periods and clearance requirements',
  meta: {
    title: 'Company Liquidation & Deregistration in the UAE',
    description: 'Close a UAE company properly with TMFS: liquidator appointment, creditor notice, FTA deregistration, visa and labour clearances and licence cancellation.',
  },
  hero: {
    title: ['Liquidation &', 'Deregistration'],
    lead: 'Close a UAE company properly, from liquidator appointment and creditor notice to tax deregistration, visa and labour clearances, bank closure and licence cancellation.',
    chips: ['Liquidator Appointment', 'Creditor Notice', 'FTA Deregistration', 'Visa & Labour Clearances', 'Licence Cancellation'],
  },
  intro: {
    title: 'Closing a Company Without Loose Ends',
    summary: 'A UAE company cannot simply stop trading. It must be formally liquidated: a liquidator is appointed, creditors are given notice, tax registrations are cancelled, visas and labour files are closed, and finally the licence is cancelled.',
    body: 'Abandoned companies keep accumulating fines, and the owners can face travel and banking problems later. We plan the closure, coordinate the liquidator, publish the required notices, deregister from VAT and Corporate Tax, close labour and immigration files and cancel the licence.',
    image: IMG.dusk,
  },
  process: {
    title: 'How Liquidation Works',
    body: 'Six steps from decision to cancelled licence.',
    steps: [
      { title: 'Closure Plan', body: 'We review outstanding visas, contracts, liabilities and tax registrations.' },
      { title: 'Resolution & Liquidator', body: 'Shareholders resolve to liquidate and a liquidator is appointed where required.' },
      { title: 'Creditor Notice', body: 'Notice published for creditors and the statutory notice period observed.' },
      { title: 'Clearances', body: 'Visas cancelled, labour file closed, and VAT and Corporate Tax deregistration filed.' },
      { title: 'Final Accounts', body: 'Liquidation accounts and report prepared, and the bank account closed.' },
      { title: 'Licence Cancellation', body: 'Licence cancelled and the company removed from the register.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a liquidation.',
    items: ['Trade licence, MoA and establishment card', 'Shareholder resolution to liquidate', 'Passports and Emirates IDs of shareholders', 'List of employees and visas', 'Recent financial statements and bank statements', 'VAT and Corporate Tax registration details'],
  },
  benefits: {
    title: 'Why Use TMFS for Liquidation',
    body: 'A clean closure protects owners from future problems.',
    items: ['Closure planned from start to finish', 'Liquidator coordinated', 'Creditor notices handled', 'VAT and Corporate Tax deregistered', 'Visas and labour files closed', 'Licence cancelled properly'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our liquidation service apart.',
    items: [
      { icon: 'file-text', title: 'Full Closure Plan', body: 'Every obligation listed before the process starts.' },
      { icon: 'receipt-tax', title: 'Tax Deregistration', body: 'Final VAT and Corporate Tax filings and deregistration handled.' },
      { icon: 'id-badge', title: 'Visa & Labour', body: 'Staff visas cancelled and labour file closed.' },
      { icon: 'shield-check', title: 'Clean Exit', body: 'Licence cancelled so no fines keep accruing.' },
    ],
  },
  pillars: {
    title: 'Why Owners Choose TMFS to Close a Company',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Done properly', body: 'Every step completed in the right order.' },
      { icon: 'shield-check', title: 'No lingering fines', body: 'Nothing left open to accrue penalties.' },
      { icon: 'bulb', title: 'Less stress', body: 'One team coordinating every authority.' },
    ],
  },
  faq: {
    title: 'Company Liquidation: Frequently Asked Questions',
    body: 'Common questions about closing a UAE company.',
    items: [
      { q: 'Can I just let my licence expire?', a: 'No. An expired licence keeps accumulating fines, and unresolved visas and tax registrations can cause problems for the owners later. The company should be formally liquidated.' },
      { q: 'Do I need a liquidator?', a: 'Mainland companies generally need an appointed liquidator. Free zones have their own procedures. We confirm what applies to you.' },
      { q: 'Do I need to deregister from VAT and Corporate Tax?', a: 'Yes. Tax registrations must be cancelled, with final returns filed, before the closure is complete.' },
      { q: 'How long does liquidation take?', a: 'It depends on the authority, notice periods and how quickly clearances are obtained. Simple closures can take a few months.' },
      { q: 'What happens to employees’ visas?', a: 'They must be cancelled and final settlements paid before the labour and immigration files can be closed.' },
    ],
  },
  sources: [SRC.companies, SRC.fta, SRC.mohre],
  cta: cta('Need to Close a Company?', 'Talk to a TMFS consultant about liquidating your company properly, with every authority cleared.'),
});

const TRADEMARK = servicePage({
  href: '/corporate-services/trademark',
  topic: 'trademark',
  authority: 'the UAE Ministry of Economy',
  changes: 'Trademark procedures, classes and fees',
  meta: {
    title: 'Trademark Registration in the UAE',
    description: 'UAE trademark registration with TMFS: searches, class selection, filing with the Ministry of Economy, publication and registration of your brand and logo.',
  },
  hero: {
    title: ['UAE Trademark', 'Registration'],
    lead: 'Brand names and logos registered with the UAE Ministry of Economy, from availability search and class selection to filing, publication and registration.',
    chips: ['Availability Search', 'Class Selection', 'Ministry of Economy Filing', 'Publication', '10-Year Protection'],
  },
  intro: {
    title: 'Protect Your Brand in the UAE',
    summary: 'UAE trademarks are registered with the Ministry of Economy under Federal Decree-Law No. 36 of 2021. Registration protects a name or logo in the classes of goods or services it covers, for 10 years, renewable.',
    body: 'A trade licence does not protect your brand. Without a registered trademark, someone else can register a similar mark in the classes you trade in. We check availability, choose the right classes, file the application and follow it through examination and publication to registration.',
    image: IMG.planning,
  },
  process: {
    title: 'How Trademark Registration Works',
    body: 'Six steps from search to certificate.',
    steps: [
      { title: 'Availability Search', body: 'We search for identical and similar marks already registered or filed.' },
      { title: 'Class Selection', body: 'The goods and services classes that match your business chosen.' },
      { title: 'Filing', body: 'The application filed with the Ministry of Economy.' },
      { title: 'Examination', body: 'The Ministry examines the application and may raise objections, which we answer.' },
      { title: 'Publication', body: 'Accepted marks are published, giving others a period to oppose.' },
      { title: 'Registration', body: 'If unopposed, the mark is registered and the certificate issued.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a trademark application.',
    items: ['The name or logo to be registered', 'Owner details, either individual or company', 'Trade licence, if filing in a company name', 'List of goods or services', 'Power of attorney, where required'],
  },
  benefits: {
    title: 'Why Use TMFS for Trademark Registration',
    body: 'Filing right the first time avoids objections and delays.',
    items: ['Availability checked before filing', 'Classes chosen to match your business', 'Objections answered', 'Publication tracked', 'Renewal reminders for the future', 'Linked to your company setup'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our trademark service apart.',
    items: [
      { icon: 'certificate', title: 'Search First', body: 'Conflicts found before you pay filing fees.' },
      { icon: 'file-text', title: 'Class Advice', body: 'Protection where you actually trade.' },
      { icon: 'shield-check', title: 'Follow-Through', body: 'Application tracked from filing to certificate.' },
      { icon: 'briefcase', title: 'Brand-Ready Setup', body: 'Trademark planned alongside your company name.' },
    ],
  },
  pillars: {
    title: 'Why Founders Choose TMFS for Trademarks',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Real protection', body: 'Marks filed in the right classes.' },
      { icon: 'shield-check', title: 'Fewer objections', body: 'Searches done before filing.' },
      { icon: 'bulb', title: 'Simple process', body: 'We handle the filing and follow-up.' },
    ],
  },
  faq: {
    title: 'UAE Trademarks: Frequently Asked Questions',
    body: 'Common questions about registering a trademark in the UAE.',
    items: [
      { q: 'Does my trade licence protect my brand name?', a: 'No. A trade name on a licence is not a registered trademark. Registering with the Ministry of Economy protects your brand in the classes it covers.' },
      { q: 'How long does protection last?', a: '10 years from the filing date, renewable for further 10-year periods.' },
      { q: 'What are classes?', a: 'Goods and services are grouped into international classes. Your mark is protected only in the classes you register.' },
      { q: 'Can someone oppose my trademark?', a: 'Yes. Accepted marks are published, and third parties can oppose within the set period.' },
      { q: 'Can I register a logo and a name together?', a: 'Yes, or separately. Separate registrations often give broader protection.' },
    ],
  },
  sources: [SRC.moe, SRC.trademarks],
  cta: cta('Want to Protect Your Brand?', 'Talk to a TMFS consultant about registering your trademark in the right classes.'),
});

const AML_COMPLIANCE = servicePage({
  href: '/corporate-services/aml-compliance',
  topic: 'AML compliance',
  authority: 'the UAE Ministry of Economy and the Financial Intelligence Unit',
  changes: 'AML/CFT laws, supervisory guidance and reporting requirements',
  meta: {
    title: 'AML Compliance & goAML Registration in the UAE',
    description: 'AML compliance for UAE businesses with TMFS: risk assessments, policies, customer due diligence procedures, compliance officer support and goAML registration for regulated activities.',
  },
  hero: {
    title: ['AML Compliance &', 'goAML Registration'],
    lead: 'Anti-money laundering programmes for businesses in regulated sectors, from risk assessment and policies to customer due diligence, compliance officer support and goAML registration.',
    chips: ['Risk Assessment', 'AML Policies', 'Customer Due Diligence', 'goAML Registration', 'Staff Training'],
  },
  intro: {
    title: 'AML Programmes That Work in Practice',
    summary: 'UAE anti-money laundering law applies to financial institutions and to designated non-financial businesses and professions (DNFBPs), including real estate brokers, dealers in precious metals and stones, corporate service providers, auditors and accountants. They must assess risk, carry out due diligence, register on goAML and report suspicious activity.',
    body: 'Supervisors expect more than a policy on file. They look for a risk assessment that fits your business, customer checks that are actually done and recorded, sanctions screening, staff training and a compliance officer who knows their duties. We build that programme with you and help you run it.',
    image: IMG.difc,
  },
  process: {
    title: 'How AML Compliance Works',
    body: 'Six steps to a working programme.',
    steps: [
      { title: 'Applicability Check', body: 'We confirm whether your activities fall under AML obligations and which supervisor applies.' },
      { title: 'Risk Assessment', body: 'Business-wide risk assessment covering customers, products, countries and channels.' },
      { title: 'Policies & Procedures', body: 'AML policy, due diligence procedures and record-keeping rules written for your business.' },
      { title: 'goAML Registration', body: 'Your business registered on goAML with the Financial Intelligence Unit.' },
      { title: 'Training', body: 'Staff trained on red flags, due diligence and reporting.' },
      { title: 'Ongoing Support', body: 'Periodic reviews, screening support and help preparing for supervisory inspections.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we typically need to build your programme.',
    items: ['Trade licence and activity details', 'Description of customers, products and payment methods', 'Ownership and management structure', 'Existing policies, if any', 'Details of the appointed compliance officer'],
  },
  benefits: {
    title: 'Why Use TMFS for AML Compliance',
    body: 'A practical programme protects your licence and reputation.',
    items: ['Risk assessment that fits your business', 'Policies written for how you operate', 'goAML registration completed', 'Due diligence procedures staff can follow', 'Staff training provided', 'Support ahead of inspections'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our AML work apart.',
    items: [
      { icon: 'shield-lock', title: 'Practical Programmes', body: 'Procedures your team can follow day to day.' },
      { icon: 'scale', title: 'Risk-Based', body: 'Effort focused where your real risks are.' },
      { icon: 'file-text', title: 'Inspection-Ready', body: 'Records kept the way supervisors expect to see them.' },
      { icon: 'users', title: 'Training', body: 'Staff who recognise red flags and know what to do.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for AML',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Fits the business', body: 'A programme sized to what you actually do.' },
      { icon: 'shield-check', title: 'Inspection confidence', body: 'Ready when the supervisor visits.' },
      { icon: 'bulb', title: 'Ongoing support', body: 'Help when a difficult customer or transaction comes up.' },
    ],
  },
  faq: {
    title: 'AML Compliance: Frequently Asked Questions',
    body: 'Common questions about AML obligations in the UAE.',
    items: [
      { q: 'Does AML law apply to my business?', a: 'It applies to financial institutions and designated non-financial businesses and professions, such as real estate brokers, precious metals and stones dealers, corporate service providers, auditors and accountants. We confirm whether your activities are covered.' },
      { q: 'What is goAML?', a: 'goAML is the UAE Financial Intelligence Unit’s platform for registration and for filing suspicious transaction and other reports.' },
      { q: 'Do I need a compliance officer?', a: 'Regulated businesses must appoint a compliance officer responsible for the AML programme and reporting.' },
      { q: 'What happens if we are not compliant?', a: 'Supervisors can impose significant fines and other sanctions for AML failures.' },
      { q: 'How often should the programme be reviewed?', a: 'At least periodically, and whenever your business, customers or the rules change.' },
    ],
  },
  sources: [SRC.moe, SRC.fiu],
  cta: cta('Need an AML Programme?', 'Talk to a TMFS consultant about building and running an AML programme that fits your business.'),
});

const UBO_FILING = servicePage({
  href: '/corporate-services/ubo-filing',
  topic: 'UBO compliance',
  authority: LICENSING,
  changes: 'Beneficial owner rules, deadlines and penalties',
  meta: {
    title: 'UBO Register & Beneficial Owner Filing in the UAE',
    description: 'UBO compliance with TMFS: beneficial owners identified, registers prepared and filed with your licensing authority, and records updated whenever ownership changes.',
  },
  hero: {
    title: ['UBO Register &', 'Beneficial Owner Filing'],
    lead: 'Beneficial owners identified, registers of beneficial owners, partners and nominees prepared, and filings made with your licensing authority and kept up to date as ownership changes.',
    chips: ['Beneficial Owners Identified', 'UBO Register', 'Authority Filing', 'Change Updates', 'Penalty Avoidance'],
  },
  intro: {
    title: 'Know and Record Who Really Owns the Company',
    summary: 'Under Cabinet Resolution No. 109 of 2023, UAE companies must keep a register of their beneficial owners: generally anyone who owns or controls 25% or more of the company, or otherwise ultimately controls it. The information must be filed with the licensing authority and kept up to date.',
    body: 'Identifying beneficial owners is simple for a company owned by individuals, but less so with holding companies, trusts or nominee arrangements. We trace ownership through each layer, prepare the required registers, file them with your licensing authority and update them whenever ownership or control changes.',
    image: IMG.advisors,
  },
  process: {
    title: 'How UBO Compliance Works',
    body: 'Five steps to a compliant register.',
    steps: [
      { title: 'Ownership Mapping', body: 'We trace ownership and control through every layer of your structure.' },
      { title: 'Beneficial Owners Identified', body: 'Individuals meeting the ownership or control tests identified.' },
      { title: 'Registers Prepared', body: 'Registers of beneficial owners, partners or shareholders and nominee directors prepared.' },
      { title: 'Authority Filing', body: 'Information filed with your licensing authority.' },
      { title: 'Ongoing Updates', body: 'Registers updated and refiled when ownership or control changes.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical information for UBO filing.',
    items: ['Trade licence and MoA', 'Passports of all individuals with ownership or control', 'Corporate documents for any company shareholders', 'Group structure chart', 'Details of nominee arrangements, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for UBO Compliance',
    body: 'UBO errors can mean fines and banking questions.',
    items: ['Ownership traced through every layer', 'Registers prepared correctly', 'Filed with your licensing authority', 'Updated after every change', 'Consistent with bank KYC records', 'Linked to share transfers and amendments'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our UBO service apart.',
    items: [
      { icon: 'affiliate', title: 'Structure Mapping', body: 'Complex and multi-layer structures traced properly.' },
      { icon: 'file-text', title: 'Correct Registers', body: 'All required registers prepared, not just one.' },
      { icon: 'shield-check', title: 'Kept Current', body: 'Updates filed whenever ownership changes.' },
      { icon: 'building-bank', title: 'Bank Consistency', body: 'Records that match what your bank holds.' },
    ],
  },
  pillars: {
    title: 'Why Companies Choose TMFS for UBO Filing',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Accurate records', body: 'The right people identified and recorded.' },
      { icon: 'shield-check', title: 'No penalties', body: 'Filings made and updated on time.' },
      { icon: 'bulb', title: 'Joined-up', body: 'UBO records updated with every ownership change.' },
    ],
  },
  faq: {
    title: 'UBO Filing: Frequently Asked Questions',
    body: 'Common questions about beneficial owner rules in the UAE.',
    items: [
      { q: 'Who is a beneficial owner?', a: 'Generally any individual who ultimately owns or controls 25% or more of the company, has 25% or more of the voting rights, or otherwise ultimately controls it.' },
      { q: 'Does this apply to free zone companies?', a: 'Yes, most UAE mainland and free zone companies are covered. Some entities, such as certain government-owned companies, are exempt.' },
      { q: 'When must the register be updated?', a: 'Whenever ownership or control changes, within the deadline set by the rules. We update and refile for you.' },
      { q: 'What if no individual owns 25%?', a: 'The person who exercises ultimate control, or failing that the senior manager, is recorded as the beneficial owner.' },
      { q: 'What are the penalties for non-compliance?', a: 'Licensing authorities can impose fines for failing to keep, file or update beneficial owner information.' },
    ],
  },
  sources: [SRC.ubo, SRC.moe],
  cta: cta('Need Your UBO Records Sorted?', 'Talk to a TMFS consultant about identifying, filing and updating your beneficial owner information.'),
});

export default [LICENCE_RENEWAL, LICENCE_AMENDMENTS, SHARE_TRANSFER, LIQUIDATION, TRADEMARK, AML_COMPLIANCE, UBO_FILING];
