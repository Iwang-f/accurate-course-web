import { MessageCircle } from "lucide-react";
import { getSite } from "@/lib/site";

/**
 * Sticky WhatsApp FAB — Indonesian market standard. Fixed bottom-right,
 * minimum 48px tap target, hidden on print. Label appears from `sm` up.
 */
export function WhatsAppFab() {
  return (
    <a
      href={getSite().whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp untuk konsultasi training"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 print:hidden"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Konsultasi</span>
    </a>
  );
}
