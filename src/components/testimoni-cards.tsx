import { Card, CardContent } from "@/components/ui/card";
import { getTestimoni } from "@/lib/site";

/** Initials avatar — no photo assets required. */
function initials(nama: string): string {
  return nama
    .split(" ")
    .map((part) => part.at(0) ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimoniCards() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {getTestimoni().map((t) => (
        <Card key={t.nama} className="border-border/60">
          <CardContent className="flex h-full flex-col gap-5 px-6 py-6">
            <p className="flex-1 text-sm leading-6 text-muted-foreground">&ldquo;{t.isi}&rdquo;</p>
            <div className="flex items-center gap-3 border-t border-border/50 pt-4">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground"
              >
                {initials(t.nama)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{t.nama}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {t.jabatan} — {t.perusahaan}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
