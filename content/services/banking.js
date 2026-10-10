// Banking & finance service pages, section by section in page order (Avyanco
// service layout). TMFS introduces and prepares applications; the banks make
// every credit and account decision, which the copy says plainly.
import { servicePage, cta, SRC, IMG } from './shared';

const BANK_CHANGES = 'Bank criteria, minimum balances, pricing and Central Bank rules';

const CORPORATE_ACCOUNT = servicePage({
  href: '/banking/corporate-account',
  topic: 'corporate banking',
  authority: 'the Central Bank of the UAE',
  changes: BANK_CHANGES,
  meta: {
    title: 'Corporate Bank Account Opening in the UAE',
    description: 'Open a UAE corporate bank account with TMFS: your application prepared alongside the licence, matched across 18 partner banks and supported through compliance checks.',
  },
  hero: {
    title: ['UAE Corporate', 'Bank Account Opening'],
    lead: 'Business accounts for mainland, free zone and offshore companies, with your application prepared alongside the licence and matched to the partner bank most likely to approve your profile.',
    chips: ['18 Partner Banks', 'Mainland & Free Zone', 'Offshore Companies', 'KYC Pack Prepared', 'Follow-Up to Activation'],
  },
  intro: {
    title: 'The Right Bank for Your Profile, First Time',
    summary: 'UAE banks apply detailed know-your-customer checks to every new company: who owns it, what it does, where its money comes from and who it will trade with. Approval depends on how well that story is documented, and on choosing a bank whose risk appetite fits your business.',
    body: 'Most rejected applications fail on fit or paperwork, not on the business itself. We know which of our 18 partner banks are comfortable with your activity, nationality mix and expected transactions, and we prepare a complete application pack before it goes in. Then we follow it through compliance questions until the account is active.',
    image: IMG.difc,
  },
  process: {
    title: 'How Corporate Account Opening Works',
    body: 'Six steps from profile review to an active account.',
    steps: [
      { title: 'Profile Review', body: 'We review your activity, shareholders, expected turnover, countries you trade with and source of funds.' },
      { title: 'Bank Matching', body: 'We shortlist the partner banks most likely to accept your profile, and explain the trade-offs on fees and minimum balance.' },
      { title: 'Application Pack', body: 'Company documents, KYC forms, business profile and supporting evidence prepared together.' },
      { title: 'Submission & Meeting', body: 'The application is submitted and the bank meets the signatories, in person or by video where allowed.' },
      { title: 'Compliance Queries', body: 'We help you answer the bank’s follow-up questions quickly and consistently.' },
      { title: 'Account Activation', body: 'Account opened, online banking set up and initial deposit made.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a UAE corporate account. Banks may ask for more.',
    items: [
      'Trade licence and certificate of incorporation',
      'Memorandum and Articles of Association',
      'Passports, visas and Emirates IDs of shareholders and signatories',
      'Proof of residential address for each shareholder',
      'Business profile and expected monthly transactions',
      'Contracts, invoices or supplier details, if trading already',
      'Source of funds and personal bank statements, if requested',
    ],
  },
  benefits: {
    title: 'Why Use TMFS for Your Bank Account',
    body: 'A well-prepared application saves weeks and avoids rejections on your record.',
    items: [
      'Matched across 18 partner banks',
      'Bank chosen for fit, not just fees',
      'Complete application pack before submission',
      'Business profile written in bank language',
      'Fast answers to compliance questions',
      'Prepared in parallel with your licence',
      'Options for mainland, free zone and offshore',
      'Support through to online banking setup',
    ],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our banking support apart.',
    items: [
      { icon: 'building-bank', title: '18 Partner Banks', body: 'Local, international and digital banks, so your profile is matched rather than forced.' },
      { icon: 'file-text', title: 'Complete Packs', body: 'Applications prepared in full, which reduces queries and delays.' },
      { icon: 'user-check', title: 'Meeting Preparation', body: 'Signatories briefed before the bank interview on what will be asked.' },
      { icon: 'shield-check', title: 'Compliance Support', body: 'Follow-up questions answered quickly and consistently.' },
      { icon: 'briefcase', title: 'Setup in Parallel', body: 'Banking prepared alongside your licence, not after it.' },
      { icon: 'world', title: 'Cross-Border Profiles', body: 'Experience with foreign shareholders and international trade flows.' },
    ],
  },
  pillars: {
    title: 'Why Founders Choose TMFS for Banking',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'The right bank first', body: 'A realistic match up front instead of trial and error.' },
      { icon: 'shield-check', title: 'No surprises', body: 'Minimum balances, fees and timelines explained before you apply.' },
      { icon: 'bulb', title: 'Follow-through', body: 'We stay with the application until the account is live.' },
    ],
  },
  faq: {
    title: 'UAE Corporate Bank Accounts: Frequently Asked Questions',
    body: 'Common questions about opening a business bank account in the UAE.',
    items: [
      { q: 'How long does it take to open a corporate account?', a: 'Usually two to six weeks after a complete application, depending on the bank and the complexity of your ownership and activity.' },
      { q: 'Do I need to be in the UAE?', a: 'Most banks want to meet the signatories, and many require a UAE residence visa for at least one of them. Some offer video meetings for certain profiles.' },
      { q: 'Is there a minimum balance?', a: 'Most business accounts have a minimum average balance, which varies by bank and package. We explain the options before you apply.' },
      { q: 'Can a free zone or offshore company open a UAE account?', a: 'Yes. Free zone companies open accounts routinely. Offshore companies can too, but banks apply extra scrutiny, so preparation matters more.' },
      { q: 'Why do banks reject applications?', a: 'Usually because of unclear source of funds, high-risk activities or countries, incomplete documents, or a bank whose risk appetite doesn’t fit the profile.' },
      { q: 'Can you guarantee approval?', a: 'No. Every decision is the bank’s. What we can do is choose the right bank and present a complete, consistent application.' },
    ],
  },
  sources: [SRC.cbuae],
  cta: cta('Need a UAE Business Bank Account?', 'Talk to a TMFS consultant about the right partner bank for your company, with your application prepared alongside the licence.'),
});

