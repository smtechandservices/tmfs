import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact',
  description:
    'Book a free consultation with Time Machine Financial Services. Office in Dubai next to Dubai Mall, or reach us by phone, WhatsApp or email.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
