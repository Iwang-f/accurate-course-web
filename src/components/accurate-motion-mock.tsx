"use client";

import { motion, useReducedMotion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

/**
 * Animated fake UI of Accurate bookkeeping software — motion graphics for
 * the hero slot. Pure decorative: no interactivity, aria-hidden, and it
 * renders a static final state under reduced-motion.
 *
 * ponytail: loop via remount (key=cycle) instead of timeline orchestration.
 * Ceiling: single fixed 9s sequence. Upgrade to motion's useAnimationGroup
 * when the sequence grows beyond ~6 beats.
 */

const ROWS: { akun: string; debit: number; kredit: number }[] = [
  { akun: "Kas & Bank", debit: 12500000, kredit: 0 },
  { akun: "Piutang Usaha", debit: 8200000, kredit: 0 },
  { akun: "Persediaan Barang", debit: 3800000, kredit: 0 },
  { akun: "Utang Usaha", debit: 0, kredit: 14900000 },
  { akun: "Penjualan", debit: 0, kredit: 9600000 },
];

const TOTAL = 24500000;

const BARS = [
  { label: "Jan", height: 45 },
  { label: "Feb", height: 68 },
  { label: "Mar", height: 54 },
  { label: "Apr", height: 82 },
  { label: "Mei", height: 100 },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Money value that counts up 0 → value after `delay` seconds. */
function Money({ value, delay = 0 }: { value: number; delay?: number }) {
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => Math.round(v).toLocaleString("id-ID"));
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.9, delay, ease: "easeOut" });
    return () => controls.stop();
  }, [mv, value, delay]);
  return <motion.span className="tabular-nums">{text}</motion.span>;
}

function WindowChrome() {
  return (
    <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-3 py-2">
      <span className="flex gap-1.5" aria-hidden="true">
        <i className="size-2.5 rounded-full bg-[#f87171]" />
        <i className="size-2.5 rounded-full bg-[#fbbf24]" />
        <i className="size-2.5 rounded-full bg-[#34d399]" />
      </span>
      <span className="ml-2 truncate text-[10px] font-medium text-muted-foreground sm:text-xs">
        Accurate — Jurnal Umum
      </span>
      <span className="ml-auto hidden rounded bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary sm:inline">
        v5
      </span>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden w-24 shrink-0 flex-col gap-2 border-r border-border/60 bg-muted/30 p-3 sm:flex">
      <div className="mb-1 h-2 w-14 rounded-full bg-primary/80" />
      {["w-16", "w-12", "w-14", "w-10", "w-16"].map((w, i) => (
        <div key={i} className={`h-2 rounded-full ${w} ${i === 0 ? "bg-primary/40" : "bg-border"}`} />
      ))}
    </div>
  );
}

function JournalTable() {
  return (
    <div className="min-w-0 flex-1 px-3 py-2 sm:px-4 sm:py-3">
      <div className="grid grid-cols-[1fr_5rem_5rem] gap-1 border-b border-border/60 pb-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:grid-cols-[1fr_6rem_6rem] sm:text-[10px]">
        <span>Akun</span>
        <span className="text-right">Debit</span>
        <span className="text-right">Kredit</span>
      </div>
      <div className="divide-y divide-border/40">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.akun}
            className="grid grid-cols-[1fr_5rem_5rem] items-baseline gap-1 py-1.5 text-[10px] sm:grid-cols-[1fr_6rem_6rem] sm:text-xs"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.55, duration: 0.45, ease: EASE }}
          >
            <span className="truncate font-medium text-foreground">{row.akun}</span>
            <span className="text-right text-foreground/80">
              {row.debit > 0 && <Money value={row.debit} delay={0.6 + i * 0.55} />}
            </span>
            <span className="text-right text-foreground/80">
              {row.kredit > 0 && <Money value={row.kredit} delay={0.6 + i * 0.55} />}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StatusRow() {
  return (
    <div className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-3 py-2 sm:px-4">
      <div className="text-[10px] text-muted-foreground sm:text-xs">
        Total
        <span className="ml-2 font-semibold text-foreground">
          <Money value={TOTAL} delay={3.2} />
        </span>
      </div>
      <div className="relative h-5 w-28">
        <motion.span
          className="absolute inset-0 flex items-center justify-center gap-1 rounded-full bg-muted px-2 text-[9px] font-semibold text-muted-foreground sm:text-[10px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.5, 0.93, 1] }}
        >
          <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60" />
          Memproses…
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center gap-1 rounded-full bg-emerald-100 px-2 text-[9px] font-bold text-emerald-700 sm:text-[10px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.6, duration: 0.4, ease: EASE }}
        >
          <CheckCircle2 className="size-3 shrink-0" aria-hidden="true" />
          Seimbang
        </motion.span>
      </div>
    </div>
  );
}

