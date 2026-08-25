import Link from "next/link";
import { SITE, NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#utama" className="wordmark" aria-label="Accurate Pro Academy, beranda">
          <span className="wordmark-main">ACCURATE PRO</span>
          <span className="wordmark-sub">{SITE.subline}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-cta" href={SITE.whatsapp}>
          Konsultasi <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Buka menu"><span></span><span></span></summary>
          <nav aria-label="Navigasi mobile">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={SITE.whatsapp}>Jadwalkan konsultasi</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
