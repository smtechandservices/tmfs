'use client';

import { useEffect, useState } from 'react';
import Icon from './ui/Icon';
import { SITE } from '@/content/site';

/** Floating WhatsApp button, with a back-to-top button above it once the page has scrolled. */
export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-[30px] bottom-[96px] z-50 flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full bg-blue text-white shadow-[0_8px_24px_rgba(10,37,64,.28)] transition-[opacity,transform,visibility,background] duration-[250ms] hover:bg-brand max-md:right-[22px] max-md:bottom-[86px] max-md:h-[42px] max-md:w-[42px] ${
          showTop ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-[10px] opacity-0'
        }`}
      >
        <Icon name="arrow-up" size={22} stroke={2.2} />
      </button>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed right-[24px] bottom-[24px] z-50 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-[#25d366] text-white shadow-[0_8px_32px_rgba(37,211,102,.4)] transition-transform duration-[250ms] before:absolute before:inset-0 before:animate-wa-pulse before:rounded-full before:bg-[#25d366] before:content-[''] hover:scale-[1.08] hover:text-white max-md:right-[16px] max-md:bottom-[16px] max-md:h-[54px] max-md:w-[54px]"
      >
        <Icon name="whatsapp" size={28} className="relative" />
      </a>
    </>
  );
}
