import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import Balance from "./index";
import type { TBalanceResponse } from "../model";

function mockFetchOnce(data: TBalanceResponse) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      json: () => Promise.resolve(data),
    }),
  );
}

describe("Balance", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it("всегда показывает заголовок «Баланс:»", () => {
    vi.stubGlobal("fetch", vi.fn().mockReturnValue(new Promise(() => {})));

    render(<Balance />);

    expect(screen.getByText("Баланс:")).toBeInTheDocument();
  });

  it("показывает спиннер, пока запрос ещё не завершился", () => {
    // fetch, который никогда не резолвится — имитируем состояние "в процессе загрузки"
    vi.stubGlobal("fetch", vi.fn().mockReturnValue(new Promise(() => {})));

    render(<Balance />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("после успешного ответа показывает баланс из API и скрывает спиннер", async () => {
    mockFetchOnce({
      balanceName: "Основной",
      balance: "1234",
      currency: "RUB",
    });

    render(<Balance />);

    expect(await screen.findByText("1234")).toBeInTheDocument();
    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
  });

  it("при ошибке запроса оставляет баланс по умолчанию и скрывает спиннер", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network error")));

    render(<Balance />);

    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });
    expect(screen.getByText("500")).toBeInTheDocument();
  });
});
