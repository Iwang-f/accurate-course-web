import { getSite } from "@/lib/site";
import { AccurateMotionMock } from "@/components/accurate-motion-mock";

/**
 * Hero media panel. When the client has supplied a screen recording,
 * `SITE.heroVideo` is set and the video autoplays muted+looped.
 * Until then, the animated Accurate UI mockup renders — clearly marked
 * as a simulation so it's never mistaken for the real product.
 */
export function HeroMedia() {
  const site = getSite();

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
    </div>
  );
}
