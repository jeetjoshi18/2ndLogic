import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = (): JSX.Element => {
  const benefits = [
    {
      title: "Your Weekends Back",
      description:
        "Your team handles growth while you focus on vision and strategy. Build a business that serves your life, not consumes it.",
      backgroundImage: "url(/Frame\\ 36\\ \\(1\\).png)",
      noWrap: false,
    },
    {
      title: "Healthy Team Culture",
      description:
        "Eliminate burnout from repetitive tasks. Your team focuses on creative, high-impact work that actually moves the needle. Better culture, better retention.",
      backgroundImage: "url(/Rectangle\\ 17.png)",
      noWrap: true,
    },
    {
      title: "Better Client Experience",
      description:
        "Instant responses, flawless delivery, consistent quality. Your clients get white-glove treatment automatically. They become your biggest advocates.",
      backgroundImage: "url(/Rectangle\\ 16.png)",
      noWrap: true,
    },
    {
      title: "Predictable Growth",
      description:
        "Know exactly where your money comes from and where it goes. Make decisions based on data, not guesswork. Scale with confidence, not chaos.",
      backgroundImage: "url(/Rectangle\\ 15.png)",
      noWrap: false,
    },
  ];

  return (
    <section
      id="benefits"
      className="w-full relative"
      style={{
        marginTop: "80px",
        minHeight: "200vh",
        marginBottom: "120px",
      }}
    >
      {/* Title - sticky */}
      <div className="sticky top-20 z-30 flex flex-col items-center">
        <div
          className="bg-[#00a9a5] text-white text-[24px] font-normal rounded-[63px] flex items-center justify-center absolute z-0"
          style={{
            width: "220px",
            height: "50px",
            top: "10px",
          }}
        >
          Benefits
        </div>

        <h2
          className="text-[52px] font-bold text-white text-center [text-shadow:9px_5px_6.4px_#00000040] relative z-10"
          style={{ marginTop: "30px" }}
        >
          What You&apos;ll Gain
        </h2>
      </div>

      {/* Cards */}
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="sticky flex justify-center"
          style={{
            top: `${220 + index * 20}px`,
            zIndex: 40 + index,
          }}
        >
          <Card
            className="relative rounded-[30px] border-0 overflow-hidden transform transition-transform duration-300 ease-out"
            style={{
              backgroundImage: benefit.backgroundImage,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "850px",
              height: "340px",
              transform: `translateY(${index * 8}px)`,
            }}
          >
            <CardContent className="p-0 h-full relative">
              <h3
                className={`absolute text-white font-bold leading-[50px] [text-shadow:9px_5px_6.4px_rgba(0,0,0,0.25)] ${
                  benefit.noWrap ? "whitespace-nowrap" : ""
                }`}
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: "38px",
                  width: "420px",
                  left: "calc(50% - 420px/2 - 180px)",
                  top: "130px",
                }}
              >
                {benefit.title}
              </h3>

              <p
                className="absolute text-white/80 font-normal leading-[23px]"
                style={{
                  fontFamily: "'Outfit'",
                  fontSize: "18px",
                  width: "480px",
                  left: "calc(50% - 480px/2 - 160px)",
                  top: "180px",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
};
