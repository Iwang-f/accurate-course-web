import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE, KEUNGGULAN } from "@/lib/site";
import { ABOUT } from "@/lib/pricing";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Profil, visi, dan pendekatan pelatihan Accurate Pro Academy.",
};

export default function TentangPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 px-5 py-14 md:py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Tentang Kami</Badge>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Pelatihan Accurate yang dijalankan oleh praktisi pembukuan
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{ABOUT.intro}</p>
        </div>
      </section>

      <section className="px-5 py-14 md:py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Cara kami mengajar</h2>
          </div>
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
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="text-lg font-bold">Diskusikan kebutuhan tim Anda</p>
            <p className="mt-1 text-sm text-primary-foreground/70">Kami akan menyusun rekomendasi program setelah memahami kondisi pembukuan yang berjalan.</p>
          </div>
          <a href={SITE.whatsapp} className={buttonVariants({ size: "lg", variant: "secondary", className: "gap-1.5 shrink-0" })}>
            Hubungi via WhatsApp <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
