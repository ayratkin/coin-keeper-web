import type { TCost } from "../../../entities/cost/model";

export const MOCK_COSTS: TCost[] = [
  {
    cost_category_id: 1,
    cost_id: 1,
    count: 200,
    name: "Шоколадка",
    wallet_id: 1,
  },
  {
    cost_category_id: 2,
    cost_id: 2,
    count: 120,
    name: "Корм",
    wallet_id: 1,
  },
  {
    cost_category_id: 1,
    cost_id: 3,
    count: 50,
    name: "Капуста",
    wallet_id: 1,
  },
];
