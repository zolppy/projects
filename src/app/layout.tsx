import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { poppins } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Project Showcase",
  description:
    "Gabriel Cavalcante's main web projects, which are modern, fluid, accessible, dynamic, performant and responsive user interfaces, and built by using cutting-edge technologies.",
  authors: [
    {
      name: "Gabriel Cavalcante de Jesus Oliveira",
      url: "https://github.com/zolppy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-3BM75W7M1F" />
    </html>
  );
}

RootLayout.displayName="RootLayout";
