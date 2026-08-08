import Link from "next/link";
import { ArrowUpRight, Building2, Check, ExternalLink, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/content";
import type { LocationPageData } from "@/lib/locations";
import { routeUrl, site } from "@/lib/site";

export default function LocationDetailPage({ location }: { location: LocationPageData }) {
  const pageUrl = routeUrl(location.slug);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: location.title,
      description: location.description,
      about: { "@id": `${site.url}/#organization` },
      isPartOf: { "@id": `${site.url}/#website` },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: routeUrl() },
        { "@type": "ListItem", position: 2, name: `Marketing in ${location.city}`, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={`BRITEQ · ${location.city}`}
        title={location.h1}
        description={location.intro}
        cta={{ href: "/contact", label: `Plan a campaign in ${location.city}` }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Local market perspective</span>
            <h2 className="section-title mt-6">A plan shaped around the market—not just the pin.</h2>
          </div>
          <div className="lg:pt-16">
            <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">{location.localAngle}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {location.contexts.map((context) => (
                <article key={context.title} className="rounded-[1.5rem] border border-ink/20 bg-paper p-6">
                  <Building2 className="h-6 w-6 text-electric" />
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{context.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/62">{context.description}</p>
                  <a href={context.sourceUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-ink/65 underline hover:text-electric">
                    Official source: {context.sourceLabel} <ExternalLink className="h-3 w-3" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-ink/20 bg-acid p-7 sm:p-10">
            <span className="eyebrow">Relevant audiences</span>
            <h2 className="mt-7 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Who a {location.city} campaign may need to reach.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {location.audiences.map((audience) => <div key={audience} className="flex items-center gap-2 rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm font-semibold"><Check className="h-4 w-4 text-electric" />{audience}</div>)}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-ink/20 bg-ink p-7 text-white sm:p-10">
            <span className="eyebrow-dark">Practical campaign paths</span>
            <h2 className="mt-7 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Start with a business goal.</h2>
            <div className="mt-8 space-y-3">
              {location.campaignIdeas.map((idea, index) => <div key={idea} className="flex items-center justify-between border-b border-white/15 py-3"><span className="font-display font-bold">{idea}</span><span className="text-xs text-acid">0{index + 1}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Services in {location.city}</span><h2 className="section-title mt-6">One partner across the customer journey.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">{location.availability}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link href={`/${service.slug}`} key={service.slug} className="group flex min-h-48 flex-col rounded-[1.5rem] border border-ink/20 bg-paper p-6 transition hover:-translate-y-1 hover:bg-acid hover:shadow-crisp-sm">
                <span className="font-display text-xs font-bold text-electric">0{index + 1}</span>
                <h3 className="mt-auto font-display text-xl font-bold leading-tight tracking-tight">{service.name}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold underline">Explore <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-ink/15 bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><span className="eyebrow">Local questions</span><h2 className="section-title mt-6">Planning in {location.city}.</h2></div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {[
              { q: `Does BRITEQ have an office in ${location.city}?`, a: location.office ? `Yes. BRITEQ's office is at ${site.address.full}.` : `BRITEQ is based in Giridih and serves ${location.city} as a service area. We do not present a local ${location.city} office or address.` },
              { q: `Can BRITEQ run outdoor campaigns in ${location.city}?`, a: `Outdoor and on-ground availability is confirmed for the specific location, format, permissions and campaign dates before it is included in a proposal.` },
              { q: `Can I start with only one service in ${location.city}?`, a: `Yes. Start with one focused service or combine the channels that best fit your goal, audience and budget.` },
            ].map((faq, index) => (
              <details key={faq.q} className="faq-item" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-4 py-6 font-display text-lg font-bold sm:px-6 sm:text-xl">{faq.q}</summary>
                <p className="max-w-3xl px-4 pb-7 text-sm leading-6 text-ink/62 sm:px-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow={`${location.city} marketing`} title={`Let's build a smarter growth plan for ${location.city}.`} />
    </>
  );
}
