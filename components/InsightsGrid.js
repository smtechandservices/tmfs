'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const CATEGORIES = ['All', 'Business Setup', 'Banking', 'Accounting & Audit', 'VAT & Tax', 'Corporate & Compliance'];

const ARTICLES = [
  {
    img: '/images/business-planning.jpg',
    alt: 'Business planning notes on a desk',
    category: 'Business Setup',
    readTime: '6 min',
    date: 'Sep 2026',
    title: 'Free zone or mainland? Pick by your customer, not by price',
    desc: 'Who you invoice decides your jurisdiction. A short decision tree for founders comparing IFZA, Meydan and mainland.',
  },
  {
    img: '/images/advisors-report.jpg',
    alt: 'Advisors reviewing financial reports',
    category: 'VAT & Tax',
    readTime: '5 min',
    date: 'Aug 2026',
    title: 'The four VAT filing mistakes that trigger an FTA penalty',
    desc: 'Reverse charge, credit notes, missing TRNs and late reconciliation. What we see most often in health checks.',
  },
  {
    img: '/images/difc-skyline.jpg',
    alt: 'DIFC skyline, Dubai’s banking district',
    category: 'Banking',
    readTime: '7 min',
    date: 'Aug 2026',
    title: 'Corporate bank account opening: the documents UAE banks actually ask for',
    desc: 'Business plan, proof of source of funds and shareholder KYC. What clears compliance on the first pass.',
  },
  {
    img: '/images/business-district.jpg',
    alt: 'Dubai business district',
    category: 'Corporate & Compliance',
    readTime: '4 min',
    date: 'Jul 2026',
    title: 'PRO services explained: what actually needs government liaison',
    desc: 'Attestation, document clearing and the approvals that stall a setup when they’re left too late.',
  },
  {
    img: '/images/downtown-dubai.jpg',
    alt: 'Downtown Dubai skyline',
    category: 'Accounting & Audit',
    readTime: '5 min',
    date: 'Jul 2026',
    title: 'Bookkeeping habits that make your FTA audit painless',
    desc: 'The records auditors ask for first, and the filing cadence that keeps them ready year-round.',
  },
  {
    img: '/images/business-bay-dusk.jpg',
    alt: 'Business Bay, Dubai at dusk',
    category: 'VAT & Tax',
    readTime: '6 min',
    date: 'Jun 2026',
    title: 'UAE Corporate Tax: who actually owes 9%',
    desc: 'Thresholds, free zone qualifying income and the registration deadlines businesses keep missing.',
  },
];

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
                active === cat ? 'border-ink bg-ink text-white' : 'border-line-3 bg-white text-ink hover:border-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[16px]">
          {filtered.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 90} className="block">
              <div className="overflow-hidden rounded-[20px] border border-line bg-cream">
                <div className="aspect-[16/10] overflow-hidden bg-fog">
                  <img src={a.img} alt={a.alt} className="block h-full w-full object-cover" />
                </div>
                <div className="p-[24px]">
                  <div className="mb-[10px] flex items-center gap-[8px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">
                    <span>{a.category}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mb-[8px] text-[19px] font-bold leading-[1.25] tracking-[-.01em] text-ink">{a.title}</h3>
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
