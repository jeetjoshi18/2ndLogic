import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  const scrollToBenefits = () => {
    const element = document.getElementById('benefits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-16 flex justify-center items-center overflow-hidden min-h-[600px]" style={{ marginBottom: '-20px' }}>
      {/* Blurred gradient image - centered with text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "841.26px",
          height: "504px",
          backgroundImage: "url(/WHY_YOUR_STORIES_DON_T_SELL__1_-removebg-preview\\ 1\\ \\(2\\)\\ copy\\ copy.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "blur(20.9px)",
        }}
      />

      <div className="relative w-full grid grid-cols-12 gap-[15px] z-10">
        <div className="col-span-12 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            style={{
              fontFamily: "'Outfit', Helvetica",
              textShadow: "9px 5px 6.4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Your Business, Automated
          </h1>

          <p
            className="text-xl md:text-2xl text-white text-center mb-12"
            style={{ fontFamily: "'Outfit', Helvetica" }}
          >
            We help marketing agencies handle 2x more clients with the same team
            size through
            <br />
            systematic automation.
          </p>

          <Button
            onClick={scrollToBenefits}
            className="rounded-full px-8 py-6 text-xl bg-[#00a9a5] hover:bg-[#008f8c] text-white cursor-pointer"
            style={{ fontFamily: "'Poppins', Helvetica" }}
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
};