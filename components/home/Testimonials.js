'use client';

import { useRef } from 'react';
import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow } from '../ui/Button';
import { TESTIMONIALS_HEAD } from '@/content/home';
import { TESTIMONIALS } from '@/content/people';

const AVATARS = [
  'bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-blue-mid)_100%)]',
  'bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-deep)_100%)]',
  'bg-[linear-gradient(135deg,#2a5f7f_0%,#3f7ea0_100%)]',
];

const Stars = ({ size }) => (
  <span className="inline-flex flex-none items-center gap-[2px] text-gold drop-shadow-[0_1px_2px_rgba(251,191,36,.35)]" role="img" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Icon key={i} name="star" size={size} />
    ))}
  </span>
);

/** Scrolling row of review cards; also used on the jurisdiction pages. */
export function ReviewCarousel({ quotes = TESTIMONIALS, fits = 4 }) {
  const track = useRef(null);
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  // `fits` is how many cards the row shows at once; arrows only appear when there are more.
  const arrows = quotes.length > fits;

  return (
    <Reveal className="relative z-[1]">
      {arrows && (
        <button type="button" aria-label="Previous reviews" onClick={() => scroll(-1)} className="absolute top-[92px] -left-[10px] z-[4] inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-blue shadow-[0_4px_14px_rgba(10,37,64,.16)] transition-colors hover:bg-blue hover:text-white max-md:hidden">
          <Icon name="arrow-left" size={20} />
        </button>
      )}
      <div ref={track} className="flex snap-x snap-proximity gap-[20px] overflow-x-auto px-[2px] pt-[4px] pb-[10px] [scrollbar-width:none] max-md:snap-mandatory [&::-webkit-scrollbar]:hidden">
        {quotes.map((q, i) => (
          <div key={`${q.name}-${i}`} className="flex max-w-[300px] flex-[0_0_300px] snap-start flex-col max-md:max-w-full max-md:basis-full max-md:snap-center">
            <article className="flex min-h-[224px] flex-col rounded-[16px] border border-rule-soft bg-white px-[22px] pt-[22px] pb-[20px] shadow-[0_4px_16px_rgba(10,37,64,.05)]">
              <div className="mb-[14px] flex items-center gap-[7px]">
                {q.placeholder ? (
                  <span className="rounded-full border border-dashed border-slate-2 px-[10px] py-[3px] text-[10.5px] font-bold uppercase tracking-[.12em] text-slate-2">Placeholder</span>
                ) : (
                  <Stars size={15} />
                )}
              </div>
              <p className={`mb-[14px] line-clamp-5 text-[14px] leading-[1.65] ${q.placeholder ? 'text-slate-2 italic' : 'text-blue'}`}>{q.quote}</p>
            </article>
            <div className="flex items-center gap-[12px] px-[6px] pt-[16px]">
              <span className={`flex h-[44px] w-[44px] flex-none items-center justify-center rounded-full font-display text-[17px] font-bold tracking-[-.01em] text-white shadow-[0_4px_12px_rgba(10,37,64,.18)] ${AVATARS[i % 3]}`}>
                {q.initials}
              </span>
              <div className="flex min-w-0 flex-col gap-[2px]">
                <span className="text-[14px] leading-[1.25] font-bold text-blue">{q.name}</span>
                <span className="text-[12px] text-slate-2">{q.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {arrows && (
        <button type="button" aria-label="More reviews" onClick={() => scroll(1)} className="absolute top-[92px] -right-[10px] z-[4] inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-white text-blue shadow-[0_4px_14px_rgba(10,37,64,.16)] transition-colors hover:bg-blue hover:text-white max-md:hidden">
          <Icon name="arrow-right" size={20} />
        </button>
      )}
    </Reveal>
  );
}

export default function Testimonials({ head = TESTIMONIALS_HEAD, quotes = TESTIMONIALS }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(#fff_0%,#f7f8fa_100%)] py-[120px] before:pointer-events-none before:absolute before:-top-[140px] before:-right-[160px] before:h-[540px] before:w-[540px] before:rounded-full before:bg-[radial-gradient(circle,rgba(219,20,28,.1)_0%,rgba(219,20,28,.03)_40%,transparent_70%)] before:blur-[30px] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[160px] after:-left-[160px] after:h-[540px] after:w-[540px] after:rounded-full after:bg-[radial-gradient(circle,rgba(24,0,173,.1)_0%,rgba(24,0,173,.03)_40%,transparent_70%)] after:blur-[30px] after:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="relative z-[1] mb-[56px] max-w-[760px] max-md:mb-[28px]">
          <Eyebrow className="mb-[16px]">{head.eyebrow}</Eyebrow>
          <h2 className="mb-[24px] text-[clamp(28px,3vw,44px)] leading-[1.12] font-bold tracking-[-.026em] text-blue">{head.title}</h2>
          {head.rating && (
            <span className="inline-flex items-center gap-[10px] whitespace-nowrap rounded-full border border-white/95 bg-white/75 px-[18px] py-[10px] shadow-[inset_0_1px_#fff,0_4px_14px_rgba(10,37,64,.06)] max-md:gap-[8px] max-md:px-[14px] max-md:py-[8px]">
              <Stars size={16} />
              <span className="font-display text-[13.5px] leading-none text-blue">
                <strong className="text-[15px] font-extrabold">{head.rating.value}</strong>/5
              </span>
              <span aria-hidden="true" className="text-[14px] leading-none text-slate-2">
                ·
              </span>
              <span className="text-[12.5px] leading-none font-medium text-slate">{head.rating.label}</span>
            </span>
          )}
        </Reveal>

        <ReviewCarousel quotes={quotes} />

        {head.reviewsUrl && (
          <Reveal className="relative z-[1] mt-[44px] flex justify-center">
            <a
              href={head.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/rv inline-flex items-center gap-[10px] rounded-full border border-rule bg-white px-[26px] py-[14px] text-[13px] font-semibold tracking-[.02em] text-blue shadow-[0_4px_14px_rgba(10,37,64,.05)] transition-all duration-[250ms] hover:-translate-y-[2px] hover:border-brand hover:text-brand-deep hover:shadow-[0_10px_26px_rgba(219,20,28,.12)]"
            >
              Read all our reviews on Google
              <Icon name="external-link" size={14} className="opacity-55 transition-[transform,opacity] group-hover/rv:translate-x-[2px] group-hover/rv:-translate-y-[1px] group-hover/rv:opacity-100" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
