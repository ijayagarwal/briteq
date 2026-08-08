import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeIndianRupee,
  Check,
  Clapperboard,
  Code2,
  Compass,
  Instagram,
  Layers3,
  MapPin,
  Megaphone,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import CapabilityMarquee from "@/components/CapabilityMarquee";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import {
  capabilities,
  faqs,
  growthPlans,
  industries,
  process,
  proofNumbers,
  services,
  workFormats,
} from "@/lib/content";
import { pageOpenGraph, routeUrl, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "BRITEQ | Jharkhand's Complete Marketing Partner" },
  description:
    "One partner for digital billboards, social media, influencer campaigns, websites, branding, creative, SEO and performance marketing across Jharkhand.",
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph(
    "BRITEQ | Jharkhand's Complete Marketing Partner",
    "One partner for digital billboards, social media, influencer campaigns, websites, branding, creative, SEO and performance marketing across Jharkhand.",
    "/"
  ),
};

const serviceIcons = {
  "digital-billboard-advertising": Megaphone,
  "social-media-management": Instagram,
  "influencer-marketing": Users,
  "website-development": Code2,
  "digital-marketing": Target,
  branding: Palette,
  "creative-design": Clapperboard,
  "seo-services": Search,
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: routeUrl(),
  name: "BRITEQ | Jharkhand's Complete Marketing Partner",
  description: site.description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
};

