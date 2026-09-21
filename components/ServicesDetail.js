import Reveal from './Reveal';

const SECTIONS = [
  {
    id: 'business-setup',
    eyebrow: 'Business Setup',
    title: 'Mainland, free zone or offshore, filed right the first time',
    image: '/images/business-district.jpg',
    imageAlt: 'Dubai business district skyline',
    items: [
      {
        title: 'Mainland',
        desc: 'Dubai, Abu Dhabi and Sharjah. LLC, sole establishment or branch setup, trade licence, MOA drafting and local approvals. Best for businesses trading directly in the UAE market or holding government contracts.',
      },
      {
        title: 'Free Zone',
        desc: '100% foreign ownership with sector-specific licensing. Zones we file in directly: IFZA, Meydan, RAKEZ, SHAMS, SPC, Ajman Free Zone, SRTIP.',
        notes: [
          { label: 'Cheapest to start', text: 'IFZA, Dubai Silicon Oasis, quick issuance, usual first company for solo founders.' },
          { label: 'Best for banking', text: 'DMCC & DIFC, strongest bank acceptance rates, worth the higher licence cost for real volume.' },
        ],
      },
      {
        title: 'Offshore',
        desc: 'For holding structures, asset protection and international contracting. Cannot trade directly inside the UAE.',
      },
    ],
    picker: true,
  },
  {
    id: 'banking',
    eyebrow: 'Banking Services',
    title: 'One bank network, compared for you',
    image: '/images/difc-skyline.jpg',
    imageAlt: 'DIFC skyline, Dubai’s banking district',
    items: [
      {
        title: 'Corporate accounts',
        desc: 'Opening prepared alongside your licence so banking isn’t a second scramble after formation.',
      },
      {
        title: 'Personal, offshore & non-resident accounts',
        desc: 'For UAE residents and founders without a UAE visa.',
      },
      {
        title: 'Business & personal loans',
        desc: 'Compared across our bank network, with eligibility and documentation guidance upfront.',
      },
    ],
    aside: {
      label: 'What banks actually ask for',
      text: 'Business plan, proof of source of funds, shareholder KYC documents.',
    },
  },
  {
    id: 'accounting',
    eyebrow: 'Accounting & Audit',
    title: 'Books that hold up under review',
    image: '/images/advisors-report.jpg',
    imageAlt: 'TMFS advisors reviewing a client financial report',
    items: [
      { title: 'Bookkeeping & payroll', desc: 'Day-to-day bookkeeping and payroll processing.' },
      { title: 'Financial statements', desc: 'Prepared for management, banks, and regulators.' },
      { title: 'Internal & external audit', desc: 'Including FTA tax audit assistance if your business is selected for review.' },
    ],
  },
  {
    id: 'vat',
    eyebrow: 'VAT & Tax Consultancy',
    title: 'Accurate and on time with the FTA',
    image: '/images/business-planning.jpg',
    imageAlt: 'Business planning notes on a desk',
    wide: true,
    items: [
      { title: 'VAT registration & TRN', desc: 'Registration assessment and TRN application.' },
      { title: 'Return filing & refunds', desc: 'Periodic VAT return filing and refund claims.' },
      {
        title: 'VAT health checks & compliance audits',
        desc: 'Catching reverse charge errors, credit note issues, missing TRNs and late reconciliation before the FTA does.',
      },
      {
        title: 'Corporate Tax',
        desc: '9% UAE Corporate Tax guidance for taxable income above the threshold, registration and filing support, free zone qualifying income positioning where applicable.',
        badge: 'New',
      },
    ],
  },
  {
    id: 'compliance',
    eyebrow: 'Corporate & Compliance',
    title: 'Governance that doesn’t lapse',
    image: '/images/downtown-dubai.jpg',
    imageAlt: 'Downtown Dubai skyline',
    items: [
      { title: 'PRO services & document clearing', desc: 'Government liaison work, document clearing and attestation.' },
      { title: 'AML & ESR compliance', desc: 'Obligations for applicable business activities, ESR filings and ongoing monitoring.' },
      {
        title: 'Visa & immigration',
        desc: 'Medical, Emirates ID and residence visa processing, plus family/dependent visa sponsorship.',
      },
    ],
  },
];

const PICKER_FIELDS = [
  { l: 'Jurisdiction', o: ['Dubai free zone', 'Dubai mainland', 'Offshore'] },
  { l: 'Company type', o: ['Consultancy / services', 'Trading', 'E-commerce'] },
  { l: 'Owners', o: ['Single owner', '2–3 partners', 'Corporate parent'] },
];

