"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Menu, ArrowRight, Check } from "lucide-react";

const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Trainer", href: "#trainer" },
  { label: "FAQ", href: "#faq" },
];

const OUTCOMES = [
  {
    number: "01",
    title: "Input pajak dan transaksi lebih tertib",
    desc: "Pahami alur jurnal, akun aset, stok, piutang, dan hutang tanpa harus menebak.",
  },
  {
    number: "02",
    title: "Laporan keuangan yang bisa dipakai",
    desc: "Bukan sekadar menghasilkan neraca. Belajar membaca dan menemukan data yang perlu ditindaklanjuti.",
  },
  {
    number: "03",
    title: "Tim akuntansi lebih mandiri",
    desc: "Dokumentasi dan latihan berbasis studi kasus membuat peserta tidak perlu selalu bergantung pada trainer.",
  },
];

const PROGRAMS = [
  {
    title: "Accurate Online Fundamental",
    desc: "Setup data usaha, transaksi penjualan-pembelian, stok, dan laporan dasar. Untuk admin dan pemilik usaha.",
  },
  {
    title: "Accurate Desktop V5",
    desc: "Workflow akuntansi penuh: persediaan, kas bank, aset tetap, sampai closing period.",
  },
  {
    title: "Private Training untuk Tim",
    desc: "Materi disesuaikan dengan job desc, industri, dan kondisi data perusahaan.",
  },
  {
    title: "Review & Pendampingan",
    desc: "Audit alur kerja dan sesi tanya jawab pasca-training. Pastikan peserta benar-benar siap jalan sendiri.",
  },
];

