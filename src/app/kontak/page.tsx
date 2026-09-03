"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import type { ConsultationInquiry } from "@/lib/consultation";
import { buildConsultationUrl } from "@/lib/consultation";
import { getSite, getPrograms } from "@/lib/site";
import { PageIntro } from "@/components/page-intro";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/motion";

const EMPTY: ConsultationInquiry = { nama: "", perusahaan: "", jumlah: "", program: "", kendala: "" };

export default function KontakPage() {
  const [inquiry, setInquiry] = useState<ConsultationInquiry>(EMPTY);

  function set<K extends keyof ConsultationInquiry>(key: K, value: string) {
    setInquiry((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const url = buildConsultationUrl(inquiry, getSite().whatsapp);
    window.open(url, "_blank");
  }

  return (
    <main className="flex-1">
      <PageIntro
        eyebrow="Hubungi Kami"
        title="Diskusikan kebutuhan training tim Anda"
        description="Ceritakan kondisi pembukuan yang berjalan. Kami akan merekomendasikan titik mulai yang paling relevan."
      />

      <section className="px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-2xl">
          <Reveal>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Field label="Nama" value={inquiry.nama} onChange={(v) => set("nama", v)} placeholder="Nama lengkap" required />
            <Field label="Perusahaan" value={inquiry.perusahaan} onChange={(v) => set("perusahaan", v)} placeholder="Nama perusahaan" required />
            <Field label="Jumlah peserta" value={inquiry.jumlah} onChange={(v) => set("jumlah", v)} placeholder="Contoh: 3 orang" />
            <div>
              <label className="mb-1.5 block text-sm font-medium">Program diminati</label>
              <Select value={inquiry.program} onValueChange={(v) => set("program", v ?? "")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih program (opsional)" />
                </SelectTrigger>
                <SelectContent>
                  {getPrograms().map((p) => (
                    <SelectItem key={p.judul} value={p.judul}>{p.judul}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Kendala Accurate saat ini</label>
              <Textarea
                value={inquiry.kendala}
                onChange={(e) => set("kendala", e.target.value)}
                placeholder="Contoh: laporan keuangan sering tidak balance, tim belum pernah training formal, dll."
                rows={4}
              />
            </div>
            <button type="submit" className={buttonVariants({ size: "lg", className: "w-full gap-2" })}>
              Kirim ke WhatsApp
            </button>
          </form>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/20 px-5 py-14 sm:px-8 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Respons cepat</p>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:mx-auto">
            Kami membalas pesan WhatsApp dalam 1×24 jam pada hari kerja. Jam operasional Senin–Jumat, 09.00–17.00 WIB.
          </p>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
