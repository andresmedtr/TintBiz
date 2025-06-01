"use client";

import { TintLevel } from "@/constants";
import { TintContext } from "@/context/tint";
import { ReactNode, useState } from "react";

export const TintProvider = ({ children }: { children: ReactNode }) => {
  const [opacity, setOpacity] = useState<number>(TintLevel[0].opacity);
  const [tintName, setTintName] = useState<string>(TintLevel[0].name);

  return (
    <TintContext.Provider
      value={{ opacity, setOpacity, tintName, setTintName }}
    >
      {children}
    </TintContext.Provider>
  );
};
