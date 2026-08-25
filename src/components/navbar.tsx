import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="section-max section-pad flex h-16 items-center justify-between">
        <Link
          href="#"
          className="flex flex-col leading-tight"
          aria-label="Beranda"
        >
          <span className="text-lg font-bold tracking-tight">
            {SITE.brandMark.first}
            <span className="text-primary">{SITE.brandMark.accent}</span>
          </span>
          <span className="-mt-1 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
            {SITE.brandMark.sub}
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
            href={SITE.whatsapp}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className:
                "bg-primary text-primary-foreground hover:bg-primary/90",
            })}
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
          <SheetContent
            side="right"
            className="w-[280px] bg-cream pt-12"
          >
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
                href={SITE.whatsapp}
                className={buttonVariants({
                  variant: "default",
                  className:
                    "mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90",
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
