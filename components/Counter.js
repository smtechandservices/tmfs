'use client';

import { useEffect, useState } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';

/**
 * Animated count-up number, triggered once when scrolled into view.
 * Equivalent to the original `<span data-count="1200">0</span>` + countUp().
 */
export default function Counter({ to }) {
  const [ref, visible] = useOnScreen({ threshold: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    const start = performance.now();
    const dur = 1500;
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);

  return <span ref={ref}>{value.toLocaleString('en-US')}</span>;
}
