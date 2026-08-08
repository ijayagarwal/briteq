import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pageOpenGraph, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using briteq.in and requesting BRITEQ marketing services.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: pageOpenGraph(
    "Terms & Conditions | BRITEQ",
    "Terms for using briteq.in and requesting BRITEQ marketing services.",
    "/terms-and-conditions"
  ),
};

const sections = [
  { title: "Website use", body: "This website provides general information about BRITEQ and its services. You may use it for lawful business enquiries and personal reference. You must not attempt to disrupt, misuse, scrape at harmful volume or gain unauthorised access to the site or related systems." },
  { title: "No automatic engagement", body: "Submitting an enquiry, sending a message or discussing an idea does not create a client relationship or reserve media, production capacity or campaign dates. An engagement begins only after BRITEQ and the client agree the proposal, responsibilities, commercial terms and any required advance payment." },
  { title: "Proposals and third-party costs", body: "Scope, timelines, fees, media spend, production, creator fees, platform costs and other third-party charges are defined in the relevant proposal. Availability and prices can change until confirmed. The signed or otherwise accepted proposal takes priority over general website information." },
  { title: "Results and platform changes", body: "Marketing outcomes depend on factors including offer, market, competition, budget, customer experience and third-party platforms. BRITEQ does not guarantee a fixed number of leads, sales, impressions or a specific search ranking. Any objectives or projections in a proposal are planning targets, not guarantees." },
  { title: "Content and permissions", body: "Clients are responsible for providing accurate information and confirming that they have the rights and permissions needed for supplied logos, images, claims, data and other materials. Project-specific ownership and licence terms are stated in the proposal or agreement." },
  { title: "Website accuracy and links", body: "BRITEQ aims to keep website information useful and current but does not promise that every page is complete or error-free. Links and embeds from third parties are provided for convenience; those services operate under their own terms." },
  { title: "Contact", body: `Questions about these terms can be sent to ${site.email} or ${site.address.full}.` },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & conditions" description="General terms for using this website and starting a conversation with BRITEQ." dark={false} />
      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.4fr_1fr_.25fr]">
          <aside><p className="font-display text-xs font-bold uppercase tracking-[.14em] text-ink/65">Last updated</p><p className="mt-2 font-display font-bold">9 August 2026</p></aside>
          <div className="space-y-10">
            {sections.map((section, index) => <section key={section.title} className="border-t border-ink/15 pt-8 first:border-t-0 first:pt-0"><span className="font-display text-xs font-bold text-electric">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-4 font-display text-2xl font-bold tracking-tight">{section.title}</h2><p className="mt-4 text-sm leading-7 text-ink/68">{section.body}</p></section>)}
          </div>
          <aside><Link href="/contact" className="text-link">Contact BRITEQ</Link></aside>
        </div>
      </section>
    </>
  );
}
