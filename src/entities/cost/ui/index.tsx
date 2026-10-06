"use client";

import type { ReactNode } from "react";
import { ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { formatDay, formatMoney } from "@/shared/lib/format";
import type { TCost } from "../model";

type TProps = {
  cost: TCost;
  categoryName?: string;
  avatar?: ReactNode;
};

const Cost = ({ cost, categoryName, avatar }: TProps) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          −{formatMoney(cost.count)}
        </Typography>
      }
    >
      {avatar && <ListItemAvatar>{avatar}</ListItemAvatar>}
      <ListItemText
        primary={cost.name}
        secondary={[categoryName, formatDay(cost.date)].filter(Boolean).join(" · ")}
      />
    </ListItem>
  );
};

export default Cost;
