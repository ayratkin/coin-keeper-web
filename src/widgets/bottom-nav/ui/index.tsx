"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddRounded from "@mui/icons-material/AddRounded";
import BarChartRounded from "@mui/icons-material/BarChartRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import PersonRounded from "@mui/icons-material/PersonRounded";
import SavingsRounded from "@mui/icons-material/SavingsRounded";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import { useAddCost } from "@/features/add-cost";

type TNavItem = {
  label: string;
  icon: ReactNode;
  /** Страницы без href ещё не готовы и показываются неактивными. */
  href?: string;
};

const LEFT_ITEMS: TNavItem[] = [
  { label: "Главная", icon: <HomeRounded />, href: "/" },
  { label: "Статистика", icon: <BarChartRounded /> },
];

const RIGHT_ITEMS: TNavItem[] = [
  { label: "Планы", icon: <SavingsRounded /> },
  { label: "Профиль", icon: <PersonRounded /> },
];

const renderItem = ({ label, icon, href }: TNavItem) =>
  href ? (
    <BottomNavigationAction
      key={label}
      label={label}
      icon={icon}
      value={href}
      component={Link}
      href={href}
    />
  ) : (
    <BottomNavigationAction key={label} label={label} icon={icon} disabled />
  );

export const BOTTOM_NAV_HEIGHT = 72;

export const BottomNav = () => {
  const pathname = usePathname();
  const { openAddCost } = useAddCost();

  return (
    <Paper
      component="nav"
      aria-label="Основная навигация"
      elevation={8}
      square
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        pb: "env(safe-area-inset-bottom)",
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 720, mx: "auto" }}>
        <BottomNavigation
          showLabels
          value={pathname}
          sx={{
            height: BOTTOM_NAV_HEIGHT,
            bgcolor: "transparent",
            "& .Mui-disabled": { opacity: 0.45 },
          }}
        >
          {LEFT_ITEMS.map(renderItem)}
          {/* Место под центральную кнопку */}
          <Box sx={{ flex: "0 0 80px" }} aria-hidden />
          {RIGHT_ITEMS.map(renderItem)}
        </BottomNavigation>

        <Fab
          color="primary"
          aria-label="Добавить трату"
          onClick={() => openAddCost()}
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translate(-50%, -40%)",
            width: 64,
            height: 64,
            boxShadow: 6,
          }}
        >
          <AddRounded sx={{ fontSize: 34 }} />
        </Fab>
      </Box>
    </Paper>
  );
};
