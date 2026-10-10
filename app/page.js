import Hero from '@/components/home/Hero';
import StatsStrip from '@/components/home/StatsStrip';
import AsFeaturedIn from '@/components/home/AsFeaturedIn';
import Story from '@/components/home/Story';
import Solutions from '@/components/home/Solutions';
import Process from '@/components/home/Process';
import FreeZoneMap from '@/components/FreeZoneMap';
import Industries from '@/components/home/Industries';
import WhyUs from '@/components/home/WhyUs';
import Insights from '@/components/home/Insights';
import Testimonials from '@/components/home/Testimonials';
import HomeFAQ from '@/components/home/HomeFAQ';
import HomeCTA from '@/components/home/HomeCTA';

// Section order mirrors the Avyanco homepage. Copy lives in content/home.js.
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StatsStrip />
      <AsFeaturedIn />
      <Story />
      <Solutions />
      <Process />
      <FreeZoneMap />
      <Industries />
      <WhyUs />
      <Insights />
      <Testimonials />
      <HomeFAQ />
      <HomeCTA />
    </div>
  );
}
