import { SwitchContext } from "@/context/switch";
import { SwitchContextType } from "@/types/globalTypes";
import { useContext } from "react";

export const useSwitch = (): SwitchContextType => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("useSwitch must be used within a SwitchProvider");
  }
  return context;
};
