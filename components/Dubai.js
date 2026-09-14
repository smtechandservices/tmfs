'use client';

import dynamic from 'next/dynamic';
import Reveal from './Reveal';

const DubaiMap = dynamic(() => import('./DubaiMap'), { ssr: false });

const HIGHLIGHTS = [
  {
    eyebrow: 'Cheapest to start',
    eyebrowColor: 'text-blue',
    title: 'IFZA, Dubai Silicon Oasis',
    desc: 'Consultancy and services licences with quick issuance. The usual first company for solo founders.',
    delay: 0,
  },
  {
    eyebrow: 'Best for banking',
    eyebrowColor: 'text-blue',
    title: 'DMCC & DIFC',
    desc: 'Strongest acceptance rates with UAE banks. Worth the higher licence cost if you move real volume.',
    delay: 80,
  },
  {
    eyebrow: 'Highest rental yield',
    eyebrowColor: 'text-brand',
    title: 'Business Bay',
    desc: 'Studios and one-beds clear quickly with a deep tenant pool. Our most-asked-about investment district.',
    delay: 160,
  },
  {
    eyebrow: 'Longest horizon',
    eyebrowColor: 'text-brand',
    title: 'Dubai Creek Harbour',
    desc: 'Off-plan with staged payment plans. Suits investors who can wait for the handover cycle.',
    delay: 240,
  },
];

export default function Dubai({ show = true }) {
  if (!show) return null;

  return (
    <section id="dubai" className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <div className="mb-[36px] flex flex-wrap items-end justify-between gap-[22px]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">04 — Hyper-local</div>
          <h2 className="max-w-[20ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-.03em]">Where in Dubai should you be?</h2>
        </Reveal>
        <Reveal as="p" delay={120} className="max-w-[38ch] text-[16px] leading-[1.6] text-muted">
          Free zones in blue, investment areas in red, our office in black. Tap a location for the short version of what it suits.
        </Reveal>
      </div>

      <Reveal delay={180} className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_18px_44px_rgba(20,18,26,.07)]">
        <DubaiMap />
      </Reveal>

      <div className="mt-[16px] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[16px]">
        {HIGHLIGHTS.map((h) => (
          <Reveal key={h.title} delay={h.delay} className="rounded-[18px] border border-line bg-white p-[22px]">
            <div className={`mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] ${h.eyebrowColor}`}>{h.eyebrow}</div>
            <h3 className="mb-[7px] text-[17px] font-bold">{h.title}</h3>
            <p className="text-[14px] leading-[1.6] text-muted">{h.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
