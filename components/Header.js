'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './ui/Icon';
import { BUTTON } from './ui/Button';
import { NAV, MOBILE_NAV } from '@/content/nav';
import { SITE } from '@/content/site';

const EASE = 'ease-[cubic-bezier(.22,.61,.36,1)]';

// Pages whose dark hero sits under a transparent header: the homepage and the
// jurisdiction pages (mainland emirates, free zones, offshore).
const hasDarkHero = (path) =>
  path === '/' || /^\/(company-setup\/(mainland|free-zones|offshore)|banking|tax|accounting-audit|corporate-services)\/[^/]+$/.test(path);

// Dropdowns open on hover (or keyboard focus) of their nav item, like the
// reference design. The `before:` strip bridges the gap so the pointer can
// travel from the link into the panel without it closing.
const PANEL = `invisible absolute top-full left-1/2 z-50 min-w-[340px] -translate-x-1/2 -translate-y-[4px] border border-rule-soft bg-white px-[8px] pt-[14px] pb-[8px] opacity-0 shadow-[0_20px_48px_rgba(10,37,64,.14),0_4px_10px_rgba(10,37,64,.06)] transition-[opacity,transform,visibility] duration-[220ms] ${EASE} before:absolute before:inset-x-0 before:-top-[10px] before:h-[10px] before:content-[''] group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100`;

const SUB_PANEL = `invisible absolute top-[-14px] left-full z-[51] ml-[8px] -translate-x-[6px] rounded-[14px] border border-rule-soft bg-white opacity-0 shadow-[0_20px_48px_rgba(10,37,64,.14),0_4px_10px_rgba(10,37,64,.06)] transition-[opacity,transform,visibility] duration-[220ms] ${EASE} before:absolute before:inset-y-0 before:-left-[10px] before:w-[10px] before:content-[''] group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:translate-x-0 group-focus-within/sub:opacity-100`;

const HEAD = 'mb-[4px] border-b border-brand-light px-[14px] pt-[6px] pb-[10px] text-[10.5px] font-bold uppercase tracking-[.16em] text-brand';

function MenuLink({ item, small = false, chevron = false }) {
  return (
    <a href={item.href} className={`block rounded-[8px] px-[14px] transition-colors duration-150 hover:bg-soft ${chevron ? 'group-hover/sub:bg-soft' : ''} ${small ? 'py-[9px]' : 'py-[11px]'}`}>
      <span className={`mb-[2px] flex items-center font-medium leading-[1.3] text-blue ${small ? 'text-[13.5px]' : 'text-[14px]'}`}>
        {item.title}
        {chevron && (
          <Icon name="chevron-right" size={14} className="ml-[6px] text-brand opacity-55 transition-[transform,opacity] duration-200 group-hover/sub:translate-x-[2px] group-hover/sub:opacity-100" />
        )}
      </span>
      {item.desc && <span className={`block leading-[1.4] text-slate-2 ${small ? 'text-[11.5px]' : 'text-[12px]'}`}>{item.desc}</span>}
    </a>
  );
}

function SubColumn({ col }) {
  return (
    <div className="relative flex flex-col gap-[1px] px-[6px] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:inset-y-[14px] [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:bg-rule-soft [&:not(:last-child)]:after:content-['']">
      <div className={`${HEAD} px-[10px]! pt-[4px]! pb-[8px]!`}>{col.head}</div>
      {col.items.map((item) => (
        <MenuLink key={item.href} item={item} small />
      ))}
    </div>
  );
}

function Flyout({ rows }) {
  return (
    <div className={`${PANEL} rounded-[14px]`}>
      {rows.map((row) =>
        row.sub ? (
          <div key={row.href} className="group/sub relative">
            <MenuLink item={row} chevron />
            {row.sub.cols ? (
              <div className={`${SUB_PANEL} grid min-w-[540px] grid-cols-2 gap-x-[12px] gap-y-[4px] px-[12px] pt-[16px] pb-[12px]`}>
                {row.sub.cols.map((col) => (
                  <SubColumn key={col.head} col={col} />
                ))}
              </div>
            ) : (
              <div className={`${SUB_PANEL} min-w-[320px] px-[8px] pt-[14px] pb-[8px]`}>
                <div className={HEAD}>{row.sub.head}</div>
                {row.sub.items.map((item) => (
                  <MenuLink key={item.href} item={item} small />
                ))}
              </div>
            )}
          </div>
        ) : (
          <MenuLink key={row.href} item={row} />
        )
      )}
    </div>
  );
}

function Dropdown({ entry }) {
  return (
    <div className={`${PANEL} rounded-t-[14px]`}>
      {entry.columns
        ? entry.columns.map((col, i) => (
            <div key={col.head} className={i > 0 ? 'mt-[10px]' : ''}>
              <div className={HEAD}>{col.head}</div>
              {col.items.map((item) => (
                <MenuLink key={item.href} item={item} />
              ))}
            </div>
          ))
        : entry.items.map((item) => <MenuLink key={item.href} item={item} />)}
    </div>
  );
}

