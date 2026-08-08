import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Eye, Handshake, Layers3, MapPin, Scale, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { pageOpenGraph, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "BRITEQ is a full-service marketing agency based in Giridih, bringing outdoor, digital, creative and technology together for businesses across Jharkhand.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph(
    "About BRITEQ",
    "BRITEQ is a full-service marketing agency based in Giridih, bringing outdoor, digital, creative and technology together for businesses across Jharkhand.",
    "/about"
  ),
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BRITEQ"
        title={<>Marketing works better when <span className="text-acid">every channel works together.</span></>}
        description="BRITEQ is a full-service marketing agency based in Giridih. We combine local outdoor visibility with digital reach, brand systems, content and technology."
        cta={{ href: "/contact", label: "Meet your marketing partner" }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Our role</span>
            <h2 className="section-title mt-6">One accountable team from first idea to launch.</h2>
          </div>
          <div className="lg:pt-16">
            <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink/85 sm:text-3xl">Whether you need one campaign or ongoing support, BRITEQ builds the scope around your goals, audience and budget.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Eye, title: "See the whole journey", copy: "From first attention to final enquiry, every touchpoint has a purpose." },
                { icon: Layers3, title: "Connect every channel", copy: "The strategy, message and creative stay coherent across outdoor and digital." },
                { icon: Scale, title: "Right-size the scope", copy: "Start with the smallest useful plan, then add complexity only when it earns its place." },
                { icon: Handshake, title: "Work with clarity", copy: "Scope, timelines, approvals and boundaries are visible before the work begins." },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-[1.5rem] border border-ink/20 bg-paper p-6">
                  <Icon className="h-6 w-6 text-electric" />
                  <h3 className="mt-7 font-display text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden border-y border-ink/15 bg-acid">
        <div className="container-shell">
          <span className="eyebrow">Our belief</span>
          <blockquote className="mt-8 max-w-6xl font-display text-[clamp(2.6rem,6vw,6.5rem)] font-bold leading-[0.93] tracking-[-0.065em]">
            A business should not need five disconnected vendors to tell one clear story.
          </blockquote>
          <div className="mt-10 grid gap-6 border-t-2 border-ink pt-6 md:grid-cols-3">
            <p className="font-display text-xs font-bold uppercase tracking-[.15em]">Strategy · Creative · Media · Technology</p>
            <p className="text-sm leading-6 text-ink/65 md:col-span-2">BRITEQ exists to make the work simpler: understand the growth problem, choose the right channels, build the assets, launch with discipline and improve using the evidence available.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow-dark"><MapPin className="h-3.5 w-3.5" /> Giridih, Jharkhand</span>
            <h2 className="section-title mt-6">Built locally. Ambitious for the whole state.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">Our office is in Giridih. Digital services can support businesses statewide; outdoor and on-ground work is confirmed against city, inventory and campaign dates.</p>
            <Link href="/giridih" className="button-primary mt-8">Explore Giridih services <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.05] p-7 sm:p-10">
            <div className="flex items-center justify-between"><span className="font-display text-xs font-bold uppercase tracking-[.14em] text-acid">BRITEQ office</span><Sparkles className="h-5 w-5 text-magenta" /></div>
            <address className="mt-10 not-italic">
              <p className="font-display text-3xl font-bold leading-tight tracking-[-0.04em]">{site.address.line1}<br />{site.address.line2}</p>
              <p className="mt-3 text-sm text-white/65">{site.address.state}, {site.address.country}</p>
            </address>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${site.phoneHref}`} className="button-light">Call {site.phone}</a>
              <a href={`mailto:${site.email}`} className="button-light">Email BRITEQ</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Work with BRITEQ" title="Bring the goal. We'll help shape the plan." />
    </>
  );
}
