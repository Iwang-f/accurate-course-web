import { getSite, getHeroChips } from "@/lib/site";
import { Play } from "lucide-react";

/**
 * Hero media panel. When the client has supplied a screen recording,
 * `SITE.heroVideo` is set and the video autoplays muted+looped.
 * Until then a clearly-marked draft placeholder renders — never a fake
 * product screenshot.
 */
export function HeroMedia() {
  const site = getSite();
  const chips = getHeroChips();

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-primary shadow-xl shadow-primary/10">
        {site.heroVideo ? (
          <video
            src={site.heroVideo}
            poster={site.heroVideoPoster || undefined}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Rekaman layar penggunaan software Accurate"
            className="aspect-video w-full object-cover"
          />
        ) : (
          /* DRAFT placeholder — replace with real Accurate walkthrough recording. */
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary to-[#123f2d] px-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/40">
              <Play className="size-5 translate-x-0.5 fill-accent text-accent" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-primary-foreground">Video demo penggunaan Accurate</p>
            <p className="text-xs text-primary-foreground/60">DRAFT — menunggu screen recording dari klien</p>
          </div>
        )}
      </div>

      {/* Floating outcome chips — Rhetorich pattern */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 gap-3">
        {chips.map((chip) => (
          <div
            key={chip.label}
            className="flex items-baseline gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 shadow-md"
          >
            <span className="text-sm font-extrabold tabular-nums text-primary">{chip.angka}</span>
            <span className="text-xs text-muted-foreground">{chip.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
