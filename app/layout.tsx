import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout/ClientLayout";

import { geistMono, neueMontreal, chicoreeEm, pangramSans } from "./fonts";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://chessbandito.com"),
  
  title: "Отсталая пешка",
  description: "Отсталая пешка — лучший шахматный канал на YouTube, шахматы без границ и лишнего пафоса",

  icons: {
    icon: "/images/favicon.png",
  },

  openGraph: {
    title: "Отсталая пешка",
    description: "Лучший шахматный канал на YouTube, шахматы без границ и лишнего пафоса",
    url: "https://chessbandito.com",
    siteName: "Отсталая пешка",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Отсталая пешка",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Отсталая пешка",
    description: "Шахматы без границ. Мемы, разборы и свой вайб.",
    images: ["/images/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
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
