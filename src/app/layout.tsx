import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accurate Pro Academy | Kursus Accurate bersama Praktisi Akuntansi",
  description:
    "Kursus Accurate praktis untuk owner, admin, dan tim finance bersama professional accountant.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
