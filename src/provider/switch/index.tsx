"use client"

import { ReactNode, useState } from "react";
import { SwitchContext } from "@/context/switch";

export const SwitchProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(true);

  const toggle = () => setIsActive((prev) => !prev);

  return (
    <SwitchContext.Provider value={{ isActive, toggle }}>
      {children}
    </SwitchContext.Provider>
  );
};
