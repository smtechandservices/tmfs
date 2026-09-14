'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const STEPS = [
  {
    n: '01',
    title: 'Free consultation',
    desc: 'Twenty minutes on your activity, ownership and budget. You leave with a written cost breakdown.',
    highlights: ['20-minute call', 'Written cost estimate', 'No obligation'],
    image: '/images/advisors-report.jpg',
    imageAlt: 'TMFS advisors reviewing a client financial report',
  },
  {
    n: '02',
    title: 'Jurisdiction & licence',
    desc: 'We pick the zone that fits your activity and banking needs, then file it. Typically 3–7 working days.',
    highlights: ['Zone matched to activity', '3–7 working days', 'Trade licence filed'],
    image: '/images/downtown-dubai.jpg',
    imageAlt: 'Downtown Dubai skyline',
  },
  {
    n: '03',
    title: 'Visas & bank account',
    desc: 'Medical, Emirates ID and residence visa, alongside a compliance-ready bank application.',
    highlights: ['Emirates ID & residency', 'Bank application prepped', 'Compliance-ready'],
    image: '/images/difc-skyline.jpg',
    imageAlt: 'DIFC skyline, Dubai’s banking district',
  },
  {
    n: '04',
    title: 'Stay compliant',
    desc: 'Bookkeeping, VAT returns and renewal reminders so the second year is quieter than the first.',
    highlights: ['Bookkeeping & VAT', 'Renewal reminders', 'Ongoing support'],
    image: '/images/business-planning.jpg',
    imageAlt: 'Business planning notes on a desk',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const panelRefs = useRef([]);

  useEffect(() => {
    const els = panelRefs.current.filter(Boolean);
    const indexOf = new Map(els.map((el, i) => [el, i]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = indexOf.get(entry.target);
            if (i !== undefined) setActive(i);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-[48px] px-[20px] py-[clamp(56px,8vw,100px)] navd:grid-cols-[minmax(280px,380px)_1fr]">
        {/* Left: sticks in place while the right column scrolls past it */}
        <div>
          <div className="navd:sticky navd:top-[88px]">
            <Reveal>
              <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">02 — How it goes</div>
              <h2 className="mb-[18px] text-pretty text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.06] tracking-[-.03em]">Four steps, one point of contact</h2>
              <p className="mb-[32px] max-w-[42ch] text-[16px] leading-[1.65] text-muted">No handoffs between departments. The consultant on your first call stays with you through licence, bank and renewal.</p>
            </Reveal>
            <ul className="flex flex-col gap-[6px]">
              {STEPS.map((step, i) => (
                <li key={step.n}>
                  <button
                    type="button"
                    onClick={() => panelRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    className={`flex w-full cursor-pointer items-center gap-[14px] rounded-[14px] border px-[16px] py-[14px] text-left transition-colors duration-200 ${
                      active === i ? 'border-line bg-cream-2' : 'border-transparent hover:bg-cream-2/60'
                    }`}
                  >
                    <span
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full font-mono text-[12px] ${
                        active === i ? 'bg-ink text-white' : 'bg-fog text-muted'
                      }`}
                    >
                      {step.n}
                    </span>
                    <span className={`text-[15px] font-semibold ${active === i ? 'text-ink' : 'text-muted'}`}>{step.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: one compact panel per step, scrolling past the sticky left column */}
        <div className="flex flex-col gap-[24px]">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="flex flex-col gap-[16px]"
            >
              <div className="relative overflow-hidden rounded-[18px] bg-fog">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="block h-[200px] w-full object-cover navd:h-[240px]"
                />
                <div className="absolute top-[12px] left-[12px] rounded-full bg-[rgba(250,249,247,.94)] px-[12px] py-[5px] text-[11px] font-bold tracking-[.04em] text-ink backdrop-blur-[6px]">
                  STEP {step.n}
                </div>
              </div>
              <div className="rounded-[18px] border border-line bg-white p-[clamp(18px,2.4vw,28px)] shadow-[0_14px_34px_rgba(20,18,26,.05)]">
                <h3 className="mb-[8px] text-[21px] font-extrabold tracking-[-.02em] text-ink">{step.title}</h3>
                <p className="mb-[16px] max-w-[52ch] text-[15px] leading-[1.55] text-muted">{step.desc}</p>
                <div className="flex flex-wrap items-center gap-x-[16px] gap-y-[6px]">
                  {step.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-[7px] text-[13px] font-medium text-muted">
                      <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-brand" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
