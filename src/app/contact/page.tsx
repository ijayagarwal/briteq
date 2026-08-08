import type { Metadata } from "next";
import { Clock3, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { pageOpenGraph, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell BRITEQ about your business, city and growth goal. Book a free marketing consultation by WhatsApp, phone or email.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph(
    "Contact BRITEQ",
    "Tell BRITEQ about your business, city and growth goal. Book a free marketing consultation by WhatsApp, phone or email.",
    "/contact"
  ),
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title={<>Let&apos;s grow <span className="text-acid">your business.</span></>}
        description="Tell us where you are, what you sell and what a good result looks like. We'll suggest a practical mix of channels for your goal and budget."
        cta={{ href: whatsappLink("Hi BRITEQ, I'd like to book a free marketing consultation."), label: "Start on WhatsApp", external: true }}
      />

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <span className="eyebrow">Free first conversation</span>
            <h2 className="section-title mt-6">Bring the goal, even if the brief is not ready.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink/62">We&apos;ll help clarify the audience, next action, likely channel mix and what information is needed for a useful proposal.</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a href={whatsappLink("Hi BRITEQ, I'd like to discuss a marketing plan.")} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-ink/15 bg-paper p-4 transition hover:bg-acid"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366]"><MessageCircle className="h-5 w-5" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">WhatsApp</span><span className="font-display font-bold">{site.phone}</span></span></a>
              <a href={`tel:${site.phoneHref}`} className="group flex items-center gap-4 rounded-2xl border border-ink/15 bg-paper p-4 transition hover:bg-acid"><span className="grid h-11 w-11 place-items-center rounded-full bg-sky"><Phone className="h-5 w-5" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">Call</span><span className="font-display font-bold">{site.phone}</span></span></a>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4 rounded-2xl border border-ink/15 bg-paper p-4 transition hover:bg-acid"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#9F0B6C] text-white"><Mail className="h-5 w-5" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">Email</span><span className="font-display font-bold">{site.email}</span></span></a>
              <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-ink/15 bg-paper p-4 transition hover:bg-acid"><span className="grid h-11 w-11 place-items-center rounded-full bg-electric text-white"><Instagram className="h-5 w-5" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[.12em] text-ink/65">Instagram</span><span className="font-display font-bold">{site.instagramHandle}</span></span></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-pad border-t border-ink/15 bg-paper">
        <div className="container-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-stretch">
          <div className="rounded-[1.75rem] border border-ink/20 bg-acid p-7 sm:p-10">
            <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> BRITEQ office</span>
            <address className="mt-8 not-italic"><p className="font-display text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl">{site.address.line1}<br />{site.address.line2}</p><p className="mt-3 text-sm text-ink/60">{site.address.state}, {site.address.country}</p></address>
            <div className="mt-10 border-t border-ink/20 pt-6">
              <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-5 w-5 text-electric" /><p className="text-sm leading-6 text-ink/65">Meetings are arranged in advance by phone or WhatsApp. Billboard operating schedules are separate from office availability.</p></div>
            </div>
          </div>
          <div className="min-h-[420px] overflow-hidden rounded-[1.75rem] border border-ink/20 bg-white">
            <iframe src={site.mapsEmbed} title="BRITEQ office in Giridih" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