const PERSONAL_ACCOUNT = servicePage({
  href: '/banking/personal-account',
  topic: 'banking',
  authority: 'the Central Bank of the UAE',
  changes: BANK_CHANGES,
  meta: {
    title: 'Personal Bank Account Opening in the UAE',
    description: 'Open a UAE personal bank account with TMFS: current and savings accounts for residents, with documents checked and the right bank and package chosen before you apply.',
  },
  hero: {
    title: ['UAE Personal', 'Bank Account Opening'],
    lead: 'Current and savings accounts for UAE residents, with your documents checked and the bank and package chosen around your salary, residency and banking needs.',
    chips: ['For UAE Residents', 'Current & Savings', 'Salary Accounts', 'Documents Checked', 'Partner Banks'],
  },
  intro: {
    title: 'A Personal Account That Fits How You Bank',
    summary: 'UAE residents can open personal current and savings accounts with a valid residence visa and Emirates ID. Banks set their own minimum salary, minimum balance and document requirements, which differ widely between packages.',
    body: 'Choosing the wrong package means fees for falling below a minimum balance or missing out on benefits you would use. We look at your salary, employer, residency status and how you bank, then recommend the right account and help you apply with complete documents.',
    image: IMG.downtown,
  },
  process: {
    title: 'How Personal Account Opening Works',
    body: 'Five steps to an active account.',
    steps: [
      { title: 'Needs Review', body: 'We look at your salary, employer, residency and what you need from the account.' },
      { title: 'Bank & Package Match', body: 'We compare partner banks on minimum balance, fees and benefits.' },
      { title: 'Document Check', body: 'Your documents are checked so the application isn’t held up.' },
      { title: 'Application', body: 'The application is submitted, in branch or digitally, depending on the bank.' },
      { title: 'Activation', body: 'Account opened, card issued and online banking set up.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a UAE personal account.',
    items: ['Passport with UAE residence visa', 'Emirates ID', 'Salary certificate or employment letter', 'Recent payslips or bank statements', 'Proof of UAE address, if requested'],
  },
  benefits: {
    title: 'Why Use TMFS for a Personal Account',
    body: 'The right package saves fees every month.',
    items: ['Packages compared across partner banks', 'Minimum balance and fees explained upfront', 'Documents checked before you apply', 'Salary transfer options explained', 'Help for new residents', 'Linked to your business banking where useful'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our personal banking support apart.',
    items: [
      { icon: 'building-bank', title: 'Partner Banks', body: 'Options across our partner banks, not a single bank’s products.' },
      { icon: 'receipt-tax', title: 'Fee Clarity', body: 'Monthly fees and minimum balances compared before you choose.' },
      { icon: 'file-text', title: 'Document Check', body: 'Applications checked before submission to avoid delays.' },
      { icon: 'user-check', title: 'New Resident Help', body: 'Guidance for people who have just received their residence visa.' },
    ],
  },
  pillars: {
    title: 'Why Residents Choose TMFS for Banking',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Clear comparisons', body: 'Accounts compared on what you will actually pay.' },
      { icon: 'shield-check', title: 'Fewer delays', body: 'Complete applications the first time.' },
      { icon: 'bulb', title: 'Joined-up advice', body: 'Personal and business banking considered together.' },
    ],
  },
  faq: {
    title: 'UAE Personal Bank Accounts: Frequently Asked Questions',
    body: 'Common questions about opening a personal account in the UAE.',
    items: [
      { q: 'Do I need a residence visa?', a: 'For most personal current accounts, yes, along with an Emirates ID. Non-residents can look at our non-resident account service instead.' },
      { q: 'Is there a minimum salary?', a: 'Some packages require a minimum monthly salary and others a minimum balance. Requirements vary by bank and package.' },
      { q: 'What is a salary transfer account?', a: 'An account where your employer pays your salary. Some benefits and credit products are only available with a salary transfer.' },
      { q: 'How long does it take?', a: 'Often a few days once your documents are complete, though it varies by bank.' },
      { q: 'Can you guarantee approval?', a: 'No. Every decision is the bank’s. We help you choose the right bank and apply with complete documents.' },
    ],
  },
  sources: [SRC.cbuae],
  cta: cta('Need a UAE Personal Account?', 'Talk to a TMFS consultant about the right bank and package for your salary and needs.'),
});

const NON_RESIDENT_ACCOUNT = servicePage({
  href: '/banking/non-resident-account',
  topic: 'banking',
  authority: 'the Central Bank of the UAE',
  changes: BANK_CHANGES,
  meta: {
    title: 'Non-Resident & Offshore Bank Accounts in the UAE',
    description: 'UAE bank accounts for non-residents and offshore companies with TMFS: banks that accept founders and investors without a UAE residence visa, with KYC prepared in full.',
  },
  hero: {
    title: ['Non-Resident &', 'Offshore Bank Accounts'],
    lead: 'UAE bank accounts for founders, investors and offshore companies without a UAE residence visa, with the banks that accept these profiles and a complete KYC pack.',
    chips: ['No UAE Visa Needed', 'Offshore Companies', 'Investors & Founders', 'KYC Pack Prepared', 'Partner Banks'],
  },
  intro: {
    title: 'UAE Banking Without UAE Residency',
    summary: 'Some UAE banks offer accounts to non-residents and to offshore companies, usually with higher minimum balances and more detailed checks on source of funds and the purpose of the account.',
    body: 'Only a subset of banks will consider non-resident profiles, and each has its own rules on nationality, minimum deposit and in-person meetings. We know which partner banks accept your profile and prepare the evidence they will ask for, so you apply where approval is realistic.',
    image: IMG.district,
  },
  process: {
    title: 'How Non-Resident Account Opening Works',
    body: 'Six steps from eligibility to activation.',
    steps: [
      { title: 'Eligibility Check', body: 'Nationality, country of residence, purpose of the account and expected transactions reviewed.' },
      { title: 'Bank Shortlist', body: 'Partner banks that accept your profile shortlisted, with minimum balances explained.' },
      { title: 'KYC Pack', body: 'Identity, address, income and source of funds documents prepared and certified where needed.' },
      { title: 'Application', body: 'Application submitted, with a bank meeting in the UAE or by video where allowed.' },
      { title: 'Compliance Queries', body: 'Follow-up questions answered promptly and consistently.' },
      { title: 'Activation', body: 'Account opened and online banking set up for use from abroad.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents. Banks often ask for more from non-residents.',
    items: ['Passport', 'Proof of address in your country of residence', 'Recent personal bank statements', 'Bank reference letter', 'Evidence of income or source of funds', 'Company documents, for offshore company accounts'],
  },
  benefits: {
    title: 'Why Use TMFS for a Non-Resident Account',
    body: 'Non-resident banking is mostly about knowing which doors are open.',
    items: ['Only banks that accept your profile', 'Minimum balances explained upfront', 'Source of funds evidence prepared properly', 'Support for offshore company accounts', 'Help arranging the bank meeting', 'Follow-through on compliance queries'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our non-resident banking support apart.',
    items: [
      { icon: 'world', title: 'Cross-Border Experience', body: 'Regular work with founders and investors living outside the UAE.' },
      { icon: 'building-bank', title: 'Bank Knowledge', body: 'We know which partner banks accept which profiles.' },
      { icon: 'file-text', title: 'Full KYC Packs', body: 'Evidence prepared to the standard banks expect from non-residents.' },
      { icon: 'affiliate', title: 'Offshore Structures', body: 'Accounts for RAK ICC and other holding companies.' },
    ],
  },
  pillars: {
    title: 'Why Investors Choose TMFS for Banking',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Realistic options', body: 'Applications only where approval is likely.' },
      { icon: 'shield-check', title: 'Proper evidence', body: 'Source of funds documented the way banks want it.' },
      { icon: 'bulb', title: 'Remote-friendly', body: 'As much as possible handled before you travel.' },
    ],
  },
  faq: {
    title: 'Non-Resident Accounts: Frequently Asked Questions',
    body: 'Common questions about UAE banking for non-residents.',
    items: [
      { q: 'Can a non-resident open a UAE bank account?', a: 'Yes, with some banks. Expect higher minimum balances and more detailed checks than for residents.' },
      { q: 'Do I need to visit the UAE?', a: 'Many banks require an in-person meeting. Some allow video meetings for certain profiles.' },
      { q: 'Can my offshore company open a UAE account?', a: 'Yes, but banks apply extra scrutiny. A clear purpose, ownership chart and source of funds make the difference.' },
      { q: 'Would a residence visa make it easier?', a: 'Usually, yes. Many founders set up a free zone company with an investor visa, which opens up more banking options.' },
      { q: 'Can you guarantee approval?', a: 'No. Every decision is the bank’s. We choose banks that accept your profile and present a complete application.' },
    ],
  },
  sources: [SRC.cbuae],
  cta: cta('Need a UAE Account Without Residency?', 'Talk to a TMFS consultant about the partner banks that accept your profile.'),
});

const BUSINESS_LOANS = servicePage({
  href: '/banking/business-loans',
  topic: 'business finance',
  authority: 'the Central Bank of the UAE',
  changes: 'Lending criteria, rates and Central Bank rules',
  meta: {
    title: 'Business Loans & SME Finance in the UAE',
    description: 'UAE business loans and SME finance with TMFS: working capital, trade finance and term loans compared across 18 partner banks, with your financials prepared for lenders.',
  },
  hero: {
    title: ['Business Loans &', 'SME Finance'],
    lead: 'Working capital, trade finance and term loans compared across our 18 partner banks, with your financials and application prepared the way lenders want to see them.',
    chips: ['Working Capital', 'Trade Finance', 'Term Loans', 'Compared Across Banks', 'Financials Prepared'],
  },
  intro: {
    title: 'Finance Matched to How Your Business Earns',
    summary: 'UAE lenders assess business loans on trading history, audited financials, bank statements and the credit record of the company and its owners with the Al Etihad Credit Bureau. Each bank sets its own minimum turnover and years in business.',
    body: 'The right facility depends on how cash moves through your business: a revolving working capital line, trade finance for imports, or a term loan for equipment or expansion. We compare options across our partner banks and prepare a lending pack that answers the questions underwriters will ask.',
    image: IMG.planning,
  },
  process: {
    title: 'How Business Finance Works',
    body: 'Six steps from need to drawdown.',
    steps: [
      { title: 'Finance Review', body: 'We look at what the money is for, your cash cycle and how much you can comfortably repay.' },
      { title: 'Eligibility Check', body: 'Trading history, turnover, financials and credit record checked against lender criteria.' },
      { title: 'Lender Comparison', body: 'Suitable facilities compared across partner banks on rate, fees, security and terms.' },
      { title: 'Lending Pack', body: 'Financial statements, bank statements and a clear business summary prepared.' },
      { title: 'Application & Credit Review', body: 'Application submitted and lender questions answered during credit review.' },
      { title: 'Offer & Drawdown', body: 'Offer terms explained before you sign, then funds drawn down.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for business finance.',
    items: ['Trade licence and company documents', 'Audited financial statements, usually for one to two years', 'Business bank statements, usually six to twelve months', 'Passports and Emirates IDs of shareholders', 'VAT returns, if registered', 'Details of existing loans and facilities'],
  },
  benefits: {
    title: 'Why Use TMFS for Business Finance',
    body: 'Lenders respond to clear, complete applications.',
    items: ['Options compared across 18 partner banks', 'Facility matched to your cash cycle', 'Financials prepared for underwriters', 'Eligibility checked before you apply', 'Offer terms explained in plain language', 'Accounting and audit support in-house'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our finance support apart.',
    items: [
      { icon: 'building-bank', title: 'Lender Comparison', body: 'Facilities compared across our partner banks, not one bank’s menu.' },
      { icon: 'book', title: 'Lender-Ready Financials', body: 'Books and statements prepared by our accounting team.' },
      { icon: 'scale', title: 'Right Facility', body: 'Working capital, trade finance or term loan, chosen for how you trade.' },
      { icon: 'shield-check', title: 'Clear Terms', body: 'Rates, fees, security and covenants explained before you sign.' },
    ],
  },
  pillars: {
    title: 'Why Businesses Choose TMFS for Finance',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Better preparation', body: 'Applications that answer lender questions before they are asked.' },
      { icon: 'shield-check', title: 'Honest eligibility', body: 'A straight view of what you can realistically get.' },
      { icon: 'bulb', title: 'Joined-up support', body: 'Accounts, audit and banking under one roof.' },
    ],
  },
  faq: {
    title: 'UAE Business Loans: Frequently Asked Questions',
    body: 'Common questions about business finance in the UAE.',
    items: [
      { q: 'Can a new company get a business loan?', a: 'It is difficult. Most lenders want one to two years of trading history and financial statements. Some products, such as finance against card sales, can come earlier.' },
      { q: 'What do lenders look at?', a: 'Turnover, profitability, bank statements, existing debt and the credit record of the company and its owners with the Al Etihad Credit Bureau.' },
      { q: 'Do I need collateral?', a: 'It depends on the facility and lender. Many SME facilities require a personal guarantee from the owners; larger facilities may need security.' },
      { q: 'How long does approval take?', a: 'From a few weeks to longer for larger or secured facilities, depending on the lender and how complete the application is.' },
      { q: 'Can you guarantee approval?', a: 'No. Every credit decision is the lender’s. We improve your chances by choosing suitable lenders and preparing a complete application.' },
    ],
  },
  sources: [SRC.cbuae, SRC.aecb],
  cta: cta('Looking for Business Finance?', 'Talk to a TMFS consultant about the right facility for your business, compared across our partner banks.'),
});

const PERSONAL_LOANS = servicePage({
  href: '/banking/personal-loans',
  topic: 'personal finance',
  authority: 'the Central Bank of the UAE',
  changes: 'Lending criteria, rates and Central Bank rules',
  meta: {
    title: 'Personal Loans in the UAE: Compared Across Banks',
    description: 'Compare UAE personal loans with TMFS: eligibility checked upfront, rates and fees compared across partner banks, and Central Bank lending limits explained.',
  },
  hero: {
    title: ['UAE Personal Loans', 'Compared Across Banks'],
    lead: 'Personal finance compared across partner banks, with your eligibility checked upfront and the true cost of each offer explained before you apply.',
    chips: ['Eligibility Checked', 'Rates Compared', 'Salary & Non-Salary Transfer', 'Debt Consolidation', 'Partner Banks'],
  },
  intro: {
    title: 'The Right Loan, Not Just the Lowest Advertised Rate',
    summary: 'UAE personal loans are regulated by the Central Bank, which caps total monthly debt repayments at 50% of salary and limits personal loans to 20 times monthly salary over a maximum of 48 months.',
    body: 'Advertised rates rarely tell the whole story. Processing fees, insurance, early settlement charges and whether a salary transfer is required all change the real cost. We check what you are eligible for, compare offers on total cost and help you apply to the right lender once.',
    image: IMG.dusk,
  },
  process: {
    title: 'How Personal Loan Comparison Works',
    body: 'Five steps to the right offer.',
    steps: [
      { title: 'Eligibility Check', body: 'Salary, employer, existing debts and credit record reviewed against lender criteria.' },
      { title: 'Offer Comparison', body: 'Offers compared on rate, fees, insurance and early settlement terms.' },
      { title: 'Document Pack', body: 'Your documents checked and prepared for the chosen lender.' },
      { title: 'Application', body: 'Application submitted and lender questions answered.' },
      { title: 'Offer & Disbursement', body: 'Final terms explained before you sign, then funds released.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a personal loan.',
    items: ['Passport with UAE residence visa', 'Emirates ID', 'Salary certificate', 'Recent bank statements, usually three to six months', 'Details of existing loans and credit cards'],
  },
  benefits: {
    title: 'Why Use TMFS for a Personal Loan',
    body: 'One well-chosen application beats several rejected ones.',
    items: ['Eligibility checked before you apply', 'Offers compared on total cost', 'Salary transfer requirements explained', 'Debt consolidation options reviewed', 'Fewer applications on your credit record', 'Plain-language explanation of terms'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our personal finance support apart.',
    items: [
      { icon: 'building-bank', title: 'Partner Banks', body: 'Offers compared across our partner banks.' },
      { icon: 'receipt-tax', title: 'True Cost', body: 'Fees, insurance and settlement charges included in the comparison.' },
      { icon: 'shield-check', title: 'Eligibility First', body: 'We check what you qualify for before anything is submitted.' },
      { icon: 'user-check', title: 'Personal Guidance', body: 'One consultant from comparison to disbursement.' },
    ],
  },
  pillars: {
    title: 'Why Residents Choose TMFS for Loans',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Honest comparisons', body: 'Offers compared on what you will really pay.' },
      { icon: 'shield-check', title: 'Protected credit record', body: 'Fewer, better-targeted applications.' },
      { icon: 'bulb', title: 'Clear terms', body: 'Every condition explained before you sign.' },
    ],
  },
  faq: {
    title: 'UAE Personal Loans: Frequently Asked Questions',
    body: 'Common questions about personal loans in the UAE.',
    items: [
      { q: 'How much can I borrow?', a: 'Central Bank rules limit personal loans to 20 times your monthly salary, and total monthly debt repayments to 50% of your salary. Each lender then applies its own criteria.' },
      { q: 'What is the maximum loan term?', a: 'Personal loans are limited to a maximum of 48 months under Central Bank rules.' },
      { q: 'Do I need to transfer my salary?', a: 'Not always. Salary transfer loans often have better rates; non-salary transfer loans are available from some lenders with stricter criteria.' },
      { q: 'Does applying affect my credit score?', a: 'Applications are recorded with the Al Etihad Credit Bureau. Applying to many lenders at once can count against you, which is why we compare first.' },
      { q: 'Can you guarantee approval?', a: 'No. Every credit decision is the lender’s. We help you apply to the lender most likely to approve you.' },
    ],
  },
  sources: [SRC.cbuae, SRC.aecb],
  cta: cta('Comparing Personal Loans?', 'Talk to a TMFS consultant about what you are eligible for and which offer really costs least.'),
});

const MORTGAGES = servicePage({
  href: '/banking/mortgages',
  topic: 'mortgage',
  authority: 'the Central Bank of the UAE',
  changes: 'Mortgage criteria, loan-to-value limits, rates and fees',
  meta: {
    title: 'UAE Mortgages for Residents & Non-Residents',
    description: 'UAE home finance with TMFS: mortgages compared across lenders for residents and non-residents, with Central Bank loan-to-value limits, fees and eligibility explained.',
  },
  hero: {
    title: ['UAE Mortgages', 'for Residents & Non-Residents'],
    lead: 'Home finance compared across lenders for residents and non-residents, with loan-to-value limits, fees and eligibility explained before you commit to a property.',
    chips: ['Residents & Non-Residents', 'Rates Compared', 'Pre-Approval', 'Fees Explained', 'Partner Banks'],
  },
  intro: {
    title: 'Home Finance Planned Before You Buy',
    summary: 'UAE mortgages are subject to Central Bank limits. For an expatriate buying a first home worth up to AED 5 million, banks can lend up to 80% of the value; the limits are lower for more expensive properties, off-plan purchases and investment properties, and terms run up to 25 years.',
    body: 'Knowing your budget before you make an offer avoids losing a deposit. We check your eligibility, compare fixed and variable offers across lenders, explain the upfront costs such as registration and valuation fees, and support you from pre-approval to final offer.',
    image: IMG.downtown,
  },
  process: {
    title: 'How Mortgage Support Works',
    body: 'Six steps from budget to completion.',
    steps: [
      { title: 'Budget & Eligibility', body: 'Income, existing debt, residency and deposit reviewed to set a realistic budget.' },
      { title: 'Lender Comparison', body: 'Fixed and variable offers compared on rate, fees and early settlement terms.' },
      { title: 'Pre-Approval', body: 'Pre-approval obtained so you can make offers with confidence.' },
      { title: 'Valuation', body: 'Once you choose a property, the lender arranges a valuation.' },
      { title: 'Final Offer', body: 'Final offer terms explained before you sign.' },
      { title: 'Transfer & Registration', body: 'Funds released at transfer, with the mortgage registered with the land department.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a UAE mortgage.',
    items: ['Passport, and visa and Emirates ID if resident', 'Salary certificate or proof of business income', 'Bank statements, usually six months', 'Details of existing loans and credit cards', 'Property details, once chosen', 'Proof of address abroad, for non-residents'],
  },
  benefits: {
    title: 'Why Use TMFS for Your Mortgage',
    body: 'The cheapest rate is not always the cheapest mortgage.',
    items: ['Offers compared across lenders', 'Budget set before you house-hunt', 'Upfront costs explained clearly', 'Options for non-residents', 'Self-employed income presented properly', 'Support through to transfer'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our mortgage support apart.',
    items: [
      { icon: 'building-bank', title: 'Lender Comparison', body: 'Offers compared across banks on total cost, not just headline rate.' },
      { icon: 'world', title: 'Non-Resident Options', body: 'Lenders that finance buyers living outside the UAE.' },
      { icon: 'briefcase', title: 'Self-Employed Buyers', body: 'Business income documented the way lenders want to see it.' },
      { icon: 'shield-check', title: 'Cost Clarity', body: 'Registration, valuation and bank fees explained before you commit.' },
    ],
  },
  pillars: {
    title: 'Why Buyers Choose TMFS for Mortgages',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Realistic budgets', body: 'A clear view of what you can borrow before you make an offer.' },
      { icon: 'shield-check', title: 'No hidden costs', body: 'Every fee explained upfront.' },
      { icon: 'bulb', title: 'End-to-end support', body: 'From pre-approval to transfer day.' },
    ],
  },
  faq: {
    title: 'UAE Mortgages: Frequently Asked Questions',
    body: 'Common questions about home finance in the UAE.',
    items: [
      { q: 'How much deposit do I need?', a: 'For an expatriate’s first home up to AED 5 million, at least 20% plus fees. Higher-value properties, investment properties, off-plan purchases and non-residents usually need a larger deposit.' },
      { q: 'Can non-residents get a UAE mortgage?', a: 'Yes, with some lenders, usually at a lower loan-to-value and with more documentation.' },
      { q: 'What is the maximum mortgage term?', a: 'Up to 25 years, subject to age limits at the end of the term that vary by lender.' },
      { q: 'What upfront costs should I expect?', a: 'Land department transfer and mortgage registration fees, valuation fees, bank processing fees and agency fees where applicable. We give you a breakdown for your purchase.' },
      { q: 'Fixed or variable rate?', a: 'Fixed rates give certainty for an initial period; variable rates move with the benchmark. We compare both for your situation.' },
      { q: 'Can you guarantee approval?', a: 'No. Every decision is the lender’s. We help you apply to the lender most likely to approve you on good terms.' },
    ],
  },
  sources: [SRC.cbuae, SRC.dld],
  cta: cta('Planning to Buy Property?', 'Talk to a TMFS consultant about your budget and the mortgage offers available to you.'),
});

export default [CORPORATE_ACCOUNT, PERSONAL_ACCOUNT, NON_RESIDENT_ACCOUNT, BUSINESS_LOANS, PERSONAL_LOANS, MORTGAGES];
