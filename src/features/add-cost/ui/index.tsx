"use client";

import { useState, type FormEvent } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CategoryIcon, MOCK_CATEGORIES } from "@/entities/category";
import { useCosts } from "@/entities/cost";
import { MOCK_BALANCE } from "@/entities/balance";

type TProps = {
  open: boolean;
  defaultCategoryId?: number;
  onClose: () => void;
};

const WALLET_ID = 1;

export const AddCostDialog = ({ open, defaultCategoryId, onClose }: TProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen} fullWidth maxWidth="xs">
      {/* Dialog размонтирует содержимое после закрытия, так что форма каждый раз чистая */}
      <AddCostForm defaultCategoryId={defaultCategoryId} onClose={onClose} />
    </Dialog>
  );
};

type TFormProps = Omit<TProps, "open">;

const AddCostForm = ({ defaultCategoryId, onClose }: TFormProps) => {
  const { addCost } = useCosts();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState(
    defaultCategoryId ?? MOCK_CATEGORIES[0].cost_category_id,
  );

  const count = Number(amount.replace(",", "."));
  const isValid = Number.isFinite(count) && count > 0;
  const selectedCategory = MOCK_CATEGORIES.find(
    (category) => category.cost_category_id === categoryId,
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!isValid) return;

    addCost({
      name: name.trim() || selectedCategory?.name || "Трата",
      count,
      cost_category_id: categoryId,
      wallet_id: WALLET_ID,
    });
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <DialogTitle>Новая трата</DialogTitle>
      <DialogContent>
        <Stack spacing={2.5} sx={{ pt: 1 }}>
          <TextField
            label="Сумма"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            autoFocus
            required
            slotProps={{
              htmlInput: { inputMode: "decimal" },
              input: { endAdornment: <InputAdornment position="end">₽</InputAdornment> },
            }}
          />
          <TextField
            label="Описание"
            placeholder={selectedCategory?.name}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Категория
            </Typography>
            <Box
              role="radiogroup"
              aria-label="Категория"
              sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}
            >
              {MOCK_CATEGORIES.map((category) => {
                const selected = category.cost_category_id === categoryId;
                return (
                  <Button
                    key={category.cost_category_id}
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setCategoryId(category.cost_category_id)}
                    variant={selected ? "outlined" : "text"}
                    color={selected ? "primary" : "inherit"}
                    sx={{
                      flexDirection: "column",
                      gap: 0.5,
                      py: 1,
                      minWidth: 0,
                      borderWidth: 2,
                      borderColor: selected ? undefined : "transparent",
                      "&.MuiButton-outlined": { borderWidth: 2 },
                    }}
                  >
                    <CategoryIcon category={category} size={36} />
                    <Typography variant="caption" noWrap sx={{ maxWidth: "100%" }}>
                      {category.name}
                    </Typography>
                  </Button>
                );
              })}
            </Box>
          </Box>

          <Typography variant="caption" color="text.secondary">
            Списание с кошелька «{MOCK_BALANCE.balanceName}»
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} color="inherit">
          Отмена
        </Button>
        <Button type="submit" variant="contained" disabled={!isValid}>
          Добавить
        </Button>
      </DialogActions>
    </Box>
  );
};
