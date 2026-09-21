'use client';

import { useEffect, useRef, useState } from 'react';

/** Closes an open dropdown when the user clicks anywhere outside `ref`. */
function useClickOutside(ref, onOutside) {
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onOutside();
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [ref, onOutside]);
}

const SERVICES_MENU = [
  { href: '/services#business-setup', label: 'Business setup' },
  { href: '/services#banking', label: 'Banking' },
  { href: '/services#accounting', label: 'Accounting & audit' },
  { href: '/services#vat', label: 'VAT consultancy' },
  { href: '/services#compliance', label: 'Corporate & compliance' },
];

const BUSINESS_SETUP_MENU = [
  { href: '/business-setup#mainland', label: 'Mainland' },
  { href: '/business-setup#free-zone', label: 'Free zone' },
  { href: '/business-setup#offshore', label: 'Offshore' },
];

function Chevron({ className = '' }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`shrink-0 transition-transform duration-200 ${className}`}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavDropdown({ label, href, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative flex items-center gap-[4px]">
      <a href={href} className="text-[14px] font-semibold text-ink hover:text-brand">
        {label}
      </a>
      <button
        type="button"
        aria-label={`Toggle ${label} menu`}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer p-[4px] text-ink hover:text-brand"
      >
        <Chevron className={open ? 'rotate-180' : ''} />
      </button>
      {open && (
        <div className="animate-tm-slide-down-fast absolute top-full left-0 z-[90] w-[230px] pt-[24px]">
          <div className="rounded-b-[16px] border border-line bg-white p-[8px]">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-[10px] px-[14px] py-[10px] text-[13.5px] font-medium text-ink hover:bg-cream-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between px-[2px] py-[14px] text-[17px] font-semibold text-ink"
      >
        {label}
        <Chevron className={open ? 'rotate-180' : ''} />
      </button>
      {open && (
        <div className="flex flex-col pb-[10px]">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className="rounded-[10px] px-[14px] py-[10px] text-[15px] font-medium text-muted hover:bg-cream-2 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-[80] border-b border-line bg-[rgba(255,255,255,.88)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1320px] items-center gap-[20px] px-[20px] py-[12px]">
        <a href="/" className="flex flex-none items-center gap-[11px]">
          <img src="/logo.png" alt="Time Machine Financial Services" className="block h-[44px] w-[44px] rounded-full" />
          <span className="flex flex-col leading-[1.05]">
            <span className="text-[15px] font-extrabold tracking-[-.01em] text-blue">TIME MACHINE</span>
            <span className="font-mono text-[9px] tracking-[.18em] text-brand">FINANCIAL SERVICES</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-[26px] navd:flex">
          <NavDropdown label="Services" href="/services" items={SERVICES_MENU} />
          <a href="/about" className="text-[14px] font-semibold text-ink hover:text-brand">About</a>
          <NavDropdown label="Business Setup" href="/business-setup" items={BUSINESS_SETUP_MENU} />
          <a href="/insights" className="text-[14px] font-semibold text-ink hover:text-brand">Insights</a>
          <a href="/contact" className="text-[14px] font-semibold text-ink hover:text-brand">Contact</a>
        </nav>

        <a
          href="tel:+971522149086"
          className="ml-auto hidden flex-none items-center gap-[8px] font-mono text-[12px] font-medium text-ink hover:text-brand navp:flex"
        >
          +971522149086
        </a>

        <a
          href="/contact"
          className="relative hidden min-h-[44px] flex-none items-center overflow-hidden rounded-full bg-brand px-[20px] py-[12px] text-[13px] font-bold tracking-[.01em] text-white hover:bg-blue hover:text-white navd:flex"
        >
          Book a consultation
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="group ml-auto -mr-4 flex h-[46px] w-[46px] flex-none flex-col items-center justify-center gap-[5px] cursor-pointer transition-colors duration-200 navd:hidden"
        >
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(.22,.7,.2,1)] group-hover:bg-white ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-200 group-hover:bg-white ${
              menuOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-ink transition-all duration-300 ease-[cubic-bezier(.22,.7,.2,1)] group-hover:bg-white ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          ></span>
        </button>
      </div>

      {menuOpen && (
        <div className="animate-tm-slide-down-fast border-t border-line bg-cream">
          <div className="mx-auto flex max-w-[1320px] flex-col px-[20px] pt-[10px] pb-[20px]">
            <MobileAccordion label="Services" items={SERVICES_MENU} onNavigate={closeMenu} />
            <a href="/about" onClick={closeMenu} className="border-b border-line-2 px-[2px] py-[14px] text-[17px] font-semibold text-ink">
              About
            </a>
            <MobileAccordion label="Business Setup" items={BUSINESS_SETUP_MENU} onNavigate={closeMenu} />
            <a href="/insights" onClick={closeMenu} className="border-b border-line-2 px-[2px] py-[14px] text-[17px] font-semibold text-ink">
              Insights
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="mt-[16px] rounded-full bg-brand px-[20px] py-[15px] text-center text-[15px] font-bold text-white"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
