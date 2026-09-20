'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import FreeZoneMap from './FreeZoneMap';

const TIERS = [
  {
    id: 'mainland',
    title: 'Mainland',
    tag: 'Unlimited UAE trading',
    desc: 'Dubai, Abu Dhabi and Sharjah. LLC, sole establishment or branch setup, trade licence, MOA drafting and local approvals. Best for businesses trading directly in the UAE market or holding government contracts.',
  },
  {
    id: 'free-zone',
    title: 'Free Zone',
    tag: '100% foreign ownership',
    desc: 'Sector-specific licensing across the zones we file in directly. IFZA and Dubai Silicon Oasis are cheapest to start; DMCC and DIFC have the strongest bank acceptance rates.',
  },
  {
    id: 'offshore',
    title: 'Offshore',
    tag: 'Holding & asset protection',
    desc: 'For holding structures, asset protection and international contracting. Cannot trade directly inside the UAE.',
  },
];

const PACKAGES = [
  {
    name: 'IFZA',
    desc: 'Consultancy and services licences with quick issuance, the usual first company for solo founders.',
    points: ['Cheapest to start', 'Issuance in 3–5 working days', 'No physical office required', 'Popular with solo founders'],
  },
  {
    name: 'Meydan',
    desc: 'Digital and e-commerce licences with a Dubai address and quick issuance.',
    points: ['Best for e-commerce & digital', 'Dubai address included', 'Fast online issuance', 'Flexi-desk option available'],
  },
  {
    name: 'RAKEZ',
    desc: 'Ras Al Khaimah Economic Zone, industrial, trading and services licences.',
    points: ['Low-cost industrial & trading', 'Warehouse & land options', 'Flexible visa packages', 'Ras Al Khaimah location'],
  },
  {
    name: 'SHAMS',
    desc: 'Sharjah Media City, media, creative and consultancy licences.',
    points: ['Best for media & creative', 'Freelance permits available', 'Content & broadcast approvals', 'Sharjah Media City base'],
  },
  {
    name: 'SPC Free Zone',
    desc: 'Sharjah Publishing City, low-cost setup for publishing, media and services.',
    points: ['Best for publishing & services', 'Low-cost setup', 'Fast document clearing', 'Sharjah Publishing City base'],
  },
  {
    name: 'Ajman Free Zone',
    desc: 'Trading, industrial and services licences in Ajman.',
    points: ['Cost-efficient setup', 'Warehouse facilities available', 'Quick renewal process', 'Trading & industrial licences'],
  },
  {
    name: 'SRTIP',
    desc: 'Sharjah Research Technology and Innovation Park, tech, R&D and industrial licences.',
    points: ['Best for tech & R&D', 'Innovation park facilities', 'Lab & industrial space', 'Research collaboration access'],
  },
  {
    name: 'Dubai Mainland',
    desc: 'LLC, sole establishment and branch setup for trading directly in the UAE market.',
    points: ['Direct UAE market trading', 'Government contract eligible', 'No trade restrictions', 'LLC or branch setup'],
  },
];

function TierCard({ tier }) {
  return (
    <div id={tier.id} className="scroll-mt-[96px] flex h-full flex-col rounded-[20px] border border-line bg-white p-[26px]">
      <span className="mb-[14px] inline-block w-fit rounded-full bg-brand-tint px-[13px] py-[5px] font-mono text-[10px] font-bold uppercase tracking-[.1em] text-brand">
        {tier.tag}
      </span>
      <h3 className="mb-[10px] text-[22px] font-extrabold tracking-[-.02em] text-ink">{tier.title}</h3>
      <p className="mb-[18px] text-[14.5px] leading-[1.6] text-muted">{tier.desc}</p>
      <a href="/contact" className="mt-auto text-[14px] font-bold text-ink hover:text-brand">
        Get started →
      </a>
    </div>
  );
}

function PackageCard({ pkg, dup }) {
  return (
    <div
      aria-hidden={dup || undefined}
      className="flex w-[270px] shrink-0 flex-col rounded-[18px] border border-line bg-white p-[22px]"
    >
      <h3 className="mb-[8px] text-[18px] font-bold tracking-[-.01em] text-ink">{pkg.name}</h3>
      <p className="mb-[16px] text-[13.5px] leading-[1.55] text-muted">{pkg.desc}</p>
      <ul className="mb-[20px] flex flex-1 flex-col gap-[7px]">
        {pkg.points.map((point) => (
          <li key={point} className={`flex items-center gap-[8px] text-[13px] font-medium text-muted}`}>
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
            {point}
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        tabIndex={dup ? -1 : undefined}
        className="flex min-h-[44px] items-center justify-center rounded-full bg-ink px-[18px] py-[11px] text-[13.5px] font-bold text-white hover:bg-brand"
      >
        Get a quote
      </a>
    </div>
  );
}

function DragScroller({ items, renderItem }) {
  const ref = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const hovered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const tick = () => {
      if (!drag.current.active && !hovered.current) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e) => {
    const el = ref.current;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const el = ref.current;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerEnter={() => {
        hovered.current = true;
      }}
      onPointerLeave={() => {
        endDrag();
        hovered.current = false;
      }}
      onClickCapture={onClickCapture}
      className="flex cursor-grab gap-[16px] overflow-x-auto pb-[8px] select-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [mask-image:linear-gradient(90deg,transparent,black_2%,black_98%,transparent)] [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, i) => renderItem(item, i, false))}
      {items.map((item, i) => renderItem(item, i, true))}
    </div>
  );
}

export default function BusinessSetupPlans() {
  return (
    <>
      <section className="mx-auto max-w-[1320px] px-[20px] pt-12 pb-8">
        <Reveal>
          <span className="mb-[24px] inline-block rounded-full bg-brand-tint px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[.1em] text-brand">
            Business Setup Plans
          </span>
          <h1 className="mb-[18px] max-w-[22ch] text-pretty text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.04] tracking-[-.03em]">
            Mainland, free zone or offshore, pick the shape, we handle the filing
          </h1>
          <p className="max-w-[54ch] text-[16px] leading-[1.6] text-muted">
            Three ways to set up in the UAE, and a package for every free zone we file in directly. No two businesses need the same jurisdiction, tell us what you're building and we'll match it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-[20px] pb-8">
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 100} className="h-full">
              <TierCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </section>

      <FreeZoneMap />

      <section className="mx-auto max-w-[1320px] px-[20px] pt-4 pb-12">
        <Reveal className="mb-[28px]">
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Packages</div>
          <h2 className="max-w-[24ch] text-pretty text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.08] tracking-[-.03em]">
            A licence package for every zone we file in
          </h2>
        </Reveal>
        <DragScroller
          items={PACKAGES}
          renderItem={(pkg, _i, dup) => <PackageCard key={dup ? `${pkg.name}-dup` : pkg.name} pkg={pkg} dup={dup} />}
        />
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-[20px] px-[20px] py-[clamp(40px,6vw,64px)]">
          <h3 className="max-w-[28ch] text-pretty text-[24px] font-extrabold tracking-[-.02em]">Still weighing jurisdictions?</h3>
          <div className="flex flex-wrap gap-[12px]">
            <a href="/contact" className="flex min-h-[52px] items-center rounded-full bg-brand px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-ink">
              Book a free consultation
            </a>
            <a
              href="https://wa.me/971522149086"
              target="_blank"
              rel="noopener"
              className="flex min-h-[52px] items-center rounded-full border border-line px-[28px] py-[15px] text-[15px] font-semibold text-ink hover:border-ink"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
