import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Costs from ".";

test("рендер заголовка Затраты", () => {
  render(<Costs />);
  expect(screen.getByText("Затраты:"));
});
