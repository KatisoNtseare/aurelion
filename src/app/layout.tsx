import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

import "./globals.css";
import "./editorial-pages.css";

// Display typography gives AURELION its editorial luxury identity.
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// DM Sans is used for navigation, paragraphs and interface elements.
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

// DM Mono is reserved for technical details and small labels.
const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AURELION | The Art of Motion",
    template: "%s | AURELION",
  },
  description:
    "Discover AURELION. A fictional automotive marque exploring the intersection of performance, precision and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}