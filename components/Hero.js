'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const HERO_FIELDS = {
  setup: {
    l: ['Jurisdiction', 'Company type', 'Owners'],
    o: [
      ['Dubai free zone', 'Dubai mainland', 'Offshore'],
      ['Consultancy / services', 'Trading', 'E-commerce'],
      ['Single owner', '2–3 partners', 'Corporate parent'],
    ],
  },
  fin: {
    l: ['I need', 'Business stage', 'Turnover'],
    o: [
      ['Bank account opening', 'Mortgage or loan', 'VAT & accounting'],
      ['Not registered yet', 'Trading under 1 year', 'Established'],
      ['Pre-revenue', 'Under AED 375k', 'Over AED 375k'],
    ],
  },
};

const TABS = [
  { key: 'setup', label: 'Start a company' },
  { key: 'fin', label: 'Finance & tax' },
];

export default function Hero() {
  const [heroTab, setHeroTab] = useState('setup');
  const fields = HERO_FIELDS[heroTab];

  return (
    <section id="top" className="relative flex min-h-[clamp(600px,90vh,820px)] flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/business-bay-dusk.jpg"
          alt="Business Bay, Dubai at dusk"
          className="h-full w-full object-cover animate-tm-ken"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,26,.72)_0%,rgba(20,18,26,.42)_38%,rgba(20,18,26,.88)_100%)]"></div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col gap-[26px] px-[20px] pt-[120px] pb-[34px]">
        <Reveal className="flex items-center gap-[12px]">
          <span className="block h-[2px] w-[34px] bg-brand"></span>
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-white">Dubai · UAE · Since 2019</span>
        </Reveal>

        <Reveal as="h1" delay={80} className="max-w-[16ch] text-pretty text-[clamp(40px,7.4vw,86px)] font-extrabold leading-[1.02] tracking-[-.03em] text-white">
          Your vision, <br /> our expertise.
        </Reveal>

        <Reveal as="p" delay={160} className="max-w-[58ch] text-pretty text-[clamp(16px,2.1vw,21px)] leading-[1.55] text-fog">
          Company formation, banking and tax in the UAE, handled end to end by one approachable team. Licence to bank account, without the runaround.
        </Reveal>

        <Reveal delay={240} className="flex flex-wrap gap-[12px]">
          <a
            href="#contact"
            className="relative flex min-h-[52px] items-center overflow-hidden rounded-full bg-brand px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-white hover:text-ink"
          >
            <span className="relative z-[2]">Book a free consultation</span>
          </a>
          <a
            href="https://wa.me/971522149086"
            target="_blank"
            rel="noopener"
            className="flex min-h-[52px] items-center rounded-full border border-[rgba(255,255,255,.45)] bg-[rgba(255,255,255,.1)] px-[28px] py-[15px] text-[15px] font-semibold text-white backdrop-blur-[6px] hover:border-white hover:bg-white hover:text-ink"
          >
            Chat on WhatsApp
          </a>
        </Reveal>
      </div>

      <Reveal delay={320} className="relative mx-auto w-full max-w-[1320px] px-[20px] pb-[34px]">
        <div className="rounded-[20px] bg-cream p-[8px] shadow-[0_24px_60px_rgba(20,18,26,.32)]">
          <div className="flex gap-[4px] px-[6px] pt-[6px] pb-0">
            {TABS.map((tab) => {
              const active = heroTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setHeroTab(tab.key)}
                  className={`min-h-[44px] flex-1 cursor-pointer rounded-[14px] border-0 px-[8px] py-[12px] text-[13px] font-bold ${
                    active ? 'bg-ink text-white' : 'bg-transparent text-muted'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[8px] p-[8px]">
            {[0, 1, 2].map((i) => (
              <label key={i} className="flex flex-col gap-[5px] rounded-[14px] border border-line bg-white px-[14px] py-[11px]">
                <span className="font-mono text-[9px] uppercase tracking-[.16em] text-muted-2">{fields.l[i]}</span>
                <select className="min-h-[26px] cursor-pointer border-0 bg-transparent px-0 py-[2px] text-[15px] font-semibold">
                  {fields.o[i].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
            ))}
            <a
              href="#contact"
              className="flex min-h-[52px] items-center justify-center rounded-[14px] bg-ink px-[20px] py-[14px] text-[14px] font-bold text-white hover:bg-brand"
            >
              Get matched
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
