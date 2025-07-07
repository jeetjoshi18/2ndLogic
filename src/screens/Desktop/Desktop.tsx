import React from "react";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CredibilitySection } from "./sections/CredibilitySection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { ProcessStepsSection } from "./sections/ProcessStepsSection";
import { SolutionsSection } from "./sections/SolutionsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#092327] flex flex-col items-center w-full min-h-screen">
      {/* Navbar - full width */}
      <div className="sticky top-0 z-[60] w-full">
        <NavigationBarSection />
      </div>
      
      {/* Main content - constrained width */}
      <div className="bg-[#092327] w-full max-w-[1440px] relative">
        <div className="px-[188px]">
          <HeroSection />
          <CredibilitySection />
          <BenefitsSection />
          <SolutionsSection />
          <ProcessStepsSection />
          <CallToActionSection />
        </div>
      </div>
      
      {/* Footer - full width */}
      <FooterSection />
    </div>
  );
};