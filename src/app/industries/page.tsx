import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Car,
  GraduationCap,
  Hammer,
  HeartPulse,
  Hotel,
  House,
  Rocket,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Explore practical marketing approaches for retail, restaurants, healthcare, education, real estate, hotels, automobile, construction, events and startups in Jharkhand.",
  alternates: { canonical: "/industries" },
  openGraph: pageOpenGraph(
    "Industries We Support | BRITEQ",
    "Explore practical marketing approaches for retail, restaurants, healthcare, education, real estate, hotels, automobile, construction, events and startups in Jharkhand.",
    "/industries"
  ),
};

const industryCards = [
  { icon: ShoppingBag, name: "Retail", need: "Be found, visited and remembered locally.", channels: "Outdoor · Social · Local search" },
  { icon: Utensils, name: "Restaurants", need: "Turn appetite and occasion into visits and orders.", channels: "Content · Creators · Performance" },
  { icon: HeartPulse, name: "Healthcare", need: "Build clarity, confidence and responsible discovery.", channels: "Website · Search · Content" },
  { icon: GraduationCap, name: "Education", need: "Connect programmes to the right student and parent audience.", channels: "Campaigns · Web · Admissions" },
  { icon: House, name: "Real estate", need: "Turn interest into qualified site visits and conversations.", channels: "Brand · Leads · Outdoor" },
  { icon: Hotel, name: "Hospitality", need: "Capture intent before arrival and inspire direct bookings.", channels: "Search · Social · Website" },
  { icon: BriefcaseBusiness, name: "Jewellery", need: "Balance aspiration, trust and high-intent seasonal demand.", channels: "Brand · Creative · Outdoor" },
  { icon: Car, name: "Automobile", need: "Create model interest and move prospects toward a showroom visit.", channels: "Video · Leads · Local media" },
  { icon: Hammer, name: "Construction", need: "Explain capability and build B2B or project confidence.", channels: "Brand · Website · B2B content" },
  { icon: Building2, name: "Public campaigns", need: "Communicate a clear message responsibly across locations.", channels: "Outdoor · Digital · Creative" },
  { icon: CalendarDays, name: "Events", need: "Build urgency, attendance and useful pre-event action.", channels: "Creators · Outdoor · Social" },
  { icon: Rocket, name: "Startups", need: "Clarify the offer, earn trust and test a focused growth path.", channels: "Brand · Website · Performance" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we support"
        title={<>Marketing shaped around <span className="text-acid">how your business sells.</span></>}
        description="A clinic earns trust differently from a restaurant or a real-estate project. We choose the message, channel mix and conversion path around your audience."
        cta={{ href: "/contact", label: "Discuss my industry" }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Twelve business contexts</span><h2 className="section-title mt-6">Different decisions need different marketing.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">These are sectors BRITEQ is equipped to support—not a claim that every organisation or category shown is an existing client.</p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryCards.map(({ icon: Icon, name, need, channels }, index) => (
              <article key={name} className="group rounded-[1.5rem] border border-ink/20 bg-paper p-6 transition hover:-translate-y-1 hover:bg-acid hover:shadow-crisp-sm">
                <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full bg-white"><Icon className="h-5 w-5 text-electric" /></span><span className="font-display text-xs font-bold text-ink/65">{String(index + 1).padStart(2, "0")}</span></div>
                <h3 className="mt-9 font-display text-2xl font-bold tracking-tight">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/62">{need}</p>
                <p className="mt-8 border-t border-ink/15 pt-4 text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">{channels}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-acid">
        <div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div><span className="eyebrow">Our decision filter</span><h2 className="section-title mt-6">Before a channel, four answers.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border-2 border-ink bg-ink sm:grid-cols-2">
            {[
              { n: "01", q: "Who must act?", a: "Define the audience by need, location and buying stage." },
              { n: "02", q: "What must they believe?", a: "Find the message that creates clarity and confidence." },
              { n: "03", q: "Where can we reach them?", a: "Choose the few channels that fit real behaviour." },
              { n: "04", q: "What happens next?", a: "Create a clear call, visit, booking or enquiry path." },
            ].map((item) => (
              <div key={item.n} className="bg-white p-7 sm:p-9"><span className="font-display text-xs font-bold text-electric">{item.n}</span><h3 className="mt-10 font-display text-2xl font-bold tracking-tight">{item.q}</h3><p className="mt-3 text-sm leading-6 text-ink/60">{item.a}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/15 bg-white py-12">
        <div className="container-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-display text-xl font-bold">Your industry is not on the list?</p><p className="mt-1 text-sm text-ink/65">Start with the business model and customer journey instead.</p></div>
          <Link href="/contact" className="button-dark">Tell us how you sell <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <CTASection eyebrow="Industry-specific planning" title="Bring the business context. We'll build the marketing logic." />
    </>
  );
}
