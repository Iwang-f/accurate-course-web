import { Check, X } from "lucide-react";
import { getComparison } from "@/lib/site";
import { Reveal } from "@/components/motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Comparison table — SayBriefly pattern. Contrasts Accurate Pro Academy
 * against generic training providers across the criteria buyers ask about.
 * Values come from getComparison(); this component renders only.
 */
export function ComparisonTable() {
  const rows = getComparison();

  return (
    <Reveal className="mt-10">
      <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
        <Table className="min-w-[560px]">
          <TableCaption className="sr-only">
            Perbandingan Accurate Pro Academy dengan lembaga training lain
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead className="px-6 py-4">Aspek</TableHead>
              <TableHead className="px-6 py-4 font-semibold text-primary">Accurate Pro Academy</TableHead>
              <TableHead className="px-6 py-4 font-semibold text-muted-foreground">Lembaga lain</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.aspek}>
                <TableCell className="px-6 py-4 font-medium">{row.aspek}</TableCell>
                <TableCell className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 font-semibold text-primary">
                    <Check className="size-4 shrink-0" aria-hidden="true" />
                    {row.accuratePro}
                  </span>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <X className="size-4 shrink-0" aria-hidden="true" />
                    {row.lainnya}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Reveal>
  );
}
