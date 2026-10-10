import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact',
  description:
    'Book a free consultation with Time Machine Financial Services. Office in Dubai next to Dubai Mall, or reach us by phone, WhatsApp or email.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <Contact />
    </div>
  );
}
