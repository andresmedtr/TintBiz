import Image from "next/image";
import { SwitchButton } from "../switchButton";
import { NavigationButtons } from "../navigation";

export const Navbar = () => {
  return (
    <nav className="w-full h-[70px] pt-[20px] bg-[#111111] flex flex-col items-center justify-center shadow-2xl sticky top-0 z-[1] md:pt-0">
      <div className="max-w-[2000px] w-full h-full flex flex-row justify-between px-[15px]">
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
        <div className="w-fit h-full flex-row items-center gap-[50px] hidden md:flex">
          <NavigationButtons />
        </div>
        <SwitchButton />
      </div>
      <div className="flex flex-row w-full h-fit pb-[20px] justify-evenly bg-[#111111] md:hidden">
        <NavigationButtons />
      </div>
    </nav>
  );
};
