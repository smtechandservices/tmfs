'use client';

import { useRef } from 'react';
import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import Button, { Eyebrow, Rich } from '../ui/Button';
import { INSIGHTS } from '@/content/home';
import { ARTICLES } from '@/content/insights';

export default function Insights({ content = INSIGHTS, articles = ARTICLES }) {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    const card = el?.querySelector('[data-card]');
    if (card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-[160px] max-[1100px]:py-[100px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="mb-[56px] flex items-end justify-between gap-[48px] max-md:mb-[28px] max-md:flex-col max-md:items-start max-md:gap-[14px]">
          <div>
            <Eyebrow className="mb-[20px]">{content.eyebrow}</Eyebrow>
            <h2 className="mt-[20px] max-w-[680px] text-[clamp(32px,4.2vw,56px)] leading-[1.08] font-semibold tracking-[-.024em] text-blue max-md:mt-0 max-md:text-[24px]">
              <Rich value={content.title} />
            </h2>
          </div>
          <Button href={content.action.href} variant="line">
            {content.action.label}
          </Button>
        </Reveal>

        <Reveal className="relative mt-[24px]">
          <div className="mb-[18px] flex gap-[10px]">
            {[
              { dir: -1, icon: 'arrow-left', label: 'Previous insights' },
              { dir: 1, icon: 'arrow-right', label: 'More insights' },
            ].map((b) => (
              <button
                key={b.dir}
                type="button"
                aria-label={b.label}
                onClick={() => scroll(b.dir)}
                className="inline-flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-[#eef1f6] text-blue transition-colors hover:bg-blue hover:text-white max-md:h-[38px] max-md:w-[38px]"
              >
                <Icon name={b.icon} size={18} />
              </button>
            ))}
          </div>
          <div ref={track} className="flex snap-x snap-proximity gap-[20px] overflow-x-auto pb-[6px] [scrollbar-width:none] max-md:snap-mandatory [&::-webkit-scrollbar]:hidden">
            {articles.map((a) => (
              <a
                key={a.title}
                data-card
                href="/insights"
                className="group/card flex flex-[0_0_calc(25%-15px)] snap-start flex-col overflow-hidden rounded-[16px] bg-soft text-inherit transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgba(10,37,64,.1)] max-[1200px]:basis-[calc(33.333%-13.333px)] max-[900px]:basis-[calc(50%-10px)] max-md:basis-full max-md:snap-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f0f3f8]">
                  <img src={a.img} alt={a.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] group-hover/card:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col px-[22px] pt-[22px] pb-[24px]">
                  <h3 className="mb-[11px] line-clamp-2 font-sans text-[18px] leading-[1.3] font-bold tracking-[-.01em] text-blue">{a.title}</h3>
                  <p className="mb-[18px] line-clamp-3 text-[14px] leading-[1.6] text-slate">{a.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-[7px] self-start rounded-full bg-brand px-[20px] py-[10px] text-[13px] font-semibold text-white transition-[gap,background] duration-200 group-hover/card:gap-[11px] group-hover/card:bg-blue">
                    Read more <Icon name="arrow-right" size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
