"use client";

import SavingsRounded from "@mui/icons-material/SavingsRounded";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import { AuthCard } from "@/features/auth";

const AuthPage = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Stack spacing={1} sx={{ alignItems: "center", mb: 3, textAlign: "center" }}>
        <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main", mb: 1 }}>
          <SavingsRounded fontSize="large" />
        </Avatar>
        <Typography variant="h5" component="h1">
          Coin Keeper
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Учёт расходов и планирование бюджета
        </Typography>
      </Stack>

      <AuthCard />
    </Container>
  );
};

export default AuthPage;
