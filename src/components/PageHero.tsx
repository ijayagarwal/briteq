import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  dark?: boolean;
  cta?: { href: string; label: string; external?: boolean };
};

export default function PageHero({ eyebrow, title, description, dark = true, cta }: Props) {
  return (
    <section className={`relative overflow-hidden border-b border-ink/15 ${dark ? "bg-ink text-white" : "bg-paper text-ink"}`}>
      <div className={`absolute inset-0 ${dark ? "grid-fade opacity-55" : "paper-grid opacity-60"}`} />
      <div className="container-shell relative py-20 sm:py-24 lg:py-32">
        <span className={dark ? "eyebrow-dark" : "eyebrow"}>{eyebrow}</span>
        <h1 className="display-title mt-7 max-w-6xl text-balance">{title}</h1>
        <div className="mt-8 grid gap-6 border-t border-current/20 pt-6 md:grid-cols-[1fr_1.15fr]">
          <p className={`font-display text-xs font-bold uppercase tracking-[0.15em] ${dark ? "text-white/75" : "text-ink/70"}`}>Strategy · Creative · Media · Technology</p>
          <div>
            <p className="max-w-2xl text-base leading-7 opacity-[0.72] sm:text-lg">{description}</p>
            {cta && (cta.external ? (
              <a href={cta.href} target="_blank" rel="noreferrer" className={`mt-7 ${dark ? "button-primary" : "button-dark"}`}>
                {cta.label} <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={cta.href} className={`mt-7 ${dark ? "button-primary" : "button-dark"}`}>
                {cta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
