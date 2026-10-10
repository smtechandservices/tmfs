'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import SectionHead from './SectionHead';
import { MAINLAND, FREE_ZONES, OFFSHORE } from '@/content/catalog';
import { SITE } from '@/content/site';

const TABS = [FREE_ZONES, MAINLAND, OFFSHORE];

export default function WhereWeFile({ content }) {
  const [tab, setTab] = useState(TABS[0].key);
  const current = TABS.find((t) => t.key === tab);

  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
        <SectionHead eyebrow={content.eyebrow} title={content.title} intro={content.intro} action={content.action} />

        <div className="grid grid-cols-1 gap-[16px] navd:grid-cols-[minmax(280px,360px)_1fr]">
          <Reveal className="flex flex-col justify-between rounded-[20px] bg-blue p-[clamp(22px,2.6vw,30px)]">
            <div>
              <div className="mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] text-brand">Head office</div>
              <h3 className="mb-[8px] text-[24px] font-bold tracking-[-.02em] text-white">Dubai, UAE</h3>
              <p className="text-[14px] leading-[1.6] text-fog-2">{SITE.address}. Walk-ins welcome, or book a slot.</p>
            </div>
            <div className="mt-[28px] grid grid-cols-3 gap-[10px] border-t border-white/20 pt-[20px]">
              {[
                ['7', 'Emirates'],
                ['8', 'Filed directly'],
                ['18', 'Partner banks'],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-[26px] font-extrabold leading-none tracking-[-.02em] text-white">{v}</div>
                  <div className="mt-[6px] text-[12px] text-fog-2">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-[20px] border border-line bg-white p-[8px]">
            <div role="tablist" className="flex gap-[4px] rounded-[14px] bg-cream-2 p-[5px]">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={tab === t.key}
                  onClick={() => setTab(t.key)}
                  className={`min-h-[42px] flex-1 cursor-pointer rounded-[11px] px-[8px] text-[13px] font-bold ${
                    tab === t.key ? 'bg-blue text-white' : 'text-blue hover:bg-white'
                  }`}
                >
                  {t.title} <span className="font-mono text-[11px] opacity-70">{t.items.length}</span>
                </button>
              ))}
            </div>
            <div key={tab} className="grid animate-tm-slide-down-fast grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-[8px] p-[8px] pt-[12px]">
              {current.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col rounded-[14px] border border-line-2 p-[16px] hover:border-blue"
                >
                  <span className="mb-[6px] flex items-center gap-[8px]">
                    <span className="text-[15px] font-bold text-blue group-hover:text-brand">{item.title}</span>
                    {item.advisory && (
                      <span className="rounded-full bg-cream-2 px-[7px] py-[1px] font-mono text-[8.5px] uppercase tracking-[.1em] text-muted-2">
                        Advisory
                      </span>
                    )}
                  </span>
                  <span className="text-[13px] leading-[1.5] text-muted">{item.short}</span>
                </a>
              ))}
            </div>
            <a href={current.href} className="block px-[16px] pt-[6px] pb-[12px] text-[13.5px] font-bold text-blue hover:text-brand">
              All {current.title.toLowerCase()} options →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
