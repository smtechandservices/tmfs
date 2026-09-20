'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const FIELD_CLASS =
  'min-h-[50px] rounded-[12px] border border-line bg-cream px-[15px] py-[13px] text-[15px] focus:border-ink focus:bg-white';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,4vw,56px)]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Get started</div>
          <h2 className="mb-[18px] max-w-[20ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-extrabold leading-[1.04] tracking-[-.03em]">Fill in your details and our team will connect with you</h2>
          <p className="mb-[32px] max-w-[44ch] text-[16px] leading-[1.65] text-muted">Or skip the form. Call, WhatsApp or walk into the office next to Dubai Mall.</p>
          <ul className="flex flex-col gap-[20px]">
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Office</div>
              <div className="text-[15.5px] font-medium leading-[1.55] text-ink">Millennium Central Hotel, Al Asayel Street, next to Dubai Mall<br />PO Box 8405, Dubai Central Post Office</div>
            </li>
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Phone &amp; WhatsApp</div>
              <a href="tel:+971522149086" className="text-[19px] font-bold text-ink hover:text-brand">+971 52 214 9086</a>
            </li>
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Email</div>
              <a href="mailto:manager@timemachine.ae?subject=TMFS%20Website" className="text-[16px] font-semibold text-ink hover:text-brand">manager@timemachine.ae</a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140} className="rounded-[22px] border border-line bg-white p-[clamp(24px,3.4vw,38px)] shadow-[0_18px_44px_rgba(20,18,26,.06)]">
          {sent ? (
            <div className="flex animate-tm-slide-down-med flex-col items-start gap-[14px] py-[28px]">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-tint text-[24px] font-extrabold text-brand">✓</span>
              <h3 className="text-[24px] font-extrabold tracking-[-.02em]">Thanks, we have it</h3>
              <p className="text-[15px] leading-[1.6] text-muted">A consultant will call you within one working day. If it is urgent, WhatsApp us on +971 52 214 9086.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-[14px]">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[14px]">
                <label className="flex flex-col gap-[6px]">
                  <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Full name</span>
                  <input type="text" required placeholder="Your name" className={FIELD_CLASS} />
                </label>
                <label className="flex flex-col gap-[6px]">
                  <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Mobile</span>
                  <input type="tel" required placeholder="+971 50 000 0000" className={FIELD_CLASS} />
                </label>
              </div>
              <label className="flex flex-col gap-[6px]">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Email</span>
                <input type="email" required placeholder="you@company.com" className={FIELD_CLASS} />
              </label>
              <label className="flex flex-col gap-[6px]">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">I need help with</span>
                <select className={`${FIELD_CLASS} cursor-pointer`}>
                  <option>Business setup</option>
                  <option>Bank account opening</option>
                  <option>Mortgage or loan</option>
                  <option>VAT &amp; accounting</option>
                  <option>Corporate & compliance</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="flex flex-col gap-[6px]">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Anything we should know</span>
                <textarea rows={3} placeholder="Activity, nationality, timeline…" className={`${FIELD_CLASS} resize-y font-sans`} />
              </label>
              <button type="submit" className="relative mt-[4px] min-h-[56px] cursor-pointer overflow-hidden rounded-[14px] border-0 bg-brand px-[24px] py-[17px] text-[15.5px] font-bold text-white hover:bg-ink">
                Request my free consultation
              </button>
              <p className="text-[12.5px] leading-[1.55] text-muted-2">We reply within one working day. Your details go to our CRM only, never to third parties.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
