import type { TCost } from ".";

export const getTotal = (costs: TCost[]) =>
  costs.reduce((sum, cost) => sum + cost.count, 0);

/** Сумма трат по каждой категории: cost_category_id → сумма. */
export const getTotalsByCategory = (costs: TCost[]) =>
  costs.reduce<Record<number, number>>((acc, cost) => {
    acc[cost.cost_category_id] = (acc[cost.cost_category_id] ?? 0) + cost.count;
    return acc;
  }, {});
