"use client";

import { useState } from "react";
import { Box, Card, CardContent, Link, Tab, Tabs, Typography } from "@mui/material";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

type TMode = "login" | "register";

export const AuthCard = () => {
  const [mode, setMode] = useState<TMode>("login");
  const isLogin = mode === "login";

  return (
    <Card>
      <Tabs
        value={mode}
        onChange={(_, value: TMode) => setMode(value)}
        variant="fullWidth"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab label="Вход" value="login" />
        <Tab label="Регистрация" value="register" />
      </Tabs>

      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        {/* key сбрасывает форму при переключении вкладок */}
        <Box key={mode}>{isLogin ? <LoginForm /> : <RegisterForm />}</Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: "center" }}>
          {isLogin ? "Ещё нет аккаунта? " : "Уже есть аккаунт? "}
          <Link
            component="button"
            type="button"
            variant="body2"
            underline="hover"
            onClick={() => setMode(isLogin ? "register" : "login")}
            sx={{ verticalAlign: "baseline" }}
          >
            {isLogin ? "Зарегистрироваться" : "Войти"}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};
