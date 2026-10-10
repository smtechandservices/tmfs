import Reveal from '../Reveal';
import { Eyebrow } from '../ui/Button';
import { STATS } from '@/content/site';
import { STATS_HEAD } from '@/content/home';

export default function StatsStrip({ head = STATS_HEAD, stats = STATS }) {
  return (
    <section aria-label="Key statistics" className="relative overflow-hidden bg-white py-[100px] text-blue max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="mx-auto mb-[56px] max-w-[720px] text-center max-md:mb-[40px]">
          <Eyebrow className="mb-[18px]">{head.eyebrow}</Eyebrow>
          <h2 className="text-[clamp(28px,3vw,42px)] leading-[1.14] font-bold tracking-[-.026em]">{head.title}</h2>
        </Reveal>
        <div className="grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[16px] max-[480px]:gap-[12px]">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="relative rounded-t-[24px] bg-soft px-[28px] py-[36px] text-center transition-[transform,background,box-shadow] duration-300 hover:-translate-y-[4px] hover:bg-white hover:shadow-[0_16px_40px_rgba(10,37,64,.08),0_3px_8px_rgba(219,20,28,.05)] max-md:px-[20px] max-md:py-[28px]"
            >
              <div className="mb-[16px] font-display text-[clamp(44px,4.6vw,64px)] leading-none font-extrabold tracking-[-.03em] text-blue max-md:mb-[12px] max-md:text-[38px] max-[480px]:text-[32px]">
                {s.value}
                {s.sup && <span className="ml-[2px] align-super text-[.55em] font-extrabold tracking-normal text-brand">{s.sup}</span>}
              </div>
              <div className="mb-[8px] text-[12px] leading-[1.3] font-bold uppercase tracking-[.14em] text-brand max-md:text-[11px]">{s.label}</div>
              <div className="text-[13px] leading-[1.55] text-slate max-md:text-[12px]">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
