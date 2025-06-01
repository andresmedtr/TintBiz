import { TintContext } from "@/context/tint";
import { useContext } from "react";

export const useTint = () => {
  const context = useContext(TintContext);
  if (!context) {
    throw new Error("useTint must be used within a TintProvider");
  }
  return context;
};