import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import ServicesDetail from '@/components/ServicesDetail';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Services',
  description:
    'Business setup, banking, accounting & audit, VAT & tax consultancy, and corporate & compliance, five UAE services under one roof.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <ServicesDetail />
      <Footer />
    </div>
  );
}
