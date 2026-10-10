import { Hero, Dateline, Sidebar, LeadBand, CtaCard } from './Shell';
import {
  Intro,
  WhyZone,
  LicenceTypes,
  Structures,
  ProcessSteps,
  Documents,
  Benefits,
  TaxBlock,
  IndustryGrid,
  Advantage,
  Specialists,
  Pillars,
  Related,
  Reviews,
  Faqs,
  Sources,
  Disclaimer,
} from './Sections';
import { SIDEBAR, LEAD_BAND, RELATED_IMAGES } from '@/content/jurisdictions/shared';
import { ALL_ITEMS } from '@/content/catalog';

/**
 * Template for a single jurisdiction (mainland emirate, free zone or offshore)
 * or service page, mirroring Avyanco's shared service-page layout: dark hero, main column with a sticky
 * consultation sidebar, then a full-width enquiry band and closing CTA.
 * `group` is the catalog group the page belongs to; its other items fill the
 * "compare other options" carousel unless the page lists `compare` hrefs.
 * Sections whose copy a page leaves out are skipped.
 */
export default function JurisdictionPage({ page, group, crumbs, overview }) {
  const siblings = page.compare ? page.compare.map((href) => ALL_ITEMS.find((item) => item.href === href)) : group.items.filter((item) => item.href !== page.href);
  const related = [
    ...(overview ? [{ title: overview.title, desc: overview.desc, href: overview.href, image: RELATED_IMAGES.overview }] : []),
    ...siblings.map((item) => ({ title: item.title, desc: item.short, href: item.href, image: RELATED_IMAGES[item.slug] ?? RELATED_IMAGES.overview })),
  ];

  return (
    <div className="w-full bg-white text-[#333]">
      <Hero content={page.hero} crumbs={crumbs} />
      <Dateline published={page.published} updated={page.updated} />

      <div className="mx-auto grid max-w-[1320px] grid-cols-[minmax(0,1fr)_340px] items-start gap-[44px] px-[24px] max-[1024px]:block max-[480px]:px-[18px]">
        <div className="min-w-0">
          {page.intro && <Intro content={page.intro} />}
          {page.why && <WhyZone content={page.why} />}
          {page.licences && <LicenceTypes content={page.licences} />}
          {page.structures && <Structures content={page.structures} />}
          {page.process && <ProcessSteps content={page.process} />}
          {page.documents && <Documents content={page.documents} />}
          {page.benefits && <Benefits content={page.benefits} />}
          {page.tax && <TaxBlock content={page.tax} />}
          {page.industries && <IndustryGrid content={page.industries} />}
          {page.advantage && <Advantage content={page.advantage} />}
          {page.specialists && <Specialists content={page.specialists} />}
          {page.pillars && <Pillars content={page.pillars} />}
          {page.related && <Related content={page.related} cards={related} />}
          {page.testimonials && <Reviews content={page.testimonials} />}
          {page.faq && <Faqs content={page.faq} />}
          {page.sources && <Sources sources={page.sources} />}
          {page.disclaimer && <Disclaimer paragraphs={page.disclaimer} />}
        </div>
        <Sidebar content={page.sidebar ?? SIDEBAR} />
      </div>

      <LeadBand content={LEAD_BAND} />
      <CtaCard content={page.cta} />
    </div>
  );
}
