import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from '@/components/shared/header';
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
        <Header />
        {children}
      </body>
    </html>
  );
}
