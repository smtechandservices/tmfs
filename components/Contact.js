import Reveal from './Reveal';
import ConsultationForm from './sections/ConsultationForm';
import { SITE } from '@/content/site';
import { CONSULTATION } from '@/content/home';

export default function Contact({ content = CONSULTATION, defaultService }) {
  return (
    <section id="contact" className="scroll-mt-[90px] mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,4vw,56px)]">
        <Reveal>
          <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">{content.eyebrow}</div>
          <h2 className="mb-[18px] max-w-[20ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-bold leading-[1.04] tracking-[-.03em]">{content.title}</h2>
          <p className="mb-[32px] max-w-[44ch] text-[16px] leading-[1.65] text-muted">{content.intro}</p>
          <ul className="flex flex-col gap-[20px]">
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Office</div>
              <div className="text-[15.5px] font-medium leading-[1.55] text-ink">
                {SITE.address}
                <br />
                {SITE.poBox}
              </div>
            </li>
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Phone &amp; WhatsApp</div>
              <a href={`tel:${SITE.phone}`} className="text-[19px] font-bold text-ink hover:text-brand">{SITE.phoneDisplay}</a>
            </li>
            <li>
              <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">Email</div>
              <a href={SITE.emailHref} className="text-[16px] font-semibold text-ink hover:text-brand">{SITE.email}</a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140} className="rounded-[22px] border border-line bg-white p-[clamp(24px,3.4vw,38px)] shadow-[0_18px_44px_rgba(20,18,26,.06)]">
          <ConsultationForm defaultService={defaultService} />
        </Reveal>
      </div>
    </section>
  );
}
