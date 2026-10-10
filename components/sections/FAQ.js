'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

/** Accordion of questions, plus FAQPage structured data for search results. */
export default function FAQ({ content }) {
  const [open, setOpen] = useState(0);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="border-t border-line bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-[clamp(28px,5vw,72px)] px-[20px] py-[clamp(64px,9vw,116px)] navd:grid-cols-[minmax(280px,400px)_1fr]">
        <Reveal>
          <div className="navd:sticky navd:top-[100px]">
            <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">{content.eyebrow}</div>
            <h2 className="mb-[16px] text-pretty text-[clamp(28px,4vw,46px)] font-bold leading-[1.06] tracking-[-.03em]">{content.title}</h2>
            {content.intro && <p className="mb-[24px] max-w-[40ch] text-[16px] leading-[1.65] text-muted">{content.intro}</p>}
            {content.action && (
              <a
                href={content.action.href}
                className="inline-flex min-h-[48px] items-center rounded-full bg-brand px-[24px] py-[12px] text-[14px] font-bold text-white hover:bg-blue hover:text-white"
              >
                {content.action.label}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="flex flex-col border-t border-line">
            {content.items.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-start gap-[16px] py-[22px] text-left"
                  >
                    <span className="pt-[3px] font-mono text-[12px] text-brand">{String(i + 1).padStart(2, '0')}</span>
                    <span className={`flex-1 text-[17px] font-semibold leading-[1.4] tracking-[-.01em] ${isOpen ? 'text-blue' : 'text-ink'}`}>{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`flex h-[28px] w-[28px] flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-200 ${
                        isOpen ? 'rotate-45 bg-blue text-white' : 'bg-cream-2 text-blue'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="animate-tm-slide-down-fast max-w-[68ch] pb-[24px] pl-[36px] text-[15px] leading-[1.7] text-muted">{f.a}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