function MobileMenu({ open, onClose }) {
  const [section, setSection] = useState(-1);
  const groups = [...MOBILE_NAV, { label: 'More', items: [{ title: 'Contact', href: '/contact' }] }];

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[10000] bg-[rgba(10,31,68,.45)] transition-[opacity,visibility] duration-300 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
      />
      <aside
        aria-hidden={!open}
        inert={open ? undefined : true}
        className={`fixed inset-y-0 right-0 z-[10001] flex w-full max-w-[400px] flex-col overflow-hidden bg-white transition-transform duration-[380ms] ${EASE} ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-none items-center justify-between border-b border-rule-soft px-[24px] py-[20px]">
          <a href="/" aria-label={`${SITE.name}, home`}>
            <Logo className="block h-[38px] w-auto" />
          </a>
          <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[8px] bg-grey text-blue hover:bg-rule">
            <Icon name="x" size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[20px] pt-[8px] pb-[20px]">
          {groups.map((g, i) => {
            const isOpen = section === i;
            return (
              <div key={g.label} className="border-b border-rule-soft">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setSection(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-[12px] px-[2px] py-[15px] text-left font-display text-[15.5px] font-semibold tracking-[-.01em] text-blue hover:text-brand"
                >
                  <span>{g.label}</span>
                  <Icon name="chevron-down" size={18} className={`text-brand transition-transform duration-[280ms] ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-[320ms] ${EASE} ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    {g.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between border-t border-rule-soft py-[11px] pr-[2px] pl-[14px] text-[14px] text-blue last:pb-[14px] hover:text-brand"
                      >
                        {item.title}
                        <Icon name="chevron-right" size={16} className="text-slate-2" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-none border-t border-rule-soft bg-soft px-[24px] py-[20px]">
          <a href="/contact" className={`${BUTTON.navy} w-full`}>
            Contact Us <Icon name="arrow-right" size={16} />
          </a>
          <div className="mt-[16px] flex flex-col gap-[8px] text-[13px]">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-[8px] text-slate hover:text-blue">
              <Icon name="phone" size={14} /> {SITE.phoneDisplay}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-[8px] text-slate hover:text-blue">
              <Icon name="mail" size={14} /> {SITE.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  const overHero = hasDarkHero(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Transparent over a dark hero until the page scrolls; solid everywhere else.
  const solid = !overHero || scrolled;
  const linkColor = solid ? 'text-blue group-hover/nav:text-brand' : 'text-white group-hover/nav:text-white';
  const iconColor = solid ? 'text-blue hover:bg-grey' : 'text-white hover:bg-white/[.12]';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b border-transparent transition-[background,box-shadow] duration-[350ms] ${EASE} ${
          solid ? 'bg-white/[.96] shadow-[0_6px_20px_rgba(10,37,64,.06)]' : 'bg-transparent'
        }`}
      >
        <div className="relative mx-auto flex h-[76px] max-w-[1320px] items-center gap-[16px] px-[40px] max-md:h-[64px] max-md:gap-[12px] max-md:px-[20px] max-[480px]:px-[14px]">
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen(true)}
            className={`flex h-[44px] w-[44px] flex-none cursor-pointer flex-col items-center justify-center gap-[5px] rounded-[8px] xl:hidden ${solid ? 'hover:bg-grey' : 'hover:bg-white/10'}`}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className={`block h-[1.5px] w-[22px] rounded-[2px] ${solid ? 'bg-blue' : 'bg-white'}`} />
            ))}
          </button>

          <a href="/" aria-label={`${SITE.name}, home`} className="flex flex-none items-center">
            <Logo variant={solid ? 'primary' : 'reversed'} className="block h-[44px] w-auto max-md:h-[36px] max-[480px]:h-[30px]" />
          </a>

          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center xl:flex">
            {NAV.map((entry) => (
              <div key={entry.label} className="group/nav relative">
                <button
                  type="button"
                  className={`relative flex cursor-pointer items-center gap-[4px] whitespace-nowrap px-[8px] py-[22px] text-[13px] font-bold tracking-[-.005em] transition-colors duration-200 after:absolute after:inset-x-[9px] after:bottom-[14px] after:h-[2px] after:origin-left after:scale-x-0 after:rounded-[1px] after:bg-brand after:transition-transform after:duration-[220ms] after:content-[''] group-hover/nav:after:scale-x-100 ${linkColor}`}
                >
                  {entry.label}
                  <Icon name="chevron-down" size={13} className="opacity-60 transition-transform duration-[220ms] group-hover/nav:rotate-180" />
                </button>
                {entry.flyout ? <Flyout rows={entry.flyout} /> : <Dropdown entry={entry} />}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex flex-none items-center gap-[4px]">
            <a href={`tel:${SITE.phone}`} aria-label={`Call ${SITE.short}`} className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full transition-colors max-md:hidden ${iconColor} hover:text-brand`}>
              <Icon name="phone" size={18} stroke={1.9} />
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener" aria-label={`WhatsApp ${SITE.short}`} className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full transition-colors max-md:hidden ${iconColor} hover:text-[#25d366]`}>
              <Icon name="whatsapp" size={18} stroke={1.9} />
            </a>
            <a href="/contact" className={`${BUTTON.accent} ml-[2px] min-h-[38px]! px-[18px]! py-[9px]! text-[13px]! max-md:min-h-[36px]! max-md:px-[14px]! max-md:text-[12px]!`}>
              Contact Us
            </a>
          </div>
        </div>
      </header>
      {/* Pages without a dark hero start below the fixed header. */}
      {!overHero && <div aria-hidden="true" className="h-[76px] max-md:h-[64px]" />}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
