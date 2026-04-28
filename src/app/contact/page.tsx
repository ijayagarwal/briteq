import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to BRITEQ — chat on WhatsApp, email us, or visit our office in Giridih.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let's <span className="text-gradient">talk.</span>
          </>
        }
        description="Chat with us directly on WhatsApp, fill out the form, or drop by our office in Giridih. We'd love to help your brand shine."
      />

      {/* Quick WhatsApp CTA */}
      <section className="bg-white py-12">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-800/10 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Fastest way to reach us
                </p>
                <h3 className="heading-display mt-1 text-xl text-navy-900 sm:text-2xl">
                  Chat with us on WhatsApp
                </h3>
                <p className="mt-1 text-sm text-navy-900/70">
                  We reply quickly during business hours.
                </p>
              </div>
              <a
                href={whatsappLink("Hi BRITEQ, I'd like to know more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
            {/* Form */}
            <div className="rounded-2xl border border-navy-800/10 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="heading-display text-2xl text-navy-900 sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-navy-900/70">
                Your message will open in WhatsApp with everything pre-filled.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-navy-800/10 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-magenta-500">
                  Call / WhatsApp
                </p>
                <a
                  href={`tel:+917461958873`}
                  className="mt-1 block font-display text-lg font-bold text-navy-900 hover:text-magenta-500"
                >
                  {site.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-navy-800/10 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-magenta-500">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block font-display text-lg font-bold text-navy-900 hover:text-magenta-500 break-all"
                >
                  {site.email}
                </a>
              </div>

              <div className="rounded-2xl border border-navy-800/10 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-magenta-500">
                  Office
                </p>
                <p className="mt-1 font-display text-base font-bold text-navy-900">
                  {site.address.line1}
                </p>
                <p className="text-sm text-navy-900/70">{site.address.line2}</p>
                <p className="text-sm text-navy-900/70">{site.address.state}</p>
              </div>

              <div className="rounded-2xl border border-navy-800/10 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-magenta-500">
                  Operating Hours
                </p>
                <p className="mt-1 font-display text-base font-bold text-navy-900">
                  {site.hours}
                </p>
                <p className="text-sm text-navy-900/70">Daily, 7 days a week</p>
              </div>

              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-magenta-400/30 bg-gradient-to-br from-purple-600 to-magenta-500 p-6 text-white transition-transform hover:scale-[1.01] shadow-glow"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="h-6 w-6" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/80">
                      See Our Work
                    </p>
                    <p className="font-display text-lg font-bold">
                      Follow {site.instagramHandle}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-navy-800/15 bg-white p-6 transition-all hover:border-[#1877F2] hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1877F2]">
                      Connect on
                    </p>
                    <p className="font-display text-lg font-bold text-navy-900">
                      Facebook
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-navy-800/10 shadow-md">
            <iframe
              src={site.mapsEmbed}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BRITEQ Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
