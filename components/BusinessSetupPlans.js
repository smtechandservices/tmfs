'use client';

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


function TierCard({ tier }) {
  return (
    <div id={tier.id} className="scroll-mt-[96px] flex h-full flex-col rounded-[20px] border border-line bg-white p-[26px]">
      <span className="mb-[14px] inline-block w-fit rounded-full bg-brand-tint px-[13px] py-[5px] font-mono text-[10px] font-bold uppercase tracking-[.1em] text-brand">
        {tier.tag}
      </span>
      <h3 className="mb-[10px] text-[22px] font-semibold tracking-[-.02em] text-blue">{tier.title}</h3>
      <p className="mb-[18px] text-[14.5px] leading-[1.6] text-muted">{tier.desc}</p>
      <a href="/contact" className="mt-auto text-[14px] font-bold text-blue hover:text-brand">
        Get started →
      </a>
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
            Three ways to set up in the UAE. No two businesses need the same jurisdiction, tell us what you're building and we'll match it.
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

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-[20px] px-[20px] py-[clamp(40px,6vw,64px)]">
          <h3 className="max-w-[28ch] text-pretty text-[24px] font-semibold tracking-[-.02em]">Still weighing jurisdictions?</h3>
          <div className="flex flex-wrap gap-[12px]">
            <a href="/contact" className="flex min-h-[52px] items-center rounded-full bg-brand px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-blue hover:text-white">
              Book a free consultation
            </a>
            <a
              href="https://wa.me/971522149086"
              target="_blank"
              rel="noopener"
              className="flex min-h-[52px] items-center rounded-full bg-blue px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-brand hover:text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
