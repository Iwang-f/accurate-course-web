import { Check, X } from "lucide-react";
import { getComparison } from "@/lib/site";
import { Reveal } from "@/components/motion";

/**
 * Comparison table — SayBriefly pattern. Contrasts Accurate Pro Academy
 * against generic training providers across the criteria buyers ask about.
 * Values come from getComparison(); this component renders only.
 */
export function ComparisonTable() {
  const rows = getComparison();
  const isYes = (v: string) => ["Ya", "Termasuk", "Dianjurkan"].includes(v);

  return (
    <Reveal className="mt-10">
      <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <caption className="sr-only">Perbandingan Accurate Pro Academy dengan lembaga training lain</caption>
          <thead>
            <tr className="border-b border-border/60 bg-muted/40 text-left">
              <th scope="col" className="px-6 py-4 font-semibold">Aspek</th>
              <th scope="col" className="px-6 py-4 font-semibold text-primary">Accurate Pro Academy</th>
              <th scope="col" className="px-6 py-4 font-semibold text-muted-foreground">Lembaga lain</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.aspek} className="border-b border-border/40 last:border-b-0">
                <th scope="row" className="px-6 py-4 font-medium">{row.aspek}</th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 font-semibold text-primary">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    {row.accuratePro}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <X className="size-4 shrink-0" aria-hidden="true" />
                    {row.lainnya}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
