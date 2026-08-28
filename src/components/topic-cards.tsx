import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { Topic } from "@/lib/site";

/**
 * Card grid for short titled blocks.
 *
 * variant:
 *  - "plain"    default bordered card
 *  - "numbered" prefixes an ordinal marker (used for pain points)
 *  - "check"    prefixes a check icon (used for outcomes)
 */
export function TopicCards({
  items,
  className = "",
  variant = "plain",
}: {
  items: readonly Topic[];
  className?: string;
  variant?: "plain" | "numbered" | "check";
}) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((item, idx) => (
        <Card key={item.judul} className="border-border/60">
          <CardHeader>
            {variant === "numbered" && (
              <span className="mb-2 flex size-7 items-center justify-center rounded-full bg-muted text-xs font-bold tabular-nums text-muted-foreground">
                {idx + 1}
              </span>
            )}
            {variant === "check" && (
              <span className="mb-2 flex size-7 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-4 text-primary" aria-hidden="true" />
              </span>
            )}
            <CardTitle className="text-base font-semibold">{item.judul}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">{item.isi}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
