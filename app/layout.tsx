import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VYTAL Enterprise | Change Your State",
  description: "The VYTAL enterprise ecosystem across health, functional products, brand and controlled innovation.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
