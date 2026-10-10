import Reveal from './Reveal';
import Counter from './Counter';
import { STATS } from '@/content/site';


export default function Stats() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[26px] px-[20px] py-[34px]">
        <Reveal className="col-span-full flex flex-wrap items-baseline gap-x-[14px] gap-y-[4px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-brand">Proven impact</span>
          <span className="text-[14px] font-medium text-muted">Trusted by founders, SMEs and investors across the UAE.</span>
        </Reveal>
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <div className="font-display text-[clamp(32px,4.4vw,50px)] font-extrabold leading-none tracking-[-.03em]">
              <Counter to={stat.to} />
              &nbsp;<span className="text-brand">{stat.suffix}</span>
            </div>
            <div className="mt-[6px] text-[13px] font-medium text-muted">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
