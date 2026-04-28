"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import PageHero from "@/components/PageHero";
import PricingTable from "@/components/PricingTable";
import CTASection from "@/components/CTASection";
import {
  billboardPlans,
  comprehensivePlans,
  PricingPlan,
} from "@/lib/pricing";

type Tab = "billboard" | "comprehensive";

export default function PricingPage() {
  const [tab, setTab] = useState<Tab>("billboard");

  const billboardGroups: { title: string; subtitle: string; plans: PricingPlan[] }[] = [
    {
      title: "Weekly Plans",
      subtitle: "7am – 11pm · Short-term campaigns",
      plans: billboardPlans.filter((p) => p.category === "Weekly"),
    },
    {
      title: "Alternate Days · 7am – 7pm",
      subtitle: "Cost-effective long-run reach",
      plans: billboardPlans.filter(
        (p) => p.category === "Alternate Days" && p.hours === "7am – 7pm"
      ),
    },
    {
      title: "Alternate Days · 7am – 11pm",
      subtitle: "Extended evening visibility",
      plans: billboardPlans.filter(
        (p) => p.category === "Alternate Days" && p.hours === "7am – 11pm"
      ),
    },
    {
      title: "Regular · 7am – 7pm",
      subtitle: "Daily plays, daytime focus",
      plans: billboardPlans.filter(
        (p) => p.category === "Regular" && p.hours === "7am – 7pm"
      ),
    },
    {
      title: "Regular · 7am – 11pm",
      subtitle: "Maximum daily impressions, day & night",
      plans: billboardPlans.filter(
        (p) => p.category === "Regular" && p.hours === "7am – 11pm"
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Plans that fit{" "}
            <span className="text-gradient">every brand & budget.</span>
          </>
        }
        description="Pick a billboard-only plan, or combine it with social media management for total reach."
      />

      {/* Tabs */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-x">
          <div className="mx-auto flex w-fit rounded-full border border-navy-800/15 bg-white p-1 shadow-sm">
            <button
              onClick={() => setTab("billboard")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === "billboard"
                  ? "bg-gradient-to-r from-purple-600 to-magenta-500 text-white shadow"
                  : "text-navy-900/70 hover:text-navy-900"
              }`}
            >
              Billboard Only
            </button>
            <button
              onClick={() => setTab("comprehensive")}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                tab === "comprehensive"
                  ? "bg-gradient-to-r from-purple-600 to-magenta-500 text-white shadow"
                  : "text-navy-900/70 hover:text-navy-900"
              }`}
            >
              Social Media + Billboard
            </button>
          </div>

          {/* Info note */}
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-magenta-400/30 bg-magenta-400/5 p-5">
            <div className="flex gap-3">
              <Info className="h-5 w-5 shrink-0 text-magenta-500" />
              <div className="text-sm text-navy-900/80">
                <p className="font-semibold text-navy-900">Good to know</p>
                <ul className="mt-2 space-y-1.5 list-disc pl-4">
                  <li>Each ad runs for <strong>30 to 45 seconds</strong>.</li>
                  <li>Maximum <strong>4 to 10 ads per slot</strong>, depending on the package.</li>
                  <li>Bring your own creative — or we'll design it for an additional charge.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tables */}
      {tab === "billboard" && (
        <section className="bg-white pb-20 md:pb-28">
          <div className="container-x space-y-16">
            {billboardGroups.map((g) => (
              <div key={g.title}>
                <div className="mb-8">
                  <h2 className="heading-display text-2xl text-navy-900 sm:text-3xl">
                    {g.title}
                  </h2>
                  <p className="mt-1 text-sm text-navy-900/65">{g.subtitle}</p>
                </div>
                <PricingTable plans={g.plans} />
              </div>
            ))}
          </div>
        </section>
      )}

      {tab === "comprehensive" && (
        <section className="bg-white pb-20 md:pb-28">
          <div className="container-x">
            <div className="mb-8 max-w-2xl">
              <h2 className="heading-display text-2xl text-navy-900 sm:text-3xl">
                Social Media Management + Billboard
              </h2>
              <p className="mt-1 text-sm text-navy-900/65">
                Combines digital page management with ground-level billboard
                advertising — maximum reach, single plan.
              </p>
            </div>
            <PricingTable plans={comprehensivePlans} variant="comprehensive" />
          </div>
        </section>
      )}

      <CTASection
        title="Not sure which plan fits?"
        description="Tell us about your business — we'll recommend the right package and timing."
      />
    </>
  );
}
