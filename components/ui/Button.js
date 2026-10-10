import Icon from './Icon';

const BASE =
  'group/btn inline-flex min-h-[48px] items-center justify-center gap-[10px] whitespace-nowrap rounded-[6px] border px-[28px] py-[15px] text-[14px] font-semibold tracking-[.01em] transition-all duration-[250ms] ease-[cubic-bezier(.22,.61,.36,1)] max-md:min-h-[44px] max-md:px-[18px] max-md:py-[12px] max-md:text-[13px]';

export const BUTTON = {
  accent: `${BASE} border-brand bg-brand text-white hover:-translate-y-[1px] hover:border-brand-bright hover:bg-brand-bright hover:text-white hover:shadow-[0_8px_24px_rgba(219,20,28,.28)]`,
  navy: `${BASE} border-blue bg-blue text-white hover:-translate-y-[1px] hover:border-blue-mid hover:bg-blue-mid hover:text-white hover:shadow-[0_8px_24px_rgba(24,0,173,.18)]`,
  line: `${BASE} border-blue bg-transparent text-blue hover:bg-blue hover:text-white`,
  lineLight: `${BASE} border-white bg-transparent text-white hover:border-white hover:bg-white hover:text-blue`,
};

/** Link styled as a button, with the trailing arrow that nudges right on hover. */
export default function Button({ href, variant = 'accent', arrow = true, className = '', children, ...rest }) {
  return (
    <a href={href} className={`${BUTTON[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" size={16} className="transition-transform duration-[250ms] group-hover/btn:translate-x-[4px]" />}
    </a>
  );
}

/** Small red uppercase label above section headings. */
export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <div className={`text-[12px] font-semibold uppercase tracking-[.14em] ${light ? 'text-brand-bright' : 'text-brand'} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Renders a heading written as an array of strings and `{ em }` pieces, so the
 * red emphasised words live in the content files, e.g.
 * ['Seven emirates, ', { em: 'one' }, ' team.'].
 */
export function Rich({ value, emClass = 'text-brand' }) {
  if (!Array.isArray(value)) return value;
  return value.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <span key={i} className={emClass}>
        {part.em}
      </span>
    )
  );
}
