'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { NAV } from '@/content/nav';
import { SITE } from '@/content/site';

function Chevron({ className = '' }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`shrink-0 transition-transform duration-200 ${className}`}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AdvisoryTag() {
  return (
    <span className="rounded-full bg-cream-2 px-[7px] py-[1px] font-mono text-[8.5px] uppercase tracking-[.1em] text-muted-2">Advisory</span>
  );
}

/** Full-width dropdown panel, anchored to the header container rather than the trigger. */
function MegaPanel({ item, onNavigate }) {
  return (
    <div className="animate-tm-slide-down-fast absolute inset-x-[20px] top-full z-[90] pt-[10px]">
      <div className="flex gap-[clamp(20px,3vw,40px)] rounded-[20px] border border-line bg-white p-[clamp(20px,2.4vw,30px)] shadow-[0_24px_60px_rgba(20,18,26,.14)]">
        <div className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-[clamp(20px,3vw,36px)]">
          {item.columns.map((col) => (
            <div key={col.title}>
              {col.href ? (
                <a
                  href={col.href}
                  onClick={onNavigate}
                  className="mb-[12px] block font-mono text-[10px] uppercase tracking-[.16em] text-brand hover:text-blue"
                >
                  {col.title} →
                </a>
              ) : (
                <div className="mb-[12px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">{col.title}</div>
              )}
              <ul className="flex flex-col">
                {col.items.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onNavigate}
                      className="flex items-center gap-[8px] rounded-[8px] py-[6px] text-[13.5px] font-medium text-ink hover:text-brand"
                    >
                      {link.title}
                      {link.advisory && <AdvisoryTag />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="hidden w-[250px] flex-none flex-col justify-between rounded-[16px] bg-blue p-[22px] navd:flex">
          <div>
            <div className="mb-[10px] font-mono text-[10px] uppercase tracking-[.16em] text-brand">Not sure where to start?</div>
            <p className="text-[14px] leading-[1.6] text-fog-2">A free 20-minute call maps the right path for your business, with a written cost breakdown.</p>
          </div>
          <a
            href="/contact"
            onClick={onNavigate}
            className="mt-[18px] flex min-h-[44px] items-center justify-center rounded-full bg-brand px-[18px] py-[11px] text-[13px] font-bold text-white hover:bg-white hover:text-blue"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between px-[2px] py-[14px] text-[17px] font-semibold text-ink"
      >
        {item.label}
        <Chevron className={open ? 'rotate-180' : ''} />
      </button>
      {open && (
        <div className="flex flex-col gap-[14px] pb-[16px]">
          {item.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-[4px] px-[14px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">
                {col.href ? (
                  <a href={col.href} onClick={onNavigate} className="text-brand">
                    {col.title} →
                  </a>
                ) : (
                  col.title
                )}
              </div>
              {col.items.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onNavigate}
                  className="flex items-center gap-[8px] rounded-[10px] px-[14px] py-[9px] text-[15px] font-medium text-muted hover:bg-cream-2 hover:text-ink"
                >
                  {link.title}
                  {link.advisory && <AdvisoryTag />}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  const closeAll = () => {
    setOpenPanel(null);
    setMenuOpen(false);
  };

  // Close menus on route change, outside click and Escape.
  useEffect(closeAll, [pathname]);
  useEffect(() => {
    function onDown(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenPanel(null);
    }
    function onKey(e) {
      if (e.key === 'Escape') closeAll();
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const toggle = (label) => setOpenPanel((cur) => (cur === label ? null : label));
  const active = NAV.find((n) => n.label === openPanel);

  return (
    <header className="sticky top-0 z-[80] border-b border-line bg-[rgba(255,255,255,.88)] backdrop-blur-[14px]">
      <div ref={navRef} className="relative mx-auto flex max-w-[1320px] items-center gap-[20px] px-[20px] py-[12px]">
        <a href="/" className="flex flex-none items-center">
          <Logo className="block h-[40px] w-auto navp:h-[44px]" />
        </a>

        <nav className="ml-auto hidden items-center gap-[22px] navd:flex">
          {NAV.map((item) => {
            const isOpen = openPanel === item.label;
            return (
              <div key={item.label} className="flex items-center gap-[2px]">
                {item.href ? (
                  <a href={item.href} className={`text-[14px] font-semibold hover:text-brand ${isOpen ? 'text-brand' : 'text-ink'}`}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => toggle(item.label)}
                    className={`cursor-pointer text-[14px] font-semibold hover:text-brand ${isOpen ? 'text-brand' : 'text-ink'}`}
                  >
                    {item.label}
                  </button>
                )}
                <button
                  type="button"
                  aria-label={`Toggle ${item.label} menu`}
                  aria-expanded={isOpen}
                  onClick={() => toggle(item.label)}
                  className={`cursor-pointer p-[4px] hover:text-brand ${isOpen ? 'text-brand' : 'text-ink'}`}
                >
                  <Chevron className={isOpen ? 'rotate-180' : ''} />
                </button>
              </div>
            );
          })}
        </nav>

        <a
          href={`tel:${SITE.phone}`}
          className="ml-auto hidden flex-none items-center gap-[8px] font-mono text-[12px] font-medium text-ink hover:text-brand navp:flex navd:ml-0"
        >
          {SITE.phone}
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
          className="group ml-auto -mr-4 flex h-[46px] w-[46px] flex-none flex-col items-center justify-center gap-[5px] cursor-pointer transition-colors duration-200 navp:ml-0 navd:hidden"
        >
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-blue transition-all duration-300 ease-[cubic-bezier(.22,.7,.2,1)] group-hover:bg-brand ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-blue transition-all duration-200 group-hover:bg-brand ${
              menuOpen ? 'scale-x-0 opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-blue transition-all duration-300 ease-[cubic-bezier(.22,.7,.2,1)] group-hover:bg-brand ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          ></span>
        </button>

        {active && (
          <div className="hidden navd:block">
            <MegaPanel item={active} onNavigate={() => setOpenPanel(null)} />
          </div>
        )}
      </div>

      {menuOpen && (
        <div className="animate-tm-slide-down-fast max-h-[calc(100dvh-70px)] overflow-y-auto border-t border-line bg-cream">
          <div className="mx-auto flex max-w-[1320px] flex-col px-[20px] pt-[10px] pb-[20px]">
            {NAV.map((item) => (
              <MobileAccordion key={item.label} item={item} onNavigate={closeAll} />
            ))}
            <a href={`tel:${SITE.phone}`} className="mt-[16px] text-center font-mono text-[13px] font-medium text-ink">
              {SITE.phoneDisplay}
            </a>
            <a
              href="/contact"
              onClick={closeAll}
              className="mt-[12px] rounded-full bg-brand px-[20px] py-[15px] text-center text-[15px] font-bold text-white hover:bg-blue hover:text-white"
            >
              Book a free consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
