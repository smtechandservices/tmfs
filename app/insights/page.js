import InsightsGrid from '@/components/InsightsGrid';

export const metadata = {
  title: 'Insights',
  description:
    'Notes from the filing desk, what we see across UAE business setup, banking, accounting and VAT compliance.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <div className="w-full">
      <InsightsGrid />
    </div>
  );
}
