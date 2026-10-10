// Body sections of a jurisdiction page, in page order. They sit in the main
// column next to the sticky sidebar, so their grids are sized for that column.
import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import RelatedCarousel from './RelatedCarousel';
import { ReviewCarousel } from '../home/Testimonials';

const H2 = 'text-[40px] leading-[44px] font-semibold tracking-[-.5px] text-blue max-[900px]:text-[32px] max-[900px]:leading-[38px] max-[480px]:text-[26px] max-[480px]:leading-[32px]';
const BODY = 'text-[14px] leading-[24px] text-[#333]';
const CARD = 'rounded-[12px] border border-[#e5e5e5] bg-white transition-[border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[3px] hover:border-[rgba(219,20,28,.35)] hover:shadow-[0_14px_28px_rgba(11,6,82,.08)]';
// Navy icon tile that turns red when its card is hovered (card needs `group/card`).
const ICON_TILE = 'inline-flex flex-none items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-blue-deep)_100%)] text-white shadow-[0_6px_14px_rgba(11,6,82,.18)] transition-[background,transform] duration-300 group-hover/card:-rotate-[4deg] group-hover/card:bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-deep)_100%)]';

function Section({ gray = false, className = 'py-[96px] max-[620px]:py-[64px]', children }) {
  return <section className={`${gray ? 'bg-[#f7f7f7]' : 'bg-white'} ${className}`}>{children}</section>;
}

function Head({ title, body, className = 'mb-[56px]' }) {
  return (
    <Reveal className={`mx-auto flex max-w-[760px] flex-col gap-[16px] text-center ${className}`}>
      <h2 className={H2}>{title}</h2>
      {body && <p className={`mx-auto max-w-[620px] ${BODY}`}>{body}</p>}
    </Reveal>
  );
}

