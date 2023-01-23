import { Jeffism } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

const DEFAULT_CONTEXT = { jeffisms: {} as Record<string, Jeffism>, setJeffisms: null as unknown as React.Dispatch<React.SetStateAction<Record<string, Jeffism>>> };

export const JeffismContext = createContext(DEFAULT_CONTEXT);

export function useJeffismContext() {
  return useContext(JeffismContext);
}