import type { Metadata } from "next";
import "./globals.css";
import "./styles.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Accurate Pro Academy | Kursus Accurate",
    template: "%s | Accurate Pro Academy",
  },
  description: SITE.description,
  keywords: ["kursus Accurate", "training Accurate", "akuntansi", "Accurate Online"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: "Kursus Accurate bersama Praktisi Akuntansi",
    description: SITE.description,
  },
  robots: { index: SITE.isDraft ? false : true, follow: SITE.isDraft ? false : true },
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
