import type { Metadata } from "next";
import { MapPin, Heart, Eye, Sparkles, Repeat } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "BRITEQ helps Giridih businesses stand out through high-impact LED screen promotions and smart brand visibility solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BRITEQ"
        title={
          <>
            Premium digital advertising,{" "}
            <span className="text-gradient">made for Giridih.</span>
          </>
        }
        description="We help local businesses, shops, services, and events stand out — with consistent exposure, professional visuals, and meaningful reach."
      />

      {/* Story */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">Our Story</span>
              <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
                A simple idea: make local brands{" "}
                <span className="text-gradient">impossible to miss.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-900/75">
                <p>
                  BRITEQ began with the belief that the best brand growth comes
                  from being seen — every day, in the right place, looking sharp.
                  Outdoor LED screens give businesses something traditional ads
                  rarely deliver: real-world presence at the heart of their city.
                </p>
                <p>
                  We're set up at <strong>KB Sahay Chowk</strong>, Giridih's busiest
                  junction. From there, we help businesses combine ground-level LED
                  visibility with online presence through social media — so brands
                  show up consistently, online and offline.
                </p>
                <p>
                  Our mission is simple: <em>illuminate your brand, digitally.</em>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-navy-800/10 bg-navy-900 shadow-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
                  alt="Vibrant illuminated lights"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-purple-700/55 to-magenta-500/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/85">
                    Mission
                  </p>
                  <p className="mt-4 font-display text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl">
                    Illuminate Your Brand,
                  </p>
                  <p className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl">
                    Digitally.
                  </p>
                  <p className="mt-6 max-w-xs text-sm text-white/90">
                    Consistent exposure. Professional visuals. Meaningful reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-white to-magenta-400/[0.04] py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <span className="pill">What We Stand For</span>
            <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
              Four principles that{" "}
              <span className="text-gradient">guide every campaign.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Eye,
                title: "Visibility",
                desc: "If they can't see you, they can't choose you. We make sure your brand is front-and-centre.",
              },
              {
                icon: Repeat,
                title: "Consistency",
                desc: "Daily exposure builds memory. Showing up every day is what makes a brand recognisable.",
              },
              {
                icon: Sparkles,
                title: "Quality",
                desc: "Sharp creative, modern LED tech, and clean visuals — your ad looks premium, every time.",
              },
              {
                icon: Heart,
                title: "Reach",
                desc: "From the street to the screen — outdoor LED + social media gives real, measurable presence.",
              },
            ].map((v) => (
              <div key={v.title} className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="heading-display mt-4 text-lg text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="pill">
                <MapPin className="h-3.5 w-3.5" />
                Visit Us
              </span>
              <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
                Find us in Giridih.
              </h2>
              <p className="mt-4 text-base text-navy-900/75">
                Drop by our office, or reach our LED screen at KB Sahay Chowk.
              </p>
              <div className="mt-6 rounded-2xl border border-navy-800/10 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-magenta-500">
                  Office Address
                </p>
                <p className="mt-2 font-display text-lg text-navy-900">
                  {site.address.line1}
                </p>
                <p className="text-navy-900/75">{site.address.line2}</p>
                <p className="text-navy-900/75">{site.address.state}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-navy-800/10 shadow-md">
              <iframe
                src={site.mapsEmbed}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BRITEQ Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's put your brand on the screen."
        description="Whether you have a campaign in mind or just want to learn more, we'd love to talk."
      />
    </>
  );
}
