import Link from "next/link";
import {
  Tv2,
  Megaphone,
  Palette,
  MapPin,
  Clock,
  Sparkles,
  Eye,
  ArrowRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import PricingTable from "@/components/PricingTable";
import InstagramSection from "@/components/InstagramSection";
import CTASection from "@/components/CTASection";
import { billboardPlans, comprehensivePlans } from "@/lib/pricing";

export default function HomePage() {
  const featured = [
    billboardPlans.find((p) => p.id === "weekly-ad")!,
    billboardPlans.find((p) => p.id === "reg-7-11-quarterly")!,
    comprehensivePlans.find((p) => p.id === "comp-monthly")!,
  ];

  return (
    <>
      <Hero />

      {/* Services */}
      <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Three ways we put your brand{" "}
                <span className="text-gradient">in front of customers</span>
              </>
            }
            description="Outdoor LED visibility, social-media reach, and brand-ready creative — combine them however you need."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon={Tv2}
              title="Digital LED Screen Advertising"
              description="High-impact billboard ads at Giridih's busiest junction. Day and night exposure for shops, services, and events."
              href="/services#led"
              bullets={[
                "30–45 sec ad slots",
                "Operating 7am – 11pm",
                "Modern, crystal-clear LED display",
              ]}
            />
            <ServiceCard
              icon={Megaphone}
              title="Social Media Boost & Promotion"
              description="Reach beyond the street. We manage your pages, post regularly, and run boosting for sales and recognition."
              href="/services#social"
              bullets={[
                "Min 4 reels per month",
                "Up to 10 posts per month",
                "Page management + boosting",
              ]}
            />
            <ServiceCard
              icon={Palette}
              title="Branding & Creative Design"
              description="Need creatives? We design ads optimised for the LED screen so your brand looks sharp the moment it goes live."
              href="/services#design"
              bullets={[
                "LED-optimised visuals",
                "Brand-ready creative",
                "Available as add-on service",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why BRITEQ */}
      <section className="bg-gradient-to-b from-white to-magenta-400/[0.04] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why BRITEQ"
            title={
              <>
                A premium way to be seen.{" "}
                <span className="text-gradient">Every single day.</span>
              </>
            }
            description="We combine prime outdoor visibility with smart brand presentation — built to grow your presence over time."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Prime Location",
                desc: "KB Sahay Chowk — Giridih's busiest junction. Strong, all-day visibility where people actually look.",
              },
              {
                icon: Clock,
                title: "Flexible Plans",
                desc: "Hourly, weekly, monthly, or annual — we tailor packages to your goals and budget.",
              },
              {
                icon: Sparkles,
                title: "Smart Presentation",
                desc: "Clean visuals on a modern LED display. Your ad looks amazing and reflects well on your brand.",
              },
              {
                icon: Eye,
                title: "Day & Night Reach",
                desc: "From morning rush to late evening, your brand stays visible and top-of-mind.",
              },
            ].map((f) => (
              <div key={f.title} className="card group">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="heading-display mt-4 text-lg text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location highlight */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="absolute inset-0 led-bg opacity-95" />
        <div className="absolute inset-0 led-dots-bg opacity-30" />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill-light">
                <MapPin className="h-3.5 w-3.5" />
                Prime Spot
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                Right at{" "}
                <span className="text-gradient">Giridih's busiest junction.</span>
              </h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                KB Sahay Chowk sees thousands of people daily — pedestrians,
                commuters, shoppers, and travellers. Our LED screen is positioned
                exactly where people naturally look.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur">
                  <p className="heading-display text-2xl text-white">7–11</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">
                    Hours / Day
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur">
                  <p className="heading-display text-2xl text-white">365</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">
                    Days / Year
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur">
                  <p className="heading-display text-2xl text-white">1000s</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">
                    Daily Eyes
                  </p>
                </div>
              </div>
              <Link href="/services" className="btn-primary mt-8">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1000&q=80"
                  alt="Busy city junction at night"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/65 via-purple-600/35 to-magenta-500/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
                    Now Showing
                  </p>
                  <p className="mt-3 font-display text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl">
                    YOUR BRAND
                  </p>
                  <p className="mt-2 font-display text-xl font-bold text-white/95">
                    LIVE AT KB SAHAY CHOWK
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-300" />
                    On Air · Day & Night
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-2 h-3 w-2/3 rounded-b-3xl bg-gradient-to-b from-navy-700 to-navy-900" />
              <div className="mx-auto h-10 w-2 rounded bg-navy-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Featured Plans"
            title={
              <>
                Custom pricing.{" "}
                <span className="text-gradient">Built for every budget.</span>
              </>
            }
            description="From a quick weekly ad to a full year of social-media-plus-billboard coverage. Every plan is quoted for your brand — tap Reveal Price to get yours on WhatsApp."
          />
          <div className="mt-14">
            <PricingTable plans={featured} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="btn-secondary">
              View All Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <InstagramSection />

      <CTASection />
    </>
  );
}
