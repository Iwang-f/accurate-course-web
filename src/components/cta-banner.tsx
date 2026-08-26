import { buttonVariants } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

type CtaBannerProps = {
  title: string;
  description: string;
  action?: string;
};

export function CtaBanner({ title, description, action = "Konsultasi via WhatsApp" }: CtaBannerProps) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <div>
        <p className="text-lg font-bold tracking-tight">{title}</p>
        <p className="mt-1 max-w-xl text-sm leading-6 text-primary-foreground/70">{description}</p>
      </div>
      <a href={SITE.whatsapp} className={buttonVariants({ size: "lg", variant: "secondary", className: "shrink-0 gap-1.5" })}>
        {action} <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
