const SERVICE_LINKS = [
  { href: '/services#business-setup', label: 'Business setup' },
  { href: '/services#banking', label: 'Banking services' },
  { href: '/services#accounting', label: 'Accounting & audit' },
  { href: '/services#vat', label: 'VAT consultancy' },
  { href: '/services#compliance', label: 'Corporate & compliance' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/terms', label: 'Terms of service' },
];

const BUSINESS_SETUP_LINKS = [
  { href: '/business-setup#mainland', label: 'Mainland' },
  { href: '/business-setup#free-zone', label: 'Free zone' },
  { href: '/business-setup#offshore', label: 'Offshore' },
  { href: '/business-setup', label: 'All plans & packages' },
];

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

const SOCIALS = [
  { href: 'https://www.facebook.com/profile.php?id=61560742015182', label: 'Facebook', icon: 'facebook' },
  { href: 'https://www.linkedin.com/in/tmfs-financial-services-64763a330/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://www.instagram.com/timemachinefinancialservices/', label: 'Instagram', icon: 'instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,4vw,48px)] px-[20px] pt-[clamp(48px,7vw,84px)] pb-[28px]">
        <div>
          <div className="mb-[18px] flex items-center gap-[11px]">
            <img src="/logo.png" alt="Time Machine Financial Services" className="block h-[44px] w-[44px] rounded-full" />
            <span className="flex flex-col leading-[1.05]">
              <span className="text-[15px] font-extrabold tracking-[-.01em] text-white">TIME MACHINE</span>
              <span className="font-mono text-[9px] tracking-[.18em] text-brand">FINANCIAL SERVICES</span>
            </span>
          </div>
          <p className="mb-[18px] max-w-[34ch] text-[14.5px] leading-[1.65] text-fog-2">Our prime focus is to be the preferred, leading and easily approachable partner for personalized financial broker services.</p>
          <ul className="mb-4 flex gap-[16px]">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
          <div className="flex gap-[8px]">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-white text-blue hover:bg-brand hover:text-white"
              >
                {ICONS[s.icon]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-fog-2">Services</h4>
          <ul className="flex flex-col gap-[11px]">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-fog-2">Business setup</h4>
          <ul className="flex flex-col gap-[11px]">
            {BUSINESS_SETUP_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-fog-2">Get in touch</h4>
          <ul className="flex flex-col gap-[11px]">
            <li className="text-[14.5px] leading-[1.6] text-fog-2">Millennium Central Hotel, Al Asayel Street, next to Dubai Mall</li>
            <li><a href="tel:+971522149086" className="text-[15px] font-bold text-white hover:text-brand">+971 52 214 9086</a></li>
            <li><a href="mailto:manager@timemachine.ae?subject=TMFS%20Website" className="text-[14.5px] text-fog hover:text-brand">manager@timemachine.ae</a></li>
          </ul>
          <ul className="mt-4 flex gap-[11px]">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center border-t border-[rgba(255,255,255,.16)] px-[20px] pt-[22px] pb-[34px]">
        <span className="text-[13px] text-fog-2">© Time Machine Group | All rights reserved</span>
      </div>
    </footer>
  );
}
