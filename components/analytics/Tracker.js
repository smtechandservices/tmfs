'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { track } from './client';

/** Names for the contact links the admin reports on; anything with data-track uses that instead. */
function clickName(el) {
  if (el.dataset.track) return el.dataset.track;
  const href = el.getAttribute('href') || '';
  if (href.startsWith('tel:')) return 'Phone call';
  if (/wa\.me|whatsapp\.com/i.test(href)) return 'WhatsApp';
  if (href.startsWith('mailto:')) return 'Email';
  return null;
}

/**
 * Sends a pageview on every route change, the visible time spent on each page,
 * clicks on phone / WhatsApp / email links, and the first focus in a form.
 */
export default function Tracker() {
  const pathname = usePathname();
  const page = useRef({ path: null, visibleSince: 0, total: 0, formStarted: false });

  // Engaged time: only counts while the tab is visible.
  const flush = () => {
    const p = page.current;
    if (!p.path) return;
    const ms = p.total + (p.visibleSince ? Date.now() - p.visibleSince : 0);
    p.total = 0;
    p.visibleSince = document.visibilityState === 'visible' ? Date.now() : 0;
    if (ms >= 1000) track('engagement', { path: p.path, dur: ms });
  };

  useEffect(() => {
    flush();
    page.current = { path: pathname, visibleSince: document.visibilityState === 'visible' ? Date.now() : 0, total: 0, formStarted: false };
    track('pageview');
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onVisibility = (e) => {
      const p = page.current;
      if (e.type === 'pagehide' || document.visibilityState === 'hidden') {
        if (p.visibleSince) p.total += Date.now() - p.visibleSince;
        p.visibleSince = 0;
        flush();
      } else {
        p.visibleSince = Date.now();
      }
    };
    const onClick = (e) => {
      const el = e.target.closest?.('a[href], [data-track]');
      const name = el && clickName(el);
      if (name) track('click', { name });
    };
    const onFocus = (e) => {
      const form = e.target.closest?.('form');
      if (!form || page.current.formStarted) return;
      page.current.formStarted = true;
      track('form_start', { name: form.dataset.track || 'Started enquiry form' });
    };
    document.addEventListener('visibilitychange', onVisibility);
    // Safari doesn't always fire visibilitychange when leaving the page.
    window.addEventListener('pagehide', onVisibility);
    document.addEventListener('click', onClick, true);
    document.addEventListener('focusin', onFocus);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', onVisibility);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('focusin', onFocus);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
