"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getSite, getNav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const site = getSite();
  const nav = getNav();
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2" aria-label="Accurate Pro Academy, beranda">
          <span className="text-sm font-extrabold tracking-[0.12em]">ACCURATE PRO</span>
          <span className="text-xs text-muted-foreground">{site.subline}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {nav.map((item) => <Link key={item.href} href={item.href} className={cn("text-sm transition-colors hover:text-foreground", pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground")}>{item.label}</Link>)}
        </nav>
        <div className="hidden md:block">
          <a href={site.whatsapp} className={buttonVariants({ size: "sm", className: "gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90" })}>Konsultasi <ArrowUpRight className="size-3.5" /></a>
        </div>
        <Sheet>
          <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "min-h-11 min-w-11 md:hidden" })} aria-label="Buka menu"><Menu className="size-5" /></SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background pt-16">
            <nav className="flex flex-col gap-6" aria-label="Navigasi mobile">
              {nav.map((item) => <Link key={item.href} href={item.href} className="-mx-3 px-3 py-3 text-base text-muted-foreground hover:text-foreground">{item.label}</Link>)}
              <a href={site.whatsapp} className={buttonVariants({ className: "mt-3 bg-primary text-primary-foreground" })}>Jadwalkan konsultasi</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
