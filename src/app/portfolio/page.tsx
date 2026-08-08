import type { Metadata } from "next";
import { ArrowUpRight, Check, Instagram, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { workFormats } from "@/lib/content";
import { pageOpenGraph, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio & Campaign Approach",
  description:
    "Explore BRITEQ's integrated campaign formats and view live outdoor and creative work on Instagram. Client case studies are published only with evidence and permission.",
  alternates: { canonical: "/portfolio" },
  openGraph: pageOpenGraph(
    "Portfolio & Campaign Approach | BRITEQ",
    "Explore BRITEQ's integrated campaign formats and view live outdoor and creative work on Instagram. Client case studies are published only with evidence and permission.",
    "/portfolio"
  ),
};

const liveReels = [
  { id: "DXtMvqBEzbA", label: "Institution story", focus: "Education video" },
  { id: "DWfcnu-E52Y", label: "Automotive creative", focus: "Yamaha XSR155 feature" },
  { id: "DVOz2z4E9OP", label: "Showroom campaign", focus: "Marble & interiors" },
  { id: "DVEhzTck3Qy", label: "Furniture campaign", focus: "Design & comfort" },
  { id: "DUbTOjTk5BO", label: "Celebration billboard", focus: "Personal occasions" },
  { id: "DYt2KbrzYpo", label: "Billboard in action", focus: "Local outdoor reach" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Work & campaign systems"
        title={<>Ideas designed to move from <span className="text-acid">attention to action.</span></>}
        description="Explore how BRITEQ connects outdoor, content, digital and conversion. We only publish client results when the work, evidence and permission are available."
        cta={{ href: site.instagramUrl, label: "See live work on Instagram", external: true }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Representative campaign formats</span><h2 className="section-title mt-6">One big idea. Every useful expression.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">The formats below explain BRITEQ&apos;s approach. They are clearly labelled concepts, not fabricated client case studies.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workFormats.map((work) => (
              <article key={work.number} className="overflow-hidden rounded-[1.5rem] border border-ink/20 bg-paper">
                <div className="work-visual" data-accent={work.accent} aria-hidden="true" />
                <div className="p-6">
                  <div className="flex items-center justify-between"><span className="font-display text-xs font-bold text-electric">{work.number}</span><span className="rounded-full border border-ink/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em]">BRITEQ concept</span></div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{work.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[.1em] text-[#9F0B6C]">{work.category}</p>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <span className="eyebrow"><Instagram className="h-3.5 w-3.5" /> Live on Instagram</span>
            <h2 className="section-title mt-6">See BRITEQ in the real world.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-ink/60">These links open existing BRITEQ reels directly on Instagram, keeping this site fast while showing the source material in context.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {liveReels.map((reel, index) => (
              <a href={`https://www.instagram.com/p/${reel.id}/`} target="_blank" rel="noreferrer" key={reel.id} className="group flex min-h-56 flex-col rounded-[1.5rem] border border-ink/20 bg-white p-6 transition hover:-translate-y-1 hover:bg-acid hover:text-ink hover:shadow-crisp-sm">
                <div className="flex items-center justify-between"><Instagram className="h-6 w-6" /><span className="font-display text-xs font-bold text-ink/70">0{index + 1}</span></div>
                <div className="mt-auto"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-ink/70">{reel.focus}</p><h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{reel.label}</h3><span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold underline">Watch on Instagram <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-acid">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div><span className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Our publishing standard</span><h2 className="section-title mt-6">Proof before promotion.</h2></div>
          <div className="rounded-[1.75rem] border-2 border-ink bg-white p-7 shadow-crisp sm:p-10">
            <p className="font-display text-2xl font-bold tracking-tight">A BRITEQ case study will name only what can be supported.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Approved client name or honest anonymisation", "Real brief and delivered services", "Actual timeframe and approved media", "Results with source and measurement window", "Context around what influenced the result", "Client permission before publication"].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/65"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid"><Check className="h-3 w-3" /></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <CTASection eyebrow="Your next campaign" title="Let's create work worth putting in the portfolio." />
    </>
  );
}
