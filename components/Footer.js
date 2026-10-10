import Logo from './Logo';
import { SITE, FOOTER_BLURB, DISCLAIMER } from '@/content/site';
import { FOOTER_COLUMNS, LEGAL_LINKS } from '@/content/nav';

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[16px] w-[16px]">
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.85c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.14.19 2.14.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.66l-.43 2.91h-2.23V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[16px] w-[16px]">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.45 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.48V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.47 2.26 4.47 5.2V20Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[16px] w-[16px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-[clamp(28px,4vw,48px)] px-[20px] pt-[clamp(48px,7vw,84px)] pb-[36px] navp:grid-cols-2 navd:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <a href="/" className="mb-[22px] inline-block">
            <Logo className="block h-[96px] w-[96px]" />
          </a>
          <p className="mb-[20px] max-w-[40ch] text-[14px] leading-[1.65] text-muted">{FOOTER_BLURB}</p>
          <ul className="mb-[20px] flex flex-col gap-[8px]">
            <li className="text-[14px] leading-[1.6] text-muted">{SITE.address}</li>
            <li>
              <a href={`tel:${SITE.phone}`} className="text-[15px] font-bold text-blue hover:text-brand">{SITE.phoneDisplay}</a>
            </li>
            <li>
              <a href={SITE.emailHref} className="text-[14px] text-ink hover:text-brand">{SITE.email}</a>
            </li>
          </ul>
          <div className="flex gap-[8px]">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                style={{ background: s.bg }}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-white hover:text-white hover:opacity-90 hover:-translate-y-[2px]"
              >
                {ICONS[s.icon]}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-[16px] font-mono text-[10px] font-medium uppercase tracking-[.16em] text-muted-2">{col.title}</h4>
            <ul className="flex flex-col gap-[9px]">
              {col.items.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13.5px] text-ink hover:text-brand">{l.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1320px] border-t border-line px-[20px] pt-[22px] pb-[34px]">
        <div className="mb-[16px] flex flex-wrap items-center justify-between gap-[14px]">
          <span className="text-[13px] text-muted-2">© {SITE.since}–{new Date().getFullYear()} Time Machine Group | All rights reserved</span>
          <ul className="flex gap-[18px]">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[13px] text-ink hover:text-brand">{l.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="max-w-[120ch] text-[11.5px] leading-[1.6] text-muted-2">{DISCLAIMER}</p>
      </div>
    </footer>
  );
}
