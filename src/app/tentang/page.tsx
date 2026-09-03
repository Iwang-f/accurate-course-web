import type { Metadata } from "next";
import { getKeunggulan, getTrainer } from "@/lib/site";
import { ABOUT } from "@/lib/pricing";
import { PageIntro } from "@/components/page-intro";
import { CtaBanner } from "@/components/cta-banner";
import { Badge } from "@/components/ui/badge";
import { TestimoniCards } from "@/components/testimoni-cards";
import { Reveal, StaggerGroup, RevealItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil, visi, dan pendekatan pelatihan Accurate Pro Academy.",
};

export default function TentangPage() {
  const TRAINER = getTrainer();
  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Tentang Kami"
        title="Pelatihan Accurate yang dijalankan oleh akuntan aktif"
        description={ABOUT.intro}
      />

      {/* Trainer — V2 */}
      <section className="px-5 py-14 md:py-16 sm:px-8">
        <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex size-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
            {TRAINER.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={TRAINER.foto} alt={TRAINER.nama} className="size-24 rounded-full object-cover" />
            ) : (
              "IF"
            )}
          </div>
          <div>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{TRAINER.jabatan}</Badge>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">{TRAINER.nama}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground text-left sm:text-justify">{TRAINER.deskripsi}</p>
          </div>
        </div>
        </Reveal>
      </section>

      <section className="border-t border-border/50 px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">Cara kami mengajar</h2>
          </Reveal>
          <div className="space-y-6">
            <p className="text-base leading-7 text-muted-foreground text-left sm:text-justify">{ABOUT.approach}</p>
            <StaggerGroup className="grid gap-5 sm:grid-cols-2">
              {getKeunggulan().map((k) => (
                <RevealItem key={k.judul}>
                  <div className="rounded-xl border border-border/60 bg-card px-5 py-5">
                    <dt className="text-sm font-semibold">{k.judul}</dt>
                    <dd className="mt-2 text-sm leading-6 text-muted-foreground">{k.isi}</dd>
                  </div>
                </RevealItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">Visi</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground text-left sm:text-justify">{ABOUT.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">Misi</h2>
              <ul className="mt-4 space-y-3">
                {ABOUT.mission.map((m) => (
                  <li key={m} className="flex gap-3 text-base leading-7 text-muted-foreground">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimoni — V2 */}
      <section className="px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-balance md:text-3xl">Apa kata peserta</h2>
              <p className="mt-3 text-muted-foreground">Pengalaman langsung dari peserta yang telah mengikuti pelatihan.</p>
            </div>
          </Reveal>
          <TestimoniCards />
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
