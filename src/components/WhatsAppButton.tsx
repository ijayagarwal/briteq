import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hi BRITEQ, I'd like to explore a marketing plan for my business.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Start a WhatsApp conversation with BRITEQ"
      className="group fixed bottom-4 right-4 z-40 flex min-h-12 items-center gap-2 rounded-full border-2 border-ink bg-[#25D366] px-4 py-3 font-display text-sm font-bold text-ink shadow-crisp-sm transition hover:-translate-y-1 hover:shadow-crisp sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
