"use client";

import { NavbarFIelds } from "@/constants";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { SwitchButton } from "../switchButton";
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Navbar = () => {
  

  return (
    <nav className="w-full h-[70px] bg-[#111111] flex flex-row items-center justify-center">
      <div className="max-w-[2000px] w-full h-full flex flex-row justify-between mx-[50px]">
        <div className="w-fit h-fit">
          <Image
            src="/logo/logo2.png"
            width={100}
            height={100}
            alt="TintBiz logo Navbar"
          />
        </div>
        <div className="w-fit h-full flex flex-row items-center gap-[50px]">
          {NavbarFIelds.map((title) => {
            return (
              <div key={title} className="text-white font-bold">
                <FormattedMessage id={title} />
              </div>
            );
          })}
        </div>
        <div className="h-full flex flex-row items-center">
          <HomeOutlinedIcon className="w-[20px] h-[20px] text-white" />
          <SwitchButton />
          <DriveEtaOutlinedIcon className="w-[20px] h-[20px] text-white" />
        </div>
      </div>
    </nav>
  );
};
