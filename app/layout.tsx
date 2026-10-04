import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "@/app/styles.css";

export const metadata: Metadata = {
  title: "Coin Keeper",
  description: "Coin Keeper",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
