import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleSocialClick = (e: React.MouseEvent, social: any) => {
    if (!social.isActive) {
      e.preventDefault();
    }
  };

  const navLinks = [
    { title: "Benefits", targetId: "benefits" },
    { title: "Solutions", targetId: "solutions" },
    { title: "Process", targetId: "process" },
  ];

  const socialIcons = [
    {
      icon: <LinkedinIcon className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/jeetjoshi188/",
      label: "LinkedIn",
      isActive: true,
    },
    {
      icon: <InstagramIcon className="h-6 w-6" />,
      href: "https://www.instagram.com/jeetjoshi188/",
      label: "Instagram",
      isActive: true,
    },
    {
      icon: <TwitterIcon className="h-6 w-6" />,
      href: "#",
      label: "Twitter",
      isActive: false,
    },
    {
      icon: <YoutubeIcon className="h-6 w-6" />,
      href: "#",
      label: "YouTube",
      isActive: false,
    },
  ];

  return (
    <footer 
      className="w-full relative"
      style={{ height: '366px', background: 'rgba(0, 255, 249, 0.2)' }}
    >
      <div className="max-w-[1440px] mx-auto px-[188px] py-[40px] h-full flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-[15px] flex-1">
          <div className="col-span-12 flex flex-col gap-6 h-full justify-between">
            <div className="flex justify-between items-center">
              <h2 className="font-outfit font-bold text-white text-[32px]">
                2ndLogic
              </h2>
              <div className="flex items-center gap-4">
                {socialIcons.map((social, index) => (
                  social.isActive ? (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={(e) => handleSocialClick(e, social)}
                      aria-label={social.label}
                      className="text-white hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
                    >
                      {social.icon}
                    </button>
                  )
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-outfit font-normal text-white text-xl">
                <span className="font-bold">Email:</span>
                <span> jeetjoshi.work@gmail.com</span>
              </div>

              <nav className="flex items-center gap-[35px]">
                {navLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.targetId)}
                    className="font-outfit font-normal text-white text-xl hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {link.title}
                  </button>
                ))}
              </nav>
            </div>

            <Separator className="bg-white/50 h-0.5" />

            <div className="text-center">
              <p className="font-outfit font-normal text-white text-base">
                © 2025 2ndLogic. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
