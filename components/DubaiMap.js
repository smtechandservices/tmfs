'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

// Tailwind classes for the two marker/popup categories. Kept as complete,
// literal class strings (never concatenated piecemeal) so Tailwind's
// content scanner picks them up even though they end up inside raw HTML
// strings handed to Leaflet (divIcon / bindPopup), not JSX.
const CATS = {
  free: { label: 'Free zone', dot: 'bg-blue', text: 'text-blue' },
  office: { label: 'Our office', dot: 'bg-ink', text: 'text-ink' },
};

// Every free zone TMFS files in directly, plus DMCC and DIFC, which we
// advise clients on for banking but don't file in ourselves.
const PLACES = [
  { n: 'Millennium Central, Al Asayel St', c: 'office', ll: [25.1875, 55.2760], d: 'TMFS head office. Next to Dubai Mall. Walk-ins welcome, or book a slot.' },
  { n: 'IFZA — Dubai Silicon Oasis', c: 'free', ll: [25.1197, 55.3773], d: 'Fast, cost-efficient consultancy and services licences. Usual first company for solo founders.' },
  { n: 'Meydan Free Zone', c: 'free', ll: [25.1580, 55.3010], d: 'E-commerce and digital licences with a Dubai address and quick issuance.' },
  { n: 'RAKEZ', c: 'free', ll: [25.7895, 55.9432], d: 'Ras Al Khaimah Economic Zone. Low-cost industrial, trading and service licences.' },
  { n: 'SHAMS — Sharjah Media City', c: 'free', ll: [25.3463, 55.4209], d: 'Media, creative and consultancy licences in Sharjah.' },
  { n: 'SPC Free Zone', c: 'free', ll: [25.3286, 55.5019], d: 'Sharjah Publishing City. Low-cost setup for publishing, media and services.' },
  { n: 'Ajman Free Zone', c: 'free', ll: [25.4052, 55.5136], d: 'Cost-efficient trading, industrial and services licences in Ajman.' },
  { n: 'SRTIP', c: 'free', ll: [25.3170, 55.5240], d: 'Sharjah Research Technology and Innovation Park. Tech, R&D and industrial licences.' },
  { n: 'Dubai Mainland', c: 'free', ll: [25.2532, 55.2957], d: 'LLC, sole establishment and branch setup for trading directly in the UAE market.' },
  { n: 'DMCC / JLT', c: 'free', ll: [25.0693, 55.1413], d: 'Commodities and trading licences. Strong banking acceptance for import-export. We advise here, not file directly.' },
  { n: 'DIFC', c: 'free', ll: [25.2110, 55.2790], d: 'Common-law jurisdiction for finance, funds and holding structures. We advise here, not file directly.' },
];

const CHIP_BASE =
  'min-h-[40px] flex-none cursor-pointer whitespace-nowrap rounded-full border px-[15px] py-[9px] text-[13px] font-semibold transition-[background,color,border-color,transform] duration-[180ms] ease hover:-translate-y-[1px]';
const CHIP_ON = 'border-ink bg-ink text-white';
const CHIP_OFF = 'border-line-3 bg-white text-ink hover:border-ink';

export default function DubaiMap() {
  const mapElRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = mapElRef.current;
    if (!el || mapInstance.current) return undefined;

    const map = L.map(el, { center: [25.4, 55.5], zoom: 9, minZoom: 9, maxZoom: 12, scrollWheelZoom: false });
    mapInstance.current = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    markersRef.current = PLACES.map((p) => {
      const cat = CATS[p.c];
      const icon = L.divIcon({
        className: '',
        iconSize: [22, 22],
        iconAnchor: [11, 11],
        popupAnchor: [0, -12],
        html: `<div class="relative h-[22px] w-[22px]"><b class="absolute -inset-[9px] rounded-full opacity-[.28] animate-tm-ping ${cat.dot}"></b><i class="absolute inset-0 rounded-full border-[3px] border-white shadow-[0_2px_8px_rgba(0,0,0,.28)] ${cat.dot}"></i></div>`,
      });
      return L.marker(p.ll, { icon, title: p.n, riseOnHover: true })
        .bindPopup(
          `<div class="font-mono text-[10px] uppercase tracking-[.14em] ${cat.text}">${cat.label}</div><div class="my-[5px] text-[16px] font-bold leading-[1.2]">${p.n}</div><p class="m-0 text-[13px] leading-[1.5] text-[#4A4652]">${p.d}</p>`
        )
        .addTo(map);
    });

    const resizeTimer = setTimeout(() => map.invalidateSize(), 400);

    return () => {
      clearTimeout(resizeTimer);
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  const flyToAll = () => {
    setActive(-1);
    const map = mapInstance.current;
    if (!map) return;
    map.closePopup();
    map.flyTo([25.4, 55.5], 9, { duration: 0.9 });
  };

  const flyToPlace = (i) => {
    setActive(i);
    const map = mapInstance.current;
    const marker = markersRef.current[i];
    if (!map || !marker) return;
    map.flyTo(PLACES[i].ll, 12, { duration: 1 });
    setTimeout(() => marker.openPopup(), 700);
  };

  return (
    <>
      <div id="tmrail" className="flex gap-[8px] overflow-x-auto border-b border-[#E7E3DD] bg-cream px-[14px] py-[12px] [scrollbar-width:none]">
        <button onClick={flyToAll} className={`${CHIP_BASE} ${active === -1 ? CHIP_ON : CHIP_OFF}`}>
          All locations
        </button>
        {PLACES.map((p, i) => (
          <button key={p.n} onClick={() => flyToPlace(i)} className={`${CHIP_BASE} ${active === i ? CHIP_ON : CHIP_OFF}`}>
            <span className={`mr-[7px] inline-block h-[7px] w-[7px] rounded-full align-[1px] ${CATS[p.c].dot}`}></span>
            {p.n}
          </button>
        ))}
      </div>
      <div id="tmmap" ref={mapElRef} className="h-[clamp(440px,64vh,600px)] w-full" />
    </>
  );
}
