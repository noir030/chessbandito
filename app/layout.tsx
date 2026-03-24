import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout/ClientLayout";

import { geistMono, neueMontreal, chicoreeEm, pangramSans } from "./fonts";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Отсталая пешка",
  description: "Лучший шахматный канал на YouTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistMono.variable} ${neueMontreal.variable} ${chicoreeEm.variable} ${pangramSans.variable}`}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
