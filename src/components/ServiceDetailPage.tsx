import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleHelp, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { industries, process, services } from "@/lib/content";
import type { ServicePageData } from "@/lib/seo-pages";
import { site } from "@/lib/site";

export default function ServiceDetailPage({ service }: { service: ServicePageData }) {
  const related = services.filter((item) => service.related.includes(item.slug));
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${site.url}/${service.slug}#service`,
      name: service.name,
      description: service.description,
      url: `${site.url}/${service.slug}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: { "@type": "State", name: "Jharkhand" },
      serviceType: service.name,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${site.url}/${service.slug}` },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        eyebrow={`${service.name} · Jharkhand`}
        title={service.h1}
        description={service.lede}
        cta={{ href: "/contact", label: "Get a tailored plan" }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Why it matters</span>
            <h2 className="section-title mt-6">{service.promise}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:pt-16">
            {service.outcomes.map((outcome, index) => (
              <article key={outcome.title} className="rounded-[1.5rem] border border-ink/20 bg-paper p-6">
                <span className="font-display text-xs font-bold text-electric">0{index + 1}</span>
                <h3 className="mt-10 font-display text-xl font-bold leading-tight tracking-tight">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{outcome.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <span className="eyebrow">What the scope can include</span>
            <h2 className="section-title mt-6">Built around the job to be done.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-ink/60">The final deliverables are agreed after discovery. You receive a clear proposal before work begins.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((deliverable, index) => (
              <div key={deliverable} className="flex min-h-28 items-start gap-4 rounded-2xl border border-ink/15 bg-white p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-acid font-display text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                <p className="pt-1 font-display text-base font-bold leading-snug">{deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-shell">
          <div className="max-w-4xl"><span className="eyebrow-dark">The BRITEQ method</span><h2 className="section-title mt-6">Clear steps. Fewer surprises.</h2></div>
          <div className="mt-14 grid lg:grid-cols-5">
            {process.map((item, index) => (
              <div key={item.step} className={`border-t border-white/20 py-7 lg:min-h-56 lg:border-l lg:border-t-0 lg:px-6 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}>
                <div className="flex items-center justify-between"><span className="font-display text-xs font-bold text-acid">{item.step}</span>{index < process.length - 1 && <ArrowRight className="h-4 w-4 text-white/25" />}</div>
                <h3 className="mt-9 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-ink/20 bg-acid p-7 sm:p-10">
            <span className="eyebrow">A useful fit for</span>
            <h2 className="mt-7 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Businesses with a clear next move.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.fit.map((item) => <span key={item} className="rounded-full border border-ink/20 bg-white px-3 py-2 text-xs font-semibold">{item}</span>)}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-ink/20 bg-paper p-7 sm:p-10">
            <div className="flex items-center gap-3"><CircleHelp className="h-6 w-6 text-electric" /><span className="font-display text-xs font-bold uppercase tracking-[.14em] text-ink/65">Scope note</span></div>
            <h2 className="mt-7 font-display text-3xl font-bold tracking-[-0.045em] sm:text-4xl">Clarity before commitment.</h2>
            <p className="mt-6 text-sm leading-7 text-ink/62">{service.boundary}</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div><span className="eyebrow">Service questions</span><h2 className="section-title mt-6">Know before you start.</h2></div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {service.faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-4 py-6 font-display text-lg font-bold sm:px-6 sm:text-xl"><span>{faq.question}</span></summary>
                <p className="max-w-3xl px-4 pb-7 text-sm leading-6 text-ink/62 sm:px-6">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Works well with</span>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link href={`/${item.slug}`} key={item.slug} className="group rounded-[1.5rem] border border-ink/20 bg-paper p-6 transition hover:-translate-y-1 hover:bg-acid hover:shadow-crisp-sm">
                <h3 className="font-display text-xl font-bold tracking-tight">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
                <span className="text-link mt-6">Explore <ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink/65">Other industries we support include {industries.slice(0, 6).join(", ")} and more.</p>
        </div>
      </section>

      <CTASection eyebrow={service.name} title={`Ready to make ${service.name.toLowerCase()} work harder?`} />
    </>
  );
}
