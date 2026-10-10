import { SITE } from '@/content/site';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(80px,12vw,160px)]">
      <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">404</div>
      <h1 className="mb-[18px] max-w-[20ch] text-pretty text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.04] tracking-[-.03em]">
        This page isn’t here yet
      </h1>
      <p className="mb-[32px] max-w-[52ch] text-[16px] leading-[1.6] text-muted">
        We may still be writing it. Our team can answer the same question on a free call, usually the same day.
      </p>
      <div className="flex flex-wrap gap-[12px]">
        <a href="/contact" className="flex min-h-[52px] items-center rounded-full bg-brand px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-blue hover:text-white">
          Book a free consultation
        </a>
        <a href={SITE.whatsapp} target="_blank" rel="noopener" className="flex min-h-[52px] items-center rounded-full bg-blue px-[28px] py-[15px] text-[15px] font-bold text-white hover:bg-brand hover:text-white">
          Chat on WhatsApp
        </a>
        <a href="/" className="flex min-h-[52px] items-center px-[12px] text-[15px] font-bold text-blue hover:text-brand">
          Back to home →
        </a>
      </div>
    </section>
  );
}
