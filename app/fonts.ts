import localFont from "next/font/local";

export const chicoreeEm = localFont({
  src: "../public/fonts/chicoree-em/ChicoreeEm.otf",
  variable: "--font-chicoree",
});

export const geistMono = localFont({
  src: "../public/fonts/geist-mono/geist-mono-variable.ttf",
  variable: "--font-geist-mono",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Book.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montral/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
  display: "swap",
});

export const pangramSans = localFont({
  src: [
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/pangram-sans/PPPangramSans-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pangram",
  display: "swap",
});
