"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#4a3aa7" },
        secondary: { main: "#1baf7a" },
        error: { main: "#d03b3b" },
        success: { main: "#0ca30c" },
        background: { default: "#f4f4f8", paper: "#ffffff" },
        text: { primary: "#0b0b0b", secondary: "#52514e" },
      },
    },
    dark: {
      palette: {
        primary: { main: "#9085e9" },
        secondary: { main: "#199e70" },
        error: { main: "#e66767" },
        success: { main: "#0ca30c" },
        background: { default: "#0d0d0d", paper: "#1a1a19" },
        text: { primary: "#ffffff", secondary: "#c3c2b7" },
      },
    },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.vars.palette.divider}`,
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ theme }) => {
          // Убираем заливку автозаполнения браузера (в тёмной теме MUI красит её в синий)
          const autofill = {
            WebkitBoxShadow: `0 0 0 100px ${theme.vars.palette.background.paper} inset`,
            WebkitTextFillColor: theme.vars.palette.text.primary,
            caretColor: theme.vars.palette.text.primary,
          };
          return {
            "&:-webkit-autofill": autofill,
            [theme.getColorSchemeSelector("dark")]: { "&:-webkit-autofill": autofill },
          };
        },
      },
    },
  },
});