export function Intro({ content }) {
  return (
    <Section className="pt-[56px] pb-[80px]">
      <Reveal className="flex flex-col gap-[28px]">
        <div>
          <h2 className={`mb-[24px] ${H2}`}>{content.title}</h2>
          <p className="mb-[20px] rounded-r-[8px] border-l-4 border-brand bg-[#f6f8fc] px-[20px] py-[16px] text-[18px] leading-[1.65] font-medium text-blue max-[640px]:px-[16px] max-[640px]:py-[14px] max-[640px]:text-[16px]">
            {content.summary}
          </p>
          <p className={BODY}>{content.body}</p>
        </div>
        {content.image && (
          <div className="relative min-h-[440px] overflow-hidden rounded-[12px] shadow-[0_18px_40px_rgba(11,6,82,.1)] max-[640px]:min-h-[260px]">
            <img src={content.image.src} alt={content.image.alt} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
      </Reveal>
    </Section>
  );
}

export function WhyZone({ content }) {
  return (
    <Section gray>
      <Reveal className="mx-auto mb-[48px] max-w-[720px] text-center">
        <span className="mb-[20px] inline-block rounded-full bg-brand px-[16px] py-[8px] text-[12px] leading-[1.45] font-bold uppercase tracking-[.06em] text-white max-[620px]:rounded-[12px] max-[620px]:text-[11px]">{content.badge}</span>
        <h2 className={`mb-[14px] ${H2}`}>{content.title}</h2>
        <p className="text-[17px] leading-[1.6] text-[#4a4a4a] max-[620px]:text-[15px]">{content.body}</p>
      </Reveal>
      <div className="mb-[36px] grid grid-cols-3 gap-[20px] max-[980px]:grid-cols-2 max-[620px]:grid-cols-1">
        {content.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 3) * 70}
            className="flex flex-col gap-[12px] rounded-[14px] border border-[#e6eaf0] bg-white px-[26px] pt-[28px] pb-[26px] transition-[border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[rgba(219,20,28,.35)] hover:shadow-[0_14px_36px_rgba(11,6,82,.08)]"
          >
            <span className="mb-[4px] inline-flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-brand/[.08] text-brand">
              <Icon name={item.icon} size={22} stroke={1.8} />
            </span>
            <h3 className="font-sans text-[17px] leading-[1.3] font-semibold text-blue">{item.title}</h3>
            <p className="text-[14.5px] leading-[1.6] text-[#4a5870]">{item.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="grid grid-cols-[auto_1fr] items-center gap-[22px] rounded-[14px] border border-l-4 border-[#e6eaf0] border-l-brand bg-white px-[26px] py-[22px] max-[700px]:grid-cols-1 max-[700px]:gap-[12px]">
        <span className="text-[11px] font-bold uppercase tracking-[.14em] text-brand">Ideal for</span>
        <ul className="flex flex-wrap gap-x-[22px] gap-y-[14px]">
          {content.idealFor.map((item) => (
            <li key={item} className="inline-flex items-center gap-[8px] text-[14px] font-medium text-[#1a2940]">
              <Icon name="check" size={14} stroke={2.5} className="text-[#1e7e34]" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

export function LicenceTypes({ content }) {
  return (
    <Section>
      <Head title={content.title} body={content.body} />
      <div className="grid grid-cols-3 gap-[18px] max-[1100px]:grid-cols-1">
        {content.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className={`group/card flex flex-col gap-[14px] px-[28px] pt-[32px] pb-[28px] ${CARD}`}>
            <span className={`h-[48px] w-[48px] ${ICON_TILE}`}>
              <Icon name={item.icon} size={22} stroke={1.8} />
            </span>
            <h3 className="font-sans text-[17px] leading-[1.32] font-semibold tracking-[-.2px] text-blue">{item.title}</h3>
            <p className="text-[13.5px] leading-[22px] text-[#555]">{item.body}</p>
            <ul className="mt-[6px] flex flex-col border-t border-[#f0f0f0]">
              {item.list.map((li) => (
                <li key={li} className="relative border-b border-[#f0f0f0] py-[11px] pl-[20px] text-[13.5px] leading-[1.4] font-medium text-blue before:absolute before:top-[11px] before:left-0 before:text-[14px] before:font-bold before:text-brand before:content-['→']">
                  {li}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Structures({ content }) {
  return (
    <Section gray>
      <Head title={content.title} body={content.body} />
      <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1">
        {content.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 80}
            className={`relative overflow-hidden px-[26px] pt-[28px] pb-[26px] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-brand before:opacity-0 before:transition-[opacity,transform] before:duration-300 before:content-[''] hover:before:scale-x-100 hover:before:opacity-100 ${CARD}`}
          >
            <span className="mb-[16px] inline-flex h-[28px] w-[38px] items-center justify-center rounded-[6px] bg-brand/[.08] text-[12px] font-bold tracking-[.8px] text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mb-[10px] font-sans text-[17px] leading-[1.32] font-semibold tracking-[-.2px] text-blue">{item.title}</h3>
            <p className="text-[13.5px] leading-[22px] text-[#555]">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSteps({ content }) {
  return (
    <Section>
      <Head title={content.title} body={content.body} />
      <ol className="mx-auto flex max-w-[880px] flex-col">
        {content.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            className="grid grid-cols-[72px_1fr] items-start gap-[28px] border-b border-[#e5e5e5] py-[22px] last:border-b-0 max-[900px]:grid-cols-[56px_1fr] max-[900px]:gap-[18px] max-[480px]:grid-cols-[44px_1fr] max-[480px]:gap-[14px] max-[480px]:py-[18px]"
          >
            <span className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full border-[1.5px] border-brand bg-brand/[.06] text-[16px] font-bold tracking-[1px] text-brand max-[480px]:h-[44px] max-[480px]:w-[44px] max-[480px]:text-[14px]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-[6px] pt-[12px] max-[480px]:pt-[8px]">
              <h3 className="font-sans text-[17px] leading-[1.3] font-semibold tracking-[-.2px] text-blue">{step.title}</h3>
              <p className="text-[14px] leading-[22px] text-[#555]">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

// Shareholder documents come in labelled groups; a service page passes a flat `items` list.
export function Documents({ content }) {
  return (
    <Section gray>
      <Reveal className="mx-auto max-w-[1000px] rounded-[16px] border border-[#e5e5e5] bg-white p-[56px] shadow-[0_18px_40px_rgba(11,6,82,.06)] max-[900px]:p-[32px] max-[480px]:p-[22px]">
        <Head title={content.title} body={content.body} className="mb-[36px]" />
        <div className="flex flex-col gap-[40px]">
          {(content.groups ?? [{ items: content.items }]).map((g) => (
            <div key={g.label ?? 'documents'}>
              {g.label && <h3 className="mb-[8px] border-b-2 border-[#f3e1e4] pb-[12px] font-sans text-[12px] font-bold uppercase tracking-[.12em] text-brand">{g.label}</h3>}
              <ul className="grid grid-cols-2 gap-x-[32px] max-[900px]:grid-cols-1">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-[14px] border-b border-[#f0f0f0] py-[16px] text-[14px] leading-[1.45] font-medium text-blue">
                    <Icon name="check" size={16} stroke={2.5} className="text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function Benefits({ content }) {
  return (
    <Section className="pt-[96px] pb-[80px] max-[620px]:py-[64px]">
      <Head title={content.title} body={content.body} />
      <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1 max-[900px]:gap-[14px]">
        {content.items.map((item, i) => (
          <Reveal
            key={item}
            delay={(i % 2) * 70}
            className="flex items-center justify-between gap-[16px] rounded-[10px] border border-[#e5e5e5] bg-white p-[28px] transition-[border-color,box-shadow,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[rgba(219,20,28,.35)] hover:shadow-[0_10px_24px_rgba(11,6,82,.06)]"
          >
            <h3 className="font-sans text-[14px] leading-[22px] font-bold uppercase tracking-[.2px] text-blue">{item}</h3>
            <span className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full border-[1.5px] border-brand text-brand">
              <Icon name="check" size={16} stroke={3} />
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const NOTE_TONES = {
  neutral: 'border-[#e6eaf0] bg-white text-[#4a5870] [&_b]:text-blue',
  warn: 'border-[#f3c8c8] bg-[#fbeaea] text-[#4a5870] [&_b]:text-[#a51a1a]',
  ok: 'border-[#c6e6ce] bg-[#ecf7ef] text-[#4a5870] [&_b]:text-[#1e7e34]',
};

export function TaxBlock({ content }) {
  return (
    <Section>
      <Reveal className="mx-auto mb-[48px] max-w-[720px] text-center">
        <h2 className={`mb-[14px] ${H2}`}>{content.title}</h2>
        <p className="text-[17px] leading-[1.6] text-[#4a5870]">{content.body}</p>
      </Reveal>
      <div className="mb-[28px] grid grid-cols-2 gap-[20px] max-[980px]:grid-cols-1">
        {content.cards.map((card, i) => (
          <Reveal key={card.eyebrow} delay={i * 80} className="relative overflow-hidden rounded-[14px] border border-t-4 border-[#e6eaf0] border-t-brand bg-[linear-gradient(#fafbfd_0%,#f4f6fb_100%)] px-[30px] pt-[30px] pb-[26px]">
            <div className="mb-[10px] text-[11px] font-bold uppercase tracking-[.16em] text-brand">{card.eyebrow}</div>
            <h3 className="mb-[12px] font-sans text-[22px] leading-[1.25] font-semibold tracking-[-.01em] text-blue">{card.headline}</h3>
            <p className="mb-[16px] text-[15px] leading-[1.65] text-[#4a5870]">{card.body}</p>
            {card.note && (
              <div className={`rounded-[10px] border px-[16px] py-[14px] text-[13.5px] leading-[1.55] ${NOTE_TONES[card.note.tone ?? 'neutral']}`}>
                <b className="mb-[6px] block text-[11px] font-bold uppercase tracking-[.08em]">{card.note.label}</b>
                {card.note.text}
              </div>
            )}
          </Reveal>
        ))}
      </div>
      <Reveal className="mb-[22px] rounded-[14px] bg-blue-deep px-[32px] py-[28px] text-white max-[480px]:px-[22px]">
        <h3 className="mb-[14px] font-sans text-[16px] font-semibold tracking-[.02em] text-white">Ongoing Compliance Obligations</h3>
        <ul className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] max-[980px]:grid-cols-1">
          {content.ongoing.map((item) => (
            <li key={item} className="flex items-center gap-[10px] text-[14px] text-white/[.88]">
              <Icon name="check" size={14} stroke={2.5} className="text-brand-bright" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="pt-[18px] text-center text-[12.5px] leading-[1.55] text-[#6b7791]">
        <strong className="font-semibold text-blue">Sources &amp; official references:</strong>{' '}
        {content.sources.map((s, i) => (
          <span key={s.label}>
            {i > 0 && ' · '}
            {s.href ? (
              <a href={s.href} target="_blank" rel="noopener" className="text-blue underline decoration-[#c9d3e0] underline-offset-2 hover:text-brand hover:decoration-brand">
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </span>
        ))}
      </p>
    </Section>
  );
}

export function IndustryGrid({ content }) {
  return (
    <Section gray>
      <Head title={content.title} body={content.body} />
      <div className="grid grid-cols-3 gap-[16px] max-[760px]:grid-cols-2 max-[480px]:gap-[12px]">
        {content.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 60} className={`group/card flex flex-col items-start gap-[14px] px-[22px] py-[28px] ${CARD}`}>
            <span className={`h-[44px] w-[44px] ${ICON_TILE}`}>
              <Icon name={item.icon} size={22} stroke={1.8} />
            </span>
            <h3 className="font-sans text-[14.5px] leading-[1.35] font-semibold tracking-[-.1px] text-blue">{item.title}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Advantage({ content }) {
  return (
    <Section gray className="pt-[56px] pb-[104px] max-[620px]:pb-[64px]">
      <Head title={content.title} body={content.body} />
      <div className="grid grid-cols-2 gap-[18px] max-[900px]:grid-cols-1 max-[900px]:gap-[14px]">
        {content.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 70} className={`group/card flex flex-col gap-[14px] px-[26px] pt-[30px] pb-[28px] ${CARD}`}>
            <span className={`h-[46px] w-[46px] ${ICON_TILE}`}>
              <Icon name={item.icon} size={22} stroke={1.8} />
            </span>
            <h3 className="font-sans text-[16px] leading-[1.35] font-semibold tracking-[-.2px] text-blue">{item.title}</h3>
            <p className="text-[13.5px] leading-[22px] text-[#555]">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Pillars({ content }) {
  return (
    <Section gray>
      <Head title={content.title} body={content.body} />
      <div className="flex flex-col gap-[28px]">
        <Reveal className="relative min-h-[340px] overflow-hidden rounded-[12px] bg-blue-deep shadow-[0_18px_40px_rgba(11,6,82,.12)] max-[640px]:min-h-[220px]">
          <img src={content.image.src} alt={content.image.alt} className="absolute inset-0 h-full w-full object-cover" />
        </Reveal>
        <div className="flex flex-col gap-[14px]">
          {content.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className={`group/card relative flex items-start gap-[20px] overflow-hidden px-[26px] pt-[26px] pb-[24px] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-brand before:opacity-0 before:transition-[opacity,transform] before:duration-300 before:content-[''] hover:before:scale-x-100 hover:before:opacity-100 ${CARD}`}
            >
              <span className={`h-[46px] w-[46px] ${ICON_TILE}`}>
                <Icon name={item.icon} size={22} stroke={1.8} />
              </span>
              <div>
                <h3 className="mb-[6px] font-sans text-[17px] leading-[1.3] font-semibold tracking-[-.2px] text-blue">{item.title}</h3>
                <p className="text-[13.5px] leading-[22px] text-[#555]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Related({ content, cards }) {
  return (
    <Section>
      <Head title={content.title} body={content.body} className="mb-[32px]" />
      <RelatedCarousel cards={cards} />
    </Section>
  );
}

export function Reviews({ content }) {
  return (
    <Section>
      <Head title={content.title} body={content.body} />
      <ReviewCarousel fits={2} />
    </Section>
  );
}

export function Faqs({ content }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <Section gray>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Head title={content.title} body={content.body} />
      <div className="mx-auto flex max-w-[880px] flex-col gap-[12px]">
        {content.items.map((f) => (
          <details
            key={f.q}
            className="group/faq overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white transition-[border-color,box-shadow] duration-[250ms] open:border-[rgba(219,20,28,.35)] open:shadow-[0_10px_22px_rgba(11,6,82,.07)]"
          >
            <summary className="relative cursor-pointer list-none py-[20px] pr-[56px] pl-[24px] text-[15px] leading-[1.4] font-semibold tracking-[-.15px] text-blue transition-colors group-open/faq:text-brand [&::-webkit-details-marker]:hidden">
              {f.q}
              <span
                aria-hidden="true"
                className="absolute top-1/2 right-[24px] inline-flex h-[28px] w-[28px] -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-brand text-[18px] leading-none text-brand transition-[transform,background,color] duration-[250ms] group-open/faq:rotate-180 group-open/faq:bg-brand group-open/faq:text-white"
              >
                <span className="group-open/faq:hidden">+</span>
                <span className="hidden group-open/faq:inline">−</span>
              </span>
            </summary>
            <div className="px-[24px] pb-[22px] text-[14px] leading-[24px] text-[#555]">{f.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}

const NOTE_BOX = 'mx-auto max-w-[760px] rounded-[10px] border border-l-[3px] border-[#e5e5e5] border-l-brand bg-white px-[26px] pt-[22px] pb-[20px]';
const NOTE_HEAD = 'mb-[10px] text-[10.5px] font-bold uppercase tracking-[.18em] text-brand';

/** Official references for a service page (jurisdiction pages list theirs under the tax block). */
export function Sources({ sources }) {
  return (
    <Section gray className="pt-[40px] pb-0">
      <div className={NOTE_BOX}>
        <div className={NOTE_HEAD}>Sources &amp; official references</div>
        <p className="text-[12.5px] leading-[20px] text-[#555]">
          {sources.map((s, i) => (
            <span key={s.label}>
              {i > 0 && ' · '}
              {s.href ? (
                <a href={s.href} target="_blank" rel="noopener" className="text-blue underline decoration-[#c9d3e0] underline-offset-2 hover:text-brand hover:decoration-brand">
                  {s.label}
                </a>
              ) : (
                s.label
              )}
            </span>
          ))}
        </p>
      </div>
    </Section>
  );
}

export function Disclaimer({ paragraphs }) {
  return (
    <Section gray className="pt-[40px] pb-[52px]">
      <div className={NOTE_BOX}>
        <div className={NOTE_HEAD}>Verification &amp; independence</div>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 20)} className="mb-[8px] text-[12.5px] leading-[20px] text-[#555] last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
