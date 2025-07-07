import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProcessStepsSection = (): JSX.Element => {
 const processSteps = [
   {
     number: "01",
     title: "Audit",
     timeframe: "(2-3 Days)",
     description:
       "Deep dive into your current operations. We identify the biggest bottlenecks limiting your growth and map your existing workflow.",
     backgroundImage: "/rectangle-22-1.svg",
   },
   {
     number: "02",
     title: "Build",
     timeframe: "(2 Weeks)",
     description:
       "Design and create your custom automation system. No cookie-cutter solutions - everything built for your business.",
     backgroundImage: "/rectangle-22.svg",
   },
   {
     number: "03",
     title: "Setup",
     timeframe: "(2-3 Days)",
     description:
       "Guided implementation into your workflow with complete training and documentation. Your automation goes live with complete handoff to your team.",
     backgroundImage: "/rectangle-22-2.svg",
   },
 ];

 return (
   <section id="process" className="w-full relative" style={{ marginTop: '160px', minHeight: '160vh' }}>
     <div className="max-w-[1440px] mx-auto px-[188px] relative">
       
       {/* Sticky container that controls title behavior */}
       <div style={{ height: '100vh' }}>
         {/* Badge and Title - sticky, positioned on the left with equal outer margin */}
         <div className="sticky" style={{ top: '220px', zIndex: 50 }}>
           <div className="absolute flex flex-col items-center" style={{ left: '-150px' }}>
             {/* Process badge */}
             <div 
               className="bg-[#00a9a5] text-white text-[28px] font-normal rounded-[63px] flex items-center justify-center absolute z-0"
               style={{ 
                 width: '263px',
                 height: '59px',
                 top: '10px'
               }}
             >
               Process
             </div>
             
             {/* Title */}
             <h2 
               className="text-white font-bold relative z-10 whitespace-nowrap text-center"
               style={{
                 fontFamily: "'Outfit'",
                 fontWeight: 700,
                 fontSize: '64px',
                 lineHeight: '81px',
                 color: '#FFFFFF',
                 textShadow: '9px 5px 6.4px rgba(0, 0, 0, 0.25)',
                 marginTop: '34px'
               }}
             >
               3 Simple Steps
             </h2>
           </div>
         </div>
       </div>

       {/* Cards - positioned lower, scroll normally */}
       <div style={{ marginTop: '-80vh' }}>
         {processSteps.map((step, index) => (
           <Card
             key={index}
             className="absolute border-none rounded-[20px]"
             style={{
               width: '525px',
               height: '292px',
               left: '540px',
               top: `${100 + index * 316}px`,
               background: 'rgba(0, 255, 249, 0.2)',
             }}
           >
             <CardContent className="p-0 relative h-full">
               <div
                 className="absolute rounded-full flex items-center justify-center"
                 style={{
                   width: '77.54px',
                   height: '48px',
                   left: '13px',
                   top: '12px',
                   background: 'rgba(0, 255, 249, 0.6)',
                   boxShadow: '3px 4px 5.8px rgba(0, 0, 0, 0.25)',
                   borderRadius: '10000px',
                 }}
               >
                 <span
                   className="text-white font-bold"
                   style={{
                     fontFamily: "'Outfit'",
                     fontWeight: 700,
                     fontSize: '36px',
                     lineHeight: '45px',
                     color: '#FFFFFF',
                     textShadow: '5px 4px 8.7px rgba(0, 0, 0, 0.25)',
                   }}
                 >
                   {step.number}
                 </span>
               </div>

               <h3
                 className="absolute text-white font-bold"
                 style={{
                   width: '121px',
                   height: '60px',
                   left: '32px',
                   top: '81px',
                   fontFamily: "'Outfit'",
                   fontWeight: 700,
                   fontSize: '48px',
                   lineHeight: '60px',
                   color: '#FFFFFF',
                   textShadow: '9px 5px 6.4px rgba(0, 0, 0, 0.25)',
                 }}
               >
                 {step.title}
               </h3>

               <span
                 className="absolute text-white"
                 style={{
                   width: '73px',
                   height: '20px',
                   left: '171px',
                   top: '111px',
                   fontFamily: "'Outfit'",
                   fontWeight: 400,
                   fontSize: '16px',
                   lineHeight: '20px',
                   color: '#FFFFFF',
                 }}
               >
                 {step.timeframe}
               </span>

               <p
                 className="absolute"
                 style={{
                   width: '406px',
                   height: '75px',
                   left: '32px',
                   top: '135px',
                   fontFamily: "'Outfit'",
                   fontWeight: 400,
                   fontSize: '20px',
                   lineHeight: '25px',
                   color: 'rgba(255, 255, 255, 0.8)',
                 }}
               >
                 {step.description}
               </p>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   </section>
 );
};