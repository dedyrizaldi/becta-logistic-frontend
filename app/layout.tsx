import type { Metadata } from "next";
import "./globals.css";

import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "PT Berkah Cahaya Tunggal Abadi | Becta Logistics",
  description: "Marine Logistics & LCT Charter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
