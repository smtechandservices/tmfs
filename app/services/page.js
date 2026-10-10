import ServicesDetail from '@/components/ServicesDetail';

export const metadata = {
  title: 'Services',
  description:
    'Business setup, banking, accounting & audit, VAT & tax consultancy, and corporate & compliance, five UAE services under one roof.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <ServicesDetail />
    </div>
  );
}
