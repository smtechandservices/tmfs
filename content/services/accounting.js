// Accounting & audit service pages, section by section in page order (Avyanco
// service layout). Statutory audit opinions must be signed by a Ministry of
// Economy-registered auditor, so the audit copy describes TMFS as preparing
// and coordinating rather than signing.
import { servicePage, cta, SRC, IMG } from './shared';

const BOOKKEEPING = servicePage({
  href: '/accounting-audit/bookkeeping',
  topic: 'bookkeeping',
  authority: 'the Federal Tax Authority',
  changes: 'Record-keeping, VAT and Corporate Tax requirements',
  meta: {
    title: 'Bookkeeping & Accounting Services in Dubai',
    description: 'Outsourced bookkeeping in Dubai with TMFS: books kept current to IFRS, monthly management accounts, and records ready for VAT, Corporate Tax and audit.',
  },
  hero: {
    title: ['Bookkeeping &', 'Accounting Services'],
    lead: 'Day-to-day books kept current to IFRS, with monthly management accounts and records that are always ready for VAT returns, Corporate Tax and audit.',
    chips: ['IFRS Books', 'Monthly Accounts', 'VAT-Ready Records', 'Corporate Tax-Ready', 'Cloud Software'],
  },
  intro: {
    title: 'Books That Are Ready When You Need Them',
    summary: 'UAE Corporate Tax requires every company to keep accounting records and supporting documents for at least seven years, and financial statements are expected to follow IFRS. VAT-registered businesses must also keep records that support every return.',
    body: 'Most compliance problems start with books that are months behind. We record your transactions, reconcile your bank accounts, and close each month so you always know where the business stands. When VAT, Corporate Tax or audit time comes, the numbers are already there.',
    image: IMG.planning,
  },
  process: {
    title: 'How Our Bookkeeping Works',
    body: 'Six steps, repeated every month.',
    steps: [
      { title: 'Onboarding', body: 'Chart of accounts, opening balances and accounting software set up or reviewed.' },
      { title: 'Document Collection', body: 'Invoices, receipts and bank statements collected through a simple monthly routine.' },
      { title: 'Recording', body: 'Sales, purchases, expenses and payroll recorded with the right VAT treatment.' },
      { title: 'Reconciliation', body: 'Bank, card and supplier balances reconciled every month.' },
      { title: 'Month-End Close', body: 'Accruals, prepayments and depreciation posted and the month closed.' },
      { title: 'Management Accounts', body: 'Profit and loss, balance sheet and cash summary delivered with short commentary.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we need to start and each month after.',
    items: ['Trade licence and company documents', 'Bank and card statements', 'Sales and purchase invoices', 'Expense receipts', 'Payroll details', 'Access to existing accounting software, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for Bookkeeping',
    body: 'Good books make every other obligation easier.',
    items: ['Books kept current every month', 'IFRS-based records', 'VAT treatment applied as you go', 'Ready for Corporate Tax computation', 'Monthly management accounts', 'Clean records for auditors and banks', 'Cloud software set up for you', 'One team for books, VAT and tax'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our bookkeeping apart.',
    items: [
      { icon: 'book', title: 'Monthly Close', body: 'Books closed every month, not reconstructed at year end.' },
      { icon: 'receipt-tax', title: 'Tax-Ready', body: 'Records kept with VAT returns and the Corporate Tax computation in mind.' },
      { icon: 'file-text', title: 'Management Accounts', body: 'Clear monthly reports you can actually use to run the business.' },
      { icon: 'cpu', title: 'Cloud Accounting', body: 'Modern accounting software set up and maintained for you.' },
      { icon: 'building-bank', title: 'Bank-Ready', body: 'Statements that support loan and account applications.' },
      { icon: 'shield-check', title: 'Audit-Ready', body: 'Schedules and support prepared before the auditor asks.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for Bookkeeping',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Always up to date', body: 'Books closed monthly, so there is no year-end scramble.' },
      { icon: 'shield-check', title: 'Compliant by default', body: 'VAT and Corporate Tax built into the routine.' },
      { icon: 'bulb', title: 'Useful numbers', body: 'Reports that explain how the business is doing.' },
    ],
  },
  faq: {
    title: 'Bookkeeping: Frequently Asked Questions',
    body: 'Common questions about bookkeeping in the UAE.',
    items: [
      { q: 'Is bookkeeping mandatory in the UAE?', a: 'Yes. Companies must keep proper accounting records under company law, and the Corporate Tax law requires records to be kept for at least seven years.' },
      { q: 'Which accounting standard applies?', a: 'Financial statements are generally expected to follow IFRS. Smaller businesses may be able to use IFRS for SMEs.' },
      { q: 'Do I need accounting software?', a: 'It isn’t required, but it makes bookkeeping faster and more reliable. We can set up cloud software or work with what you use.' },
      { q: 'Can you catch up on books that are behind?', a: 'Yes. We can bring past periods up to date before starting the monthly routine.' },
      { q: 'How do I send you documents?', a: 'Through a shared folder or your accounting software, on a simple monthly schedule.' },
    ],
  },
  sources: [SRC.fta, SRC.ct, SRC.vat],
  cta: cta('Need Your Books Kept Properly?', 'Talk to a TMFS consultant about monthly bookkeeping that keeps you ready for VAT, Corporate Tax and audit.'),
});

const PAYROLL = servicePage({
  href: '/accounting-audit/payroll',
  topic: 'payroll',
  authority: 'the Ministry of Human Resources and Emiratisation',
  changes: 'Wage Protection System rules, labour law and payroll requirements',
  meta: {
    title: 'Payroll & WPS Services in the UAE',
    description: 'Outsourced payroll and WPS salary processing with TMFS: monthly payroll, Wage Protection System transfers, end-of-service gratuity and payslips handled on time.',
  },
  hero: {
    title: ['Payroll &', 'WPS Services'],
    lead: 'Monthly payroll processed accurately, salaries paid through the Wage Protection System on time, and gratuity, leave and final settlements calculated under UAE labour law.',
    chips: ['Monthly Payroll', 'WPS Transfers', 'Gratuity Calculations', 'Payslips', 'Final Settlements'],
  },
  intro: {
    title: 'Salaries Paid Right, Every Month',
    summary: 'Mainland employers registered with the Ministry of Human Resources and Emiratisation must pay salaries through the Wage Protection System (WPS), using an approved bank or exchange house. Late or missing WPS payments can lead to penalties and restrictions on the company.',
    body: 'Payroll is simple until it isn’t: new joiners mid-month, unpaid leave, overtime, deductions, final settlements and gratuity. We run your payroll each month, prepare the WPS salary file, issue payslips and keep the records you need for labour and audit purposes.',
    image: IMG.district,
  },
  process: {
    title: 'How Our Payroll Service Works',
    body: 'Six steps every pay cycle.',
    steps: [
      { title: 'Setup', body: 'Employee data, contracts, pay components and WPS agent details set up.' },
      { title: 'Monthly Inputs', body: 'Joiners, leavers, leave, overtime and deductions collected before the cut-off.' },
      { title: 'Payroll Run', body: 'Gross-to-net pay calculated and checked against contracts.' },
      { title: 'Approval', body: 'Payroll summary sent to you for approval before payment.' },
      { title: 'WPS Payment', body: 'Salary file prepared for your WPS agent so salaries are paid on time.' },
      { title: 'Payslips & Records', body: 'Payslips issued and payroll posted to your accounts.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we need to run your payroll.',
    items: ['Employee list with contracts and salary details', 'MOHRE establishment details', 'WPS agent or bank details', 'Monthly attendance, leave and overtime', 'Joiners and leavers for the month', 'Approved deductions or allowances'],
  },
  benefits: {
    title: 'Why Use TMFS for Payroll',
    body: 'Payroll errors cost money and staff trust.',
    items: ['Salaries paid on time through WPS', 'Gross-to-net checked against contracts', 'Gratuity calculated under UAE labour law', 'Leave and final settlements handled', 'Payslips issued every month', 'Payroll posted to your books', 'Confidential handling of salary data'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our payroll service apart.',
    items: [
      { icon: 'users', title: 'Accurate Payroll', body: 'Every payslip checked against contracts and approved inputs.' },
      { icon: 'building-bank', title: 'WPS Compliance', body: 'Salary files prepared so payments meet WPS deadlines.' },
      { icon: 'scale', title: 'Labour Law Knowledge', body: 'Gratuity, leave and notice handled under UAE rules.' },
      { icon: 'book', title: 'Linked to Your Books', body: 'Payroll posted directly into your accounts.' },
    ],
  },
  pillars: {
    title: 'Why Employers Choose TMFS for Payroll',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'On time, every time', body: 'Salaries paid on schedule through WPS.' },
      { icon: 'shield-check', title: 'Fewer disputes', body: 'Clear payslips and correct final settlements.' },
      { icon: 'bulb', title: 'Less admin', body: 'One monthly input, and we handle the rest.' },
    ],
  },
  faq: {
    title: 'Payroll & WPS: Frequently Asked Questions',
    body: 'Common questions about payroll in the UAE.',
    items: [
      { q: 'What is WPS?', a: 'The Wage Protection System is the UAE’s electronic salary transfer system. Mainland employers registered with MOHRE must pay salaries through it using an approved bank or exchange house.' },
      { q: 'Do free zone companies use WPS?', a: 'Rules vary by free zone. Some require WPS or a similar system; others have their own requirements. We confirm what applies to you.' },
      { q: 'How is end-of-service gratuity calculated?', a: 'Under UAE labour law, gratuity is based on basic salary and length of service, typically 21 days’ basic pay per year for the first five years and 30 days per year after that, subject to a cap.' },
      { q: 'Do you handle final settlements?', a: 'Yes. We calculate final pay, leave balance, notice and gratuity when an employee leaves.' },
      { q: 'Is our salary data kept confidential?', a: 'Yes. Payroll data is restricted to the people working on your payroll.' },
    ],
  },
  sources: [SRC.mohre, SRC.labour],
  cta: cta('Need Payroll Handled?', 'Talk to a TMFS consultant about monthly payroll and WPS processing that pays your team correctly and on time.'),
});

const FINANCIAL_STATEMENTS = servicePage({
  href: '/accounting-audit/financial-statements',
  topic: 'financial reporting',
  authority: 'the Federal Tax Authority',
  changes: 'Financial reporting and audit requirements',
  meta: {
    title: 'Financial Statements Preparation in the UAE',
    description: 'IFRS financial statements prepared by TMFS for management, banks, auditors, licensing authorities and the FTA, from properly closed books.',
  },
  hero: {
    title: ['Financial Statements', 'Preparation'],
    lead: 'Year-end financial statements prepared to IFRS from properly closed books, ready for your auditor, your bank, your licensing authority and your Corporate Tax return.',
    chips: ['IFRS Statements', 'Audit-Ready', 'For Banks & Regulators', 'Corporate Tax Base', 'Year-End Close'],
  },
  intro: {
    title: 'Year-End Numbers You Can Stand Behind',
    summary: 'UAE financial statements are generally prepared under IFRS. Corporate Tax is calculated from the accounting profit in those statements, and some businesses, including those with revenue above AED 50 million and Qualifying Free Zone Persons, must have them audited.',
    body: 'Financial statements are used by more people than most owners expect: auditors, banks, licensing authorities and the FTA. We close the year properly, prepare the balance sheet, income statement, cash flow statement and notes, and make sure the figures tie back to your books and returns.',
    image: IMG.advisors,
  },
  process: {
    title: 'How Financial Statements Are Prepared',
    body: 'Six steps from year end to signed statements.',
    steps: [
      { title: 'Year-End Close', body: 'Books brought up to date, reconciled and closed for the financial year.' },
      { title: 'Adjustments', body: 'Accruals, provisions, depreciation and other year-end entries posted.' },
      { title: 'Draft Statements', body: 'Balance sheet, income statement, cash flow statement and notes prepared under IFRS.' },
      { title: 'Review With You', body: 'Draft walked through with you, with questions answered before finalising.' },
      { title: 'Audit Support', body: 'Statements and schedules provided to your auditor, where an audit is needed.' },
      { title: 'Final Statements', body: 'Final statements issued for management, banks, authorities and the tax return.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we need at year end.',
    items: ['Year-end bank statements and confirmations', 'Sales and purchase records for the year', 'Fixed asset details', 'Loan and lease agreements', 'Inventory count, if you hold stock', 'Prior-year financial statements, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for Financial Statements',
    body: 'Clean statements make audits, tax returns and bank reviews faster.',
    items: ['Prepared under IFRS', 'Tied to your books and tax returns', 'Audit schedules prepared in advance', 'Suitable for banks and licensing authorities', 'Corporate Tax computation built from the same figures', 'Explained in plain language'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our reporting work apart.',
    items: [
      { icon: 'book', title: 'From Your Books', body: 'Statements built from properly closed books, not estimates.' },
      { icon: 'receipt-tax', title: 'Tax-Aligned', body: 'The same figures feed your Corporate Tax return.' },
      { icon: 'shield-check', title: 'Audit-Ready', body: 'Supporting schedules prepared before the auditor asks.' },
      { icon: 'building-bank', title: 'Lender-Ready', body: 'Statements banks can use for credit reviews.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for Reporting',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Consistent numbers', body: 'Books, statements and tax return all agree.' },
      { icon: 'shield-check', title: 'Smoother audits', body: 'Auditors get what they need, when they need it.' },
      { icon: 'bulb', title: 'Clear explanations', body: 'You understand what your statements say.' },
    ],
  },
  faq: {
    title: 'Financial Statements: Frequently Asked Questions',
    body: 'Common questions about UAE financial statements.',
    items: [
      { q: 'Do I need financial statements if I have no audit?', a: 'Yes. Corporate Tax is calculated from your accounting profit, and banks and licensing authorities often ask for statements.' },
      { q: 'Which businesses need audited statements for Corporate Tax?', a: 'Businesses with revenue above AED 50 million and Qualifying Free Zone Persons must prepare audited financial statements. Free zones and some mainland authorities may also require an audit for licence renewal.' },
      { q: 'Which standard do you use?', a: 'IFRS, or IFRS for SMEs where it is appropriate and allowed.' },
      { q: 'How long does preparation take?', a: 'It depends on the state of your books. If we keep them monthly, year-end statements are much quicker.' },
      { q: 'Do you sign the audit report?', a: 'No. Audit opinions are signed by a Ministry of Economy-registered auditor. We prepare the statements and support the audit.' },
    ],
  },
  sources: [SRC.fta, SRC.ct, SRC.auditedFs],
  cta: cta('Need Year-End Statements?', 'Talk to a TMFS consultant about IFRS financial statements that tie to your books and tax return.'),
});

const INTERNAL_AUDIT = servicePage({
  href: '/accounting-audit/internal-audit',
  topic: 'internal audit',
  authority: 'UAE regulators',
  changes: 'Governance and control expectations',
  meta: {
    title: 'Internal Audit & Controls Review in the UAE',
    description: 'Internal audit by TMFS: reviews of controls and processes across finance, purchasing, sales and payroll that find weaknesses before external auditors or regulators do.',
  },
  hero: {
    title: ['Internal Audit &', 'Controls Review'],
    lead: 'Independent reviews of your controls and processes across finance, purchasing, sales and payroll, finding weaknesses and leakage before external auditors or regulators do.',
    chips: ['Controls Testing', 'Process Reviews', 'Fraud Risk', 'Clear Findings', 'Action Plans'],
  },
  intro: {
    title: 'Find the Gaps Before They Cost You',
    summary: 'Internal audit is an independent review of how well a business’s controls work in practice. It is not generally required by law for private UAE companies, but it is one of the most effective ways to prevent errors, leakage and fraud as a business grows.',
    body: 'As teams grow, owners step back from approving every payment, and controls that once lived in one person’s head need to be written down and tested. We review your key processes, test whether controls actually operate, and give you a short list of practical fixes ranked by risk.',
    image: IMG.planning,
  },
  process: {
    title: 'How Internal Audit Works',
    body: 'Six steps from planning to follow-up.',
    steps: [
      { title: 'Risk Assessment', body: 'We identify the processes where errors or losses would hurt most.' },
      { title: 'Audit Plan', body: 'Scope, timing and areas agreed with you.' },
      { title: 'Process Walkthroughs', body: 'Each process mapped with the people who run it.' },
      { title: 'Controls Testing', body: 'Samples tested to see whether controls work in practice.' },
      { title: 'Findings Report', body: 'Weaknesses reported with risk ratings and recommended fixes.' },
      { title: 'Follow-Up', body: 'Agreed actions tracked until they are in place.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we typically need for an internal audit.',
    items: ['Organisation chart and approval limits', 'Existing policies and procedures', 'Access to accounting and operational systems', 'Samples of transactions for testing', 'Prior audit reports, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for Internal Audit',
    body: 'Independent eyes find what busy teams miss.',
    items: ['Controls tested, not just documented', 'Findings ranked by risk', 'Practical, affordable fixes', 'Fraud and leakage risks highlighted', 'Better preparation for external audit', 'Follow-up until actions are complete'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our internal audit work apart.',
    items: [
      { icon: 'scale', title: 'Risk-Based', body: 'Time spent where the risk is, not spread evenly.' },
      { icon: 'file-text', title: 'Clear Reports', body: 'Findings in plain language, with owners and deadlines.' },
      { icon: 'bulb', title: 'Practical Fixes', body: 'Recommendations sized for growing businesses.' },
      { icon: 'shield-check', title: 'Independent View', body: 'An outside review that management can rely on.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for Internal Audit',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Real issues', body: 'Findings that matter to the business.' },
      { icon: 'shield-check', title: 'Lower risk', body: 'Weaknesses fixed before they cause losses.' },
      { icon: 'bulb', title: 'Usable advice', body: 'Fixes your team can actually put in place.' },
    ],
  },
  faq: {
    title: 'Internal Audit: Frequently Asked Questions',
    body: 'Common questions about internal audit.',
    items: [
      { q: 'Is internal audit mandatory?', a: 'Not for most private UAE companies. Some regulated sectors and listed companies have specific requirements.' },
      { q: 'How is it different from external audit?', a: 'External audit gives an opinion on your financial statements. Internal audit tests how your processes and controls work and recommends improvements.' },
      { q: 'How often should it be done?', a: 'Many businesses review their highest-risk areas once a year, rotating through other areas over time.' },
      { q: 'Which areas do you review?', a: 'Commonly purchasing and payments, sales and receivables, payroll, inventory, cash and IT access.' },
      { q: 'Will findings go to anyone else?', a: 'No. Reports go to you, or to whoever you nominate, such as a board or audit committee.' },
    ],
  },
  sources: [SRC.moe],
  cta: cta('Want Your Controls Reviewed?', 'Talk to a TMFS consultant about an internal audit focused on your highest-risk processes.'),
});

const EXTERNAL_AUDIT = servicePage({
  href: '/accounting-audit/external-audit',
  topic: 'audit',
  authority: 'the Ministry of Economy',
  changes: 'Audit requirements, auditor approvals and licensing rules',
  meta: {
    title: 'External & Statutory Audit in the UAE',
    description: 'Statutory audit for UAE companies, coordinated by TMFS: books and statements prepared, audit managed with a Ministry of Economy-registered auditor, and reports delivered for licence renewals, banks and the FTA.',
  },
  hero: {
    title: ['External &', 'Statutory Audit'],
    lead: 'Statutory audits for licence renewals, banks, shareholders and Corporate Tax, with your books and statements prepared and the audit coordinated with a Ministry of Economy-registered auditor.',
    chips: ['Statutory Audit', 'Licence Renewals', 'QFZP Audits', 'Bank Requirements', 'Audit Coordination'],
  },
  intro: {
    title: 'Audits That Run Smoothly and Finish on Time',
    summary: 'Many UAE companies need audited financial statements: free zone authorities often require them for licence renewal, Qualifying Free Zone Persons and businesses with revenue above AED 50 million need them for Corporate Tax, and banks and shareholders often ask for them.',
    body: 'Most of the time and cost of an audit goes on chasing records. We prepare your books, statements and supporting schedules, and coordinate the audit with a Ministry of Economy-registered auditor, so the audit is quicker, cheaper and finished before your renewal or filing deadline.',
    image: IMG.difc,
  },
  process: {
    title: 'How the Audit Works',
    body: 'Six steps from engagement to signed report.',
    steps: [
      { title: 'Requirement Check', body: 'We confirm why you need an audit and the deadline you are working to.' },
      { title: 'Books & Statements', body: 'Books closed and draft financial statements prepared under IFRS.' },
      { title: 'Auditor Engagement', body: 'Audit engaged with a Ministry of Economy-registered auditor accepted by your authority.' },
      { title: 'Fieldwork Support', body: 'Schedules, confirmations and explanations provided during fieldwork.' },
      { title: 'Adjustments', body: 'Audit adjustments reviewed with you and posted.' },
      { title: 'Signed Report', body: 'Audited financial statements issued for your authority, bank or tax return.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What auditors typically need.',
    items: ['Trade licence and company documents', 'Year-end bank statements', 'General ledger and trial balance', 'Sales and purchase invoices', 'Fixed asset and inventory records', 'Loan, lease and major contracts', 'Prior-year audited statements, if any'],
  },
  benefits: {
    title: 'Why Use TMFS for Your Audit',
    body: 'A prepared client gets a faster, cheaper audit.',
    items: ['Books audit-ready before fieldwork', 'Deadlines for renewal and tax tracked', 'Auditor accepted by your free zone', 'Fewer queries and adjustments', 'QFZP and Corporate Tax requirements covered', 'One team from books to signed report'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our audit support apart.',
    items: [
      { icon: 'book', title: 'Audit-Ready Books', body: 'Records prepared before the auditor arrives.' },
      { icon: 'certificate', title: 'Registered Auditors', body: 'Audits signed by Ministry of Economy-registered auditors accepted by your authority.' },
      { icon: 'shield-check', title: 'Deadline Focus', body: 'Planned around your licence renewal and tax deadlines.' },
      { icon: 'receipt-tax', title: 'Tax Alignment', body: 'Audited figures feed straight into your Corporate Tax return.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for Audits',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Faster audits', body: 'Less back-and-forth with the auditor.' },
      { icon: 'shield-check', title: 'Renewals on time', body: 'Reports ready before your licence expires.' },
      { icon: 'bulb', title: 'No surprises', body: 'Likely adjustments discussed before fieldwork.' },
    ],
  },
  faq: {
    title: 'External Audit: Frequently Asked Questions',
    body: 'Common questions about statutory audit in the UAE.',
    items: [
      { q: 'Is an audit mandatory for my company?', a: 'It depends on your jurisdiction and profile. Many free zones require audited statements for renewal; mainland companies are generally required to appoint auditors; and Qualifying Free Zone Persons and businesses with revenue above AED 50 million need audited statements for Corporate Tax.' },
      { q: 'Who can sign a UAE audit report?', a: 'An auditor registered with the UAE Ministry of Economy. Some free zones also keep their own list of approved auditors.' },
      { q: 'Do you carry out the audit yourselves?', a: 'We prepare your books and statements and coordinate the audit. The audit opinion is signed by a Ministry of Economy-registered auditor.' },
      { q: 'How long does an audit take?', a: 'For a small company with ready books, often a few weeks. Incomplete records are the main cause of delays.' },
      { q: 'What does an audit cost?', a: 'It depends on the size and complexity of the business. We give you a written quote once we understand your records.' },
    ],
  },
  sources: [SRC.moe, SRC.ct, SRC.auditedFs, SRC.companies],
  cta: cta('Need an Audit Before Your Renewal?', 'Talk to a TMFS consultant about getting your books audit-ready and your report signed on time.'),
});

const FTA_AUDIT_SUPPORT = servicePage({
  href: '/accounting-audit/fta-audit-support',
  topic: 'FTA audit',
  authority: 'the Federal Tax Authority',
  changes: 'Tax audit procedures, deadlines and penalties',
  meta: {
    title: 'FTA Tax Audit Support in the UAE',
    description: 'Support from TMFS if your business is selected for an FTA tax audit: records prepared, information requests answered, findings reviewed and reconsideration requests prepared within the deadline.',
  },
  hero: {
    title: ['FTA Tax Audit', 'Support'],
    lead: 'Preparation and support if your business is selected for an FTA VAT or Corporate Tax audit, from organising records and answering requests to reviewing findings and challenging decisions.',
    chips: ['VAT & Corporate Tax', 'Records Prepared', 'Information Requests', 'Findings Review', 'Reconsideration Requests'],
  },
  intro: {
    title: 'Calm, Organised Support When the FTA Calls',
    summary: 'The FTA can audit any registered business under the Tax Procedures Law. It usually gives advance notice, can request records and explanations, and issues assessments and penalties where it finds errors. Decisions can be challenged through a reconsideration request within strict deadlines.',
    body: 'An FTA audit goes far better when records are organised and answers are consistent. We help you prepare before the audit starts, review what the FTA asks for, respond clearly and on time, and examine any findings. Where an assessment looks wrong, we help you challenge it within the deadline.',
    image: IMG.advisors,
  },
  process: {
    title: 'How FTA Audit Support Works',
    body: 'Six steps from notification to resolution.',
    steps: [
      { title: 'Notification Review', body: 'We review the FTA’s notice, the periods and taxes in scope and the deadlines.' },
      { title: 'Pre-Audit Check', body: 'Returns and records for the periods reviewed to spot issues before the FTA does.' },
      { title: 'Records Prepared', body: 'Invoices, contracts, reconciliations and workpapers organised for the auditors.' },
      { title: 'Information Requests', body: 'FTA requests answered clearly, consistently and on time.' },
      { title: 'Findings Review', body: 'Draft findings and assessments checked against the law and your records.' },
      { title: 'Challenge if Needed', body: 'Reconsideration requests prepared within the statutory deadline where a decision looks wrong.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'What we usually need when an audit is notified.',
    items: ['The FTA audit notice', 'Tax returns for the periods in scope', 'Accounting records and ledgers', 'Sales and purchase invoices', 'Contracts and customs documents', 'Previous FTA correspondence'],
  },
  benefits: {
    title: 'Why Use TMFS for FTA Audit Support',
    body: 'How you handle an audit affects the outcome.',
    items: ['Issues spotted before the auditors find them', 'Records organised and complete', 'Consistent, timely responses', 'Findings checked against the law', 'Penalties reviewed for accuracy', 'Reconsideration requests on time'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our audit support apart.',
    items: [
      { icon: 'file-text', title: 'Organised Records', body: 'Everything the auditors need, in order.' },
      { icon: 'receipt-tax', title: 'VAT & Corporate Tax', body: 'Support across both taxes, with figures that reconcile.' },
      { icon: 'scale', title: 'Findings Review', body: 'Assessments checked against the law and the evidence.' },
      { icon: 'shield-check', title: 'Deadline Discipline', body: 'Every response and challenge filed in time.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for FTA Audits',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Prepared, not panicked', body: 'A clear plan from the day the notice arrives.' },
      { icon: 'shield-check', title: 'Consistent answers', body: 'Responses that match your records and returns.' },
      { icon: 'bulb', title: 'A fair outcome', body: 'Assessments challenged where they are wrong.' },
    ],
  },
  faq: {
    title: 'FTA Tax Audits: Frequently Asked Questions',
    body: 'Common questions about FTA tax audits.',
    items: [
      { q: 'Why was my business selected for an audit?', a: 'The FTA selects businesses using risk factors and random selection. Being selected does not mean you have done anything wrong.' },
      { q: 'Will I get notice of an audit?', a: 'Usually, yes. The FTA normally notifies the business in advance, unless it believes notice would compromise the audit.' },
      { q: 'What records will the FTA ask for?', a: 'Typically returns, invoices, accounting records, contracts and customs documents for the periods under review.' },
      { q: 'Can I challenge the outcome?', a: 'Yes. You can submit a reconsideration request to the FTA within the statutory deadline, and further appeals are possible after that.' },
      { q: 'Can past errors still be corrected?', a: 'Before an audit is notified, voluntary disclosure is usually the better route. Once an audit starts, corrections are handled within the audit.' },
    ],
  },
  sources: [SRC.fta, SRC.taxProcedures],
  cta: cta('Selected for an FTA Audit?', 'Talk to a TMFS consultant as soon as the notice arrives, so records and responses are ready in time.'),
});

export default [BOOKKEEPING, PAYROLL, FINANCIAL_STATEMENTS, INTERNAL_AUDIT, EXTERNAL_AUDIT, FTA_AUDIT_SUPPORT];
