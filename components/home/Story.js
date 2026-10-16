import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import { STORY } from '@/content/home';

export default function Story({ content = STORY }) {
  const { title, pull, paragraphs, facts, image, badgeTop, badge, action } = content;
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-white py-[120px] before:pointer-events-none before:absolute before:top-1/2 before:-left-[120px] before:z-0 before:h-[540px] before:w-[540px] before:-translate-y-1/2 before:bg-[radial-gradient(circle,var(--color-brand)_1.4px,transparent_1.6px)] before:[background-size:18px_18px] before:opacity-[.07] before:[mask-image:radial-gradient(circle,#000_0%,transparent_65%)] before:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]"
    >
      <div className="relative z-[1] mx-auto grid max-w-[1320px] grid-cols-[1.05fr_1fr] items-center gap-[96px] px-[24px] max-[1100px]:grid-cols-1 max-[1100px]:gap-[56px] max-md:gap-[32px]">
        <Reveal>
          <h2 className="mb-[32px] text-[clamp(32px,3.6vw,52px)] leading-[1.1] font-semibold tracking-[-.026em] text-blue max-md:text-[28px]">{title}</h2>
          <p className="mb-[28px] border-l-[3px] border-brand pl-[22px] font-display text-[clamp(17px,1.5vw,21px)] leading-[1.55] font-medium tracking-[-.012em] text-blue max-md:pl-[14px] max-md:text-[16px]">
            {pull}
          </p>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mb-[20px] max-w-[560px] text-[16px] leading-[1.78] text-slate max-[1100px]:max-w-full">
              {p}
            </p>
          ))}
          <dl className="mt-[40px] mb-[36px] grid max-w-[560px] grid-cols-2 gap-[24px] max-md:my-[28px] max-md:gap-[12px]">
            {facts.map((f) => (
              <div key={f.label} className={f.wide ? 'col-span-2' : undefined}>
                <dt className="mb-[8px] text-[11px] font-semibold uppercase tracking-[.14em] text-brand max-md:mb-[4px] max-md:text-[10px]">{f.label}</dt>
                <dd className="font-display text-[17px] leading-[1.3] font-semibold tracking-[-.012em] text-blue max-md:text-[14px]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Button href={action.href} variant="line">
            {action.label}
          </Button>
        </Reveal>

        <Reveal
          delay={140}
          className="relative aspect-[4/5] overflow-hidden rounded-t-[40px] shadow-[0_20px_60px_rgba(10,37,64,.18)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(135deg,transparent_55%,rgba(10,37,64,.18)_100%)] after:content-[''] max-[1100px]:aspect-auto max-[1100px]:h-[420px] max-md:h-[280px]"
        >
          <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute top-[24px] right-[24px] z-[2] flex items-center gap-[14px] rounded-t-[16px] border border-white/[.18] bg-[rgba(11,6,82,.72)] px-[18px] py-[14px] shadow-[0_12px_32px_rgba(10,37,64,.3)] backdrop-blur-[6px] max-md:top-[14px] max-md:right-[14px] max-md:px-[12px] max-md:py-[10px]">
            <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-deep)_100%)] text-white shadow-[0_4px_12px_rgba(219,20,28,.35)] max-md:h-[32px] max-md:w-[32px]">
              <Icon name={badgeTop.icon} size={22} />
            </span>
            <div>
              <div className="mb-[2px] font-display text-[22px] leading-none font-bold tracking-[-.022em] text-white max-md:text-[18px]">{badgeTop.value}</div>
              <div className="text-[11.5px] leading-[1.3] font-medium text-white/85 max-md:text-[10.5px]">
                {badgeTop.label[0]}
                <br />
                {badgeTop.label[1]}
              </div>
            </div>
          </div>
          <div className="absolute bottom-[24px] left-[24px] z-[2] flex items-center gap-[14px] rounded-t-[16px] border border-white/50 bg-white/[.78] px-[22px] py-[16px] shadow-[0_12px_32px_rgba(10,37,64,.18)] backdrop-blur-[6px] max-md:bottom-[14px] max-md:left-[14px] max-md:gap-[10px] max-md:px-[16px] max-md:py-[12px]">
            <span className="font-display text-[32px] leading-none font-bold tracking-[-.022em] text-blue max-md:text-[26px]">
              {badge.value}
              {badge.sup && <span className="text-brand">{badge.sup}</span>}
            </span>
            <div className="text-[12px] leading-[1.3] font-medium text-slate max-md:text-[11px]">
              {badge.label[0]}
              <br />
              {badge.label[1]}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
