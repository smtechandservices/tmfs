import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow } from '../ui/Button';
import { INDUSTRIES } from '@/content/home';

export default function Industries({ content = INDUSTRIES }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fafbfd_0%,#f1f4f9_50%,#fafbfd_100%)] py-[120px] before:pointer-events-none before:absolute before:top-[12%] before:-right-[160px] before:h-[540px] before:w-[540px] before:rounded-full before:bg-[radial-gradient(circle,rgba(24,0,173,.12)_0%,rgba(24,0,173,.04)_40%,transparent_70%)] before:blur-[20px] before:content-[''] after:pointer-events-none after:absolute after:-bottom-[180px] after:-left-[180px] after:h-[580px] after:w-[580px] after:rounded-full after:bg-[radial-gradient(circle,rgba(219,20,28,.14)_0%,rgba(219,20,28,.04)_40%,transparent_70%)] after:blur-[20px] after:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="relative z-[2] mb-[64px] max-w-[720px] max-md:mb-[36px]">
          <Eyebrow className="mb-[16px]">{content.eyebrow}</Eyebrow>
          <h2 className="mb-[20px] text-[clamp(28px,3vw,44px)] leading-[1.12] font-semibold tracking-[-.026em] text-blue">{content.title}</h2>
          <p className="max-w-[560px] text-[15px] leading-[1.72] text-slate">{content.intro}</p>
        </Reveal>
        <div className="relative z-[2] grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-3 max-[1100px]:gap-[16px] max-[900px]:grid-cols-2 max-md:gap-[12px]">
          {content.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 80}
              className="group/ind relative overflow-hidden rounded-t-[24px] border border-white/85 bg-white/55 px-[24px] pt-[28px] pb-[26px] shadow-[inset_0_1px_rgba(255,255,255,.9),0_3px_12px_rgba(10,37,64,.04)] transition-[transform,box-shadow,border-color,background] duration-300 hover:-translate-y-[5px] hover:border-[rgba(219,20,28,.3)] hover:bg-white/80 hover:shadow-[inset_0_1px_#fff,0_20px_44px_rgba(10,37,64,.12),0_3px_8px_rgba(219,20,28,.06)] max-md:px-[14px] max-md:pt-[18px] max-md:pb-[16px]"
            >
              <span className="mb-[18px] flex h-[48px] w-[48px] items-center justify-center rounded-t-[12px] border border-[rgba(24,0,173,.16)] bg-[linear-gradient(135deg,rgba(24,0,173,.12)_0%,rgba(24,0,173,.04)_100%)] text-blue transition-[background,color,transform,border-color] duration-300 group-hover/ind:scale-105 group-hover/ind:-rotate-[5deg] group-hover/ind:border-brand group-hover/ind:bg-brand group-hover/ind:text-white max-md:mb-[12px] max-md:h-[38px] max-md:w-[38px]">
                <Icon name={item.icon} size={22} />
              </span>
              <h3 className="mb-[10px] text-[19px] leading-[1.22] font-bold tracking-[-.018em] text-blue max-md:mb-[6px] max-md:text-[14.5px]">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.65] text-slate max-md:text-[11.5px] max-md:leading-[1.5]">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
