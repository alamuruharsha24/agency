import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FORME&CO. — Premium digital atelier",
  description:
    "A small studio shaping premium websites, AI agents, image enhancement, and restaurant menu collateral for hospitality and founder-led brands.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body
        className="grain min-h-screen bg-bg text-ink"
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
