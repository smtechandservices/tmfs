import Reveal from './Reveal';
import { PRACTICES } from '@/content/catalog';

const CARDS = [
  ...PRACTICES.map((p, i) => ({ n: String(i + 1).padStart(2, '0'), title: p.title, desc: p.summary, href: p.href })),
  {
    n: '06',
    title: 'Not sure where to start?',
    desc: 'Book a free 20-minute call, we’ll map the right path for your business.',
    href: '/contact',
    dark: true,
  },
];

// Split into two columns that marquee in opposite directions.
const COL_A = [CARDS[0], CARDS[2], CARDS[4]];
const COL_B = [CARDS[1], CARDS[3], CARDS[5]];

function Card({ c, dup, horizontal }) {
  return (
    <a
      href={c.href || '/contact'}
      aria-hidden={dup || undefined}
      tabIndex={dup ? -1 : undefined}
      className={`block shrink-0 rounded-[18px] border p-[22px] transition-colors duration-200 ${horizontal ? 'w-[260px]' : ''} ${
        c.dark
          ? 'border-blue bg-blue hover:border-brand'
          : 'border-line bg-white hover:border-blue'
      }`}
    >
      <h3 className={`mb-[6px] text-[17px] font-semibold tracking-[-.01em] ${c.dark ? 'text-white' : 'text-blue'}`}>{c.title}</h3>
      <p className={`text-[13.5px] leading-[1.55] ${c.dark ? 'text-fog-2' : 'text-muted'}`}>{c.desc}</p>
      <span className={`mt-[12px] inline-block text-[15px] ${c.dark ? 'text-brand' : 'text-muted-2'}`}>›</span>
    </a>
  );
}

// Each card renders at a fixed ~175px tall with a 16px gap between them.
// The visible window must be sized to exactly one copy's height — a column
// with fewer cards needs a shorter window, otherwise the duplicate set
// (needed for the seamless loop) peeks into view and the same cards appear
// to repeat twice at once instead of scrolling smoothly.
const CARD_H = 175;
const GAP = 16;

function MarqueeColumn({ items, direction = 'up' }) {
  const anim = direction === 'up' ? 'animate-tm-marquee-up' : 'animate-tm-marquee-down';
  const height = items.length * CARD_H + (items.length - 1) * GAP;
  return (
    <div
      className="overflow-hidden rounded-[22px] [mask-image:linear-gradient(180deg,transparent,black_8%,black_92%,transparent)]"
      style={{ height: `${height}px` }}
    >
      <div className={`flex flex-col gap-[16px] ${anim} hover:[animation-play-state:paused]`}>
        {items.map((c) => (
          <Card key={c.n} c={c} />
        ))}
        {items.map((c) => (
          <Card key={`${c.n}-dup`} c={c} dup />
        ))}
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = 'left' }) {
  const anim = direction === 'left' ? 'animate-tm-marquee' : 'animate-tm-marquee-right';
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div className={`flex w-max gap-[14px] ${anim} hover:[animation-play-state:paused]`}>
        {items.map((c) => (
          <Card key={c.n} c={c} horizontal />
        ))}
        {items.map((c) => (
          <Card key={`${c.n}-dup`} c={c} dup horizontal />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1320px] px-[10px] py-4">
      <div className="grid grid-cols-1 items-center gap-[48px] navd:grid-cols-[minmax(280px,420px)_1fr]">
        <Reveal>
          <span className="mb-[24px] inline-block rounded-full bg-brand-tint px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[.1em] text-brand">
            Practice areas
          </span>
          <h2 className="mb-[18px] max-w-[16ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-bold leading-[1.05] tracking-[-.03em]">Five practices, one point of contact</h2>
          <p className="mb-[32px] max-w-[42ch] text-[16px] leading-[1.6] text-muted">
            Everything a UAE company needs in its first years, from licence to bank account to tax return. Take one, or hand us all of it.
          </p>
          <div className="flex flex-wrap gap-[32px]">
            <div className="border-l-2 border-brand pl-[16px]">
              <div className="font-display text-[28px] font-extrabold tracking-[-.02em] text-ink">5</div>
              <div className="text-[13px] text-muted">Practices under one roof</div>
            </div>
            <div className="border-l-2 border-brand pl-[16px]">
              <div className="font-display text-[28px] font-extrabold tracking-[-.02em] text-ink">3–7 days</div>
              <div className="text-[13px] text-muted">Typical licence turnaround</div>
            </div>
          </div>
        </Reveal>

        {/* Desktop: two columns marqueeing vertically in opposite directions */}
        <Reveal delay={120} className="hidden navd:grid navd:grid-cols-2 navd:gap-[16px]">
          <MarqueeColumn items={COL_A} direction="up" />
          <MarqueeColumn items={COL_B} direction="down" />
        </Reveal>

        {/* Mobile/tablet: two rows marqueeing horizontally in opposite directions */}
        <Reveal delay={120} className="flex flex-col gap-[14px] navd:hidden">
          <MarqueeRow items={COL_A} direction="left" />
          <MarqueeRow items={COL_B} direction="right" />
        </Reveal>
      </div>
    </section>
  );
}