const FAQS = [
  {
    q: "Apakah training ini untuk pemula yang belum pernah menyentuh Accurate?",
    a: "Ya. Materi fundamental dimulai dari navigasi, pengaturan data master, hingga siap input transaksi. Tidak perlu pengalaman sebelumnya.",
  },
  {
    q: "Online atau offline? Bagaimana pelaksanaannya?",
    a: "Online via Zoom atau Google Meet. Untuk private training tim, bisa diadakan di kantor klien (Jakarta dan sekitarnya).",
  },
  {
    q: "Berapa lama durasi setiap program?",
    a: "Bervariasi. Fundamental 2–3 sesi @3 jam. Private training menyesuaikan scope materi dan jumlah peserta. Kami diskusikan kebutuhan dulu sebelum memulai.",
  },
  {
    q: "Apakah pelatihan langsung menggunakan data perusahaan?",
    a: "Sangat dianjurkan. Untuk private training, kami import data dummy atau data riil perusahaan agar latihan benar-benar relevan.",
  },
  {
    q: "Apa yang membedakan Accurate Pro Academy dengan pelatihan lainnya?",
    a: "Trainer adalah professional accountant yang aktif menangani pembukuan klien – bukan sekadar instruktur software. Setiap teknik yang diajarkan selalu dikaitkan dengan logika akuntansi di baliknya.",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="section-max section-pad flex h-16 items-center justify-between">
        <Link href="#" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight">
            accurate<span className="text-primary">pro</span>
          </span>
          <span className="-mt-1 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
            academy
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6280000000000"
            className={buttonVariants({ variant: "default", size: "sm", className: "bg-primary text-primary-foreground hover:bg-primary/90" })}
          >
            Konsultasi Gratis
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className: "md:hidden",
            })}
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-cream pt-12">
            <nav className="flex flex-col gap-5 text-base">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/6280000000000"
                className={buttonVariants({
                  variant: "default",
                  className: "w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90",
                })}
              >
                Konsultasi Gratis
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="section-pad pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="section-max grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-end">
            <div>
              <Badge
                variant="outline"
                className="mb-5 border-primary/30 text-primary bg-primary/5 text-[11px] font-semibold tracking-widest uppercase"
              >
                Belajar dari praktisi akuntansi
              </Badge>
              <h1 className="text-[clamp(2.3rem,7vw,4.75rem)] font-heading leading-[0.96] tracking-[-0.055em]">
                Accurate lebih mudah saat diajarkan oleh{" "}
                <span className="text-primary italic">praktisi.</span>
              </h1>
              <p className="mt-5 max-w-[34rem] text-base md:text-lg leading-relaxed text-muted-foreground">
                Kursus Accurate untuk owner, admin, dan tim finance yang ingin
                bekerja lebih rapi, cepat, dan percaya diri — bukan sekadar
                hafal tombol.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href="https://wa.me/6280000000000"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90",
                  })}
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#program"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "lg",
                    className: "text-muted-foreground",
                  })}
                >
                  Lihat Program &darr;
                </a>
              </div>
            </div>

            <aside className="rounded-lg bg-primary p-7 md:p-9 text-primary-foreground relative overflow-hidden min-h-[240px] md:min-h-[320px] flex flex-col justify-end">
              <span className="text-[11px] font-semibold tracking-widest uppercase opacity-70">
                Program Unggulan
              </span>
              <h2 className="mt-16 md:mt-24 text-2xl md:text-[2rem] font-heading leading-[1.05] max-w-[20ch]">
                Accurate Online untuk operasional bisnis harian
              </h2>
              <p className="mt-3 text-sm opacity-80 max-w-[32ch]">
                Mulai dari setup sampai laporan yang benar-benar bisa dipakai
                ambil keputusan.
              </p>
            </aside>
          </div>
        </section>

        {/* ─── PROOF — siapa ─── */}
        <section className="border-y border-border py-5">
          <div className="section-max section-pad grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <strong className="block font-heading text-xl">Untuk siapa?</strong>
              <small className="text-muted-foreground text-xs">
                Owner, admin, tim finance UMKM
              </small>
            </div>
            {[
              ["Praktis", "Studi kasus sesuai alur kerja nyata"],
              ["Terukur", "Materi tanpa teori berlebihan"],
              ["Didampingi", "Ada support chat setelah training"],
            ].map(([label, sub]) => (
              <div key={label}>
                <strong className="block font-heading text-lg">{label}</strong>
                <small className="text-muted-foreground text-xs">{sub}</small>
              </div>
            ))}
          </div>
        </section>

        {/* ─── VALUE / OUTCOMES ─── */}
        <section className="section-pad py-20 lg:py-28" id="outcomes">
          <div className="section-max">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-14">
              <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-heading leading-[1.04] tracking-[-0.04em] max-w-[24rem]">
                Bukan hanya bisa klik. Bisa mengerti.
              </h2>
              <p className="text-muted-foreground max-w-xs text-sm">
                Setiap sesi dirancang untuk menghubungkan fitur Accurate dengan
                pekerjaan lapangan yang benar-benar terjadi.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
              {OUTCOMES.map((o) => (
                <article
                  key={o.number}
                  className="bg-card p-7 md:p-9 flex flex-col"
                >
                  <span className="font-heading text-2xl text-primary/40">
                    {o.number}
                  </span>
                  <h3 className="mt-10 font-semibold text-lg leading-snug">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {o.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROGRAMS ─── */}
        <section
          className="section-pad py-20 lg:py-28 bg-secondary/30"
          id="program"
        >
          <div className="section-max">
            <div className="grid md:grid-cols-[2fr_3fr] gap-12">
              <div>
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/30 text-primary bg-primary/5 text-[11px] font-semibold tracking-widest uppercase"
                >
                  Program Belajar
                </Badge>
                <h2 className="text-[clamp(1.8rem,5vw,2.6rem)] font-heading leading-[1.04] tracking-[-0.04em]">
                  Program mengikuti kebutuhan, bukan sebaliknya.
                </h2>
                <p className="mt-4 text-muted-foreground text-sm">
                  Pilih kelas dasar, pendalaman modul, atau private training
                  sesuai industri dan job desc tim.
                </p>
              </div>
              <div className="border-t border-border/60">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.title}
                    className="border-b border-border/60 py-5"
                  >
                    <h3 className="font-semibold text-base">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── TRAINER ─── */}
        <section
          className="section-pad py-20 lg:py-28 bg-primary text-primary-foreground"
          id="trainer"
        >
          <div className="section-max grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <div>
              <Badge className="mb-4 border-accent/50 text-accent bg-accent/10 text-[11px] font-semibold tracking-widest uppercase">
                Professional Accountant
              </Badge>
              <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] font-heading leading-[1.04] tracking-[-0.04em]">
                Trainer yang paham angka dan realita operasional.
              </h2>
              <p className="mt-4 text-sm leading-relaxed opacity-80 max-w-[36rem]">
                Setiap trainer adalah praktisi akuntansi aktif. Mereka mampu
                menjelaskan bukan hanya caranya, tapi alasan di balik setiap
                pencatatan — sesuatu yang tidak diajarkan di tutorial software.
              </p>
            </div>
            <div className="border-l border-primary-foreground/25 pl-7 md:pl-10">
              <p className="font-heading text-2xl md:text-[1.8rem] leading-[1.15]">
                &ldquo;Target kelas bukan membuat peserta sibuk di aplikasi. Targetnya:
                pekerjaan selesai, angka terbaca, keputusan lebih tenang.&rdquo;
              </p>
              <p className="mt-6 text-xs opacity-65 tracking-wider uppercase">
                Prinsip pengajaran Accurate Pro Academy
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-pad py-20 lg:py-28" id="faq">
          <div className="section-max max-w-3xl mx-auto">
            <h2 className="text-[clamp(1.5rem,4vw,2.2rem)] font-heading leading-[1.04] tracking-[-0.03em] text-center mb-12">
              Pertanyaan yang sering diajukan
            </h2>
            <Accordion className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="section-pad py-24 lg:py-32 border-t border-border">
          <div className="section-max text-center max-w-2xl mx-auto">
            <h2 className="text-[clamp(2rem,6vw,3.2rem)] font-heading leading-[1] tracking-[-0.05em]">
              Mulai dari masalah pembukuan yang sedang Anda hadapi.
            </h2>
            <p className="mt-5 text-muted-foreground text-sm max-w-lg mx-auto">
              Ceritakan kondisi tim dan bisnis Anda. Kami bantu pilih format,
              materi, dan jadwal yang paling masuk akal.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="https://wa.me/6280000000000"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 px-10",
                })}
              >
                Konsultasi via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border py-6 section-pad">
        <div className="section-max flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-xs text-muted-foreground">
          <span>
            <strong className="text-foreground">accuratepro academy</strong>
          </span>
          <span>
            Draft prototype — konten masih placeholder. Belum untuk publikasi.
          </span>
        </div>
      </footer>
    </div>
  );
}
