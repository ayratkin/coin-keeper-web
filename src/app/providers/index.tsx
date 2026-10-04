import type { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

type TProps = {
  children: ReactNode;
};

export const Providers = ({ children }: TProps) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};
