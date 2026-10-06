export type TCategoryIcon =
  | "food"
  | "cafe"
  | "transport"
  | "pets"
  | "clothes"
  | "health"
  | "fun"
  | "bills";

export type TCategory = {
  cost_category_id: number;
  name: string;
  icon: TCategoryIcon;
  /** Цвет категории для светлой и тёмной темы. */
  color: { light: string; dark: string };
};
