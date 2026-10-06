"use client";

import TrendingDownRounded from "@mui/icons-material/TrendingDownRounded";
import { formatMoney } from "@/shared/lib/format";
import { StatCard } from "@/shared/ui";

type TProps = {
  amount: number;
  caption?: string;
};

const SpendingBalance = ({ amount, caption }: TProps) => {
  return (
    <StatCard
      title="Расходы"
      value={formatMoney(amount)}
      caption={caption}
      icon={<TrendingDownRounded fontSize="small" />}
      accent="error"
    />
  );
};

export default SpendingBalance;
