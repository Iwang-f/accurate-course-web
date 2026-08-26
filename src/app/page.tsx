import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE, TARGET, KEUNGGULAN, PROGRAM, FAQ } from "@/lib/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TopicCards } from "@/components/topic-cards";
import { CtaBanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <main id="utama" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background to-muted/20 px-5 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">Pelatihan Software Akuntansi</Badge>
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                  Kursus Accurate untuk tim yang menangani pembukuan setiap hari
                </h1>
                <p className="text-lg text-muted-foreground">
                  Program pelatihan disusun berdasarkan alur kerja akuntansi perusahaan.
                  Peserta mempelajari pengoperasian Accurate sekaligus logika pencatatan yang mendasarinya.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={SITE.whatsapp} className={buttonVariants({ size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/90" })}>
                    Jadwalkan konsultasi <ArrowRight className="ml-2 size-4" />
                  </a>
                  <a href="#program" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Lihat daftar program
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-primary">Paling banyak diikuti</CardTitle>
                    <CardDescription>Program andalan peserta</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">{PROGRAM.at(0)?.judul}</h3>
                      <p className="text-sm text-muted-foreground">{PROGRAM.at(0)?.isi}</p>
                    </div>
                    <dl className="grid grid-cols-2 gap-2 border-t border-border pt-4 text-sm">
                      <div><dt className="text-muted-foreground">Format</dt><dd className="font-medium">Daring & onsite</dd></div>
                      <div><dt className="text-muted-foreground">Peserta</dt><dd className="font-medium">Individu & tim</dd></div>
                      <div className="col-span-2"><dt className="text-muted-foreground">Pendampingan</dt><dd className="font-medium">Tersedia</dd></div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Target audience */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ditujukan untuk</h2>
            <TopicCards items={TARGET} className="mt-10 lg:grid-cols-3" />
          </div>
        </section>

        {/* Pendekatan */}
        <section id="tentang" className="border-y border-border/50 bg-muted/20 px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pendekatan pelatihan</h2>
                <p className="mt-4 text-muted-foreground">
                  Materi tidak disusun sebagai tur fitur. Setiap sesi mengikuti urutan pekerjaan yang dilakukan staf akuntansi, sehingga peserta langsung memahami konteks penggunaannya.
                </p>
              </div>
              <div className="space-y-6">
                {KEUNGGULAN.map((item) => (
                  <div key={item.judul} className="flex gap-4">
                    <CheckCircle2 className="mt-1 size-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">{item.judul}</h3>
                      <p className="text-sm text-muted-foreground">{item.isi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program" className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Daftar program</h2>
              <p className="mt-4 text-muted-foreground">Program dapat diikuti secara terpisah atau digabungkan sesuai kebutuhan perusahaan.</p>
            </div>
            <TopicCards items={PROGRAM} className="mt-10" />
          </div>
        </section>

        {/* Pricing teaser */}
        <section className="border-t border-border/50 px-5 pb-16 md:pb-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-border/60 bg-card px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-lg font-bold tracking-tight">Biaya training dan kursus</p>
              <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">
                Paket tersedia per durasi untuk Accurate Online dan Desktop, dengan harga kursus per orang yang lebih murah bila mendaftar berkelompok.
              </p>
            </div>
            <Link href="/harga" className={buttonVariants({ variant: "outline", size: "lg", className: "shrink-0 gap-1.5" })}>
              Lihat harga <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border/50 bg-muted/10 px-5 py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pertanyaan yang sering diajukan</h2>
            <Accordion className="mt-8 w-full">
              {FAQ.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-base font-medium">{item.tanya}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.jawab}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <CtaBanner
              title="Diskusikan kebutuhan pelatihan Anda"
              description="Sampaikan kondisi tim dan sistem pembukuan yang berjalan. Kami akan menyusun rekomendasi program yang sesuai."
              action="Hubungi via WhatsApp"
            />
          </div>
        </section>
      </main>
    </>
  );
}