"use client";

import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { CategoryIcon, MOCK_CATEGORIES } from "@/entities/category";
import { getTotal, getTotalsByCategory, useCosts } from "@/entities/cost";
import { useAddCost } from "@/features/add-cost";
import { formatMoney, formatPercent } from "@/shared/lib/format";

export const CategoryExpenses = () => {
  const { costs } = useCosts();
  const { openAddCost } = useAddCost();

  const total = getTotal(costs);
  const totals = getTotalsByCategory(costs);
  const categories = MOCK_CATEGORIES.map((category) => ({
    category,
    amount: totals[category.cost_category_id] ?? 0,
  }));
  // Полоса показывает категории по убыванию суммы; цвет закреплён за категорией.
  const segments = categories
    .filter(({ amount }) => amount > 0)
    .sort((a, b) => b.amount - a.amount);

  return (
    <Card component="section" aria-labelledby="category-expenses-title">
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: "baseline", justifyContent: "space-between", mb: 2 }}
        >
          <Typography id="category-expenses-title" variant="h6" component="h2">
            Расходы по категориям
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {formatMoney(total)}
          </Typography>
        </Stack>

        <Box
          role="img"
          aria-label="Доли расходов по категориям"
          sx={{
            display: "flex",
            gap: "2px",
            height: 12,
            mb: 3,
            borderRadius: 1,
            overflow: "hidden",
            bgcolor: "action.hover",
          }}
        >
          {segments.map(({ category, amount }) => (
            <Tooltip
              key={category.cost_category_id}
              title={`${category.name}: ${formatMoney(amount)} · ${formatPercent(amount, total)}`}
              arrow
            >
              <Box
                sx={[
                  {
                    flexGrow: amount,
                    flexBasis: 0,
                    minWidth: 4,
                    bgcolor: category.color.light,
                    transition: "flex-grow 300ms ease",
                  },
                  (theme) =>
                    theme.applyStyles("dark", { bgcolor: category.color.dark }),
                ]}
              />
            </Tooltip>
          ))}
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
          }}
        >
          {categories.map(({ category, amount }) => (
            <ButtonBase
              key={category.cost_category_id}
              onClick={() => openAddCost(category.cost_category_id)}
              aria-label={`${category.name}: ${formatMoney(amount)}. Добавить трату`}
              sx={{
                flexDirection: "column",
                gap: 0.75,
                py: 1.5,
                px: 0.5,
                borderRadius: 2,
                "&:hover": { bgcolor: "action.hover" },
              }}
            >
              <CategoryIcon category={category} size={48} />
              <Typography
                variant="caption"
                color="text.secondary"
                noWrap
                sx={{ maxWidth: "100%" }}
              >
                {category.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: amount ? "text.primary" : "text.disabled" }}
              >
                {formatMoney(amount)}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1 }}>
                {formatPercent(amount, total)}
              </Typography>
            </ButtonBase>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
