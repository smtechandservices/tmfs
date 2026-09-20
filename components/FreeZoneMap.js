'use client';

import dynamic from 'next/dynamic';
import Reveal from './Reveal';

const DubaiMap = dynamic(() => import('./DubaiMap'), { ssr: false });

const HIGHLIGHTS = [
  {
    eyebrow: 'Cheapest to start',
    title: 'IFZA, Dubai Silicon Oasis',
    desc: 'Consultancy and services licences with quick issuance. The usual first company for solo founders.',
    delay: 0,
  },
  {
    eyebrow: 'Best for banking',
    title: 'DMCC & DIFC',
    desc: 'Strongest acceptance rates with UAE banks. Worth the higher licence cost if you move real volume.',
    delay: 80,
  },
];

const FREE_ZONES = ['IFZA', 'Meydan', 'RAKEZ', 'SHAMS', 'SPC', 'Ajman Free Zone', 'SRTIP', 'Dubai Mainland'];

export default function FreeZoneMap() {
  return (
    <section id="free-zone-map" className="mx-auto max-w-[1320px] px-[20px] py-12">
      <div className="mb-[36px] flex flex-wrap items-end justify-between gap-[22px]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Where we file</div>
          <h2 className="max-w-[22ch] text-pretty text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-.03em]">Every free zone we file in, mapped</h2>
        </Reveal>
        <Reveal as="p" delay={120} className="max-w-[38ch] text-[16px] leading-[1.6] text-muted">
          Free zones in blue, our office in black. Tap a pin for the short version of what it suits.
        </Reveal>
      </div>

      <Reveal delay={180} className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_18px_44px_rgba(20,18,26,.07)]">
        <DubaiMap />
      </Reveal>

      <div className="mt-[16px] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[16px]">
        {HIGHLIGHTS.map((h) => (
          <Reveal key={h.title} delay={h.delay} className="rounded-[18px] border border-line bg-white p-[22px]">
            <div className="mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] text-blue">{h.eyebrow}</div>
            <h3 className="mb-[7px] text-[17px] font-bold">{h.title}</h3>
            <p className="text-[14px] leading-[1.6] text-muted">{h.desc}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={260} className="mt-[16px] rounded-[18px] border border-line-2 bg-cream-2 px-[22px] py-[18px]">
        <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Free zones we file in directly</span>
        <p className="mt-[6px] text-[14.5px] leading-[1.6] text-ink">{FREE_ZONES.join(' · ')}</p>
      </Reveal>
    </section>
  );
}
