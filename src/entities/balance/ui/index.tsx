"use client";

import AccountBalanceWalletRounded from "@mui/icons-material/AccountBalanceWalletRounded";
import { formatMoney } from "@/shared/lib/format";
import { StatCard } from "@/shared/ui";

type TProps = {
  amount: number;
  walletName?: string;
};

const Balance = ({ amount, walletName }: TProps) => {
  return (
    <StatCard
      title="Баланс"
      value={formatMoney(amount)}
      caption={walletName}
      icon={<AccountBalanceWalletRounded fontSize="small" />}
      accent="primary"
    />
  );
};

export default Balance;
