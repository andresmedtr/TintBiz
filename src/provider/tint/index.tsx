"use client"

import { TintLevel } from "@/constants";
import { TintContext } from "@/context/tint";
import { ReactNode, useState } from "react";

export const TintProvider = ({ children }: { children: ReactNode }) => {
  const [opacity, setOpacity] = useState<number>(TintLevel[0].opacity);

  return (
    <TintContext.Provider value={{ opacity, setOpacity }}>
      {children}
    </TintContext.Provider>
  );
};