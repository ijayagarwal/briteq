import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pageOpenGraph, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BRITEQ handles information and third-party services on briteq.in.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: pageOpenGraph(
    "Privacy Policy | BRITEQ",
    "How BRITEQ handles information and third-party services on briteq.in.",
    "/privacy-policy"
  ),
};

const sections = [
  { title: "Information you choose to share", body: "The consultation form prepares a message on your device and opens WhatsApp. The website does not send that form to a BRITEQ database. If you contact BRITEQ by WhatsApp, phone, email or social media, the information you share is handled through that channel and used to respond to your enquiry and prepare relevant services or proposals." },
  { title: "Website and technical information", body: "The site may be delivered through hosting and network providers that process standard technical information such as IP address, browser type, requested page and security logs. BRITEQ may add privacy-conscious analytics in the future; this policy should be updated if that changes." },
  { title: "Third-party services", body: "This website links to WhatsApp and Instagram and embeds Google Maps on the contact page. Those services may process data according to their own policies when you open or interact with them. BRITEQ does not control their data practices." },
  { title: "How information is used", body: "Information sent directly to BRITEQ may be used to answer questions, understand the requested work, prepare a proposal, communicate about an engagement, maintain business records and protect the security of our services. BRITEQ does not sell personal information." },
  { title: "Retention and choices", body: "Business enquiry records are kept only as long as reasonably needed for communication, legal, accounting or operational purposes. You may ask BRITEQ to correct or delete information held directly by BRITEQ, subject to legal and record-keeping obligations." },
  { title: "Contact", body: `For privacy questions, email ${site.email} or write to ${site.address.full}.` },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" description="A plain-language overview of information handling on this website and when you contact BRITEQ." dark={false} />
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
