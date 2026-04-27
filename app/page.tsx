import Hero from '@/components/sections/Hero';
import FeaturedProject from '@/components/sections/FeaturedProject';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Blog from '@/components/sections/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
    </>
  );
}