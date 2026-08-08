import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers3, Lightbulb, Target } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { capabilities, services } from "@/lib/content";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing Services",
  description:
    "Explore BRITEQ services across digital billboards, social media, influencers, websites, branding, creative, SEO and performance marketing in Jharkhand.",
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph(
    "Marketing Services | BRITEQ",
    "Explore BRITEQ services across digital billboards, social media, influencers, websites, branding, creative, SEO and performance marketing in Jharkhand.",
    "/services"
  ),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="BRITEQ services"
        title={<>Everything your business needs.<br /><span className="text-acid">Under one roof.</span></>}
        description="Choose one focused service or connect the right capabilities around visibility, customer acquisition and brand growth."
        cta={{ href: "/contact", label: "Build my marketing plan" }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Eight core service groups</span><h2 className="section-title mt-6">A complete system, without the agency maze.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">Each service can stand alone. The advantage comes when the message, creative, media and conversion path all work together.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link href={`/${service.slug}`} key={service.slug} className="service-card group flex flex-col rounded-[1.5rem] border border-ink/20 bg-paper p-3 transition hover:-translate-y-1 hover:shadow-crisp-sm">
                <div className="service-art" data-accent={service.accent} data-label={service.shortName} aria-hidden="true" />
                <div className="flex min-h-64 flex-col p-4 pt-5">
                  <span className="font-display text-xs font-bold text-electric">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 font-display text-2xl font-bold leading-tight tracking-[-0.04em]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{service.description}</p>
                  <span className="text-link mt-auto pt-6">View service <ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-acid">
        <div className="container-shell">
          <div className="max-w-4xl"><span className="eyebrow">How the system connects</span><h2 className="section-title mt-6">Attention is only the beginning.</h2></div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              { icon: Lightbulb, step: "01", title: "Get noticed", copy: "Outdoor, social, creator and performance campaigns put a clear idea in front of the right audience." },
              { icon: Layers3, step: "02", title: "Build confidence", copy: "Branding, content, design and websites help people understand the business and trust the next step." },
              { icon: Target, step: "03", title: "Create action", copy: "Landing experiences, search, WhatsApp and measurement turn attention into a practical conversion path." },
            ].map(({ icon: Icon, step, title, copy }, index) => (
              <div key={title} className="rounded-[1.5rem] border-2 border-ink bg-white p-7 shadow-crisp-sm">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-electric" /><span className="font-display text-xs font-bold">{step}</span></div>
                <h3 className="mt-12 font-display text-3xl font-bold tracking-[-0.045em]">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/62">{copy}</p>
                {index < 2 && <ArrowRight className="mt-8 h-5 w-5 text-ink/65 lg:ml-auto" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-28 lg:self-start"><span className="eyebrow">Capability library</span><h2 className="section-title mt-6">The exact skills your plan may need.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">Your proposal names the capabilities, deliverables and responsibilities clearly.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <div key={capability} className="flex items-center gap-4 rounded-2xl border border-ink/15 bg-white p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-acid font-display text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display font-bold">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-white py-12">
        <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-bold tracking-tight">Not sure which service to choose?</p>
          <Link href="/contact" className="button-dark">Start with the outcome <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <CTASection eyebrow="Your custom mix" title="One brief. One plan. The right capabilities." />
    </>
  );
}
