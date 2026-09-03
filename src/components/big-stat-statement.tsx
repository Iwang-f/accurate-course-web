import { Reveal } from "@/components/motion";
import { getBigStat } from "@/lib/site";

/**
 * Big stat statement — SayBriefly pattern: one bold number, one sentence,
 * no card chrome. Full-width editorial break between sections.
 */
export function BigStatStatement() {
  const stat = getBigStat();
  return (
    <section className="border-y border-border/50 bg-primary px-5 py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-6xl font-semibold tabular-nums md:text-8xl">{stat.angka}</p>
          <h2 className="font-display mt-4 text-2xl font-semibold leading-snug md:text-3xl">{stat.judul}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/70 md:text-base">{stat.isi}</p>
        </Reveal>
      </div>
    </section>
  );
}
