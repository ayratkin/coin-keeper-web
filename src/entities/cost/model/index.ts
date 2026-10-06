export type TCost = {
  cost_id: number;
  wallet_id: number;
  cost_category_id: number;
  count: number;
  name: string;
  /** ISO-дата траты. */
  date: string;
};

export type TNewCost = Omit<TCost, "cost_id" | "date">;

export { CostsProvider, useCosts } from "./store";
export { getTotal, getTotalsByCategory } from "./selectors";
