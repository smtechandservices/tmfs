import Reveal from './Reveal';

const TAG_STYLES = {
  red: 'bg-brand text-white',
  blue: 'bg-blue text-white',
  ink: 'bg-ink text-white',
  light: 'bg-[rgba(250,249,247,.94)] text-ink',
};

const LISTINGS = [
  {
    img: '/images/downtown-dubai.jpg',
    alt: 'Twin towers in Downtown Dubai at sunset',
    tagLeft: { text: 'FOR SALE', style: 'red' },
    tagRight: { text: '360° TOUR', style: 'light' },
    area: 'Downtown Dubai',
    title: '2-bed with Burj view',
    price: 'AED 3,450,000',
    priceSuffix: null,
    facts: ['2 beds', '3 baths', '1,420 sqft'],
    delay: 0,
  },
  {
    img: '/images/difc-skyline.jpg',
    alt: 'Museum of the Future and the DIFC skyline',
    tagLeft: { text: 'COMMERCIAL', style: 'blue' },
    tagRight: { text: 'FITTED', style: 'light' },
    area: 'DIFC / Sheikh Zayed Road',
    title: 'Grade-A office floor',
    price: 'AED 620,000',
    priceSuffix: '/ year',
    facts: ['28 desks', 'Ejari ready', '3,100 sqft'],
    delay: 90,
  },
  {
    img: '/images/business-bay-dusk.jpg',
    alt: 'Business Bay towers at dusk',
    tagLeft: { text: 'OFF-PLAN', style: 'ink' },
    tagRight: { text: '60/40 PLAN', style: 'light' },
    area: 'Business Bay',
    title: 'Canal-side 1-bed, 2027 handover',
    price: 'AED 1,780,000',
    priceSuffix: null,
    facts: ['1 bed', '2 baths', '790 sqft'],
    delay: 180,
  },
];

export default function Properties({ show = true }) {
  if (!show) return null;

  return (
    <section id="properties" className="border-t border-b border-line bg-white">
      <div className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
        <div className="mb-[40px] flex flex-wrap items-end justify-between gap-[22px]">
          <Reveal>
            <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">03 — Featured listings</div>
            <h2 className="max-w-[22ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-.03em]">Property, with the financing already solved</h2>
          </Reveal>
          <Reveal as="p" delay={120} className="max-w-[38ch] text-[16px] leading-[1.6] text-muted">
            Live MLS-synced inventory through MID Real Estate Brokers. Every listing comes with a pre-approval indication from our banking desk.
          </Reveal>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[16px]">
          {LISTINGS.map((listing) => (
            <Reveal key={listing.title} as="article" delay={listing.delay} className="group">
              <div className="overflow-hidden rounded-[22px] border border-line bg-cream transition-[transform,box-shadow] duration-[320ms] ease-[cubic-bezier(.22,.7,.2,1)] group-hover:-translate-y-[7px] group-hover:shadow-[0_24px_50px_rgba(20,18,26,.13)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-fog">
                  <img
                    src={listing.img}
                    alt={listing.alt}
                    className="block h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.22,.7,.2,1)] hover:scale-[1.07]"
                  />
                  <span className={`absolute top-[14px] left-[14px] rounded-full px-[13px] py-[6px] text-[11px] font-bold tracking-[.04em] ${TAG_STYLES[listing.tagLeft.style]}`}>{listing.tagLeft.text}</span>
                  <span className={`absolute top-[14px] right-[14px] rounded-full px-[13px] py-[6px] text-[11px] font-bold tracking-[.04em] ${TAG_STYLES[listing.tagRight.style]}`}>{listing.tagRight.text}</span>
                </div>
                <div className="p-[24px]">
                  <div className="mb-[8px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">{listing.area}</div>
                  <h3 className="mb-[6px] text-[20px] font-bold tracking-[-.01em]">{listing.title}</h3>
                  <div className="mb-[16px] text-[22px] font-extrabold tracking-[-.02em] text-brand">
                    {listing.price}{listing.priceSuffix && <span className="text-[14px] font-semibold text-muted"> {listing.priceSuffix}</span>}
                  </div>
                  <ul className="flex flex-wrap gap-[16px] border-t border-line pt-[14px]">
                    {listing.facts.map((fact) => (
                      <li key={fact} className="text-[13px] font-medium text-muted">{fact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-[32px] flex flex-wrap gap-[12px]">
          <a href="#contact" className="flex min-h-[52px] items-center rounded-full bg-ink px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-brand">Browse all listings</a>
          <a href="#contact" className="flex min-h-[52px] items-center rounded-full border border-ink px-[28px] py-[15px] text-[15px] font-semibold text-ink hover:bg-ink hover:text-white">List your property</a>
        </Reveal>
      </div>
    </section>
  );
}
