import { Badge } from "@/components/ui/badge";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-border/50 px-5 py-14 sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{eyebrow}</Badge>
        <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground text-pretty md:text-lg">{description}</p>
      </div>
    </section>
  );
}
