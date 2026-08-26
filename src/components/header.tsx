"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SITE, NAV } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#utama" className="group flex items-baseline gap-2" aria-label="Accurate Pro Academy, beranda">
          <span className="font-mono text-sm font-semibold tracking-[0.12em]">ACCURATE PRO</span>
          <span className="text-xs text-muted-foreground">{SITE.subline}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV.map((item) => <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
        </nav>
        <div className="hidden md:block">
          <a href={SITE.whatsapp} className={buttonVariants({ size: "sm", className: "gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90" })}>Konsultasi <ArrowUpRight className="size-3.5" /></a>
        </div>
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })} aria-label="Buka menu"><Menu className="size-5" /></SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background pt-16">
            <nav className="flex flex-col gap-6" aria-label="Navigasi mobile">
              {NAV.map((item) => <Link key={item.href} href={item.href} className="text-base text-muted-foreground hover:text-foreground">{item.label}</Link>)}
              <a href={SITE.whatsapp} className={buttonVariants({ className: "mt-3 bg-primary text-primary-foreground" })}>Jadwalkan konsultasi</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