function JurisdictionPicker() {
  return (
    <div className="mt-[28px] rounded-[20px] border border-line bg-cream p-[8px]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[8px] p-[8px]">
        {PICKER_FIELDS.map((f) => (
          <label key={f.l} className="flex flex-col gap-[5px] rounded-[14px] border border-line bg-white px-[14px] py-[11px]">
            <span className="font-mono text-[9px] uppercase tracking-[.16em] text-muted-2">{f.l}</span>
            <select className="min-h-[26px] cursor-pointer border-0 bg-transparent px-0 py-[2px] text-[15px] font-semibold">
              {f.o.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </label>
        ))}
        <a
          href="/contact"
          className="flex min-h-[52px] items-center justify-center rounded-[14px] bg-blue px-[20px] py-[14px] text-[14px] font-bold text-white hover:bg-brand"
        >
          Get matched
        </a>
      </div>
    </div>
  );
}

function ItemCard({ item, large }) {
  return (
    <div className={`rounded-[18px] border border-line bg-white ${large ? 'p-[30px]' : 'p-[22px]'}`}>
      <div className="mb-[8px] flex items-center gap-[8px]">
        <h3 className={`font-bold tracking-[-.01em] text-blue ${large ? 'text-[20px]' : 'text-[17px]'}`}>{item.title}</h3>
        {item.badge && (
          <span className="rounded-full bg-brand-tint px-[9px] py-[2px] font-mono text-[9px] font-bold uppercase tracking-[.1em] text-brand">
            {item.badge}
          </span>
        )}
      </div>
      <p className={`leading-[1.6] text-muted ${large ? 'text-[15px]' : 'text-[13.5px]'}`}>{item.desc}</p>
      {item.notes && (
        <div className="mt-[14px] flex flex-col gap-[10px] border-t border-line-2 pt-[14px]">
          {item.notes.map((n) => (
            <div key={n.label}>
              <div className="font-mono text-[9px] uppercase tracking-[.14em] text-brand">{n.label}</div>
              <p className="mt-[3px] text-[13px] leading-[1.5] text-muted">{n.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Section({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-[112px] rounded-t-[32px] bg-white p-4"
    >
      {section.image && (
        <Reveal className="mb-[28px] overflow-hidden rounded-[20px]">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="h-[200px] w-full object-cover navp:h-[280px]"
          />
        </Reveal>
      )}
      <Reveal className="mb-[28px]">
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">{section.eyebrow}</div>
        <h2 className="max-w-[24ch] text-pretty text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.08] tracking-[-.03em]">{section.title}</h2>
      </Reveal>

      {section.aside ? (
        <div className="grid grid-cols-1 gap-[20px] navp:grid-cols-2">
          {section.items.map((item) => (
            <ItemCard key={item.title} item={item} large />
          ))}
          <div className="flex flex-col justify-center rounded-[18px] border border-blue bg-blue p-[30px]">
            <div className="mb-[10px] font-mono text-[11px] uppercase tracking-[.16em] text-brand">{section.aside.label}</div>
            <p className="text-[15px] leading-[1.65] text-fog-2">{section.aside.text}</p>
          </div>
        </div>
      ) : section.wide ? (
        <div className="grid grid-cols-1 gap-[20px] navp:grid-cols-2">
          {section.items.map((item) => (
            <ItemCard key={item.title} item={item} large />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
          {section.items.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </div>
      )}

      {section.picker && <JurisdictionPicker />}
    </section>
  );
}

export default function ServicesDetail() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-[20px] pt-12 pb-6">
        <Reveal>
          <span className="mb-[24px] inline-block rounded-full bg-brand-tint px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[.1em] text-brand">
            Services
          </span>
          <h1 className="mb-[18px] max-w-[20ch] text-pretty text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.04] tracking-[-.03em]">
            One team for the whole UAE stack
          </h1>
          <p className="max-w-[52ch] text-[16px] leading-[1.6] text-muted">
            Five services that most businesses need in their first two years here, take one, or hand us all of it.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1320px] px-[20px]">
        {SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-[20px] px-[20px] py-[clamp(40px,6vw,64px)]">
          <h3 className="max-w-[28ch] text-pretty text-[24px] font-extrabold tracking-[-.02em]">Not sure which service you need?</h3>
          <div className="flex flex-wrap gap-[12px]">
            <a href="/contact" className="flex min-h-[52px] items-center rounded-full bg-brand px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-blue">
              Book a free consultation
            </a>
            <a
              href="https://wa.me/971522149086"
              target="_blank"
              rel="noopener"
              className="flex min-h-[52px] items-center rounded-full border border-line px-[28px] py-[15px] text-[15px] font-semibold text-ink hover:border-blue hover:text-blue"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
