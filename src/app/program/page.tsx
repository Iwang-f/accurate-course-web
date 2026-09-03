import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { CtaBanner } from "@/components/cta-banner";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SilabusAccordion } from "@/components/silabus-accordion";
import { Reveal, StaggerGroup, RevealItem } from "@/components/motion";
import { getClasses, getServices, getFeaturedClass, getTrainer } from "@/lib/site";
import type { ProgramItem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Program Training Accurate",
  description: "Program training Accurate Online, Accurate Desktop V5, dan layanan private untuk tim finance.",
};

export default function ProgramPage() {
  const classes = getClasses();
  const services = getServices();
  const featuredClass = getFeaturedClass()?.judul;
  const TRAINER = getTrainer();

  return (
    <main className="flex-1">
      <PageIntro eyebrow="Program Training" title="Belajar Accurate dari transaksi yang benar-benar Anda kerjakan" description="Pilih kelas utama atau diskusikan format private yang sesuai dengan alur kerja tim Anda." />
      <section className="px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Kelas utama</p>
          </Reveal>
          <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-2">
            {classes.map((item) => (
              <RevealItem key={item.judul} className="h-full">
                <ProgramCard item={item} featured={item.judul === featuredClass} />
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <section className="border-y border-border/50 bg-muted/20 px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Format layanan</p>
          </Reveal>
          <StaggerGroup className="mt-5 grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <RevealItem key={item.judul} className="h-full">
                <ProgramCard item={item} />
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <section className="px-5 py-14 sm:px-8 md:py-16">
        <Reveal delay={0.15}>
          <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex size-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">IF</div>
            <div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{TRAINER.jabatan}</Badge>
              <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">{TRAINER.nama}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-muted-foreground text-left sm:text-justify">{TRAINER.deskripsi}</p>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="px-5 pb-14 sm:px-8 md:pb-20"><div className="mx-auto max-w-6xl"><CtaBanner title="Belum yakin program mana yang cocok?" description="Ceritakan kondisi tim dan alur kerja Anda. Kami bantu memetakan titik mulai yang realistis." action="Diskusikan kebutuhan" /></div></section>
    </main>
  );
}

function ProgramCard({ item, featured = false }: { item: ProgramItem; featured?: boolean }) {
  return (
    <Card className={`h-full border-border/60 ${featured ? "border-primary/30 ring-1 ring-primary/20" : ""}`}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl">{item.judul}</CardTitle>
          {featured && (
            <Badge className="bg-highlight text-highlight-foreground hover:bg-highlight/90">Terpopuler</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{item.isi}</p>
        <SilabusAccordion judulProgram={item.judul} />
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-muted px-3 py-1">{item.durasi}</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{item.harga}</span>
        </div>
        <a href="/kontak" className={buttonVariants({ variant: "outline", className: "mt-6 gap-2" })}>Tanya program <ArrowRight className="size-4" /></a>
      </CardContent>
    </Card>
  );
}
