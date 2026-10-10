import Reveal from '../Reveal';

export default function Story({ content }) {
  const { eyebrow, title, paragraphs, facts, highlights, action } = content;
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <div className="grid grid-cols-1 gap-[clamp(32px,5vw,72px)] navd:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">{eyebrow}</div>
          <h2 className="mb-[24px] max-w-[20ch] text-pretty text-[clamp(28px,4vw,46px)] font-bold leading-[1.06] tracking-[-.03em]">{title}</h2>
          <div className="flex flex-col gap-[16px]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-[62ch] text-[16px] leading-[1.7] text-muted">
                {p}
              </p>
            ))}
          </div>
          <dl className="mt-[32px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[18px] border-t border-line pt-[24px]">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="mb-[4px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">{f.label}</dt>
                <dd className="text-[15px] font-semibold text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href={action.href} className="mt-[28px] inline-block text-[14px] font-bold text-blue hover:text-brand">
            {action.label} →
          </a>
        </Reveal>

        <Reveal delay={140} className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-ink">
          <img
            src="/images/business-district.jpg"
            alt="Dubai business district skyline"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,18,26,0)_30%,rgba(20,18,26,.85)_100%)]"></div>
          <div className="absolute inset-x-[16px] bottom-[16px] grid grid-cols-2 gap-[10px]">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-[16px] border border-line bg-white p-[18px]">
                <div className="font-display text-[clamp(28px,3.4vw,38px)] font-extrabold leading-none tracking-[-.03em] text-brand">{h.value}</div>
                <div className="mt-[6px] text-[13px] font-medium text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
