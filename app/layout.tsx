import type { Metadata } from "next";
import { libre_baskerville } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nelson Neto - Software Developer",
  description: "Nelson Neto's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_baskerville.className}>{children}</body>
    </html>
  );
}
