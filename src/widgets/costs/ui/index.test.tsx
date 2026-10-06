import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { CostsProvider, type TCost } from "@/entities/cost";
import Costs from ".";

afterEach(cleanup);

const costs: TCost[] = [
  { cost_id: 1, wallet_id: 1, cost_category_id: 1, count: 200, name: "Шоколадка", date: "2026-10-01T10:00:00.000Z" },
  { cost_id: 2, wallet_id: 1, cost_category_id: 4, count: 120, name: "Корм", date: "2026-10-02T10:00:00.000Z" },
];

test("рендерит заголовок и траты, свежие сверху", () => {
  render(
    <CostsProvider initialCosts={costs}>
      <Costs />
    </CostsProvider>,
  );

  expect(screen.getByText("Последние траты")).toBeInTheDocument();
  const names = screen.getAllByText(/Шоколадка|Корм/).map((el) => el.textContent);
  expect(names).toEqual(["Корм", "Шоколадка"]);
});

test("показывает заглушку, если трат нет", () => {
  render(
    <CostsProvider initialCosts={[]}>
      <Costs />
    </CostsProvider>,
  );

  expect(screen.getByText("Пока нет трат")).toBeInTheDocument();
});
