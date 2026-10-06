"use client";

import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Balance, MOCK_BALANCE } from "@/entities/balance";
import { getTotal, useCosts } from "@/entities/cost";
import { MOCK_PLANE_BALANCE, PlaneBalance } from "@/entities/planeBalance";
import { SpendingBalance } from "@/entities/spendingBalance";
import { formatMonth } from "@/shared/lib/format";
import tinkoffLogo from "@/shared/assets/img/tinkoff.png";

export const Header = () => {
  const { costs } = useCosts();
  const spent = getTotal(costs);
  const balance = Number(MOCK_BALANCE.balance) - spent;
  const logoSrc = typeof tinkoffLogo === "string" ? tinkoffLogo : tinkoffLogo.src;

  return (
    <Box component="header">
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", mb: 2.5 }}
      >
        <Box>
          <Typography variant="h5" component="h1">
            Coin Keeper
          </Typography>
          <Typography variant="body2" color="text.secondary" suppressHydrationWarning>
            {formatMonth(new Date())}
          </Typography>
        </Box>
        <Avatar
          src={logoSrc}
          alt={MOCK_BALANCE.balanceName}
          sx={{ width: 44, height: 44, bgcolor: "background.paper" }}
        />
      </Stack>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Balance amount={balance} walletName={MOCK_BALANCE.balanceName} />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <SpendingBalance amount={spent} caption="За этот месяц" />
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <PlaneBalance plane={MOCK_PLANE_BALANCE} />
        </Grid>
      </Grid>
    </Box>
  );
};
