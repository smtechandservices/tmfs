import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Dubai from '@/components/Dubai';
import Testimonials from '@/components/Testimonials';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <Hero />
      <Services />
      <Process />
      <About />
      <Dubai show />
      <Stats />
      <Marquee />
      <Testimonials />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
}
