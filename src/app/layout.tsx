import type { Metadata } from "next";
import { poppins } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Project Showcase",
  description: "Gabriel Cavalcante's main web projects.",
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
    </html>
  );
}
