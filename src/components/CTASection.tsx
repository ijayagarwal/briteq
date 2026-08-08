import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function CTASection({
  eyebrow = "Your next move",
  title = "Let's build the next stage of your business.",
  description = "Tell us where you are, what you sell and what growth looks like. We'll suggest a practical mix of channels for your goal and budget.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-electric py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="container-shell relative">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_.75fr] lg:items-end">
          <div>
            <span className="eyebrow-dark">{eyebrow}</span>
            <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.7rem,6vw,6.6rem)] font-bold leading-[0.9] tracking-[-0.065em] text-balance">{title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white sm:text-lg">{description}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="button-primary w-full sm:w-fit">
              Book a free consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={whatsappLink("Hi BRITEQ, I'd like a tailored marketing plan for my business.")} target="_blank" rel="noreferrer" className="button-light w-full sm:w-fit">
              <MessageCircle className="h-4 w-4" /> Start on WhatsApp
            </a>
          </div>
        </div>
        <p className="mt-8 border-t border-white/30 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white">No fixed package required · Start with the outcome you want</p>
      </div>
    </section>
  );
}
