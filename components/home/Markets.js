'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import Button, { Eyebrow, Rich } from '../ui/Button';
import { MARKETS } from '@/content/home';
import { MAINLAND, FREE_ZONES, OFFSHORE } from '@/content/catalog';

// Emirate names sit at their real positions on public/images/uae-map.svg.
// Bounds of that map (equirectangular). Regenerate the map
// with the same numbers if these ever change.
const MAP = { west: 52.0, east: 57.08, south: 23.9, north: 26.0 };
const pct = ([lat, lng]) => ({
  x: ((lng - MAP.west) / (MAP.east - MAP.west)) * 100,
  y: ((MAP.north - lat) / (MAP.north - MAP.south)) * 100,
});

const find = (group, slug) => group.items.find((i) => i.slug === slug);

function Panel({ place }) {
  const mainland = find(MAINLAND, place.key);
  const links = [
    { title: 'Mainland', href: mainland.href },
    ...(place.freeZones ?? []).map((s) => find(FREE_ZONES, s)),
    ...(place.offshore ?? []).map((s) => ({ ...find(OFFSHORE, s), title: `${find(OFFSHORE, s).title} offshore` })),
  ];
  return (
    <div key={place.key} className="animate-tm-slide-down-fast">
      <span
        className={`inline-flex items-center gap-[5px] rounded-full border bg-white px-[10px] py-[4px] text-[10.5px] font-semibold uppercase tracking-[.1em] ${
          place.hq ? 'border-brand text-brand' : 'border-blue text-blue'
        }`}
      >
        <Icon name="map-pin" size={13} />
        {place.hq ? 'Head office' : 'Emirate'}
      </span>
      <h3 className="mt-[10px] mb-[2px] text-[22px] font-semibold text-blue">{place.name}</h3>
      <p className="text-[14px] text-[#5a728c]">{place.meta}</p>
      <div className="mt-[14px] flex flex-wrap gap-[8px]">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex items-center gap-[6px] rounded-full border border-[#d7e2f0] bg-white px-[12px] py-[6px] text-[12.5px] font-semibold text-blue hover:border-brand hover:text-brand"
          >
            {l.title}
            {l.advisory && <span className="text-[9px] font-bold uppercase tracking-[.1em] text-slate-2">Advisory</span>}
          </a>
        ))}
      </div>
      <a href={mainland.href} className="group/go mt-[14px] inline-flex items-center gap-[7px] text-[13px] font-semibold text-brand hover:text-brand">
        Explore {place.name} mainland
        <Icon name="arrow-up-right" size={15} className="transition-transform duration-200 group-hover/go:translate-x-[4px]" />
      </a>
    </div>
  );
}

const matches = (place, filter) =>
  filter === 'all' || filter === 'mainland' || (filter === 'free-zone' && place.freeZones) || (filter === 'offshore' && place.offshore);

