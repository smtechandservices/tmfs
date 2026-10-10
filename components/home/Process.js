import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import Button, { Eyebrow, Rich } from '../ui/Button';
import { PROCESS } from '@/content/home';

export default function Process({ content = PROCESS }) {
  const { eyebrow, title, intro, steps, cta } = content;
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,var(--color-soft)_100%)] py-[120px] before:pointer-events-none before:absolute before:-top-[120px] before:-right-[160px] before:h-[520px] before:w-[520px] before:bg-[radial-gradient(circle,rgba(219,20,28,.06)_0%,transparent_65%)] before:blur-[40px] before:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="relative z-[1] mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="mb-[56px] flex items-end justify-between gap-[48px] max-[1100px]:mb-[40px] max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-[20px] max-md:mb-[32px]">
          <div>
            <Eyebrow className="mb-[16px]">{eyebrow}</Eyebrow>
            <h2 className="max-w-[520px] text-[clamp(28px,3vw,44px)] leading-[1.12] font-semibold tracking-[-.026em] text-blue">{title}</h2>
          </div>
          <p className="max-w-[360px] flex-none text-[15px] leading-[1.7] text-slate max-[1100px]:max-w-full">{intro}</p>
        </Reveal>

        <div className="mb-[56px] grid grid-cols-6 max-[1200px]:grid-cols-3 max-[1200px]:gap-[12px] max-[900px]:grid-cols-2 max-[900px]:gap-[10px] max-md:mb-[36px]">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i, 4) * 80} className="relative flex items-stretch">
              <article className="group/step relative flex min-h-full flex-1 flex-col rounded-t-[18px] border border-t-[3px] border-rule border-t-brand bg-white px-[20px] pt-[22px] pb-[26px] shadow-[0_1px_2px_rgba(10,37,64,.04)] transition-[transform,box-shadow,border-color] duration-[350ms] hover:-translate-y-[6px] hover:border-[rgba(219,20,28,.25)] hover:border-t-brand hover:shadow-[0_18px_40px_rgba(10,37,64,.1)] max-md:rounded-t-[14px] max-md:border-t-2 max-md:px-[14px] max-md:pt-[16px] max-md:pb-[18px]">
                <span className="mb-[14px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-blue-mid)_100%)] text-white shadow-[0_4px_12px_rgba(10,37,64,.18)] transition-transform duration-300 group-hover/step:-rotate-[4deg] group-hover/step:bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-deep)_100%)] max-md:mb-[10px] max-md:h-[32px] max-md:w-[32px] max-md:rounded-[8px]">
                  <Icon name={s.icon} size={20} stroke={1.75} />
                </span>
                <div className="mb-[14px] bg-[linear-gradient(135deg,var(--color-blue)_0%,var(--color-brand)_130%)] bg-clip-text font-display text-[clamp(40px,4vw,56px)] leading-none font-bold tracking-[-.04em] text-transparent opacity-85 max-md:mb-[8px] max-md:text-[28px]">
                  {s.n}
                </div>
                <h3 className="mb-[10px] min-h-[32px] font-sans text-[11.5px] leading-[1.35] font-bold uppercase tracking-[.14em] text-blue max-md:mb-[6px] max-md:min-h-0 max-md:text-[10px] max-md:tracking-[.08em]">{s.title}</h3>
                <p className="flex-grow text-[13px] leading-[1.65] text-slate max-md:text-[11.5px] max-md:leading-[1.5]">{s.desc}</p>
              </article>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className={`z-[2] -mx-[4px] flex w-[18px] flex-none items-center justify-center text-brand opacity-45 max-md:hidden ${(i + 1) % 3 === 0 ? 'max-[1200px]:hidden' : ''} ${
                    (i + 1) % 2 === 0 ? 'max-[900px]:hidden' : 'max-[900px]:flex'
                  }`}
                >
                  <Icon name="chevron-right" size={18} />
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="relative flex items-center justify-between gap-[32px] overflow-hidden rounded-t-[24px] bg-[linear-gradient(135deg,var(--color-blue-deep)_0%,var(--color-blue)_50%,var(--color-blue-mid)_100%)] px-[40px] py-[28px] shadow-[0_20px_50px_rgba(10,37,64,.25)] before:pointer-events-none before:absolute before:top-0 before:right-0 before:h-full before:w-[320px] before:bg-[radial-gradient(circle_at_100%_0,rgba(219,20,28,.25)_0%,transparent_70%)] before:content-[''] max-md:flex-col max-md:items-start max-md:gap-[18px] max-md:rounded-t-[18px] max-md:px-[22px] max-md:pt-[22px] max-md:pb-[24px]">
          <div className="relative z-[1]">
            <div className="mb-[6px] text-[11.5px] font-bold uppercase tracking-[.14em] text-brand-bright">{cta.label}</div>
            <div className="font-display text-[clamp(18px,1.6vw,22px)] leading-[1.35] font-medium tracking-[-.012em] text-white max-md:text-[16px]">
              <Rich value={cta.headline} emClass="italic text-brand-bright" />
            </div>
          </div>
          <Button href={cta.action.href} className="relative z-[1] flex-none max-md:w-full">
            {cta.action.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
