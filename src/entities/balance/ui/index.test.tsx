import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Balance from "./index";

describe("Balance", () => {
  afterEach(cleanup);

  it("показывает заголовок, сумму в рублях и название кошелька", () => {
    render(<Balance amount={1234} walletName="Основной" />);

    expect(screen.getByText("Баланс")).toBeInTheDocument();
    expect(screen.getByText(/1\s234\s₽/)).toBeInTheDocument();
    expect(screen.getByText("Основной")).toBeInTheDocument();
  });
});
