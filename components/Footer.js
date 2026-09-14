const SERVICE_LINKS = [
  { href: '#services', label: 'Business setup' },
  { href: '#services', label: 'Banking services' },
  { href: '#services', label: 'Accounting & audit' },
  { href: '#services', label: 'VAT consultancy' },
  { href: '#services', label: 'Corporate & compliance' },
  { href: '#properties', label: 'Property & mortgage' },
];

const COMPANY_LINKS = [
  { href: '#top', label: 'About us' },
  { href: '#dubai', label: 'Dubai locations' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://www.facebook.com/profile.php?id=61560742015182', label: 'Fb' },
  { href: 'https://www.linkedin.com/in/tmfs-financial-services-64763a330/', label: 'In' },
  { href: 'https://www.instagram.com/timemachinefinancialservices/', label: 'Ig' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(28px,4vw,48px)] px-[20px] pt-[clamp(48px,7vw,84px)] pb-[28px]">
        <div>
          <div className="mb-[18px] flex items-center gap-[11px]">
            <img src="/logo.png" alt="Time Machine Financial Services" className="block h-[44px] w-[44px] rounded-full" />
            <span className="flex flex-col leading-[1.05]">
              <span className="text-[15px] font-extrabold tracking-[-.01em] text-white">TIME MACHINE</span>
              <span className="font-mono text-[9px] tracking-[.18em] text-brand">FINANCIAL SERVICES</span>
            </span>
          </div>
          <p className="max-w-[34ch] text-[14.5px] leading-[1.65] text-fog-2">Our prime focus is to be the preferred, leading and easily approachable partner for personalized financial broker services.</p>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Services</h4>
          <ul className="flex flex-col gap-[11px]">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Company</h4>
          <ul className="flex flex-col gap-[11px]">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="text-[14.5px] text-fog hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-[16px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Get in touch</h4>
          <ul className="mb-[20px] flex flex-col gap-[11px]">
            <li className="text-[14.5px] leading-[1.6] text-fog-2">Millennium Central Hotel, Al Asayel Street, next to Dubai Mall</li>
            <li><a href="tel:+971522149086" className="text-[15px] font-bold text-white hover:text-brand">+971 52 214 9086</a></li>
            <li><a href="mailto:manager@timemachine.ae?subject=TMFS%20Website" className="text-[14.5px] text-fog hover:text-brand">manager@timemachine.ae</a></li>
          </ul>
          <div className="flex gap-[8px]">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[rgba(255,255,255,.09)] text-[13px] font-bold text-white hover:bg-brand"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1320px] flex-wrap justify-between gap-[12px] border-t border-[rgba(255,255,255,.12)] px-[20px] pt-[22px] pb-[34px]">
        <span className="text-[13px] text-muted-2">© Time Machine Group | All rights reserved</span>
        <span className="text-[13px] text-muted-2">Sister company: MID Real Estate Brokers</span>
      </div>
    </footer>
  );
}
