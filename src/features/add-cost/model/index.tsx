"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AddCostDialog } from "../ui";

type TAddCostContext = {
  /** Открывает диалог новой траты; категорию можно выбрать заранее. */
  openAddCost: (categoryId?: number) => void;
};

const AddCostContext = createContext<TAddCostContext | null>(null);

export const AddCostProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState<number | undefined>();

  const openAddCost = useCallback((id?: number) => {
    setCategoryId(id);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openAddCost }), [openAddCost]);

  return (
    <AddCostContext.Provider value={value}>
      {children}
      <AddCostDialog
        open={open}
        defaultCategoryId={categoryId}
        onClose={() => setOpen(false)}
      />
    </AddCostContext.Provider>
  );
};

export const useAddCost = () => {
  const context = useContext(AddCostContext);
  if (!context) {
    throw new Error("useAddCost должен использоваться внутри AddCostProvider");
  }
  return context;
};
