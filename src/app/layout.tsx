import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getSite } from "@/lib/site";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const SITE = getSite();

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Accurate Pro Academy | Kursus Accurate", template: "%s | Accurate Pro Academy" },
  description: SITE.description,
  keywords: [...SITE.keywords],
  openGraph: {
    type: "website", locale: "id_ID", url: SITE.url, siteName: SITE.name,
    title: "Kursus Accurate untuk tim finance dan pemilik usaha",
    description: SITE.description,
  },
  robots: { index: !SITE.isDraft, follow: !SITE.isDraft },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
