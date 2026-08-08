import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, CircleDollarSign, FileCheck2, SlidersHorizontal } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { growthPlans } from "@/lib/content";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Marketing Plans",
  description:
    "Choose the outcome you want—visibility, customers, brand growth or complete marketing support—and get a tailored BRITEQ proposal.",
  alternates: { canonical: "/pricing" },
  openGraph: pageOpenGraph(
    "Custom Marketing Plans | BRITEQ",
    "Choose the outcome you want—visibility, customers, brand growth or complete marketing support—and get a tailored BRITEQ proposal.",
    "/pricing"
  ),
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Plans, not rigid packages"
        title={<>Custom scope. Clear proposal. <span className="text-acid">No mystery bundle.</span></>}
        description="We do not publish one-size-fits-all prices because the right scope depends on the goal, city, channels, production and media involved."
        cta={{ href: "/contact", label: "Request a tailored proposal" }}
      />

      <section className="section-pad bg-acid">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Choose an outcome</span><h2 className="section-title mt-6">What should marketing do next?</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/65">Each route is a conversation starter, not a fixed package. We recommend the smallest useful channel mix for the result you want.</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {growthPlans.map((plan) => (
              <article key={plan.id} className={`flex flex-col rounded-[1.5rem] border-2 border-ink p-6 ${plan.featured ? "bg-ink text-white shadow-[9px_9px_0_#F02BAA]" : "bg-white shadow-crisp-sm"}`}>
                <p className={`font-display text-[10px] font-bold uppercase tracking-[.16em] ${plan.featured ? "text-acid" : "text-electric"}`}>{plan.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em]">{plan.title}</h3>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? "text-white/65" : "text-ink/60"}`}>{plan.description}</p>
                <div className={`mt-6 border-t pt-5 ${plan.featured ? "border-white/20" : "border-ink/15"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-[.12em] ${plan.featured ? "text-white/75" : "text-ink/70"}`}>A useful fit for</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {plan.idealFor.map((item) => <li key={item} className="flex items-center gap-2"><Check className={`h-4 w-4 ${plan.featured ? "text-acid" : "text-electric"}`} />{item}</li>)}
                  </ul>
                </div>
                <div className={`mt-6 border-t pt-5 ${plan.featured ? "border-white/20" : "border-ink/15"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-[.12em] ${plan.featured ? "text-white/75" : "text-ink/70"}`}>May include</p>
                  <p className={`mt-3 text-sm leading-6 ${plan.featured ? "text-white/65" : "text-ink/60"}`}>{plan.channels.join(" · ")}</p>
                </div>
                <Link href={`/contact?goal=${plan.id}`} className={`mt-auto pt-8 ${plan.featured ? "text-acid" : "text-ink"} inline-flex items-center gap-1.5 font-display text-sm font-bold underline`}>Get a tailored plan <ArrowUpRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><span className="eyebrow">How your quote works</span><h2 className="section-title mt-6">Every cost has a clear job.</h2></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: SlidersHorizontal, n: "01", title: "Define scope", copy: "Goal, audience, city, channels, deliverables and timeline." },
              { icon: CircleDollarSign, n: "02", title: "Separate costs", copy: "Strategy and service fees, media, production and third parties." },
              { icon: FileCheck2, n: "03", title: "Approve clearly", copy: "Written proposal, responsibilities, milestones and assumptions." },
            ].map(({ icon: Icon, n, title, copy }) => (
              <div key={n} className="rounded-[1.5rem] border border-ink/20 bg-paper p-6"><div className="flex items-center justify-between"><Icon className="h-6 w-6 text-electric" /><span className="font-display text-xs font-bold text-ink/65">{n}</span></div><h3 className="mt-10 font-display text-xl font-bold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><span className="eyebrow">Pricing questions</span><h2 className="section-title mt-6">Before the proposal.</h2></div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {[
              { q: "Why does BRITEQ use custom pricing?", a: "A billboard campaign, website, content programme and integrated growth plan have different inputs. Custom scope keeps pricing tied to the work that is actually required." },
              { q: "Are advertising budgets included?", a: "Media spend is shown separately from management and creative fees, so the amount invested in platforms or placements stays clear." },
              { q: "Can I start small?", a: "Yes. We can recommend one focused service or a phased plan, then expand only when the next capability is useful." },
              { q: "Will I receive a written proposal?", a: "Yes. The proposal defines deliverables, responsibilities, assumptions, costs and the expected timeline before work begins." },
            ].map((faq, index) => (
              <details key={faq.q} className="faq-item" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-4 py-6 font-display text-lg font-bold sm:px-6 sm:text-xl">{faq.q}</summary><p className="max-w-3xl px-4 pb-7 text-sm leading-6 text-ink/62 sm:px-6">{faq.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Your tailored proposal" title="Tell us the outcome. We'll shape the investment." />
    </>
  );
}
