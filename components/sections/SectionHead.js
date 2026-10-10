import Reveal from '../Reveal';

/** Eyebrow + heading + intro used at the top of every section, with an optional link on the right. */
export default function SectionHead({ eyebrow, title, intro, action, dark = false, className = '' }) {
  return (
    <div className={`mb-[clamp(28px,4vw,44px)] flex flex-wrap items-end justify-between gap-[22px] ${className}`}>
      <Reveal>
        {eyebrow && <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">{eyebrow}</div>}
        <h2
          className={`max-w-[22ch] text-pretty text-[clamp(28px,4vw,46px)] font-bold leading-[1.06] tracking-[-.03em] ${dark ? 'text-white' : ''}`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-[16px] max-w-[56ch] text-[16px] leading-[1.65] ${dark ? 'text-fog-2' : 'text-muted'}`}>{intro}</p>
        )}
      </Reveal>
      {action && (
        <Reveal delay={120}>
          <a
            href={action.href}
            className={`text-[14px] font-bold ${dark ? 'text-white hover:text-brand' : 'text-blue hover:text-brand'}`}
          >
            {action.label} →
          </a>
        </Reveal>
      )}
    </div>
  );
}
