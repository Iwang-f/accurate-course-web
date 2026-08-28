import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TrainingPricingGroup } from "@/lib/pricing";

export function PricingCards({ groups }: { groups: readonly TrainingPricingGroup[] }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {groups.map((group) => (
        <Card key={group.kategori} className="border-border/60">
          <CardContent className="p-0">
            <div className="border-b border-border/60 px-6 py-5">
              <h3 className="text-lg font-bold">{group.kategori}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{group.catatan}</p>
            </div>
            <div className="divide-y divide-border/60">
              {group.paket.map((p) => (
                <div
                  key={p.nama}
                  className={`grid grid-cols-[1fr_auto] items-center gap-2 px-6 py-4 ${
                    p.unggulan ? "bg-highlight/10" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">{p.nama}</p>
                      {p.unggulan && (
                        <Badge className="bg-highlight text-highlight-foreground hover:bg-highlight/90">
                          Direkomendasikan
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{p.durasi}</p>
                  </div>
                  <p className="text-sm font-bold tabular-nums text-primary">{p.harga}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
