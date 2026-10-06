"use client";

import type { FormEvent } from "react";
import { Box, Button, Link, Stack, TextField } from "@mui/material";
import { PasswordField } from "@/shared/ui";

export const LoginForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: логика входа
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
          autoFocus
        />
        <PasswordField
          name="password"
          label="Пароль"
          autoComplete="current-password"
          required
        />

        <Link
          component="button"
          type="button"
          variant="body2"
          underline="hover"
          sx={{ alignSelf: "flex-end" }}
        >
          Забыли пароль?
        </Link>

        <Button type="submit" variant="contained" size="large">
          Войти
        </Button>
      </Stack>
    </Box>
  );
};
