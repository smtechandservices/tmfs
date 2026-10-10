import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Story from '@/components/sections/Story';
import WhereWeFile from '@/components/sections/WhereWeFile';
import Industries from '@/components/sections/Industries';
import TeamGrid from '@/components/sections/TeamGrid';
import Differentiators from '@/components/sections/Differentiators';
import InsightsRail from '@/components/sections/InsightsRail';
import FAQ from '@/components/sections/FAQ';
import { STORY, WHERE_WE_FILE, INDUSTRIES, LEADERSHIP, DIFFERENTIATORS, INSIGHTS, FAQS } from '@/content/home';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Marquee />
      <Story content={STORY} />
      <Services />
      <Process />
      <WhereWeFile content={WHERE_WE_FILE} />
      <Industries content={INDUSTRIES} />
      <TeamGrid content={LEADERSHIP} />
      <Differentiators content={DIFFERENTIATORS} />
      <InsightsRail content={INSIGHTS} />
      <Testimonials />
      <FAQ content={FAQS} />
      <Contact />
    </div>
  );
}
