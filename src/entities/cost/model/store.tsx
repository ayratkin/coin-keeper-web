"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { MOCK_COSTS } from "../api";
import type { TCost, TNewCost } from ".";

type TCostsContext = {
  costs: TCost[];
  addCost: (cost: TNewCost) => void;
};

const CostsContext = createContext<TCostsContext | null>(null);

type TProps = {
  children: ReactNode;
  initialCosts?: TCost[];
};

// Пока бэкенда нет, траты живут в памяти и инициализируются моками.
export const CostsProvider = ({ children, initialCosts = MOCK_COSTS }: TProps) => {
  const [costs, setCosts] = useState<TCost[]>(initialCosts);

  const addCost = useCallback((cost: TNewCost) => {
    setCosts((prev) => [
      {
        ...cost,
        cost_id: Math.max(0, ...prev.map((item) => item.cost_id)) + 1,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, []);

  const value = useMemo(() => ({ costs, addCost }), [costs, addCost]);

  return <CostsContext.Provider value={value}>{children}</CostsContext.Provider>;
};

export const useCosts = () => {
  const context = useContext(CostsContext);
  if (!context) {
    throw new Error("useCosts должен использоваться внутри CostsProvider");
  }
  return context;
};
