import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";
import { TRAINING_PRICING, COURSE_PRICING, TERMS } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Harga Training",
  description: "Biaya training dan kursus software Accurate: paket per durasi, harga per orang, dan ketentuan pelaksanaan.",
};

function formatRupiah(v: string) {
  return v;
}

export default function HargaPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="border-b border-border/50 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Harga Training</Badge>
          <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Biaya training dan kursus software Accurate
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Harga di bawah untuk pelatihan di Jakarta. Untuk lokasi di luar Jakarta,
            biaya transportasi dan akomodasi dihitung terpisah.
          </p>
        </div>
      </section>

      {/* Paket training */}
      <section className="px-5 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Biaya training per paket</h2>
          <p className="mt-2 text-sm text-muted-foreground">Pilih level sesuai kebutuhan tim: Paham, Bisa, atau Terampil.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TRAINING_PRICING.map((group) => (
              <Card key={group.kategori} className="border-border/60">
                <CardContent className="p-0">
                  <div className="border-b border-border/60 px-6 py-5">
                    <h3 className="text-lg font-bold">{group.kategori}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{group.catatan}</p>
                  </div>
                  <div className="divide-y divide-border/60">
                    {group.paket.map((p) => (
                      <div key={p.nama} className="grid grid-cols-[1fr_auto] items-center gap-2 px-6 py-4">
                        <div>
                          <p className="text-sm font-semibold">{p.nama}</p>
                          <p className="text-xs text-muted-foreground">{p.durasi}</p>
                        </div>
                        <p className="font-mono text-sm font-semibold text-primary">{formatRupiah(p.harga)}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Harga kursus per orang */}
      <section className="border-t border-border/50 bg-muted/20 px-5 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Biaya kursus per orang</h2>
          <p className="mt-2 text-sm text-muted-foreground">Diskon berlaku untuk pendaftaran berkelompok pada waktu yang sama.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-card">
            <div className="grid grid-cols-1 overflow-x-auto sm:grid-cols-2 lg:grid-cols-4">
              {COURSE_PRICING.map((item) => (
                <div key={item.peserta} className="border-b border-border/50 px-6 py-5 sm:border-b-0 sm:border-r last:border-r-0">
                  <p className="text-sm text-muted-foreground">{item.peserta}</p>
                  <p className="mt-1 font-mono text-lg font-semibold text-primary">{formatRupiah(item.harga)}</p>
                  <p className="text-xs text-muted-foreground">{item.keterangan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ketentuan */}
      <section className="px-5 py-14 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ketentuan pelaksanaan</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {TERMS.map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg border border-border/60 bg-card px-5 py-4 text-sm text-muted-foreground">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl bg-primary px-6 py-6 text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Butuh penawaran untuk tim Anda?</p>
              <p className="text-sm text-primary-foreground/70">Konsultasikan kebutuhan training dan dapatkan rekomendasi paket yang sesuai.</p>
            </div>
            <a href={SITE.whatsapp} className={buttonVariants({ size: "lg", variant: "secondary", className: "gap-1.5" })}>
              Konsultasi via WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
