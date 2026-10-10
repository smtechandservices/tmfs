'use client';

import { useState } from 'react';
import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow, Rich } from '../ui/Button';
import { FAQS } from '@/content/home';

const EASE = 'ease-[cubic-bezier(.22,.61,.36,1)]';

/** Accordion of questions, plus FAQPage structured data for search results. */
export default function HomeFAQ({ content = FAQS }) {
  const [open, setOpen] = useState(0);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(#f7f8fa_0%,#fff_100%)] py-[120px] before:pointer-events-none before:absolute before:-top-[140px] before:-right-[160px] before:h-[540px] before:w-[540px] before:rounded-full before:bg-[radial-gradient(circle,rgba(219,20,28,.1)_0%,rgba(219,20,28,.03)_40%,transparent_70%)] before:blur-[30px] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[180px] after:-left-[180px] after:h-[540px] after:w-[540px] after:rounded-full after:bg-[radial-gradient(circle,rgba(24,0,173,.1)_0%,rgba(24,0,173,.04)_40%,transparent_70%)] after:blur-[30px] after:content-[''] max-[1100px]:py-[80px] max-md:py-[64px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-[1] mx-auto grid max-w-[1320px] grid-cols-2 items-start gap-[56px] px-[24px] max-[900px]:grid-cols-1 max-[900px]:gap-[40px]">
        <Reveal className="sticky top-[100px] max-[1100px]:static">
          <Eyebrow className="mb-[18px]">{content.eyebrow}</Eyebrow>
          <h2 className="mb-[22px] text-[clamp(28px,3vw,44px)] leading-[1.1] font-bold tracking-[-.026em] text-blue">
            <Rich value={content.title} />
          </h2>
          <p className="mb-[28px] max-w-[360px] text-[15px] leading-[1.7] text-slate max-[900px]:max-w-full">{content.intro}</p>
          <a
            href={content.action.href}
            className={`group/ask inline-flex items-center gap-[8px] border-b-2 border-brand py-[12px] text-[12px] font-bold uppercase tracking-[.12em] text-brand transition-[gap,color] duration-[250ms] ${EASE} hover:gap-[12px] hover:border-brand-deep hover:text-brand-deep`}
          >
            {content.action.label}
            <Icon name="arrow-right" size={16} className="transition-transform duration-[250ms] group-hover/ask:translate-x-[3px]" />
          </a>
        </Reveal>

        <Reveal delay={80} className="flex flex-col gap-[12px] max-md:gap-[10px]">
          {content.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`relative overflow-hidden rounded-t-[18px] border transition-[background,border-color,box-shadow] duration-[350ms] ${EASE} ${
                  isOpen
                    ? "border-[rgba(219,20,28,.35)] bg-white shadow-[inset_0_1px_#fff,0_16px_40px_rgba(10,37,64,.1),0_4px_10px_rgba(219,20,28,.08)] after:absolute after:top-[24px] after:bottom-[24px] after:left-0 after:w-[3px] after:rounded-r-[2px] after:bg-brand after:content-['']"
                    : 'border-white/95 bg-white/80 shadow-[inset_0_1px_#fff,0_3px_12px_rgba(10,37,64,.04)] hover:border-[rgba(219,20,28,.22)] hover:bg-white/95 hover:shadow-[inset_0_1px_#fff,0_10px_28px_rgba(10,37,64,.08)]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-[20px] py-[22px] pr-[26px] text-left transition-[padding] duration-[250ms] max-md:gap-[14px] max-md:py-[18px] max-md:pr-[18px] ${
                    isOpen ? 'pl-[30px] max-md:pl-[22px]' : 'pl-[26px] hover:pl-[30px] max-md:pl-[18px]'
                  }`}
                >
                  <span className="w-[24px] flex-none text-[12px] font-bold tracking-[.12em] text-brand">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-[16px] leading-[1.4] font-bold tracking-[-.014em] text-blue max-md:text-[14.5px]">{f.q}</span>
                  <span
                    aria-hidden="true"
                    className={`relative flex h-[36px] w-[36px] flex-none items-center justify-center rounded-t-[10px] transition-[background,color,transform] duration-[350ms] before:absolute before:top-1/2 before:left-1/2 before:h-[2px] before:w-[14px] before:-translate-1/2 before:rounded-[1px] before:bg-current before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:h-[14px] after:w-[2px] after:-translate-1/2 after:rounded-[1px] after:bg-current after:transition-opacity after:duration-300 after:content-[''] max-md:h-[32px] max-md:w-[32px] ${
                      isOpen ? 'rotate-180 bg-brand text-white after:opacity-0' : 'bg-brand-pale text-brand'
                    }`}
                  />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-[350ms] ${EASE} ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="pr-[26px] pb-[26px] pl-[70px] text-[14.5px] leading-[1.7] text-slate max-md:pr-[18px] max-md:pb-[22px] max-md:pl-[50px] max-md:text-[13.5px]">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
