"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MODUL } from "@/lib/site";

/** Curriculum accordion per program. Keys must match PROGRAM / PROGRAM_ITEMS titles. */
export function SilabusAccordion({ judulProgram }: { judulProgram: string }) {
  const modul = MODUL[judulProgram];

  // Graceful: if no module data for this program, render nothing.
  if (!modul || modul.length === 0) return null;

  return (
    <Accordion className="mt-4 w-full">
      <AccordionItem value={`silabus-${judulProgram}`}>
        <AccordionTrigger className="text-sm font-semibold">
          Lihat silabus ({modul.length} modul)
        </AccordionTrigger>
        <AccordionContent>
          <ol className="space-y-2 pl-1">
            {modul.map((item, idx) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <span className="mt-0.5 size-5 shrink-0 rounded bg-muted text-center text-xs font-bold leading-5 tabular-nums text-muted-foreground">
                  {idx + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
