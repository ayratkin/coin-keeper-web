import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешаем открывать dev-сервер с устройств в локальной сети (например, с телефона)
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
