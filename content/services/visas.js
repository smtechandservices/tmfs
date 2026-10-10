// PRO & visa service pages, section by section in page order (Avyanco service
// layout). Immigration decisions sit with ICP or GDRFA, which the copy says.
import { servicePage, cta, SRC, IMG } from './shared';

const IMMIGRATION = 'the UAE immigration authorities (ICP and GDRFA)';
const VISA_CHANGES = 'Visa categories, eligibility criteria, fees and processing steps';

const PRO_SERVICES = servicePage({
  href: '/corporate-services/pro-services',
  topic: 'PRO',
  authority: 'UAE government departments',
  changes: 'Government procedures, fees and document requirements',
  meta: {
    title: 'PRO Services in Dubai & the UAE',
    description: 'Corporate PRO services with TMFS: government liaison for licences, establishment cards, labour and immigration files, visas and approvals, handled so your business doesn’t stall.',
  },
  hero: {
    title: ['Corporate PRO', 'Services'],
    lead: 'Government liaison for licences, establishment cards, labour and immigration files, visas and approvals, handled by people who deal with the departments every day.',
    chips: ['Government Liaison', 'Establishment Cards', 'Labour & Immigration', 'Visa Processing', 'Approvals'],
  },
  intro: {
    title: 'Government Paperwork, Handled',
    summary: 'Running a UAE company involves regular dealings with the licensing authority, the Ministry of Human Resources and Emiratisation, the immigration authorities and other departments. A PRO (public relations officer) prepares and submits these applications on the company’s behalf.',
    body: 'Hiring a full-time PRO rarely makes sense for a small or growing company. We handle your establishment card, labour and immigration files, employee visas, renewals and approvals as you need them, keep track of expiry dates and tell you before anything lapses.',
    image: IMG.downtown,
  },
  process: {
    title: 'How Our PRO Service Works',
    body: 'Six steps for any government transaction.',
    steps: [
      { title: 'Request', body: 'You tell us what you need, or we flag an upcoming renewal.' },
      { title: 'Requirements Check', body: 'We confirm the documents, approvals and fees for the transaction.' },
      { title: 'Document Preparation', body: 'Forms, typing, translations and attestations prepared.' },
      { title: 'Submission', body: 'The application is submitted online or in person at the right department.' },
      { title: 'Follow-Up', body: 'Queries answered and the application tracked to approval.' },
      { title: 'Completion & Records', body: 'Documents delivered to you and expiry dates logged for next time.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for PRO work. Each transaction has its own list.',
    items: ['Trade licence and establishment card', 'Passport and visa copies of the people involved', 'Emirates ID copies', 'Signed application forms or authorisations', 'Supporting documents for the specific transaction'],
  },
  benefits: {
    title: 'Why Use TMFS for PRO Services',
    body: 'Government processes are quicker when someone knows them well.',
    items: ['No full-time PRO salary or visa', 'Applications prepared correctly first time', 'Expiry dates tracked for you', 'Labour and immigration handled together', 'Fewer trips to government offices', 'Linked to your licence and visa files'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our PRO service apart.',
    items: [
      { icon: 'id-badge', title: 'Labour & Immigration', body: 'Establishment cards, work permits and visas handled together.' },
      { icon: 'file-text', title: 'Correct Paperwork', body: 'Forms, translations and attestations prepared properly.' },
      { icon: 'shield-check', title: 'Renewal Tracking', body: 'Reminders well before licences, cards and visas expire.' },
      { icon: 'briefcase', title: 'On Demand', body: 'Use us when you need us, without a full-time hire.' },
    ],
  },
  pillars: {
    title: 'Why Companies Choose TMFS for PRO Work',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Things get done', body: 'Applications followed through to approval.' },
      { icon: 'shield-check', title: 'Nothing lapses', body: 'Expiry dates tracked across your company and staff.' },
      { icon: 'bulb', title: 'One contact', body: 'One team for licence, labour and immigration matters.' },
    ],
  },
  faq: {
    title: 'PRO Services: Frequently Asked Questions',
    body: 'Common questions about PRO services in the UAE.',
    items: [
      { q: 'What does a PRO do?', a: 'A PRO prepares and submits applications to government departments on a company’s behalf, such as licence renewals, establishment cards, work permits and visas.' },
      { q: 'Do I need a PRO?', a: 'Every company deals with government departments. Many small and medium businesses outsource PRO work rather than employ a PRO full time.' },
      { q: 'Can you handle free zone transactions too?', a: 'Yes. Free zones have their own portals and processes, which we handle alongside mainland ones.' },
      { q: 'How are government fees charged?', a: 'Government fees are passed through at cost and shown separately from our service fee.' },
      { q: 'Can you speed up an application?', a: 'We can make sure it is complete and correctly submitted. Processing times are set by the relevant department.' },
    ],
  },
  sources: [SRC.mohre, SRC.icp, SRC.gdrfa],
  cta: cta('Need PRO Support?', 'Talk to a TMFS consultant about handling your government transactions, renewals and approvals.'),
});

const DOCUMENT_CLEARING = servicePage({
  href: '/corporate-services/document-clearing',
  topic: 'document clearing',
  authority: 'the UAE Ministry of Foreign Affairs',
  changes: 'Attestation steps, fees and accepted document formats',
  meta: {
    title: 'Document Attestation & Clearing in the UAE',
    description: 'Document attestation, legal translation and clearing with TMFS: certificates and company documents attested for use with UAE authorities, banks and employers.',
  },
  hero: {
    title: ['Document Clearing', '& Attestation'],
    lead: 'Personal and company documents attested, translated and cleared for use with UAE authorities, banks and employers, from degree and marriage certificates to board resolutions.',
    chips: ['Certificate Attestation', 'Legal Translation', 'MOFA Attestation', 'Company Documents', 'Document Typing'],
  },
  intro: {
    title: 'Documents Accepted the First Time',
    summary: 'Documents issued abroad usually need to be attested before UAE authorities will accept them: notarised in the issuing country, attested by its foreign ministry and the UAE embassy there, and then attested by the UAE Ministry of Foreign Affairs. Documents not in Arabic or English may also need legal translation.',
    body: 'A missing stamp can stall a visa, a company setup or a bank account for weeks. We tell you exactly which steps your document needs, handle the UAE side, coordinate the overseas steps where possible, and arrange certified legal translation when it is required.',
    image: IMG.advisors,
  },
  process: {
    title: 'How Document Clearing Works',
    body: 'Five steps from requirement to accepted document.',
    steps: [
      { title: 'Requirement Check', body: 'We confirm what the receiving authority needs and which steps your document is missing.' },
      { title: 'Home-Country Steps', body: 'Notarisation, foreign ministry and UAE embassy attestation arranged or guided.' },
      { title: 'MOFA Attestation', body: 'The document attested by the UAE Ministry of Foreign Affairs.' },
      { title: 'Translation', body: 'Certified legal translation into Arabic, where required.' },
      { title: 'Submission', body: 'The cleared document submitted to the authority or returned to you.' },
    ],
  },
  documents: {
    title: 'Documents We Commonly Clear',
    body: 'Personal and corporate documents we handle regularly.',
    items: ['Degree and education certificates', 'Marriage and birth certificates', 'Certificates of incorporation and good standing', 'Board resolutions and powers of attorney', 'Memorandum and Articles of foreign parent companies', 'Commercial invoices and certificates of origin'],
  },
  benefits: {
    title: 'Why Use TMFS for Document Clearing',
    body: 'Getting the chain of stamps right saves weeks.',
    items: ['Exact steps confirmed upfront', 'UAE attestation handled for you', 'Overseas steps coordinated where possible', 'Certified legal translation arranged', 'Linked to your visa or company file', 'Progress tracked to completion'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our document clearing apart.',
    items: [
      { icon: 'certificate', title: 'Attestation Chains', body: 'We know the steps for common countries and document types.' },
      { icon: 'file-text', title: 'Legal Translation', body: 'Certified translations arranged when authorities require Arabic.' },
      { icon: 'world', title: 'Overseas Coordination', body: 'Guidance on the home-country steps before you send documents.' },
      { icon: 'shield-check', title: 'First-Time Acceptance', body: 'Documents checked against the receiving authority’s requirements.' },
    ],
  },
  pillars: {
    title: 'Why Clients Choose TMFS for Attestation',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Clear instructions', body: 'You know exactly what each document needs.' },
      { icon: 'shield-check', title: 'Fewer rejections', body: 'Documents accepted the first time.' },
      { icon: 'bulb', title: 'Joined-up', body: 'Attestation tied into your visa or setup timeline.' },
    ],
  },
  faq: {
    title: 'Document Attestation: Frequently Asked Questions',
    body: 'Common questions about attesting documents for the UAE.',
    items: [
      { q: 'Why do my documents need attesting?', a: 'UAE authorities need assurance that documents issued abroad are genuine. Attestation confirms this through a chain of official stamps.' },
      { q: 'Which documents need attestation?', a: 'Commonly degree certificates for employment visas, marriage and birth certificates for family visas, and company documents for setup or banking.' },
      { q: 'Do I need a translation?', a: 'Some authorities require documents in Arabic. Where they do, a certified legal translation is needed.' },
      { q: 'How long does attestation take?', a: 'It depends mainly on the home-country steps. UAE-side attestation is usually quick once the earlier stamps are in place.' },
      { q: 'Can you attest documents from any country?', a: 'We can guide the process for most countries. Requirements differ by country and document type, so we confirm them first.' },
    ],
  },
  sources: [SRC.mofa, SRC.uae],
  cta: cta('Need Documents Attested?', 'Talk to a TMFS consultant about the exact steps your documents need for the UAE.'),
});

const RESIDENCE_VISAS = servicePage({
  href: '/corporate-services/residence-visas',
  topic: 'visa',
  authority: IMMIGRATION,
  changes: VISA_CHANGES,
  meta: {
    title: 'UAE Residence Visas for Investors & Employees',
    description: 'UAE residence visas with TMFS: investor, partner and employee visas processed from entry permit to Emirates ID, including medical tests and labour approvals.',
  },
  hero: {
    title: ['UAE Residence Visas', 'for Owners & Staff'],
    lead: 'Investor, partner and employee residence visas processed end to end, from entry permit and status change to medical test, Emirates ID and residence issuance.',
    chips: ['Investor Visas', 'Employee Visas', 'Medical & Emirates ID', 'Status Change', 'Renewals'],
  },
  intro: {
    title: 'Residence Visas Without the Runaround',
    summary: 'A UAE residence visa lets owners and employees live in the UAE. It is sponsored by your company, issued by the immigration authorities after a medical fitness test and Emirates ID biometrics, and must be renewed before it expires.',
    body: 'Visa processing involves several authorities and steps, each with its own requirements. We prepare the applications, book medicals and biometrics, track each stage and keep a record of every visa’s expiry date so renewals happen on time.',
    image: IMG.dusk,
  },
  process: {
    title: 'How Residence Visa Processing Works',
    body: 'Six steps from application to residence.',
    steps: [
      { title: 'Eligibility & Quota', body: 'We confirm the company’s visa allocation and the applicant’s eligibility.' },
      { title: 'Work Permit or Approval', body: 'Labour approval or free zone employment approval obtained where needed.' },
      { title: 'Entry Permit', body: 'Entry permit issued, or status changed if the applicant is already in the UAE.' },
      { title: 'Medical Test', body: 'Medical fitness test booked and completed at an approved centre.' },
      { title: 'Emirates ID', body: 'Biometrics taken and Emirates ID application processed.' },
      { title: 'Residence Issued', body: 'Residence visa issued and the expiry date logged for renewal.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for a residence visa.',
    items: ['Passport with at least six months’ validity', 'Passport-size photo with white background', 'Company trade licence and establishment card', 'Employment contract or offer, for employees', 'Attested degree certificate, where required for the job title', 'Current visa or entry stamp, if in the UAE'],
  },
  benefits: {
    title: 'Why Use TMFS for Residence Visas',
    body: 'Visas move faster when every step is lined up.',
    items: ['Investor, partner and employee visas', 'Medicals and biometrics booked for you', 'Each stage tracked to completion', 'Renewal dates logged and reminded', 'Labour and immigration handled together', 'Visa cancellations handled when staff leave'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our visa processing apart.',
    items: [
      { icon: 'id-badge', title: 'End-to-End', body: 'From entry permit to Emirates ID, with one point of contact.' },
      { icon: 'users', title: 'Owners & Staff', body: 'Investor, partner and employee visas on one file.' },
      { icon: 'shield-check', title: 'Renewal Tracking', body: 'Every visa’s expiry date tracked.' },
      { icon: 'certificate', title: 'Document Readiness', body: 'Attestations and translations prepared in time.' },
    ],
  },
  pillars: {
    title: 'Why Companies Choose TMFS for Visas',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Clear steps', body: 'Applicants know what to expect at each stage.' },
      { icon: 'shield-check', title: 'No lapses', body: 'Renewals started well before expiry.' },
      { icon: 'bulb', title: 'Joined-up', body: 'Visas linked to your licence and labour file.' },
    ],
  },
  faq: {
    title: 'UAE Residence Visas: Frequently Asked Questions',
    body: 'Common questions about company-sponsored residence visas.',
    items: [
      { q: 'How many visas can my company sponsor?', a: 'It depends on your licensing authority, package and office space. Free zone packages usually come with a set allocation; mainland quotas are linked to premises.' },
      { q: 'How long does visa processing take?', a: 'Often two to four weeks from start to finish, depending on the authority, medical and biometrics appointments.' },
      { q: 'How long is a residence visa valid?', a: 'Validity depends on the visa type and authority, commonly two years for company-sponsored visas, after which it must be renewed.' },
      { q: 'Do I still get a visa sticker in my passport?', a: 'For most residents, the Emirates ID now serves as proof of residence instead of a passport sticker.' },
      { q: 'Can you guarantee a visa?', a: 'No. Visa decisions are made by the immigration authorities. We make sure applications are complete and correctly filed.' },
    ],
  },
  sources: [SRC.icp, SRC.gdrfa, SRC.mohre],
  cta: cta('Need Visas for Your Team?', 'Talk to a TMFS consultant about investor and employee visas, processed end to end.'),
});

const FAMILY_VISAS = servicePage({
  href: '/corporate-services/family-visas',
  topic: 'family visa',
  authority: IMMIGRATION,
  changes: VISA_CHANGES,
  meta: {
    title: 'UAE Family Visa Sponsorship',
    description: 'Sponsor your spouse, children or parents for UAE residence with TMFS: eligibility checked, documents attested and applications processed through medical and Emirates ID.',
  },
  hero: {
    title: ['UAE Family Visa', 'Sponsorship'],
    lead: 'Residence visas for your spouse, children and parents, with your eligibility checked, family documents attested and each application processed through to Emirates ID.',
    chips: ['Spouse & Children', 'Parents', 'Salary Requirements Checked', 'Documents Attested', 'Medical & Emirates ID'],
  },
  intro: {
    title: 'Bring Your Family with Confidence',
    summary: 'UAE residents can sponsor family members if they meet the income and housing requirements. Most residents need a monthly salary of at least AED 4,000, or AED 3,000 with accommodation provided; sponsoring parents has stricter requirements.',
    body: 'Family visas depend on getting the paperwork right: attested marriage and birth certificates, a registered tenancy contract and proof of income. We check your eligibility first, help you attest documents in time, and handle each application through medical and Emirates ID.',
    image: IMG.downtown,
  },
  process: {
    title: 'How Family Visa Sponsorship Works',
    body: 'Six steps from eligibility to residence.',
    steps: [
      { title: 'Eligibility Check', body: 'Salary, housing and relationship documents checked against the requirements.' },
      { title: 'Document Attestation', body: 'Marriage and birth certificates attested and translated where needed.' },
      { title: 'Entry Permit', body: 'Entry permit issued, or status changed if family members are already in the UAE.' },
      { title: 'Medical Test', body: 'Medical fitness tests completed for family members aged 18 and over.' },
      { title: 'Emirates ID', body: 'Biometrics taken and Emirates IDs processed.' },
      { title: 'Residence Issued', body: 'Residence issued and expiry dates logged for renewal.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents for family visa sponsorship.',
    items: ['Sponsor’s passport, visa and Emirates ID', 'Salary certificate or employment contract', 'Registered tenancy contract', 'Attested marriage certificate, for a spouse', 'Attested birth certificates, for children', 'Passports and photos of family members'],
  },
  benefits: {
    title: 'Why Use TMFS for Family Visas',
    body: 'Most delays come from documents, not the application.',
    items: ['Eligibility confirmed before you start', 'Attestation steps planned early', 'Applications for the whole family', 'Medicals and biometrics booked', 'Renewals tracked', 'Linked to your own visa file'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our family visa support apart.',
    items: [
      { icon: 'users', title: 'Whole-Family Files', body: 'Spouse, children and parents handled together.' },
      { icon: 'certificate', title: 'Attestation Planning', body: 'Documents attested before they hold up the application.' },
      { icon: 'shield-check', title: 'Eligibility First', body: 'Requirements checked before fees are paid.' },
      { icon: 'id-badge', title: 'Renewal Tracking', body: 'Family visa expiry dates tracked with yours.' },
    ],
  },
  pillars: {
    title: 'Why Families Choose TMFS',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Clear requirements', body: 'You know what is needed before you begin.' },
      { icon: 'shield-check', title: 'Fewer delays', body: 'Documents ready when the application needs them.' },
      { icon: 'bulb', title: 'Peace of mind', body: 'Every family visa renewed on time.' },
    ],
  },
  faq: {
    title: 'UAE Family Visas: Frequently Asked Questions',
    body: 'Common questions about sponsoring family members.',
    items: [
      { q: 'What salary do I need to sponsor my family?', a: 'Generally at least AED 4,000 a month, or AED 3,000 plus accommodation provided by your employer. Sponsoring parents has higher requirements.' },
      { q: 'Can I sponsor my children over 18?', a: 'Sons can generally be sponsored up to age 25, and unmarried daughters without an age limit, subject to the current rules.' },
      { q: 'Do my documents need attesting?', a: 'Yes. Marriage and birth certificates issued abroad usually need full attestation and, where required, Arabic translation.' },
      { q: 'Can business owners sponsor family?', a: 'Yes. Investors and partners with a UAE residence visa can sponsor family members if they meet the requirements.' },
      { q: 'Can you guarantee a visa?', a: 'No. Visa decisions are made by the immigration authorities. We make sure applications are complete and correctly filed.' },
    ],
  },
  sources: [SRC.icp, SRC.gdrfa, SRC.uae],
  cta: cta('Ready to Sponsor Your Family?', 'Talk to a TMFS consultant about eligibility, attestation and family visa applications.'),
});

const GOLDEN_VISA = servicePage({
  href: '/corporate-services/golden-visa',
  topic: 'Golden Visa',
  authority: IMMIGRATION,
  changes: 'Golden Visa categories, thresholds and procedures',
  meta: {
    title: 'UAE Golden Visa: Eligibility & Application',
    description: 'UAE Golden Visa support from TMFS: eligibility checked across investor, entrepreneur and professional categories, evidence prepared and the long-term residence application handled.',
  },
  hero: {
    title: ['UAE Golden Visa', 'Long-Term Residence'],
    lead: 'Eligibility checks and applications for UAE long-term residence, across investor, entrepreneur, professional and other categories, with your evidence prepared properly.',
    chips: ['Property Investors', 'Entrepreneurs', 'Skilled Professionals', 'Family Included', 'Eligibility Check'],
  },
  intro: {
    title: 'Long-Term Residence, Planned Properly',
    summary: 'The UAE Golden Visa gives long-term residence, typically for 10 years, without the need for an employer or company sponsor. Categories include property investors (generally with property worth at least AED 2 million), entrepreneurs, skilled professionals, outstanding talent and students.',
    body: 'Each category has its own evidence: title deeds and valuations, salary certificates and degree attestations, or business and investment records. We check which category you fit best, prepare the evidence to the required standard and handle the application for you and, where eligible, your family.',
    image: IMG.downtown,
  },
  process: {
    title: 'How the Golden Visa Application Works',
    body: 'Six steps from eligibility to residence.',
    steps: [
      { title: 'Eligibility Review', body: 'We review your investments, income, qualifications and business to find the best-fitting category.' },
      { title: 'Evidence Preparation', body: 'Title deeds, valuations, salary or business records and attested qualifications prepared.' },
      { title: 'Nomination or Approval', body: 'Category-specific approval or nomination obtained where required.' },
      { title: 'Application', body: 'The Golden Visa application filed with the immigration authority.' },
      { title: 'Medical & Emirates ID', body: 'Medical fitness test and biometrics completed.' },
      { title: 'Residence Issued', body: 'Long-term residence issued, with family applications following.' },
    ],
  },
  documents: {
    title: 'What You Need to Provide',
    body: 'Typical documents. Requirements depend on the category.',
    items: ['Passport and current visa, if any', 'Title deed and valuation, for property investors', 'Salary certificate and attested degree, for professionals', 'Company and investment records, for investors and entrepreneurs', 'Health insurance', 'Family documents, if sponsoring family'],
  },
  benefits: {
    title: 'Why Use TMFS for Your Golden Visa',
    body: 'The right category and evidence make the difference.',
    items: ['Best-fitting category identified', 'Evidence prepared to the required standard', 'Applications for you and your family', 'Linked to your company and property records', 'Clear view of costs and timing', 'Renewal tracked for the future'],
  },
  advantage: {
    title: 'The TMFS Advantage',
    body: 'What sets our Golden Visa support apart.',
    items: [
      { icon: 'award', title: 'Category Advice', body: 'An honest view of which route fits your profile.' },
      { icon: 'file-text', title: 'Evidence Packs', body: 'Documents prepared to meet each category’s requirements.' },
      { icon: 'users', title: 'Family Applications', body: 'Spouse and children included where eligible.' },
      { icon: 'building-skyscraper', title: 'Investor Support', body: 'Property and company investments documented properly.' },
    ],
  },
  pillars: {
    title: 'Why Clients Choose TMFS for the Golden Visa',
    body: 'Three things clients mention most.',
    items: [
      { icon: 'award', title: 'Honest eligibility', body: 'A clear answer before any fees are paid.' },
      { icon: 'shield-check', title: 'Well-prepared files', body: 'Evidence that meets the criteria first time.' },
      { icon: 'bulb', title: 'Family included', body: 'The whole family’s residence planned together.' },
    ],
  },
  faq: {
    title: 'UAE Golden Visa: Frequently Asked Questions',
    body: 'Common questions about long-term residence in the UAE.',
    items: [
      { q: 'Who is eligible for a Golden Visa?', a: 'Categories include property investors, entrepreneurs, skilled professionals, scientists, outstanding talent, outstanding students and certain other groups. Each has its own criteria.' },
      { q: 'How much property do I need to own?', a: 'Property investors generally need property worth at least AED 2 million. Conditions apply to mortgaged and off-plan property.' },
      { q: 'How long is the Golden Visa valid?', a: 'Typically 10 years, and it is renewable. Some categories carry five-year residence.' },
      { q: 'Can I include my family?', a: 'Yes. Golden Visa holders can sponsor their spouse and children, and in some cases other family members.' },
      { q: 'Can you guarantee approval?', a: 'No. Decisions are made by the immigration authorities. We make sure you apply in the right category with complete evidence.' },
    ],
  },
  sources: [SRC.icp, SRC.gdrfa, SRC.uae],
  cta: cta('Interested in the Golden Visa?', 'Talk to a TMFS consultant about which category fits you and what evidence you need.'),
});

export default [PRO_SERVICES, DOCUMENT_CLEARING, RESIDENCE_VISAS, FAMILY_VISAS, GOLDEN_VISA];
