import BusinessSetupPlans from '@/components/BusinessSetupPlans';

export const metadata = {
  title: 'Company Setup in the UAE',
  description:
    'Mainland, free zone or offshore, compare UAE business setup options and see a licence package for every free zone we file in directly.',
  alternates: { canonical: '/company-setup' },
};

export default function CompanySetupPage() {
  return (
    <div className="w-full">
      <BusinessSetupPlans />
    </div>
  );
}
