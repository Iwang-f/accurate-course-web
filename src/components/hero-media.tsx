import { getSite, getHeroChips } from "@/lib/site";
import { AccurateMotionMock } from "@/components/accurate-motion-mock";

/**
 * Hero media panel. When the client has supplied a screen recording,
 * `SITE.heroVideo` is set and the video autoplays muted+looped.
 * Until then, the animated Accurate UI mockup renders — clearly marked
 * as a simulation so it's never mistaken for the real product.
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
          <>
            <AccurateMotionMock />
            <p className="absolute bottom-2 left-2 rounded bg-muted/80 px-2 py-0.5 text-[9px] font-medium text-muted-foreground backdrop-blur sm:text-[10px]">
              Simulasi tampilan — video asli dari klien akan menggantikan
            </p>
          </>
        )}
      </div>

      {/* Floating outcome chips — Rhetorich pattern. Width capped to viewport so chips wrap on mobile. */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 flex-wrap justify-center gap-2 px-4 sm:flex-nowrap sm:gap-3">
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
