'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Fires once when the observed element first enters the viewport, then
 * disconnects. Mirrors the one-shot IntersectionObserver behaviour used
 * throughout the original page for scroll-reveal and counter animations.
 */
export function useOnScreen(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
