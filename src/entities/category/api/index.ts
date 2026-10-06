import type { TCategory } from "../model";

// Порядок цветов фиксирован: он проверен на различимость при дальтонизме.
// Новую категорию добавляйте в конец, не переставляя существующие.
export const MOCK_CATEGORIES: TCategory[] = [
  {
    cost_category_id: 1,
    name: "Продукты",
    icon: "food",
    color: { light: "#2a78d6", dark: "#3987e5" },
  },
  {
    cost_category_id: 2,
    name: "Кафе",
    icon: "cafe",
    color: { light: "#eb6834", dark: "#d95926" },
  },
  {
    cost_category_id: 3,
    name: "Транспорт",
    icon: "transport",
    color: { light: "#1baf7a", dark: "#199e70" },
  },
  {
    cost_category_id: 4,
    name: "Питомцы",
    icon: "pets",
    color: { light: "#eda100", dark: "#c98500" },
  },
  {
    cost_category_id: 5,
    name: "Одежда",
    icon: "clothes",
    color: { light: "#e87ba4", dark: "#d55181" },
  },
  {
    cost_category_id: 6,
    name: "Здоровье",
    icon: "health",
    color: { light: "#008300", dark: "#008300" },
  },
  {
    cost_category_id: 7,
    name: "Развлечения",
    icon: "fun",
    color: { light: "#4a3aa7", dark: "#9085e9" },
  },
  {
    cost_category_id: 8,
    name: "Счета",
    icon: "bills",
    color: { light: "#e34948", dark: "#e66767" },
  },
];

export const getCategoryById = (id: number) =>
  MOCK_CATEGORIES.find((category) => category.cost_category_id === id);
