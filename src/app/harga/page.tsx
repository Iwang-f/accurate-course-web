import type { Metadata } from "next";
import { TRAINING_PRICING, COURSE_PRICING, TERMS } from "@/lib/pricing";
import { PageIntro } from "@/components/page-intro";
import { CtaBanner } from "@/components/cta-banner";
import { PricingCards } from "@/components/pricing-cards";

export const metadata: Metadata = {
  title: "Harga Training",
  description: "Biaya training dan kursus software Accurate: paket per durasi, harga per orang, dan ketentuan pelaksanaan.",
};

export default function HargaPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Harga Training"
        title="Biaya training dan kursus software Accurate"
        description="Harga di bawah untuk pelatihan di Jakarta. Untuk lokasi di luar Jakarta, biaya transportasi dan akomodasi dihitung terpisah."
      />

      <section className="px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Biaya training per paket</h2>
          <p className="mt-2 text-sm text-muted-foreground">Pilih level sesuai kebutuhan tim: Paham, Bisa, atau Terampil.</p>
          <PricingCards groups={TRAINING_PRICING} />
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/20 px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Biaya kursus per orang</h2>
          <p className="mt-2 text-sm text-muted-foreground">Diskon berlaku untuk pendaftaran berkelompok pada waktu yang sama.</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-border/60 bg-card">
            <div className="grid grid-cols-1 overflow-x-auto sm:grid-cols-2 lg:grid-cols-4">
              {COURSE_PRICING.map((item) => (
                <div key={item.peserta} className="border-b border-border/50 px-6 py-5 sm:border-b-0 sm:border-r last:border-r-0">
                  <p className="text-sm text-muted-foreground">{item.peserta}</p>
                  <p className="mt-1 text-lg font-bold tabular-nums text-primary">{item.harga}</p>
                  <p className="text-xs text-muted-foreground">{item.keterangan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-16 sm:px-8">
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
          <div className="mt-10">
            <CtaBanner
              title="Butuh penawaran untuk tim Anda?"
              description="Konsultasikan kebutuhan training dan dapatkan rekomendasi paket yang sesuai."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
