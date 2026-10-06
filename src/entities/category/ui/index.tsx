"use client";

import type { SvgIconComponent } from "@mui/icons-material";
import CheckroomRounded from "@mui/icons-material/CheckroomRounded";
import DirectionsCarRounded from "@mui/icons-material/DirectionsCarRounded";
import LocalCafeRounded from "@mui/icons-material/LocalCafeRounded";
import LocalHospitalRounded from "@mui/icons-material/LocalHospitalRounded";
import PetsRounded from "@mui/icons-material/PetsRounded";
import ReceiptRounded from "@mui/icons-material/ReceiptRounded";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import SportsEsportsRounded from "@mui/icons-material/SportsEsportsRounded";
import { Avatar } from "@mui/material";
import type { TCategory, TCategoryIcon } from "../model";

const ICONS: Record<TCategoryIcon, SvgIconComponent> = {
  food: ShoppingCartRounded,
  cafe: LocalCafeRounded,
  transport: DirectionsCarRounded,
  pets: PetsRounded,
  clothes: CheckroomRounded,
  health: LocalHospitalRounded,
  fun: SportsEsportsRounded,
  bills: ReceiptRounded,
};

type TProps = {
  category: TCategory;
  size?: number;
};

export const CategoryIcon = ({ category, size = 40 }: TProps) => {
  const Icon = ICONS[category.icon];

  return (
    <Avatar
      sx={[
        {
          width: size,
          height: size,
          color: "#fff",
          bgcolor: category.color.light,
        },
        (theme) => theme.applyStyles("dark", { bgcolor: category.color.dark }),
      ]}
    >
      <Icon sx={{ fontSize: size * 0.55 }} />
    </Avatar>
  );
};
