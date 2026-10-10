import Icon from '../ui/Icon';
import Button from '../ui/Button';
import ConsultationForm from '../sections/ConsultationForm';
import { SITE } from '@/content/site';

const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Breadcrumb trail plus BreadcrumbList structured data. The last crumb is the current page. */
function Crumbs({ crumbs }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.title, ...(c.href && { item: `${SITE.url}${c.href}` }) })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mb-[.9rem] flex flex-wrap items-center gap-[.4rem] text-[.82rem] text-white/60">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {crumbs.map((c, i) => (
        <span key={c.title} className="flex items-center gap-[.4rem]">
          {i > 0 && <span aria-hidden="true">›</span>}
          {c.href ? (
            <a href={c.href} className="border-b border-transparent text-white/80 transition-colors hover:border-white/50 hover:text-white">
              {c.title}
            </a>
          ) : (
            <span aria-current="page">{c.title}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Hero({ content, crumbs }) {
  return (
    <section className="relative flex h-[625px] items-center overflow-hidden bg-blue-deep pt-[80px] max-[900px]:h-[460px] max-[480px]:h-[380px] max-[480px]:pt-[64px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_75%_30%,rgba(219,20,28,.18)_0%,transparent_55%),radial-gradient(at_20%_80%,rgba(74,144,226,.12)_0%,transparent_50%),linear-gradient(135deg,#100a75_0%,#0b0652_50%,#060333_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] bg-[size:64px_64px] bg-[position:-1px_-1px] opacity-[.06] [mask-image:radial-gradient(at_60%,#000_0%,transparent_70%)] max-[900px]:opacity-0" />
      </div>
      <div className="relative z-[2] mx-auto w-full max-w-[1320px] px-[24px] max-[480px]:px-[18px]">
        <Crumbs crumbs={crumbs} />
        <h1 className="mb-[18px] text-[40px] leading-[60px] font-semibold tracking-[-.5px] text-white max-[900px]:text-[30px] max-[900px]:leading-[40px] max-[480px]:text-[24px] max-[480px]:leading-[32px]">
          {content.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mb-[28px] max-w-[560px] text-[15px] leading-[24px] text-white/80 max-[900px]:mb-[14px] max-[900px]:max-w-full max-[900px]:text-[14px] max-[900px]:leading-[22px] max-[480px]:mb-0 max-[480px]:text-[13px] max-[480px]:leading-[20px]">
          {content.lead}
        </p>
        <ul className="flex flex-wrap gap-x-[10px] gap-y-[8px] max-[900px]:hidden">
          {content.chips.map((chip) => (
            <li key={chip} className="inline-flex items-center gap-[6px] rounded-full border border-white/[.22] bg-white/[.08] py-[7px] pr-[12px] pl-[10px] text-[12.5px] font-medium tracking-[.1px] text-white backdrop-blur-[6px]">
              <Icon name="check" size={14} stroke={2.5} className="text-[#ff8893]" />
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Dateline({ published, updated }) {
  return (
    <p className="py-[18px] pb-[26px] text-center text-[13px] leading-[1.5] text-[#6b7280] max-[560px]:px-[16px] max-[560px]:pt-[14px] max-[560px]:pb-[20px] max-[560px]:text-[12px]">
      Published{' '}
      <time dateTime={published} className="font-semibold whitespace-nowrap text-[#374151]">
        {formatDate(published)}
      </time>
      <span aria-hidden="true"> · </span>
      Updated{' '}
      <time dateTime={updated} className="font-semibold whitespace-nowrap text-[#374151]">
        {formatDate(updated)}
      </time>
    </p>
  );
}

const SIDE_CARD = 'rounded-[16px] border border-[#e6e9ee] bg-white p-[22px] shadow-[0_22px_48px_-34px_rgba(11,6,82,.55)]';

export function Sidebar({ content }) {
  return (
    <aside className="flex flex-col gap-[16px] min-[1025px]:sticky min-[1025px]:top-[88px] min-[1025px]:max-h-[calc(100vh-104px)] min-[1025px]:overflow-x-hidden min-[1025px]:overflow-y-auto max-[1024px]:mt-[12px]">
      <div className={SIDE_CARD}>
        <p className="mb-[6px] text-[11px] font-extrabold uppercase tracking-[.09em] text-brand">{content.eyebrow}</p>
        <p className="mb-[8px] font-display text-[1.2rem] leading-[1.25] font-bold text-blue">{content.title}</p>
        <p className="mb-[14px] text-[13px] leading-[1.55] text-[#55606b]">{content.sub}</p>
        <ConsultationForm compact />
        <div className="mt-[12px] grid grid-cols-2 gap-[9px]">
          <a href={`tel:${SITE.phone}`} className="rounded-[10px] border-[1.5px] border-blue p-[10px] text-center text-[13px] font-bold text-blue hover:bg-blue hover:text-white">
            Call
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener" className="rounded-[10px] bg-[#25d366] p-[10px] text-center text-[13px] font-bold text-blue hover:text-blue hover:brightness-95">
            WhatsApp
          </a>
        </div>
      </div>
      <div className={SIDE_CARD}>
        <p className="mb-[12px] font-display text-[1rem] font-bold text-blue">{content.trustTitle}</p>
        <ul className="flex flex-col gap-[10px] text-[13px] leading-[1.4] text-[#333]">
          {content.trust.map((t) => (
            <li key={t} className="flex items-start gap-[9px]">
              <span aria-hidden="true" className="flex-none font-extrabold text-[#1b6b33]">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function LeadBand({ content }) {
  return (
    <section id="consult" className="scroll-mt-[76px] border-t border-rule-soft bg-[radial-gradient(circle_at_0%_0%,#eef0fb_0%,transparent_55%),var(--color-soft)] py-[clamp(48px,6vw,80px)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 items-center gap-[clamp(32px,5vw,64px)] px-[24px] max-[900px]:grid-cols-1 max-[900px]:gap-[28px]">
        <div className="max-w-[520px] max-[900px]:max-w-none">
          <span className="mb-[14px] inline-block text-[11px] font-bold uppercase tracking-[.14em] text-blue-mid">{content.eyebrow}</span>
          <h2 className="mb-[16px] text-[clamp(26px,3vw,38px)] leading-[1.1] font-normal tracking-[-.025em] text-blue">{content.title}</h2>
          <p className="text-[clamp(15px,1.1vw,16.5px)] leading-[1.65] text-slate">{content.blurb}</p>
          <ul className="mt-[22px] grid gap-[12px]">
            {content.points.map((p) => (
              <li key={p} className="flex items-start gap-[11px] text-[15px] leading-[1.5] font-medium text-blue">
                <Icon name="circle-check" size={18} className="mt-[2px] text-brand" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[16px] border border-rule-soft bg-white p-[clamp(22px,2.4vw,30px)] shadow-[0_14px_38px_rgba(10,37,64,.08)]">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

export function CtaCard({ content }) {
  return (
    <section className="relative overflow-hidden bg-white pt-[80px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <div className="relative overflow-hidden rounded-t-[30px] border-t-4 border-brand bg-[linear-gradient(#fff_0%,#fafbfd_60%,#f4f6fb_100%)] px-[32px] pt-[72px] pb-[80px] shadow-[0_18px_48px_rgba(10,37,64,.1),0_6px_16px_rgba(10,37,64,.05)] max-md:px-[20px] max-md:pt-[48px] max-md:pb-[56px]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-[160px] -right-[180px] z-0 h-[540px] w-[540px] bg-[radial-gradient(circle,rgba(219,20,28,.1)_0%,transparent_65%)] blur-[30px]" />
          <div className="relative z-[1] mx-auto max-w-[720px] text-center">
            <h2 className="mb-[18px] text-[40px] leading-[50px] font-semibold tracking-[-.5px] text-blue max-md:text-[28px] max-md:leading-[36px]">{content.title}</h2>
            <p className="mx-auto mb-[32px] max-w-[620px] text-[15px] leading-[26px] text-slate">{content.body}</p>
            <Button href={content.action.href}>{content.action.label}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
