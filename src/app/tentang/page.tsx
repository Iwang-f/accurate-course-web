import type { Metadata } from "next";
import { KEUNGGULAN } from "@/lib/site";
import { ABOUT } from "@/lib/pricing";
import { PageIntro } from "@/components/page-intro";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil, visi, dan pendekatan pelatihan Accurate Pro Academy.",
};

export default function TentangPage() {
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Tentang Kami"
        title="Pelatihan Accurate yang dijalankan oleh akuntan aktif"
        description={ABOUT.intro}
      />

      <section className="px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Cara kami mengajar</h2>
          <div className="space-y-6">
            <p className="text-base leading-7 text-muted-foreground">{ABOUT.approach}</p>
            <dl className="grid gap-5 sm:grid-cols-2">
              {KEUNGGULAN.map((k) => (
                <div key={k.judul} className="rounded-xl border border-border/60 bg-card px-5 py-5">
                  <dt className="text-sm font-semibold">{k.judul}</dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">{k.isi}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Visi</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{ABOUT.vision}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Misi</h2>
            <ul className="mt-4 space-y-3">
              {ABOUT.mission.map((m) => (
                <li key={m} className="flex gap-3 text-base leading-7 text-muted-foreground">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <CtaBanner
            title="Diskusikan kebutuhan tim Anda"
            description="Kami akan menyusun rekomendasi program setelah memahami kondisi pembukuan yang berjalan."
            action="Hubungi via WhatsApp"
          />
        </div>
      </section>
    </main>
  );
}
