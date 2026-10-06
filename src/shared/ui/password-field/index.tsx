"use client";

import { useState } from "react";
import VisibilityOffRounded from "@mui/icons-material/VisibilityOffRounded";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";
import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";

type TProps = Omit<TextFieldProps, "type">;

export const PasswordField = ({ slotProps, ...props }: TProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      slotProps={{
        ...slotProps,
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
                onClick={() => setVisible((value) => !value)}
                edge="end"
              >
                {visible ? <VisibilityOffRounded /> : <VisibilityRounded />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};
