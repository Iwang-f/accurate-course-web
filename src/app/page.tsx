import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/navbar";
import {
  SITE,
  AUDIENCE,
  BENEFITS,
  PROGRAMS,
  FAQS,
} from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="section-pad border-b border-border pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="section-max grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Pelatihan Software Akuntansi
              </p>
              <h1 className="mt-6 font-heading text-[2.25rem] leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem] lg:text-[3.5rem]">
                Kursus Accurate untuk tim yang menangani pembukuan setiap hari
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Program pelatihan disusun berdasarkan alur kerja akuntansi
                perusahaan. Peserta mempelajari pengoperasian Accurate sekaligus
                logika pencatatan yang mendasarinya.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE.whatsapp}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-primary px-6 text-primary-foreground hover:bg-primary/90",
                  })}
                >
                  Jadwalkan konsultasi
                </a>
                <a
                  href="#program"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "px-6",
                  })}
                >
                  Lihat daftar program
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="h-full rounded-md border border-border bg-card p-7 md:p-8">
                <h2 className="font-heading text-xl leading-snug">
                  Program yang paling banyak diambil
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Accurate Online Fundamental. Materi mencakup pengaturan data
                  master hingga penyusunan laporan keuangan.
                </p>
                <dl className="mt-7 space-y-4 border-t border-border pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Format</dt>
                    <dd className="text-right font-medium">Daring dan onsite</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Peserta</dt>
                    <dd className="text-right font-medium">Individu dan tim</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Pendampingan</dt>
                    <dd className="text-right font-medium">Tersedia</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </section>

        {/* Audience */}
        <section className="section-pad border-b border-border py-16 md:py-20">
          <div className="section-max">
            <h2 className="font-heading text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
              Ditujukan untuk
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
              {AUDIENCE.map((item) => (
                <div key={item.label}>
                  <h3 className="text-base font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="tentang"
          className="section-pad border-b border-border py-16 md:py-24"
        >
          <div className="section-max grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
                Pendekatan pelatihan
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Materi tidak disusun sebagai tur fitur. Setiap sesi mengikuti
                urutan pekerjaan yang dilakukan staf akuntansi, sehingga peserta
                langsung memahami konteks penggunaannya.
              </p>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-border border-t border-border">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.title} className="py-6">
                    <dt className="text-base font-semibold">{benefit.title}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section
          id="program"
          className="section-pad border-b border-border bg-card py-16 md:py-24"
        >
          <div className="section-max">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
                Daftar program
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Program dapat diambil secara terpisah atau digabungkan sesuai
                kebutuhan perusahaan.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {PROGRAMS.map((program) => (
                <article key={program.title} className="bg-background p-7 md:p-8">
                  <h3 className="font-heading text-lg leading-snug">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="section-pad border-b border-border py-16 md:py-24"
        >
          <div className="section-max max-w-3xl">
            <h2 className="font-heading text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
              Pertanyaan yang sering diajukan
            </h2>
            <Accordion className="mt-10 border-t border-border">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-5 text-left text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Closing */}
        <section className="section-pad py-16 md:py-24">
          <div className="section-max max-w-2xl">
            <h2 className="font-heading text-2xl leading-snug tracking-[-0.01em] md:text-3xl">
              Diskusikan kebutuhan pelatihan perusahaan Anda
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Sampaikan kondisi tim dan sistem pembukuan yang berjalan saat ini.
              Kami akan menyusun rekomendasi program yang sesuai.
            </p>
            <a
              href={SITE.whatsapp}
              className={buttonVariants({
                size: "lg",
                className:
                  "mt-9 bg-primary px-6 text-primary-foreground hover:bg-primary/90",
              })}
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="section-pad border-t border-border py-8">
        <div className="section-max flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-foreground">{SITE.name}</p>
          <p>Prototipe. Konten dan identitas menunggu konfirmasi klien.</p>
        </div>
      </footer>
    </div>
  );
}
