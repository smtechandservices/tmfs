'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';

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

function PackageCard({ pkg, dup }) {
  return (
    <div
      aria-hidden={dup || undefined}
      className="flex w-[270px] shrink-0 flex-col rounded-[18px] border border-line bg-white p-[22px]"
    >
      <h3 className="mb-[8px] text-[18px] font-semibold tracking-[-.01em] text-blue">{pkg.name}</h3>
      <p className="mb-[16px] text-[13.5px] leading-[1.55] text-muted">{pkg.desc}</p>
      <ul className="mb-[20px] flex flex-1 flex-col gap-[7px]">
        {pkg.points.map((point) => (
          <li key={point} className="flex items-center gap-[8px] text-[13px] font-medium text-muted">
            <img src="/images/pinwheel-red.png" alt="" className="h-[13px] w-[13px] shrink-0" />
            {point}
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        tabIndex={dup ? -1 : undefined}
        className="flex min-h-[44px] items-center justify-center rounded-full bg-blue px-[18px] py-[11px] text-[13.5px] font-bold text-white hover:bg-brand hover:text-white"
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

/** Auto-scrolling, draggable row of licence packages, one per zone we file in. */
export default function LicencePackages() {
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] pt-4 pb-12">
      <Reveal className="mb-[28px]">
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Packages</div>
        <h2 className="max-w-[24ch] text-pretty text-[clamp(26px,3.6vw,40px)] font-bold leading-[1.08] tracking-[-.03em]">
          A licence package for every zone we file in
        </h2>
      </Reveal>
      <DragScroller
        items={PACKAGES}
        renderItem={(pkg, _i, dup) => <PackageCard key={dup ? `${pkg.name}-dup` : pkg.name} pkg={pkg} dup={dup} />}
      />
    </section>
  );
}
