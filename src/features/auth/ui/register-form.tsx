"use client";

import type { FormEvent } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { PasswordField } from "@/shared/ui";

export const RegisterForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: логика регистрации
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField name="name" label="Имя" autoComplete="name" required autoFocus />
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <PasswordField
          name="password"
          label="Пароль"
          autoComplete="new-password"
          helperText="Минимум 8 символов"
          required
        />
        <PasswordField
          name="passwordConfirm"
          label="Повторите пароль"
          autoComplete="new-password"
          required
        />

        <Button type="submit" variant="contained" size="large">
          Создать аккаунт
        </Button>
      </Stack>
    </Box>
  );
};
