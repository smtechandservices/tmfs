'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const QUOTES = [
  {
    initials: 'VT',
    quote:
      "TMFS has truly been a game changer for me. Their personalized approach to financial services made the entire process easy and stress-free. I trust them completely with my investments and feel secure knowing my financial future is in safe hands.",
    name: 'Vipul Tibrewal',
    role: 'Marketing Manager, PSP Marketing',
  },
  {
    initials: 'FA',
    quote:
      "I've worked with several financial firms, but TMFS stands out with their attention to detail and commitment to understanding my unique needs. Their professional team has guided me every step of the way, and I couldn't be happier with the results.",
    name: 'Fatima Al Mansoori',
    role: 'Realtor, Frisko',
  },
  {
    initials: 'PN',
    quote:
      "TMFS has been incredibly supportive and responsive throughout my financial journey. Their personalized broker services have exceeded my expectations, and I now recommend them to anyone looking for trustworthy financial guidance.",
    name: 'Priya Nair',
    role: 'Sales',
  },
];

export default function Testimonials() {
  const [ti, setTi] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTi((t) => (t + 1) % QUOTES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  const active = QUOTES[ti];

  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Testimonials</div>
      <Reveal delay={100} className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(28px,4vw,56px)]">
        <div className="flex min-h-[280px] flex-col justify-center">
          <blockquote key={ti} className="animate-tm-slide-down">
            <p className="mb-[24px] text-pretty text-[clamp(21px,2.9vw,34px)] font-semibold leading-[1.32] tracking-[-.02em]">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="flex items-center gap-[14px]">
              <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-brand-tint text-[15px] font-extrabold text-brand">{active.initials}</span>
              <span>
                <strong className="block text-[15px] font-bold">{active.name}</strong>
                <span className="text-[13.5px] text-muted">{active.role}</span>
              </span>
            </footer>
          </blockquote>
          <div className="mt-[30px] flex gap-[8px]">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                onClick={() => setTi(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-[5px] w-[38px] cursor-pointer rounded-full border-0 p-0 ${i === ti ? 'bg-brand' : 'bg-line-3'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[12px]">
          <div className="rounded-[18px] border border-line bg-white p-[24px]">
            <div className="text-[34px] font-extrabold tracking-[-.03em] text-brand">4.9</div>
            <div className="mt-[6px] text-[13.5px] font-medium text-muted">Average client rating</div>
          </div>
          <div className="rounded-[18px] border border-line bg-white p-[24px]">
            <div className="text-[34px] font-extrabold tracking-[-.03em] text-brand">94%</div>
            <div className="mt-[6px] text-[13.5px] font-medium text-muted">Clients who renew with us</div>
          </div>
          <div className="col-span-full rounded-[18px] border border-line bg-white p-[24px]">
            <div className="mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Talk to our experts</div>
            <p className="mb-[16px] text-[14.5px] leading-[1.6] text-muted">Our team can walk you through the whole setup process, start to finish.</p>
            <div className="flex flex-wrap gap-[10px]">
              <a href="tel:+971522149086" className="flex min-h-[44px] items-center rounded-full bg-blue px-[20px] py-[11px] text-[13.5px] font-bold text-white hover:bg-brand">Call now</a>
              <a href="mailto:manager@timemachine.ae?subject=TMFS%20Website" className="flex min-h-[44px] items-center rounded-full border border-line px-[20px] py-[11px] text-[13.5px] font-semibold text-ink hover:border-blue hover:text-blue">Email us</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
