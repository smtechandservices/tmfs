// Copy shared by every service page (banking, tax, accounting, corporate
// services). Page files in this folder hold each service's own sections; the
// sidebar and enquiry band come from ../jurisdictions/shared like every other
// page on the template.
import { SOURCES as TAX_LAWS, TESTIMONIALS, SIDEBAR } from '../jurisdictions/shared';

export const SRC = {
  ...TAX_LAWS,
  fta: { label: 'Federal Tax Authority (FTA)', href: 'https://tax.gov.ae' },
  taxProcedures: { label: 'Federal Decree-Law No. 28 of 2022 (Tax Procedures)' },
  auditedFs: { label: 'Ministerial Decision No. 82 of 2023 (audited financial statements)' },
  mohre: { label: 'Ministry of Human Resources and Emiratisation (MOHRE)', href: 'https://www.mohre.gov.ae' },
  labour: { label: 'Federal Decree-Law No. 33 of 2021 (Labour Relations)' },
  icp: { label: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)', href: 'https://icp.gov.ae' },
  gdrfa: { label: 'GDRFA Dubai', href: 'https://gdrfad.gov.ae' },
  moe: { label: 'UAE Ministry of Economy', href: 'https://www.moec.gov.ae' },
  mofa: { label: 'UAE Ministry of Foreign Affairs', href: 'https://www.mofa.gov.ae' },
  cbuae: { label: 'Central Bank of the UAE (CBUAE)', href: 'https://www.centralbank.ae' },
  aecb: { label: 'Al Etihad Credit Bureau (AECB)', href: 'https://aecb.gov.ae' },
  dld: { label: 'Dubai Land Department', href: 'https://dubailand.gov.ae' },
  fiu: { label: 'UAE Financial Intelligence Unit (goAML)', href: 'https://www.uaefiu.gov.ae' },
  trademarks: { label: 'Federal Decree-Law No. 36 of 2021 (Trademarks)' },
  ubo: { label: 'Cabinet Resolution No. 109 of 2023 (Beneficial Owner Procedures)' },
  uae: { label: 'UAE Government portal (u.ae)', href: 'https://u.ae' },
};

// Placeholder photos, reused until service-specific shots are available.
export const IMG = {
  advisors: { src: '/images/advisors-report.jpg', alt: 'Advisors reviewing documents with a client (placeholder)' },
  planning: { src: '/images/business-planning.jpg', alt: 'Business planning session (placeholder)' },
  district: { src: '/images/business-district.jpg', alt: 'Business district (placeholder)' },
  dusk: { src: '/images/business-bay-dusk.jpg', alt: 'City skyline at dusk (placeholder)' },
  downtown: { src: '/images/downtown-dubai.jpg', alt: 'Downtown Dubai skyline (placeholder)' },
  difc: { src: '/images/difc-skyline.jpg', alt: 'Financial district skyline (placeholder)' },
};

/**
 * Fills in the blocks every service page shares. `authority` (e.g. 'the Federal Tax Authority') and
 * `changes` feed the disclaimer.
 */
export function servicePage({ topic, authority, changes, pillars, ...page }) {
  return {
    published: '2026-10-10',
    updated: '2026-10-10',
    sidebar: { ...SIDEBAR, sub: 'Tell us where you are and what you need. We’ll map the steps, timeline and cost, with our fee and any government charges shown separately.' },
    pillars: { ...pillars, image: IMG.advisors },
    testimonials: TESTIMONIALS,
    disclaimer: [
      `Prepared from publicly available guidance from ${authority} and UAE federal law as of October 2026. Time Machine Financial Services is independent of ${authority} and is not affiliated with or acting for any UAE government authority.`,
      `${changes} change. Confirm the current position for your situation with ${authority}, or ask us, before acting on this page.`,
    ],
    ...page,
  };
}

/** The closing CTA card, which only varies by headline and body. */
export const cta = (title, body) => ({ title, body, action: { label: 'Book a Consultation', href: '/contact' } });