export default function Markets({ content = MARKETS }) {
  const [selected, setSelected] = useState(content.emirates.find((e) => e.hq).key);
  const [filter, setFilter] = useState('all');
  const current = content.emirates.find((e) => e.key === selected);

  return (
    <section
      id="where-we-file"
      className="relative overflow-hidden bg-[radial-gradient(58%_80%_at_10%_0,rgba(219,20,28,.05),transparent_60%),radial-gradient(55%_75%_at_94%_4%,rgba(24,0,173,.06),transparent_60%),linear-gradient(#f6f9fd,#eaf1fa)] py-[clamp(56px,8vw,104px)] text-[#16314c]"
    >
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="mb-[26px] flex flex-wrap items-end justify-between gap-[24px] max-md:flex-col max-md:items-start">
          <div>
            <Eyebrow className="tracking-[.16em]">{content.eyebrow}</Eyebrow>
            <h2 className="mt-[10px] text-[clamp(32px,4.2vw,56px)] leading-[1.08] font-semibold tracking-[-.024em] text-blue">
              <Rich value={content.title} />
            </h2>
            <p className="mt-[12px] max-w-[560px] text-[15px] leading-[1.6] text-[#5a728c]">{content.intro}</p>
          </div>
          <div role="group" aria-label="Filter by setup type" className="flex flex-wrap gap-[8px]">
            {content.filters.map((f) => (
              <button
                key={f.key}
                type="button"
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={`cursor-pointer rounded-full border px-[15px] py-[7px] text-[12px] font-semibold tracking-[.05em] transition-all duration-200 ${
                  filter === f.key ? 'border-blue bg-blue text-white' : 'border-[#cdd9e8] bg-white text-[#3f5872] hover:border-[#9fb6d0] hover:text-blue'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative aspect-[1280/580] w-full overflow-hidden rounded-[18px] border border-[#d7e2f0] bg-[#eaeffa] shadow-[0_20px_50px_-26px_rgba(15,44,71,.35)] max-md:hidden">
          <img src="/images/uae-map.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />

          {content.emirates.map((e) => {
            const p = pct(e.ll);
            const active = e.key === selected;
            const dim = !matches(e, filter);
            return (
              <button
                key={e.key}
                type="button"
                onClick={() => setSelected(e.key)}
                aria-label={`View ${e.name}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className={`absolute z-[3] -translate-y-1/2 cursor-pointer whitespace-nowrap rounded-full px-[4px] text-[13px] font-bold tracking-[.01em] [text-shadow:0_0_3px_#eaeffa,0_0_6px_#eaeffa,0_0_9px_#eaeffa,0_1px_1px_#fff] transition-[color,opacity] duration-[250ms] hover:text-brand ${
                  e.side === 'left' ? '-translate-x-full' : ''
                } ${active ? 'text-brand' : 'text-[#11375c]'} ${dim ? 'pointer-events-none opacity-25' : ''}`}
              >
                {e.name}
              </button>
            );
          })}
        </Reveal>

        <div className="mt-[18px] max-md:hidden">
          <div className="mb-[12px] flex items-center gap-[6px] text-[11px] font-bold uppercase tracking-[.14em] text-[#5a728c]">
            <Icon name="map-pin" size={13} className="text-brand" />
            {content.stripHead}
          </div>
          <div className="grid grid-cols-7 gap-[10px] max-[1100px]:grid-cols-4">
            {content.emirates.map((e) => {
              const on = e.key === selected;
              return (
                <button
                  key={e.key}
                  type="button"
                  onClick={() => setSelected(e.key)}
                  aria-label={`View ${e.name}`}
                  className={`flex cursor-pointer items-center justify-center rounded-[12px] border bg-white px-[12px] py-[12px] text-center transition-[border-color,box-shadow,transform] duration-[180ms] hover:-translate-y-[1px] ${
                    on ? 'border-brand shadow-[0_8px_22px_-12px_rgba(219,20,28,.5)]' : 'border-[#d7e2f0] hover:border-[#9fb6d0] hover:shadow-[0_8px_20px_-12px_rgba(15,44,71,.4)]'
                  }`}
                >
                  <span className={`text-[13px] leading-[1.2] font-semibold ${on ? 'text-brand' : 'text-[#16314c]'}`}>{e.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div aria-live="polite" className="mt-[18px] min-h-[92px] border-t border-[#d7e2f0] pt-[18px] max-md:hidden">
          <Panel place={current} />
        </div>

        {/* Phones get a plain list instead of the map. */}
        <div className="hidden gap-[8px] max-md:grid">
          {content.emirates.map((e) => (
            <a key={e.key} href={find(MAINLAND, e.key).href} className="flex items-center gap-[12px] rounded-[12px] border border-[#d7e2f0] bg-white px-[13px] py-[11px] active:bg-[#f1f6fc]">
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-[14px] leading-[1.25] font-bold text-[#16314c]">{e.name}</span>
                <span className="text-[12px] leading-[1.3] text-[#5a728c]">{e.meta}</span>
              </span>
              <Icon name="arrow-up-right" size={15} className="text-brand" />
            </a>
          ))}
        </div>

        <Reveal className="mt-[30px]">
          <Button href={content.action.href} variant="line">
            {content.action.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
