import Reveal from './Reveal';

const ARTICLES = [
  {
    img: '/images/business-planning.jpg',
    alt: 'Business planning notes on a desk',
    kicker: 'Business setup · 6 min',
    title: 'Free zone or mainland? Pick by your customer, not by price',
    desc: 'Who you invoice decides your jurisdiction. A short decision tree for founders comparing IFZA, Meydan etc.',
    delay: 0,
  },
  {
    img: '/images/advisors-report.jpg',
    alt: 'Advisors reviewing financial reports',
    kicker: 'VAT & tax · 5 min',
    title: 'The four VAT filing mistakes that trigger an FTA penalty',
    desc: 'Reverse charge, credit notes, missing TRNs and late reconciliation. What we see most often in health checks.',
    delay: 90,
  },
  {
    img: '/images/difc-skyline.jpg',
    alt: 'DIFC skyline, Dubai’s banking district',
    kicker: 'Banking · 7 min',
    title: 'Corporate bank account opening: the documents UAE banks actually ask for',
    desc: 'Business plan, proof of source of funds and shareholder KYC. What clears compliance on the first pass.',
    delay: 180,
  },
];

export default function Insights() {
  return (
    <section id="insights" className="border-t border-b border-line bg-white">
      <div className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
        <div className="mb-[40px] flex flex-wrap items-end justify-between gap-[22px]">
          <Reveal>
            <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">06 — Insights</div>
            <h2 className="max-w-[20ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-.03em]">Notes from the filing desk</h2>
          </Reveal>
          <Reveal as="a" href="#insights" delay={120} className="flex items-center gap-[8px] text-[14px] font-bold text-ink hover:text-brand">
            All articles <span className="text-brand">→</span>
          </Reveal>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[16px]">
          {ARTICLES.map((a) => (
            <Reveal key={a.title} as="a" href="#insights" delay={a.delay} className="group block">
              <div className="overflow-hidden rounded-[20px] border border-line bg-cream transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.7,.2,1)] group-hover:-translate-y-[6px] group-hover:shadow-[0_20px_44px_rgba(20,18,26,.1)]">
                <div className="aspect-[16/10] overflow-hidden bg-fog">
                  <img
                    src={a.img}
                    alt={a.alt}
                    className="block h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,.7,.2,1)] hover:scale-[1.06]"
                  />
                </div>
                <div className="p-[24px]">
                  <div className="mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">{a.kicker}</div>
                  <h3 className="mb-[8px] text-[19px] font-bold leading-[1.25] tracking-[-.01em] text-ink">{a.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
