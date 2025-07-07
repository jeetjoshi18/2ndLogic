import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionsSection = (): JSX.Element => {
  // Solution card data for mapping
  const solutionCards = [
    {
      title: "Lead\nQualificat\nion",
      tagline: "Right People, Right Time",
      description:
        "Automatically scores and nurtures incoming leads based on your ideal client criteria. Only qualified leads reach your calendar.",
      metric: "Conversion: 20% → 60%",
      metricLabel: "Conversion:",
      metricValue: "20% → 60%",
      order: 1,
    },
    {
      title: "GhostWin\nContent\nAutomation",
      tagline: "Multi-Platform Content",
      description:
        'Learns your brand voice and creates content that passes the "did I write this?" test. No more midnight reviews or quality inconsistencies.',
      metric: "Time: 25 hrs → 3 hrs weekly",
      metricLabel: "Time:",
      metricValue: "25 hrs → 3 hrs weekly",
      order: 2,
      isLarge: true,
    },
    {
      title: "Client\nOnboard\ning",
      tagline: "Love at First Launch",
      description:
        "Seamless handoff from signed contract to project launch. Your clients think you're magic from day one.",
      metric: "Setup: 5 days → 24 hours",
      metricLabel: "Setup:",
      metricValue: "5 days → 24 hours",
      order: 3,
    },
  ];

  return (
    <section id="solutions" className="w-full py-16">
      <div className="grid grid-cols-12 gap-[15px]">
        {/* Header */}
        <div className="col-span-12 flex flex-col items-center relative" style={{ marginBottom: '64px' }}>
          {/* Solutions badge - positioned behind the title with reduced overlap */}
          <div 
            className="bg-[#00a9a5] text-white text-[28px] font-normal rounded-[63px] flex items-center justify-center absolute z-0"
            style={{ 
              width: '263px',
              height: '59px',
              top: '10px'
            }}
          >
            Solutions
          </div>
          
          {/* Title - positioned to overlap with the badge */}
          <h2 
            className="text-[64px] font-bold text-white text-center [text-shadow:9px_5px_6.4px_#00000040] relative z-10"
            style={{ marginTop: '34px' }}
          >
            Systems We Built
          </h2>
        </div>

        {/* Cards Container */}
        <div className="col-span-12 flex justify-center gap-6 mb-16">
          {solutionCards.map((card, index) => (
            <Card
              key={index}
              className={`relative border-0 rounded-[40px] ${
                index === 0 || index === 2
                  ? "w-[305px] h-[461px]" // Lead Qualification and Client Onboarding cards
                  : card.isLarge 
                    ? "w-[345px] h-[522px] bg-[#00fff833]" 
                    : "w-[305px] h-[461px] bg-[#00fff833]"
              }`}
              style={(index === 0 || index === 2) ? {
                background: 'rgba(0, 255, 249, 0.2)',
                marginTop: '24px', // Reduced additional margin for side cards from 30px to 24px
              } : {
                marginTop: '0px', // GhostWin card has no additional margin
              }}
            >
              <CardContent className="p-0">
                {/* Inner Card */}
                <div
                  className={`relative mx-auto mt-4 rounded-[40px] ${
                    card.isLarge ? "w-[278px] h-[272px]" : "w-[246px] h-60"
                  }`}
                  style={(index === 0 || index === 2) ? {
                    // Lead Qualification and Client Onboarding cards - updated inner card styling
                    width: '245.77px',
                    height: '240.46px',
                    background: 'rgba(0, 255, 249, 0.6)',
                    boxShadow: '6px 6px 18.1px 1px rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(3.7px)',
                  } : {
                    // GhostWin Content Automation card keeps original styling
                    background: '#00fff899',
                    boxShadow: '6px 6px 18.1px 1px rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(3.7px)',
                  }}
                >
                  <div className={`${card.isLarge ? "pt-8" : "pt-7"} relative h-full`}>
                    {/* Top small text - 2ndLogic - Left aligned */}
                    <p 
                      className="absolute text-white"
                      style={{
                        fontFamily: "'Outfit'",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20px',
                        left: '26px', // 26px from left border - aligned with main title
                        top: '26px', // 26px from top border
                      }}
                    >
                      2ndLogic
                    </p>
                    
                    {/* Main Title - Left aligned */}
                    <h3 
                      className="absolute text-white whitespace-pre-line"
                      style={{
                        fontFamily: "'Outfit'",
                        fontWeight: 700,
                        fontSize: '40px',
                        lineHeight: '34px',
                        color: '#FFFFFF',
                        textShadow: '5px 4px 8.7px rgba(0, 0, 0, 0.25)',
                        left: '26px', // 26px from left border
                        top: index === 0 || index === 2 ? '73px' : '75px', // Adjusted for different cards
                      }}
                    >
                      {card.title}
                    </h3>
                    
                    {/* Lower subtext - tagline - Left aligned */}
                    <p 
                      className="absolute text-white"
                      style={{
                        fontFamily: "'Outfit'",
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '15px',
                        left: '26px', // 26px from left border - aligned with main title
                        bottom: '26px', // 26px from bottom border
                      }}
                    >
                      {card.tagline}
                    </p>
                  </div>
                </div>

                {/* Description - Custom positioning for all cards */}
                {(index === 0 || index === 2) ? (
                  /* Lead Qualification and Client Onboarding cards */
                  <p 
                    className="absolute text-[#ffffffcc]"
                    style={{
                      fontFamily: "'Outfit'",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '25px',
                      width: '245.77px',
                      height: '110.51px',
                      left: '30px',
                      top: '280px',
                    }}
                  >
                    {card.description}
                  </p>
                ) : (
                  /* GhostWin Content Automation card with custom positioning */
                  <p 
                    className="absolute"
                    style={{
                      fontFamily: "'Outfit'",
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '25px',
                      width: '278px',
                      height: '125px',
                      left: '33px', // Adjusted to be relative to card position
                      top: '295px', // Adjusted to be relative to card position
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {card.description}
                  </p>
                )}

                {/* Metrics - Custom positioning for all cards */}
                {(index === 0 || index === 2) ? (
                  /* Lead Qualification and Client Onboarding cards */
                  <p 
                    className="absolute text-white"
                    style={{
                      fontFamily: "'Outfit'",
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '25px',
                      width: '245.77px',
                      height: '22.1px',
                      left: '30px',
                      top: '420px',
                    }}
                  >
                    {card.metric}
                  </p>
                ) : (
                  /* GhostWin Content Automation card with custom positioning */
                  <p 
                    className="absolute text-white"
                    style={{
                      fontFamily: "'Outfit'",
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '25px',
                      width: '278px',
                      height: '25px',
                      left: '33px', // Adjusted to be relative to card position
                      top: '454px', // Adjusted to be relative to card position
                      color: '#FFFFFF',
                    }}
                  >
                    {card.metric}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Text */}
        <div className="col-span-12">
          <p className="text-center text-xl font-normal">
            <span className="text-white">These are just a</span>
            <span className="font-bold text-white"> few examples</span>
            <span className="text-white"> from our recent projects.</span>
          </p>
        </div>
      </div>
    </section>
  );
};