export default function HomePage() {
  const marqueeItems = ["Strategy", "Creative", "Media", "Technology", "Outdoor", "Digital", "Brand", "Growth"];

  return (
    <>
      <JsonLd data={homeSchema} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-electric/30 blur-3xl" />
        <div className="container-shell relative grid min-h-[calc(100svh-74px)] gap-12 py-16 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:py-20">
          <div>
            <span className="eyebrow-dark">
              <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_16px_#D8FF45]" />
              Jharkhand&apos;s complete marketing agency
            </span>
            <h1 className="display-title mt-7 max-w-4xl text-balance">
              One partner.<br />Every way to <span className="relative inline-block text-ink"><span className="absolute -inset-x-3 inset-y-0 -rotate-2 rounded-[45%] bg-acid" /><span className="relative">grow.</span></span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg lg:text-xl lg:leading-8">
              BRITEQ brings digital billboards, social media, influencer campaigns, websites, branding, creative and performance marketing into one practical growth plan.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book a free consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="button-light">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {services.slice(0, 6).map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-white/65 transition hover:border-acid hover:text-acid">
                  {service.shortName}
                </Link>
              ))}
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/65">
              <MapPin className="h-3.5 w-3.5 text-acid" /> Based in Giridih · Serving businesses across Jharkhand
            </p>
          </div>

          <div className="hero-stage" role="img" aria-label="A visual system showing BRITEQ's outdoor, social media and website capabilities">
            <div className="hero-browser animate-float-delayed" aria-hidden="true">
              <div className="flex gap-1 border-b border-ink/15 px-3 py-2"><span className="h-2 w-2 rounded-full bg-magenta" /><span className="h-2 w-2 rounded-full bg-acid" /><span className="h-2 w-2 rounded-full bg-sky" /></div>
              <div className="p-3">
                <div className="rounded-lg bg-ink p-4 text-white">
                  <p className="font-display text-[9px] font-bold uppercase tracking-[.16em] text-acid">Built to convert</p>
                  <p className="mt-2 font-display text-xl font-bold leading-none">Your business,<br />clearly.</p>
                  <div className="mt-4 h-2 w-20 rounded-full bg-electric" />
                </div>
              </div>
            </div>

            <div className="hero-billboard animate-float" aria-hidden="true">
              <div className="flex items-center justify-between border-b-2 border-ink pb-2 font-display text-[9px] font-bold uppercase tracking-[.15em]"><span>BRITEQ OOH</span><span>Giridih · Jharkhand</span></div>
              <p className="py-7 font-display text-[clamp(2.7rem,6vw,5.2rem)] font-bold leading-[0.78] tracking-[-0.08em]">BE<br />SEEN.</p>
              <div className="flex items-center justify-between border-t-2 border-ink pt-2 text-[9px] font-bold uppercase tracking-[.15em]"><span>Idea → attention</span><ArrowRight className="h-4 w-4" /></div>
            </div>

            <div className="hero-phone animate-float-delayed" aria-hidden="true">
              <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-ink/15" />
              <div className="rounded-[1.35rem] bg-magenta p-3 text-white">
                <div className="flex items-center gap-2"><div className="grid h-7 w-7 place-items-center rounded-full bg-white font-display text-[9px] font-bold text-ink">BQ</div><div><div className="h-1.5 w-14 rounded bg-white" /><div className="mt-1 h-1 w-9 rounded bg-white/50" /></div></div>
                <div className="mt-3 grid aspect-square place-items-center rounded-xl bg-ink p-3 text-center font-display text-2xl font-bold leading-none">STOP<br />SCROLLING.</div>
                <div className="mt-3 flex gap-2"><span className="h-2 w-2 rounded-full bg-white" /><span className="h-2 w-2 rounded-full bg-white/50" /><span className="h-2 w-10 rounded-full bg-white/30" /></div>
              </div>
            </div>
            <div className="hero-sticker" aria-hidden="true">ONE<br />TEAM<br />→</div>
          </div>
        </div>
        <a href="#services" aria-label="Continue to services" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/20 p-3 text-white/65 transition hover:border-acid hover:text-acid lg:block">
          <ArrowDown className="h-4 w-4" />
        </a>
      </section>

      <CapabilityMarquee items={marqueeItems} />

      <section className="border-b border-ink/15 bg-paper">
        <div className="container-shell grid sm:grid-cols-2 lg:grid-cols-4">
          {proofNumbers.map((number, index) => (
            <div key={number.label} className={`py-8 sm:p-8 ${index > 0 ? "border-t border-ink/15 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0" : ""}`}>
              <p className="font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl"><AnimatedCounter value={number.value} suffix={number.suffix} /></p>
              <p className="mt-2 text-sm font-semibold text-ink/65">{number.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">The big idea</span>
            <h2 className="section-title mt-6 max-w-2xl">Connected marketing beats disconnected activity.</h2>
          </div>
          <div className="lg:pt-16">
            <p className="max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink/85 sm:text-3xl">
              Start with one service—or combine the right channels around a single goal: more visibility, more enquiries or a stronger brand.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Compass, title: "Strategy first", copy: "We begin with the business goal, audience and budget before choosing tactics." },
                { icon: Layers3, title: "One connected system", copy: "Outdoor, social, creative and digital carry one clear message forward." },
                { icon: Sparkles, title: "Made to fit", copy: "The scope is built around what the business actually needs—not a rigid bundle." },
                { icon: BadgeIndianRupee, title: "Transparent scope", copy: "Deliverables, media, production and third-party costs are separated clearly." },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-2xl border border-ink/15 bg-paper p-6">
                  <Icon className="h-6 w-6 text-electric" />
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <span className="eyebrow">Everything under one roof</span>
              <h2 className="section-title mt-6 max-w-5xl text-balance">Everything your business needs to get noticed—and chosen.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/62 lg:justify-self-end">Eight connected service groups. Choose one focused engagement or build an integrated plan around your next business goal.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              return (
                <article key={service.slug} className="service-card group flex flex-col rounded-[1.5rem] border border-ink/20 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-crisp-sm">
                  <div className="service-art" data-accent={service.accent} data-label={service.shortName} aria-hidden="true" />
                  <div className="flex flex-1 flex-col p-4 pt-5">
                    <div className="flex items-center justify-between"><Icon className="h-5 w-5 text-electric" /><span className="font-display text-xs font-bold text-ink/65">0{index + 1}</span></div>
                    <h3 className="mt-5 font-display text-xl font-bold leading-tight tracking-[-0.035em]">{service.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">{service.description}</p>
                    <Link href={`/${service.slug}`} className="text-link mt-auto pt-6">Explore service <ArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[1.75rem] border border-ink/20 bg-ink p-6 text-white sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[.55fr_1.45fr]">
              <div><p className="font-display text-xs font-bold uppercase tracking-[.16em] text-acid">15 connected capabilities</p><p className="mt-3 max-w-xs text-sm leading-6 text-white/65">One plan can connect the exact skills your campaign requires.</p></div>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((capability) => <span key={capability} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70">{capability}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden bg-ink text-white">
        <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow-dark">Our Jharkhand network</span>
            <h2 className="section-title mt-6">Built here.<br /><span className="text-acid">Designed to travel.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">BRITEQ is based in Giridih and plans campaigns for businesses across Jharkhand. Digital services are available statewide; outdoor and on-ground availability depends on the city, inventory and campaign dates.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.serviceAreas.map((city) => {
                const linked = ["Giridih", "Ranchi", "Dhanbad", "Bokaro", "Jamshedpur", "Deoghar"].includes(city);
                return linked ? <Link key={city} href={`/${city.toLowerCase()}`} className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-acid hover:text-acid">{city}</Link> : <span key={city} className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/70">{city}</span>;
              })}
            </div>
            <Link href="/contact" className="button-primary mt-8">Plan a campaign in your city <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <nav className="city-network" aria-label="BRITEQ service areas across Jharkhand">
            <div className="absolute left-1/2 top-1/2 h-[58%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] border border-white/15 bg-electric/10 blur-[1px]" />
            <Link href="/giridih" className="city-node left-[44%] top-[48%]" data-home="true">Giridih · Office</Link>
            <Link href="/ranchi" className="city-node left-[12%] top-[62%]">Ranchi</Link>
            <Link href="/dhanbad" className="city-node right-[10%] top-[32%]">Dhanbad</Link>
            <Link href="/bokaro" className="city-node left-[22%] top-[35%]">Bokaro</Link>
            <Link href="/jamshedpur" className="city-node bottom-[12%] right-[13%]">Jamshedpur</Link>
            <Link href="/deoghar" className="city-node right-[14%] top-[14%]">Deoghar</Link>
            <span className="city-node bottom-[12%] left-[34%]">Ramgarh</span>
            <span className="city-node left-[37%] top-[14%]">Hazaribagh</span>
          </nav>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Industries we support</span><h2 className="section-title mt-6 max-w-4xl">Marketing shaped around how your business sells.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">A clinic earns trust differently from a restaurant or a real-estate project. We choose the message, channel mix and conversion path around your audience.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link href="/industries" key={industry} className="group flex min-h-24 items-center justify-between border-b border-ink/20 px-1 py-5 transition hover:bg-acid sm:px-5 sm:even:border-l lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+3)]:border-l">
                <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">{industry}</span><span className="font-display text-xs font-bold text-ink/65">{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-ink/15 bg-paper">
        <div className="container-shell">
          <div className="max-w-4xl"><span className="eyebrow">How we work</span><h2 className="section-title mt-6">From business problem to growth system.</h2></div>
          <div className="mt-14 grid lg:grid-cols-5">
            {process.map((item, index) => (
              <div key={item.step} className={`relative border-t border-ink/25 px-1 py-7 lg:min-h-64 lg:border-l lg:border-t-0 lg:px-6 ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`}>
                <div className="flex items-center justify-between"><span className="font-display text-xs font-bold text-electric">{item.step}</span>{index < process.length - 1 && <ArrowRight className="h-4 w-4 text-ink/30" />}</div>
                <h3 className="mt-10 font-display text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Campaign concepts</span><h2 className="section-title mt-6">Campaign systems, not isolated deliverables.</h2></div>
            <div><p className="text-base leading-7 text-ink/62">Representative BRITEQ campaign formats. Approved client case studies will be published only with real work, evidence and permission.</p><Link href="/portfolio" className="text-link mt-5">Explore our approach <ArrowUpRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {workFormats.map((work) => (
              <article key={work.number} className="overflow-hidden rounded-[1.5rem] border border-ink/20 bg-paper">
                <div className="work-visual" data-accent={work.accent} aria-hidden="true" />
                <div className="p-6">
                  <div className="flex items-center justify-between"><span className="font-display text-xs font-bold text-electric">{work.number}</span><span className="text-[10px] font-bold uppercase tracking-[.14em] text-ink/65">BRITEQ concept</span></div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">{work.title}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[.1em] text-[#9F0B6C]">{work.category}</p>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-acid">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow">Custom plans</span><h2 className="section-title mt-6">Start with the outcome you want.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/65">We do not publish one-size-fits-all prices. Your proposal separates strategy, deliverables, media, production and third-party costs clearly.</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {growthPlans.map((plan) => (
              <article key={plan.id} className={`flex flex-col rounded-[1.5rem] border-2 border-ink p-6 ${plan.featured ? "bg-ink text-white shadow-[9px_9px_0_#F02BAA]" : "bg-white shadow-crisp-sm"}`}>
                <p className={`font-display text-[10px] font-bold uppercase tracking-[.16em] ${plan.featured ? "text-acid" : "text-electric"}`}>{plan.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-none tracking-[-0.04em]">{plan.title}</h3>
                <p className={`mt-4 min-h-16 text-sm leading-6 ${plan.featured ? "text-white/65" : "text-ink/60"}`}>{plan.description}</p>
                <div className={`mt-5 border-t pt-5 ${plan.featured ? "border-white/20" : "border-ink/15"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-[.12em] ${plan.featured ? "text-white/75" : "text-ink/70"}`}>May include</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {plan.channels.map((channel) => <li key={channel} className="flex items-center gap-2"><Check className={`h-4 w-4 ${plan.featured ? "text-acid" : "text-electric"}`} />{channel}</li>)}
                  </ul>
                </div>
                <Link href={`/contact?goal=${plan.id}`} className={`mt-7 w-full ${plan.featured ? "button-primary" : "button-dark"}`}>Get a tailored plan <ArrowUpRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><span className="eyebrow-dark">The BRITEQ standard</span><h2 className="section-title mt-6">A better agency relationship starts with clarity.</h2></div>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/15 sm:grid-cols-2">
            {[
              { title: "Clear scope", copy: "Know what is included, what is separate and what happens next." },
              { title: "Connected thinking", copy: "Every channel supports one commercial goal and one coherent message." },
              { title: "Practical communication", copy: "Decisions, approvals and timelines stay visible throughout the work." },
              { title: "Honest measurement", copy: "We define what can be measured and never promise fixed leads or rankings." },
            ].map((item, index) => (
              <div key={item.title} className="bg-ink p-7 sm:p-9"><span className="font-display text-xs font-bold text-acid">0{index + 1}</span><h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{item.copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-28 lg:self-start"><span className="eyebrow">Frequently asked</span><h2 className="section-title mt-6">Good questions before good growth.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">Still unsure where to begin? Tell us the outcome you want, and we&apos;ll help shape the brief.</p></div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item transition" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-4 py-6 font-display text-lg font-bold tracking-tight sm:px-6 sm:text-xl">
                  <span className="flex gap-4"><span className="text-xs text-electric">{String(index + 1).padStart(2, "0")}</span>{faq.question}</span>
                </summary>
                <p className="max-w-3xl px-4 pb-7 pr-12 text-sm leading-6 text-ink/62 sm:px-6 sm:pl-14">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-ink/15 bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-start">
          <div>
            <span className="eyebrow">Let&apos;s grow your business</span>
            <h2 className="section-title mt-6">Tell us what better looks like.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink/62">Share the business, city and goal. We&apos;ll turn it into a practical channel and deliverables conversation.</p>
            <div className="mt-9 space-y-4 border-t border-ink/15 pt-6 text-sm">
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 font-semibold hover:text-electric"><span className="grid h-10 w-10 place-items-center rounded-full bg-acid"><MessageCircle className="h-4 w-4" /></span>{site.phone}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 font-semibold hover:text-electric"><span className="grid h-10 w-10 place-items-center rounded-full bg-sky"><ArrowUpRight className="h-4 w-4" /></span>{site.email}</a>
            </div>
            <a href={whatsappLink("Hi BRITEQ, I'd like help choosing the right marketing services.")} target="_blank" rel="noreferrer" className="text-link mt-7">Prefer a quick WhatsApp chat? <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
