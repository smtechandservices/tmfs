import WhatsAppButton from '@/components/WhatsAppButton';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import ContactTeaser from '@/components/ContactTeaser';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <WhatsAppButton />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Marquee />
      <ContactTeaser />
      <Footer />
    </div>
  );
}
