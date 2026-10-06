import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, test } from "vitest";
import { CostsProvider } from "@/entities/cost";
import { AddCostProvider } from "@/features/add-cost";
import { CategoryExpenses } from ".";

afterEach(cleanup);

test("клик по категории открывает диалог, новая трата попадает в эту категорию", async () => {
  const user = userEvent.setup();
  render(
    <CostsProvider initialCosts={[]}>
      <AddCostProvider>
        <CategoryExpenses />
      </AddCostProvider>
    </CostsProvider>,
  );

  await user.click(screen.getByRole("button", { name: /^Кафе:/ }));

  const dialog = await screen.findByRole("dialog");
  expect(within(dialog).getByRole("radio", { name: "Кафе" })).toHaveAttribute(
    "aria-checked",
    "true",
  );

  await user.type(within(dialog).getByLabelText(/Сумма/), "450");
  await user.click(within(dialog).getByRole("button", { name: "Добавить" }));

  expect(
    await screen.findByRole("button", { name: /^Кафе: 450\s₽/ }),
  ).toBeInTheDocument();
});
