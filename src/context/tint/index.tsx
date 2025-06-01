'use client'

import { TintContextType } from "@/types/globalTypes";
import { createContext } from "react";

export const TintContext = createContext<TintContextType | undefined>(undefined);