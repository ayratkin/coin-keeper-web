"use client";

import type { ReactNode } from "react";
import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";

type TProps = {
  title: string;
  value: string;
  icon: ReactNode;
  caption?: string;
  accent?: "primary" | "secondary" | "error" | "success";
};

export const StatCard = ({
  title,
  value,
  icon,
  caption,
  accent = "primary",
}: TProps) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
          <Avatar
            sx={{
              position: "relative",
              width: 36,
              height: 36,
              color: `${accent}.main`,
              bgcolor: "transparent",
              // Полупрозрачная подложка цвета акцента — работает в обеих темах
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                bgcolor: "currentColor",
                opacity: 0.12,
              },
            }}
          >
            {icon}
          </Avatar>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Stack>
        <Typography variant="h5" component="p">
          {value}
        </Typography>
        {caption && (
          <Typography variant="caption" color="text.secondary">
            {caption}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
