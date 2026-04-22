import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import TestimonialCTA from '@/components/sections/TestimonialCTA';
import FAQ from '@/components/sections/FAQ';
import Blog from '@/components/sections/Blog';
import LogoMarquee from '@/components/sections/LogoMarquee';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LogoMarquee />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <TestimonialCTA />
      <FAQ />
      <Blog />
    </>
  );
}