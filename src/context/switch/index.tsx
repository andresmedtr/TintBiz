'use client'

import { SwitchContextType } from "@/types/globalTypes";
import { createContext } from "react";

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined);
