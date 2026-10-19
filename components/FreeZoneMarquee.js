// Logos sit in equal tiles; stacked marks (RAKEZ) get more height so they
// read at the same visual weight as the wide wordmarks.
export const FREE_ZONES = [
  { name: 'IFZA', logo: '/logos/free-zones/ifza.png', h: 'h-[26px]' },
  { name: 'Meydan Free Zone', logo: '/logos/free-zones/meydan.png', h: 'h-[34px]' },
  { name: 'RAKEZ', logo: '/logos/free-zones/rakez.svg', h: 'h-[54px]' },
  { name: 'SHAMS', logo: '/logos/free-zones/shams.png', h: 'h-[38px]' },
  { name: 'SPC Free Zone', logo: '/logos/free-zones/spc.png', h: 'h-[40px]' },
  { name: 'Ajman Free Zone', logo: '/logos/free-zones/ajman-free-zone.svg', h: 'h-[28px]' },
  { name: 'SRTIP', logo: '/logos/free-zones/srtip.svg', h: 'h-[40px]' },
  { name: 'Dubai Mainland', logo: '/logos/free-zones/dubai-mainland.png', h: 'h-[42px]' },
];

/** Infinite horizontal marquee of free-zone logo tiles. */
export default function FreeZoneMarquee({ className = '' }) {
  return (
    // Two identical copies translate by -50% for a seamless loop; each tile
    // carries its own right margin (not flex gap) so the halves stay equal.
    <div className={`group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] ${className}`}>
      <ul className="flex w-max animate-tm-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...FREE_ZONES, ...FREE_ZONES].map((z, i) => (
          <li
            key={`${z.name}-${i}`}
            aria-hidden={i >= FREE_ZONES.length || undefined}
            className="mr-[10px] flex w-[200px] shrink-0 flex-col items-center justify-center gap-[10px] rounded-[12px] border border-line-2 bg-white px-[16px] pb-[14px] pt-[16px] sm:w-[240px]"
          >
            <div className="flex h-[56px] items-center">
              <img src={z.logo} alt="" className={`${z.h} w-auto max-w-full object-contain`} />
            </div>
            <span className="text-center text-[13px] font-medium leading-[1.3] text-ink">{z.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
