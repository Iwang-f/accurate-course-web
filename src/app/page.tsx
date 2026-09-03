import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getSite, getTargets, getKeunggulan, getPrograms, getFaq, getPain, getOutcomes, getTrust, getTestimoni } from "@/lib/site";
import { ArrowRight, CheckCircle2, Check } from "lucide-react";
import { TopicCards } from "@/components/topic-cards";
import { CtaBanner } from "@/components/cta-banner";
import { HeroMedia } from "@/components/hero-media";
import { MarqueeStrip } from "@/components/marquee-strip";
import { BigStatStatement } from "@/components/big-stat-statement";
import { ComparisonTable } from "@/components/comparison-table";
import { Reveal, StaggerGroup, RevealItem, CountUp } from "@/components/motion";

export default function Home() {
  const site = getSite();
  const programs = getPrograms();
  const testimoni = getTestimoni();

  return (
    <main id="utama" className="flex-1">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-background to-muted/20 px-5 py-12 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <Reveal>
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">Pelatihan Software Akuntansi</Badge>
                <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                  Kursus Accurate untuk tim yang menangani pembukuan setiap hari
                </h1>
                <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                  Program pelatihan disusun berdasarkan alur kerja akuntansi perusahaan. Peserta mempelajari pengoperasian Accurate sekaligus logika pencatatan yang mendasarinya.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={site.whatsapp} className={buttonVariants({ size: "lg", className: "bg-primary text-primary-foreground hover:bg-primary/90" })}>
                    Jadwalkan konsultasi <ArrowRight className="ml-2 size-4" />
                  </a>
                  <Link href="/program" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Lihat daftar program
                  </Link>
                </div>
              </Reveal>

              {/* Trust strip — stat chips row */}
              <Reveal delay={0.15} y={16}>
                <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  {getTrust().map((item) => (
                    <div key={item.label} className="flex items-baseline gap-2">
                      <dt className="text-2xl font-extrabold tabular-nums text-primary">
                        <CountUp value={item.angka} />
                      </dt>
                      <dd className="text-sm text-muted-foreground">{item.label}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Hero media — video placeholder + floating chips */}
            <Reveal delay={0.2} y={32}>
              <HeroMedia />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Marquee / wordmark trust bar ── */}
      <MarqueeStrip />

      {/* ── Pain points ── */}
      <section className="border-b border-border/50 bg-muted/20 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Situasi yang mungkin sedang Anda hadapi</h2>
              <p className="mt-4 text-muted-foreground">
                Banyak tim finance dan akuntan menghadapi kendala serupa. Program ini dirancang untuk menyelesaikannya.
              </p>
            </div>
          </Reveal>
          <TopicCards items={getPain()} variant="numbered" className="mt-10 lg:grid-cols-3" />
        </div>
      </section>

      {/* ── Target audience ── */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Ditujukan untuk</h2>
          </Reveal>
          <TopicCards items={getTargets()} className="mt-10 lg:grid-cols-3" />
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="border-y border-border/50 bg-muted/20 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Setelah kursus, Anda akan mampu</h2>
              <p className="mt-4 text-muted-foreground">
                Bukan sekadar tahu menu software, tetapi menguasai alur akuntansi yang benar.
              </p>
            </div>
          </Reveal>
          <TopicCards items={getOutcomes()} variant="check" className="mt-10 lg:grid-cols-3" />
        </div>
      </section>

      {/* ── Big stat statement (SayBriefly pattern) ── */}
      <BigStatStatement />

      {/* ── Pendekatan ── */}
      <section id="tentang" className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Pendekatan pelatihan</h2>
                <p className="mt-4 text-muted-foreground">
                  Materi tidak disusun sebagai tur fitur. Setiap sesi mengikuti urutan pekerjaan yang dilakukan staf akuntansi, sehingga peserta langsung memahami konteks penggunaannya.
                </p>
              </div>
            </Reveal>
            <StaggerGroup className="space-y-6">
              {getKeunggulan().map((item) => (
                <RevealItem key={item.judul}>
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 size-5 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">{item.judul}</h3>
                      <p className="text-sm text-muted-foreground">{item.isi}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* ── Comparison table (SayBriefly pattern) ── */}
      <section className="border-y border-border/50 bg-muted/20 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Apa yang membedakan</h2>
              <p className="mt-4 text-muted-foreground">
                Tidak semua lembaga training Accurate sama. Berikut perbedaan utama yang perlu Anda tahu.
              </p>
            </div>
          </Reveal>
          <ComparisonTable />
        </div>
      </section>

      {/* ── Program ── */}
      <section id="program" className="border-t border-border/50 bg-muted/20 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Daftar program</h2>
              <p className="mt-4 text-muted-foreground">Program dapat diikuti secara terpisah atau digabungkan sesuai kebutuhan perusahaan.</p>
            </div>
          </Reveal>
          <TopicCards items={programs} className="mt-10" />
          <Link href="/program" className={buttonVariants({ variant: "outline", className: "mt-6 gap-2" })}>
            Lihat detail program <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ── Testimoni ── */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Apa kata peserta</h2>
              <p className="mt-4 text-muted-foreground">
                Pengalaman langsung dari peserta yang telah mengikuti pelatihan.
              </p>
            </div>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {testimoni.map((t) => (
              <RevealItem key={t.nama}>
                <Card className="flex h-full flex-col gap-5 border-border/60 px-6 py-6">
                  <p className="flex-1 text-sm leading-6 text-muted-foreground">&ldquo;{t.isi}&rdquo;</p>
                  <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
                    >
                      {t.nama.split(" ").map(p => p.at(0)).slice(0, 2).join("").toUpperCase()}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{t.nama}</p>
                      <p className="truncate text-xs text-muted-foreground">{t.jabatan} — {t.perusahaan}</p>
                    </div>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className="border-t border-border/50 bg-muted/20 px-5 pb-16 md:pb-20">
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

      {/* ── FAQ ── */}
      <section id="faq" className="border-t border-border/50 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Pertanyaan yang sering diajukan</h2>
          </Reveal>
          <Accordion className="mt-8 w-full">
            {getFaq().map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left text-base font-medium">{item.tanya}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.jawab}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA ── */}
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
  );
}