function MiniChart() {
  return (
    <div className="flex items-end gap-2 border-t border-border/60 px-3 py-2 sm:px-4 sm:py-3">
      <span className="mr-1 hidden text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline">
        Pencatatan
      </span>
      {BARS.map((bar, i) => (
        <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-8 w-full items-end overflow-hidden rounded-sm bg-muted/60 sm:h-12">
            <motion.div
              className="w-full rounded-sm bg-primary"
              style={{ height: `${bar.height}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 3.6 + i * 0.2, duration: 0.6, ease: EASE }}
            />
          </div>
          <span className="text-[8px] text-muted-foreground sm:text-[9px]">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Full animated sequence — remounted every cycle to replay. */
function MockSequence() {
  return (
    <motion.div
      className="flex h-full flex-col bg-card text-left"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <WindowChrome />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <JournalTable />
          <StatusRow />
          <MiniChart />
        </div>
      </div>
    </motion.div>
  );
}

/** Static final state for reduced-motion users. */
function MockStatic() {
  return (
    <div className="flex h-full flex-col bg-card text-left">
      <WindowChrome />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="min-w-0 flex-1 px-3 py-2 sm:px-4 sm:py-3">
            <div className="grid grid-cols-[1fr_5rem_5rem] gap-1 border-b border-border/60 pb-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:grid-cols-[1fr_6rem_6rem] sm:text-[10px]">
              <span>Akun</span>
              <span className="text-right">Debit</span>
              <span className="text-right">Kredit</span>
            </div>
            <div className="divide-y divide-border/40">
              {ROWS.map((row) => (
                <div key={row.akun} className="grid grid-cols-[1fr_5rem_5rem] items-baseline gap-1 py-1.5 text-[10px] sm:grid-cols-[1fr_6rem_6rem] sm:text-xs">
                  <span className="truncate font-medium text-foreground">{row.akun}</span>
                  <span className="text-right tabular-nums text-foreground/80">
                    {row.debit > 0 && row.debit.toLocaleString("id-ID")}
                  </span>
                  <span className="text-right tabular-nums text-foreground/80">
                    {row.kredit > 0 && row.kredit.toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-border/60 bg-muted/30 px-3 py-2 sm:px-4">
            <div className="text-[10px] text-muted-foreground sm:text-xs">
              Total
              <span className="ml-2 font-semibold tabular-nums text-foreground">{TOTAL.toLocaleString("id-ID")}</span>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold text-emerald-700 sm:text-[10px]">
              <CheckCircle2 className="size-3 shrink-0" aria-hidden="true" />
              Seimbang
            </span>
          </div>
          <div className="flex items-end gap-2 border-t border-border/60 px-3 py-2 sm:px-4 sm:py-3">
            {BARS.map((bar) => (
              <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-8 w-full items-end overflow-hidden rounded-sm bg-muted/60 sm:h-12">
                  <div className="w-full rounded-sm bg-primary" style={{ height: `${bar.height}%` }} />
                </div>
                <span className="text-[8px] text-muted-foreground sm:text-[9px]">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * The exported mock: loops the animated sequence every 9s, or renders the
 * static state when the user prefers reduced motion.
 */
export function AccurateMotionMock() {
  const reduced = useReducedMotion();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setCycle((c) => c + 1), 9000);
    return () => clearInterval(timer);
  }, [reduced]);

  return (
    <div className="pointer-events-none select-none" aria-hidden="true">
      {reduced ? <MockStatic /> : <MockSequence key={cycle} />}
    </div>
  );
}
