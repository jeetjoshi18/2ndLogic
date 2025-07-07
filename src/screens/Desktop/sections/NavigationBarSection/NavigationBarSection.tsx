import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation items data with scroll functionality
  const navItems = [
    { text: "Benefits", position: "left-[596px]", targetId: "benefits" },
    { text: "Solutions", position: "left-[772px]", targetId: "solutions" },
    { text: "Process", position: "left-[955px]", targetId: "process" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full h-[94px]">
      <div className="h-[82px] bg-[#00a9a5] shadow-[0px_2px_19.8px_#000000] flex items-center">
        <div className="w-full max-w-[1071px] h-10 mx-auto flex items-center relative">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink className="font-outfit font-bold text-white text-[32px]">
                  2ndLogic
                </NavigationMenuLink>
              </NavigationMenuItem>

              {navItems.map((item, index) => (
                <NavigationMenuItem
                  key={index}
                  className={`absolute ${item.position}`}
                >
                  <button
                    onClick={() => scrollToSection(item.targetId)}
                    className="font-outfit font-normal text-white text-[32px] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {item.text}
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};