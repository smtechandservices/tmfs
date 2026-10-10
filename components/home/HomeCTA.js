import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow } from '../ui/Button';
import ConsultationForm from '../sections/ConsultationForm';
import { CONSULTATION } from '@/content/home';
import { SITE } from '@/content/site';

export default function HomeCTA({ content = CONSULTATION }) {
  const contacts = [
    { icon: 'phone', label: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
    { icon: 'mail', label: SITE.email, href: SITE.emailHref },
    { icon: 'map-pin', label: SITE.address },
  ];
  return (
    <section
      id="contact"
      className="relative scroll-mt-[76px] overflow-hidden bg-[linear-gradient(180deg,#fff_0%,var(--color-soft)_100%)] py-[120px] after:pointer-events-none after:absolute after:-top-[40%] after:-right-[10%] after:h-[600px] after:w-[600px] after:bg-[radial-gradient(circle,rgba(219,20,28,.06)_0%,transparent_60%)] after:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]"
    >
      <div className="relative z-[1] mx-auto grid max-w-[1320px] grid-cols-[1fr_1.1fr] items-start gap-[80px] px-[24px] max-[1100px]:gap-[56px] max-[900px]:grid-cols-1 max-[900px]:gap-[40px]">
        <Reveal>
          <Eyebrow className="mb-[16px]">{content.eyebrow}</Eyebrow>
          <h2 className="mb-[24px] max-w-[9ch] text-[clamp(30px,3.4vw,50px)] leading-[1.08] font-bold tracking-[-.028em] text-blue max-md:text-[28px]">{content.title}</h2>
          <p className="mb-[36px] max-w-[400px] text-[15px] leading-[1.75] text-slate max-[900px]:max-w-full">{content.intro}</p>
          <div className="flex flex-col gap-[12px]">
            {contacts.map((c) => {
              const inner = (
                <>
                  <Icon name={c.icon} size={15} className="text-brand" />
                  {c.label}
                </>
              );
              const cls = 'inline-flex items-center gap-[10px] text-[14px] font-medium text-blue transition-colors max-md:text-[13.5px]';
              return c.href ? (
                <a key={c.label} href={c.href} className={`${cls} hover:text-brand`}>
                  {inner}
                </a>
              ) : (
                <span key={c.label} className={cls}>
                  {inner}
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={80} className="rounded-t-[30px] border border-rule bg-white p-[32px] shadow-[0_16px_48px_rgba(10,37,64,.1)] max-md:p-[22px]">
          <ConsultationForm />
        </Reveal>
      </div>
    </section>
  );
}
