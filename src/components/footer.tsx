import Link from "next/link";
import { getSite, getNav } from "@/lib/site";

export function Footer() {
  const site = getSite();
  return (
    <footer className="border-t border-border bg-primary px-5 py-12 text-primary-foreground sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-extrabold tracking-[0.12em]">ACCURATE PRO</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{site.subline}</p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/70">Pelatihan software akuntansi untuk tim finance, pemilik usaha, dan akuntan.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Navigasi</p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70" aria-label="Navigasi footer">
            {getNav().map((item) => <Link key={item.href} href={item.href} className="transition-colors hover:text-primary-foreground">{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold">Konsultasi</p>
          <p className="mt-4 text-sm leading-6 text-primary-foreground/70">Diskusikan kebutuhan training perusahaan Anda melalui WhatsApp.</p>
          <a href={site.whatsapp} className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 hover:text-primary-foreground/80">Hubungi kami</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55">{site.name} · Prototipe, konten dan identitas menunggu konfirmasi klien.</div>
    </footer>
  );
}
