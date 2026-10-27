import FreeZoneMarquee from './FreeZoneMarquee';

/** Free-zone logo band: under the home hero, and above the footer on every page. */
export default function FreeZoneStrip() {
  return (
    <section aria-label="Free zones we file in directly" className="border-b border-rule bg-white pt-[36px] pb-[32px] max-md:pt-[28px] max-md:pb-[24px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <div className="mb-[18px] text-center text-[.72rem] font-bold uppercase tracking-[.14em] text-[#6b7280]">Free zones we file in directly</div>
        <FreeZoneMarquee />
      </div>
    </section>
  );
}
