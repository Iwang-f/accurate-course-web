import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";
import { getSite } from "@/lib/site";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";

const SITE = getSite();

const fontBody = Montserrat({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const fontDisplay = Fraunces({ variable: "--font-display", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Accurate Pro Academy | Kursus Accurate", template: "%s | Accurate Pro Academy" },
  description: SITE.description,
  keywords: [...SITE.keywords],
  openGraph: {
    type: "website", locale: "id_ID", url: SITE.url, siteName: SITE.name,
    title: "Kursus Accurate untuk tim finance dan pemilik usaha",
    description: SITE.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Accurate Pro Academy — Kursus dan Training Software Accurate" }],
  },
  robots: { index: !SITE.isDraft, follow: !SITE.isDraft },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
