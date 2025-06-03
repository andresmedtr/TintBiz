"use client";

import { NavbarFIelds } from "@/constants";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { SwitchButton } from "../switchButton";
import { useState } from "react";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>(NavbarFIelds[0]);

  return (
    <nav className="w-full h-[70px] bg-[#111111] flex flex-row items-center justify-center shadow-2xl sticky top-0 z-[1]">
      <div className="max-w-[2000px] w-full h-full flex flex-row justify-between mx-[50px]">
        <div className="w-fit h-full">
          <a href="#home">
            <Image
              src="/logo/logo2.png"
              width={100}
              height={100}
              alt="TintBiz logo Navbar"
              className="w-fit h-full"
            />
          </a>
        </div>
        <div className="w-fit h-full flex flex-row items-center gap-[50px]">
          {NavbarFIelds.map((title) => {
            const isActive = activeTab === title;
            const anchor = title.split(".")[2].toLowerCase();
            return (
              <a href={`#${anchor}`} key={anchor}>
                <div
                  onClick={() => setActiveTab(title)}
                  className={`group relative cursor-pointer font-bold px-1 transition-colors duration-300 hover:text-[#E52323] ${
                    isActive ? "text-[#E52323]" : "text-white"
                  }`}>
                  <FormattedMessage id={title} />
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#E52323] transition-transform duration-300 origin-center 
                          ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          } w-full`}
                  />
                </div>
              </a>
            );
          })}
        </div>
        <SwitchButton />
      </div>
    </nav>
  );
};
