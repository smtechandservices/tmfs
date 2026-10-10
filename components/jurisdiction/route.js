import { notFound } from 'next/navigation';
import JurisdictionPage from './JurisdictionPage';
import { jurisdictionFor } from '@/content/jurisdictions';

/**
 * Route handlers for one catalog group (`{ base, items }`): a company-setup
 * group, or a service practice. Each `[slug]/page.js` re-exports these, so the
 * routes stay identical apart from their hub crumb and overview card. `lookup`
 * finds an item's page copy; items without copy aren't built.
 */
export function jurisdictionRoute(group, { hub, overview, lookup = jurisdictionFor }) {
  const pageFor = (slug) => lookup(`${group.base}/${slug}`);

  function generateStaticParams() {
    return group.items.filter((item) => lookup(item.href)).map((item) => ({ slug: item.slug }));
  }

  async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = pageFor(slug);
    if (!page) return {};
    return {
      title: page.meta.title,
      description: page.meta.description,
      alternates: { canonical: page.href },
      openGraph: { title: page.meta.title, description: page.meta.description, url: page.href },
    };
  }

  async function Page({ params }) {
    const { slug } = await params;
    const page = pageFor(slug);
    if (!page) notFound();

    const item = group.items.find((i) => i.slug === slug);
    const crumbs = [{ title: 'Home', href: '/' }, hub, { title: item.title }];
    return <JurisdictionPage page={page} group={group} crumbs={crumbs} overview={overview} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}
