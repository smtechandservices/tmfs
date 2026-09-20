import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply when you engage Time Machine Financial Services.',
  alternates: { canonical: '/terms' },
};

const SECTIONS = [
  {
    h: '1. Acceptance of terms',
    p: 'By engaging Time Machine Financial Services ("TMFS", "we", "us") or using this website, you agree to these terms.',
  },
  {
    h: '2. Services',
    p: 'TMFS provides company formation, banking introduction, accounting, audit, VAT and corporate tax, and corporate compliance services in the UAE. The exact scope of any engagement is confirmed in writing before work begins.',
  },
  {
    h: '3. Client responsibilities',
    p: 'You agree to provide accurate, complete information and documents in a timely manner. Delays or inaccuracies in documents you provide may delay licensing, banking or filing outcomes outside our control.',
  },
  {
    h: '4. Fees & payments',
    p: 'Fees are quoted per engagement and payable as agreed before or during the engagement. Government, free zone and bank fees are separate from our service fees and are passed through at cost unless otherwise stated.',
  },
  {
    h: '5. Limitation of liability',
    p: 'TMFS acts as a consultant and facilitator. Final approval of licences, visas and bank accounts rests with the relevant government authority, free zone or bank, and is outside our control.',
  },
  {
    h: '6. Governing law',
    p: 'These terms are governed by the laws of the United Arab Emirates.',
  },
  {
    h: '7. Changes to these terms',
    p: 'We may update these terms from time to time. Continued use of our services after an update constitutes acceptance of the revised terms.',
  },
  {
    h: '8. Contact',
    p: 'Questions about these terms can be sent to manager@timemachine.ae or +971 52 214 9086.',
  },
];

export default function TermsPage() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <section className="mx-auto px-8 md:px-24 py-[clamp(56px,8vw,96px)]">
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Legal</div>
        <h1 className="mb-[8px] text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-.03em]">Terms of Service</h1>
        <p className="mb-[36px] rounded-[14px] border border-line-2 bg-cream-2 px-[16px] py-[12px] text-[13px] leading-[1.6] text-muted-2">
          Placeholder, pending legal review. This is a general summary, not final legal copy. Replace with counsel-reviewed text before relying on it.
        </p>
        <div className="flex flex-col gap-[28px]">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="mb-[8px] text-[17px] font-bold text-ink">{s.h}</h2>
              <p className="text-[14.5px] leading-[1.7] text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
