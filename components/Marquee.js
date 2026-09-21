import { Fragment } from 'react';

const PARTNERS = ['IFZA', 'MEYDAN', 'RAKEZ', 'SHAMS', 'SPC', 'AJMAN FREE ZONE', 'SRTIP', 'DUBAI MAINLAND'];

function Track({ ariaHidden }) {
  return (
    <div className="flex items-center gap-[44px] pr-[44px]" aria-hidden={ariaHidden || undefined}>
      {PARTNERS.map((name) => (
        <Fragment key={name}>
          <span className="font-mono text-[12px] tracking-[.16em] text-ink">{name}</span>
          <span className="text-brand">◆</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-cream-2 py-[15px]">
      <div className="flex w-max animate-tm-marquee">
        <Track />
        <Track ariaHidden="true" />
      </div>
    </div>
  );
}
