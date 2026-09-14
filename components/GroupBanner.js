import Reveal from './Reveal';

const POINTS = [
  {
    title: 'Transparent pricing',
    desc: 'Written breakdown before you commit. No government-fee surprises mid-process.',
  },
  {
    title: 'One consultant throughout',
    desc: 'The same person from first call to trade licence to renewal reminder.',
  },
  {
    title: 'Compliance built in',
    desc: 'VAT, AML and ESR obligations tracked from day one, not discovered at audit.',
  },
];

export default function GroupBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src="/images/business-district.jpg"
        alt="Business district signage"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-center gap-[clamp(28px,4vw,56px)] px-[20px] py-[clamp(56px,8vw,104px)]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">The group</div>
          <h2 className="mb-[18px] text-pretty text-[clamp(26px,3.8vw,44px)] font-extrabold leading-[1.08] tracking-[-.03em] text-white">Two companies, one file on your business</h2>
          <p className="max-w-[48ch] text-[16px] leading-[1.65] text-fog">TMFS handles the licence, the bank and the books. MID Real Estate Brokers, our sister company with over 20 years in the market, handles the property — residential, commercial and investment across Downtown, Business Bay, DIFC and Dubai Creek Harbour.</p>
        </Reveal>
        <Reveal as="ul" delay={140} className="flex flex-col gap-[12px]">
          {POINTS.map((p) => (
            <li key={p.title} className="rounded-[16px] border border-[rgba(255,255,255,.16)] bg-[rgba(255,255,255,.08)] px-[22px] py-[20px] backdrop-blur-[8px]">
              <strong className="mb-[4px] block text-[16px] font-bold text-white">{p.title}</strong>
              <span className="text-[14px] leading-[1.55] text-fog-2">{p.desc}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
