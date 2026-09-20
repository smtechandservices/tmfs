import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import BusinessSetupPlans from '@/components/BusinessSetupPlans';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Business Setup Plans',
  description:
    'Mainland, free zone or offshore, compare UAE business setup options and see a licence package for every free zone we file in directly.',
  alternates: { canonical: '/business-setup' },
};

export default function BusinessSetupPage() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <BusinessSetupPlans />
      <Footer />
    </div>
  );
}
