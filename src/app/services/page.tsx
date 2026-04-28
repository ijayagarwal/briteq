import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv2,
  Megaphone,
  Palette,
  CheckCircle2,
  Compass,
  ListChecks,
  PenTool,
  Rocket,
  Instagram,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital LED billboard advertising, social media boost & promotion, and creative branding & design — built for local businesses in Giridih.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title={
          <>
            Three services.{" "}
            <span className="text-gradient">One goal: visibility.</span>
          </>
        }
        description="Outdoor LED, social media, and brand-ready creative — pick what you need or combine them for maximum reach."
      />

      {/* Quick nav */}
      <section className="border-b border-navy-800/10 bg-white">
        <div className="container-x flex flex-wrap gap-2 py-5 sm:gap-3">
          {[
            { href: "#led", label: "LED Billboard" },
            { href: "#social", label: "Social Media" },
            { href: "#design", label: "Branding & Design" },
            { href: "#how", label: "How It Works" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-navy-800/15 bg-white px-4 py-2 text-xs font-semibold text-navy-900 transition-colors hover:border-magenta-400 hover:text-magenta-500 sm:text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* LED */}
      <section id="led" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">
                <Tv2 className="h-3.5 w-3.5" />
                Service 01
              </span>
              <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
                Digital LED Screen{" "}
                <span className="text-gradient">Advertising</span>
              </h2>
              <p className="mt-4 text-base text-navy-900/75 sm:text-lg">
                High-impact outdoor billboard advertising at Giridih's busiest
                junction. Ideal for local shops, services, and events to reach
                thousands of customers daily — day and night.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy-900/80">
                {[
                  "Each ad runs for 30 to 45 seconds",
                  "Slot rotation: 4 to 10 ads per slot",
                  "Operating hours: 7am – 11pm",
                  "Flexible: hourly, weekly, monthly, or annual",
                  "Bring your content — or we'll create it (additional charge)",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-magenta-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn-primary mt-8">
                See LED Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1000&q=80"
                  alt="Glowing neon and LED signage"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/65 via-purple-600/35 to-magenta-500/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
                    Now Live
                  </p>
                  <p className="mt-3 font-display text-3xl font-extrabold text-white drop-shadow-lg sm:text-5xl">
                    YOUR BRAND
                  </p>
                  <p className="mt-2 font-display text-lg font-bold text-white/95">
                    KB Sahay Chowk · Giridih
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-300" />
                    30–45 second spot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section id="social" className="scroll-mt-24 bg-gradient-to-b from-white to-magenta-400/[0.04] py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl border border-navy-800/10 bg-white p-5 shadow-sm sm:p-6">
                {/* IG profile header */}
                <div className="mb-5 flex items-center justify-between border-b border-navy-800/10 pb-5">
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-900">{site.instagramHandle}</p>
                      <p className="text-xs text-navy-900/60">Latest Reels from BRITEQ</p>
                    </div>
                  </a>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-magenta-500 px-4 py-1.5 text-xs font-semibold text-white shadow hover:scale-[1.03]"
                  >
                    Follow
                  </a>
                </div>

                {/* Real IG reel embeds */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "DWfcnu-E52Y", label: "Reel 01" },
                    { id: "DVOz2z4E9OP", label: "Reel 02" },
                    { id: "DVEhzTck3Qy", label: "Reel 03" },
                    { id: "DUbTOjTk5BO", label: "Reel 04" },
                  ].map((r) => (
                    <div
                      key={r.id}
                      className="group relative overflow-hidden rounded-xl border border-navy-800/10 bg-navy-950 shadow-sm transition-all hover:shadow-glow"
                    >
                      <div className="absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-navy-900 shadow">
                        <Instagram className="h-2.5 w-2.5" />
                        {r.label}
                      </div>
                      <iframe
                        src={`https://www.instagram.com/p/${r.id}/embed/?cr=1&v=14&wp=540`}
                        loading="lazy"
                        allow="encrypted-media"
                        scrolling="no"
                        className="block h-[420px] w-full border-0 bg-white sm:h-[460px]"
                        title={`Instagram reel ${r.label}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-navy-800/10 pt-5 text-center">
                  <div>
                    <p className="heading-display text-base text-navy-900 sm:text-lg">4+</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/60">Reels / mo</p>
                  </div>
                  <div>
                    <p className="heading-display text-base text-navy-900 sm:text-lg">10</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/60">Posts / mo</p>
                  </div>
                  <div>
                    <p className="heading-display text-base text-navy-900 sm:text-lg">Boost</p>
                    <p className="text-[10px] uppercase tracking-wider text-navy-900/60">Included</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="pill">
                <Megaphone className="h-3.5 w-3.5" />
                Service 02
              </span>
              <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
                Social Media Boost{" "}
                <span className="text-gradient">& Promotion</span>
              </h2>
              <p className="mt-4 text-base text-navy-900/75 sm:text-lg">
                Reach customers beyond the street and into nearby regions. We
                manage your social pages, post regularly, and run boosting to
                drive sales and brand recognition.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy-900/80">
                {[
                  "Minimum 4 reels per month",
                  "Up to 10 social posts per month",
                  "Page management + audience growth",
                  "Boosted promotions for sales",
                  "Reach beyond Giridih",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-magenta-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="btn-primary mt-8">
                Comprehensive Plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section id="design" className="scroll-mt-24 bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">
                <Palette className="h-3.5 w-3.5" />
                Service 03
              </span>
              <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
                Branding &{" "}
                <span className="text-gradient">Creative Design</span>
              </h2>
              <p className="mt-4 text-base text-navy-900/75 sm:text-lg">
                Don't have an ad ready? No problem. Our team designs creatives
                optimised for the LED screen so your brand looks sharp the
                moment it goes live.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy-900/80">
                {[
                  "Modern, LED-optimised visuals",
                  "Brand-consistent design",
                  "Eye-catching motion graphics",
                  "Available as add-on with any plan",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-magenta-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-magenta-400/30 bg-magenta-400/5 p-4 text-sm text-navy-900/80">
                <strong className="text-navy-900">Note:</strong> If you provide your own
                content, you're set. If you need creative from us, it's available
                for an additional charge.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80",
                    icon: Play,
                    label: "Reel",
                    headline: "30 SEC",
                    sub: "Motion Spot",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80",
                    icon: Megaphone,
                    label: "Static Ad",
                    headline: "BIG SALE",
                    sub: "Up to 50% off",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
                    icon: Tv2,
                    label: "LED Spot",
                    headline: "ON SCREEN",
                    sub: "KB Sahay Chowk",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
                    icon: Sparkles,
                    label: "Story",
                    headline: "JUST IN",
                    sub: "Fresh drop",
                  },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.label}
                      className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-md"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.img}
                        alt={c.label}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

                      <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-navy-900">
                        <Icon className="h-2.5 w-2.5" />
                        {c.label}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 px-4 py-3.5">
                        <p className="font-display text-xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-2xl">
                          {c.headline}
                        </p>
                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/85">
                          {c.sub}
                        </p>
                        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-magenta-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                          BRITEQ · Designed
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-24 bg-navy-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 led-bg opacity-95" />
        <div className="absolute inset-0 led-dots-bg opacity-30" />
        <div className="container-x relative">
          <SectionHeading
            light
            eyebrow="How It Works"
            title={
              <>
                From first chat to live{" "}
                <span className="text-gradient">on screen.</span>
              </>
            }
            description="Four simple steps to get your brand seen."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Compass, step: "01", title: "Consult", desc: "Tell us your goals, your audience, and your timeline." },
              { icon: ListChecks, step: "02", title: "Choose Package", desc: "Pick a billboard slot, social plan, or comprehensive bundle." },
              { icon: PenTool, step: "03", title: "Create / Provide", desc: "Send us your content — or we design it for you." },
              { icon: Rocket, step: "04", title: "Go Live", desc: "Your ad runs at KB Sahay Chowk, day and night." },
            ].map((s) => (
              <div key={s.step} className="card-dark">
                <p className="heading-display text-3xl text-magenta-400">{s.step}</p>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="heading-display mt-4 text-lg text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
