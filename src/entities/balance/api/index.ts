import type { TBalanceResponse } from "../model";

/** Баланс кошелька на начало месяца — до вычета трат. */
export const MOCK_BALANCE: TBalanceResponse = {
  balanceName: "Тинькофф",
  balance: "85000",
  currency: "RUB",
};
