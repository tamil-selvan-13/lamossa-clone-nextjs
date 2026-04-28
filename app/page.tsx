import { HeroSection } from "@/components/sections/HeroSection";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <StatsSection />
      <ServicesSection />
      <ProjectsGrid />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <CTABanner />
    </>
  );
}