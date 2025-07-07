import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CredibilitySection = (): JSX.Element => {
  const credibilityStats = [
    {
      value: "25+",
      description: "Hours Saved/Week",
    },
    {
      value: "2x",
      description: "Growth Without Hiring",
    },
    {
      value: "90%",
      description: "Faster Processes",
    },
    {
      value: "100%",
      description: "Quality Consistency",
    },
  ];

  return (
    <section className="w-full" style={{ marginTop: '-10px', marginBottom: '32px' }}>
      <Card 
        className="relative rounded-[15px] border-0"
        style={{
          width: '1065px',
          height: '143px',
          backgroundColor: 'rgba(0, 169, 165, 0.5)',
          margin: '0 auto',
          boxShadow: '0 12px 48px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent className="p-0 h-full flex items-center justify-center">
          <div className="flex justify-between w-full" style={{ paddingLeft: '42px', paddingRight: '42px' }}>
            {credibilityStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-start" style={{ marginRight: index < credibilityStats.length - 1 ? '75px' : '0' }}>
                <div 
                  className="font-bold text-white text-[40px] leading-none"
                  style={{
                    fontFamily: "'Outfit', Helvetica",
                    filter: 'drop-shadow(5px 4px 42px rgba(0, 255, 249, 0.8))',
                    textShadow: '9px 5px 6.4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="font-normal text-white text-[20px] leading-none"
                  style={{
                    fontFamily: "'Outfit', Helvetica",
                    whiteSpace: stat.description === 'Growth Without Hiring' ? 'nowrap' : 'normal',
                  }}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};