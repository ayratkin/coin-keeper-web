"use client";

import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CostsProvider } from "@/entities/cost";
import { AddCostProvider } from "@/features/add-cost";
import { theme } from "@/shared/config/theme";

type TProps = {
  children: ReactNode;
};

export const Providers = ({ children }: TProps) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <CostsProvider>
          <AddCostProvider>{children}</AddCostProvider>
        </CostsProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
