import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Time Machine Financial Services collects, uses and protects your information.',
  alternates: { canonical: '/privacy' },
};

const SECTIONS = [
  {
    h: '1. Introduction',
    p: 'Time Machine Financial Services ("TMFS", "we", "us") provides company formation, banking, accounting and tax consultancy services in the UAE. This policy explains what information we collect from clients and website visitors, and how we use it.',
  },
  {
    h: '2. Information we collect',
    p: 'Contact details you submit through our forms (name, mobile, email), the service you’re enquiring about, and any documents you share with us during onboarding for licensing, banking or compliance purposes.',
  },
  {
    h: '3. How we use it',
    p: 'To respond to your enquiry, prepare quotes, process licence and bank applications on your behalf, and meet our own regulatory obligations (including AML checks where applicable).',
  },
  {
    h: '4. Sharing',
    p: 'We share information with government authorities, free zones and banks only as required to deliver the service you’ve engaged us for. We do not sell your details to third parties.',
  },
  {
    h: '5. Cookies',
    p: 'Our website may use basic cookies for functionality and analytics. You can disable cookies in your browser settings without affecting your ability to contact us.',
  },
  {
    h: '6. Your rights',
    p: 'You can ask us what information we hold about you, request corrections, or ask us to delete data we’re not legally required to retain, by contacting us using the details below.',
  },
  {
    h: '7. Contact',
    p: 'Questions about this policy can be sent to manager@timemachine.ae or +971 52 214 9086.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <section className="mx-auto px-8 md:px-24 py-[clamp(56px,8vw,96px)]">
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">Legal</div>
        <h1 className="mb-[8px] text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-.03em]">Privacy Policy</h1>
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
