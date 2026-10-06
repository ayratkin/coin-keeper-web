"use client";

import EventNoteRounded from "@mui/icons-material/EventNoteRounded";
import { formatMoney } from "@/shared/lib/format";
import { StatCard } from "@/shared/ui";
import type { TPlaneBalance } from "../model";

type TProps = {
  plane: TPlaneBalance;
};

const PlaneBalance = ({ plane }: TProps) => {
  return (
    <StatCard
      title="В планах"
      value={formatMoney(plane.amount)}
      caption={plane.title}
      icon={<EventNoteRounded fontSize="small" />}
      accent="secondary"
    />
  );
};

export default PlaneBalance;
