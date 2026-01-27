import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ObjectionsSection from "@/components/landing/ObjectionsSection";
import FinalTestimonialsSection from "@/components/landing/FinalTestimonialsSection";
import MainCtaSection from "@/components/landing/MainCtaSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <TestimonialsSection />
      <WhatYouGetSection />
      <BenefitsSection />
      <ObjectionsSection />
      <FinalTestimonialsSection />
      <MainCtaSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
