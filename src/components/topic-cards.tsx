import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Topic = Readonly<{ judul: string; isi: string }>;

export function TopicCards({ items, className = "" }: { items: readonly Topic[]; className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <Card key={item.judul} className="border-border/60">
          <CardHeader>
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
