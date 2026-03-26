import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import WhenInvolvedSection from "@/components/sections/WhenInvolvedSection";
import AboutSection from "@/components/sections/AboutSection";
import AvailabilitySection from "@/components/sections/AvailabilitySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PositioningSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WhenInvolvedSection />
      <AboutSection />
      <AvailabilitySection />
      <ContactSection />
    </main>
  );
};

export default Index;
