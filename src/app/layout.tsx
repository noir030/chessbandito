import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 
const damnFont = localFont({
  src: '../fonts/DAMN.ttf',
  variable: '--font-damn',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Отсталая пешка",
  description: "Шахматы, которые интересно смотреть",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${damnFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
