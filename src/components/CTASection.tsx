import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Ready to make your brand visible?",
  description = "Get a custom plan in minutes. Chat with us on WhatsApp or browse our packages.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24">
      <div className="absolute inset-0 led-bg" />
      <div className="absolute inset-0 led-dots-bg opacity-30" />
      <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-magenta-500/30 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-display text-3xl text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hi BRITEQ, I'd like to discuss advertising for my brand.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link href="/pricing" className="btn-outline-light w-full sm:w-auto">
              View All Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
