"use client";

import { Container, Stack } from "@mui/material";
import { BottomNav, BOTTOM_NAV_HEIGHT } from "@/widgets/bottom-nav";
import { CategoryExpenses } from "@/widgets/category-expenses";
import { Costs } from "@/widgets/costs";
import { Header } from "@/widgets/header";

const HomePage = () => {
  return (
    <>
      <Container
        component="main"
        maxWidth="md"
        sx={{ pt: 3, pb: `${BOTTOM_NAV_HEIGHT + 32}px` }}
      >
        <Stack spacing={2.5}>
          <Header />
          <CategoryExpenses />
          <Costs />
        </Stack>
      </Container>
      <BottomNav />
    </>
  );
};

export default HomePage;
