import About from '@/components/About';
import LicencePackages from '@/components/LicencePackages';
import Leadership from '@/components/home/Leadership';
import { LEADERSHIP } from '@/content/home';

export const metadata = {
  title: 'About Us',
  description:
    'Time Machine Financial Services, our vision, mission and the team behind company formation, banking and tax in the UAE.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <About />
      {/* Same team section as the homepage, minus its link back to this page. */}
      <Leadership id="team" content={{ ...LEADERSHIP, action: null }} />
      <LicencePackages />
    </div>
  );
}
