import { PRESS } from '@/content/home';

/** "As featured in" press strip. Renders nothing until PRESS has entries. */
export default function AsFeaturedIn({ items = PRESS }) {
  if (!items.length) return null;
  return (
    <section aria-label="TMFS in the media" className="border-y border-rule bg-white py-[2.4rem]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-[clamp(1.2rem,4vw,3rem)] px-[clamp(1rem,4vw,2rem)] max-[640px]:flex-col">
        <span className="whitespace-nowrap text-[.72rem] font-bold uppercase tracking-[.14em] text-[#6b7280]">As featured in</span>
        <ul className="flex flex-wrap items-start justify-center gap-[clamp(1.4rem,5vw,3.4rem)]">
          {items.map((item) => (
            <li key={item.outlet.join('')} className="flex max-w-[26rem] flex-col items-start gap-[.55rem]">
              <span className="inline-flex items-baseline gap-[.18em] font-serif text-[1.5rem] leading-none font-extrabold tracking-[-.01em]">
                <span className="text-brand">{item.outlet[0]}</span>
                <span className="text-[#1a2233]">{item.outlet[1]}</span>
              </span>
              <ul className="flex flex-col gap-[.32rem]">
                {item.articles.map((a) => (
                  <li key={a.href}>
                    <a
                      href={a.href}
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-flex items-baseline gap-[.4rem] text-[.8rem] leading-[1.4] text-[#6b7280] before:h-[5px] before:w-[5px] before:flex-none before:-translate-y-[2px] before:rounded-full before:bg-current before:opacity-45 before:content-[''] hover:text-[#1a2233]"
                    >
                      {a.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
