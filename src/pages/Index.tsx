import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import GlobalExperienceSection from "@/components/sections/GlobalExperienceSection";
import WhenInvolvedSection from "@/components/sections/WhenInvolvedSection";
import AboutSection from "@/components/sections/AboutSection";
import AvailabilitySection from "@/components/sections/AvailabilitySection";
import WorkWithMeSection from "@/components/sections/WorkWithMeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ImpactSection />
      <PositioningSection />
      <ServicesSection />
      <GlobalExperienceSection />
      <CaseStudiesSection />
      <WhenInvolvedSection />
      <AboutSection />
      <AvailabilitySection />
      <WorkWithMeSection />
      <ContactSection />
    </main>
  );
};

export default Index;
