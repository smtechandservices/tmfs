import Icon from '../ui/Icon';
import Button, { Rich } from '../ui/Button';
import { HERO } from '@/content/home';

const SHADOW = '[text-shadow:0_2px_4px_rgba(11,6,82,.5),0_6px_24px_rgba(11,6,82,.4)]';

export default function Hero({ content = HERO }) {
  return (
    <section className="relative isolate flex min-h-[780px] items-center overflow-hidden pt-[170px] pb-[110px] text-white max-[1100px]:min-h-0 max-[1100px]:pt-[140px] max-[1100px]:pb-[80px] max-md:pt-[104px] max-md:pb-[56px]">
      <div className="absolute inset-0 z-0 max-md:bg-[radial-gradient(120%_90%_at_82%_22%,rgba(219,20,28,.16)_0%,transparent_52%),linear-gradient(158deg,#1a128f_0%,#120a73_46%,#0b0652_100%)]">
        <img src={content.image.src} alt={content.image.alt} className="h-full w-full object-cover max-md:hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,6,82,.82)_0%,rgba(16,9,110,.72)_18%,rgba(16,9,110,.52)_32%,rgba(16,9,110,.2)_45%,transparent_58%),linear-gradient(transparent_70%,rgba(11,6,82,.18)_100%)] max-md:bg-[linear-gradient(rgba(11,6,82,.55)_0,transparent_120px)]" />
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-[1320px] px-[48px] max-md:px-[20px]">
        <div className="max-w-[600px] pt-[24px] max-[1100px]:pt-0">
          <span className="mb-[32px] inline-flex items-center gap-[10px] rounded-full border border-white/[.28] bg-[rgba(219,20,28,.22)] px-[16px] py-[8px] text-[12px] font-semibold uppercase tracking-[.16em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-brand-bright before:shadow-[0_0_12px_var(--color-brand-bright)] before:content-[''] max-md:hidden">
            {content.eyebrow}
          </span>
          <h1 className={`mb-[22px] text-[clamp(34px,4.2vw,54px)] leading-[1.1] font-bold tracking-[-.024em] text-white max-md:mb-[18px] max-md:text-[clamp(28px,6.6vw,40px)] ${SHADOW}`}>
            <Rich value={content.title} emClass="text-brand-bright" />
          </h1>
          <p className={`mb-[14px] max-w-[620px] text-[clamp(16px,1.3vw,19px)] leading-[1.5] font-semibold max-md:mb-[24px] max-md:text-[14.5px] ${SHADOW}`}>{content.sub}</p>
          <p className={`mb-[40px] max-w-[600px] text-[clamp(14px,1.05vw,15.5px)] leading-[1.6] text-white/[.92] max-md:hidden ${SHADOW}`}>{content.intro}</p>

          <div className="mb-[44px] flex flex-wrap items-center gap-[16px] max-md:mb-0 max-md:gap-[10px]">
            <Button href={content.primary.href}>{content.primary.label}</Button>
            <Button href={content.secondary.href} variant="lineLight" className="max-md:hidden">
              {content.secondary.label}
            </Button>
          </div>

          <div className="grid max-w-[640px] grid-cols-2 gap-[14px] max-[1100px]:max-w-[560px] max-md:hidden">
            {content.tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="group/tool relative flex items-center gap-[14px] overflow-hidden rounded-t-[12px] border border-white/[.18] bg-white/[.06] px-[16px] py-[14px] text-white transition-[background,border-color,transform] duration-[250ms] hover:-translate-y-[2px] hover:border-[rgba(219,20,28,.55)] hover:bg-white/[.12] hover:text-white"
              >
                <span className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-t-[10px] bg-brand text-white shadow-[0_4px_12px_rgba(219,20,28,.35)] transition-transform duration-[250ms] group-hover/tool:scale-105 group-hover/tool:-rotate-6">
                  <Icon name={tool.icon} size={22} stroke={1.8} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-[1px]">
                  <span className="text-[10px] font-semibold uppercase tracking-[.12em] text-white/70">{tool.label}</span>
                  <span className="font-display text-[14.5px] leading-[1.2] font-bold tracking-[-.01em]">{tool.title}</span>
                </span>
                <Icon name="arrow-right" size={18} className="text-white/55 transition-[transform,color] duration-[250ms] group-hover/tool:translate-x-[3px] group-hover/tool:text-brand-bright" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
