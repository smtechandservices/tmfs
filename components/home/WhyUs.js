import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow, Rich } from '../ui/Button';
import { DIFFERENTIATORS } from '@/content/home';

export default function WhyUs({ content = DIFFERENTIATORS }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(#fafbfd_0%,#f2f5f9_100%)] py-[120px] before:pointer-events-none before:absolute before:-top-[120px] before:-left-[160px] before:h-[540px] before:w-[540px] before:rounded-full before:bg-[radial-gradient(circle,rgba(219,20,28,.12)_0%,rgba(219,20,28,.03)_45%,transparent_70%)] before:blur-[30px] before:content-[''] after:pointer-events-none after:absolute after:-right-[180px] after:-bottom-[160px] after:h-[580px] after:w-[580px] after:rounded-full after:bg-[radial-gradient(circle,rgba(24,0,173,.12)_0%,rgba(24,0,173,.04)_40%,transparent_70%)] after:blur-[30px] after:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="relative z-[1] mx-auto mb-[64px] max-w-[760px] text-center max-md:mb-[36px]">
          <Eyebrow className="mb-[20px]">{content.eyebrow}</Eyebrow>
          <h2 className="mb-[22px] text-[clamp(32px,3.6vw,54px)] leading-[1.08] font-extrabold tracking-[-.028em] text-blue max-md:text-[26px]">
            <Rich value={content.title} />
          </h2>
          <p className="mx-auto max-w-[620px] text-[16px] leading-[1.7] text-slate max-md:text-[14px]">{content.intro}</p>
        </Reveal>

        <div className="relative z-[1] grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[16px] max-md:gap-[10px]">
          {content.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="group/adv relative overflow-hidden rounded-t-[24px] border border-white/95 bg-white/70 px-[28px] pt-[36px] pb-[32px] shadow-[inset_0_1px_#fff,0_4px_16px_rgba(10,37,64,.06)] transition-[transform,background,border-color,box-shadow] duration-[350ms] after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-[100px] after:w-[100px] after:bg-[radial-gradient(circle_at_100%_0,rgba(219,20,28,.18)_0%,transparent_70%)] after:opacity-0 after:transition-opacity after:duration-[350ms] after:content-[''] hover:-translate-y-[6px] hover:border-[rgba(219,20,28,.32)] hover:bg-white/90 hover:shadow-[inset_0_1px_#fff,0_20px_44px_rgba(10,37,64,.1),0_4px_12px_rgba(219,20,28,.08)] hover:after:opacity-100 max-md:px-[14px] max-md:pt-[18px] max-md:pb-[16px]"
            >
              <div className="absolute top-[24px] right-[28px] bg-[linear-gradient(135deg,var(--color-brand)_0%,rgba(219,20,28,.4)_100%)] bg-clip-text font-display text-[56px] leading-none font-extrabold tracking-[-.04em] text-transparent opacity-[.22] transition-opacity duration-[350ms] group-hover/adv:opacity-40 max-md:top-[12px] max-md:right-[14px] max-md:text-[32px]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="relative z-[1] mb-[28px] flex h-[56px] w-[56px] items-center justify-center rounded-t-[14px] bg-brand text-white shadow-[0_8px_20px_rgba(219,20,28,.3)] transition-[background,transform,box-shadow] duration-300 group-hover/adv:scale-[1.06] group-hover/adv:-rotate-6 group-hover/adv:bg-brand-bright max-md:mb-[14px] max-md:h-[38px] max-md:w-[38px]">
                <Icon name={item.icon} size={26} stroke={1.6} />
              </span>
              <h3 className="relative z-[1] mb-[12px] font-display text-[17px] leading-[1.28] font-bold tracking-[-.016em] text-blue max-md:mb-[8px] max-md:text-[13px]">{item.title}</h3>
              <p className="relative z-[1] text-[13.5px] leading-[1.65] text-slate max-md:text-[11.5px] max-md:leading-[1.5]">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
