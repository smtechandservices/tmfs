'use client';

import { useOnScreen } from '@/hooks/useOnScreen';

/**
 * Scroll-reveal wrapper — fades and slides its children up into place the
 * first time they enter the viewport. Equivalent to the `data-reveal` /
 * `data-d` attributes in the original static page. The only inline style is
 * a CSS custom property carrying the per-instance delay into the Tailwind
 * `delay-[var(...)]` utility below — everything else is Tailwind classes.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, visible] = useOnScreen({ rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  return (
    <Tag
      ref={ref}
      style={{ '--tm-delay': `${delay}ms` }}
      className={`transition-[opacity,transform] duration-[750ms] ease-[cubic-bezier(.22,.7,.2,1)] delay-[var(--tm-delay)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[26px]'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
