'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { ARTICLES, INSIGHT_CATEGORIES } from '@/content/insights';

const CATEGORIES = INSIGHT_CATEGORIES;

export default function InsightsGrid() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === active);

  return (
    <>
      <section className="mx-auto max-w-[1320px] px-[20px] pt-12 pb-6">
        <Reveal>
          <span className="mb-[24px] inline-block rounded-full bg-brand-tint px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[.1em] text-brand">
            Insights
          </span>
          <h1 className="mb-[18px] max-w-[20ch] text-pretty text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.04] tracking-[-.03em]">
            Notes from the filing desk
          </h1>
          <p className="max-w-[52ch] text-[16px] leading-[1.6] text-muted">
            What we see across setup, banking, accounting and compliance, written up as it happens.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-[20px] pb-[clamp(56px,8vw,96px)]">
        <div className="mb-[32px] flex flex-wrap gap-[8px]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`min-h-[40px] cursor-pointer rounded-full border px-[16px] py-[9px] text-[13px] font-semibold transition-colors duration-150 ${
                active === cat ? 'border-blue bg-blue text-white' : 'border-blue bg-white text-blue hover:bg-blue hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[16px]">
          {filtered.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 90} className="block h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-cream">
                <div className="aspect-[16/10] shrink-0 overflow-hidden bg-fog">
                  <img src={a.img} alt={a.alt} className="block h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-[24px]">
                  <div className="mb-[10px] flex items-center gap-[8px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">
                    <span>{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mb-[8px] text-[19px] font-semibold leading-[1.25] tracking-[-.01em] text-blue">{a.title}</h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
