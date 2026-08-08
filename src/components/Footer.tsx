import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Insights" },
  { href: "/pricing", label: "Plans" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="border-b border-white/15">
        <div className="container-shell grid gap-8 py-14 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:py-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-acid">Have a growth goal?</p>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.7rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.065em]">
              Let&apos;s make it<br />impossible to ignore.
            </h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/contact" className="button-primary w-full sm:w-fit">
              Book a free consultation
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink("Hi BRITEQ, I'd like to discuss a marketing plan for my business.")}
              target="_blank"
              rel="noreferrer"
              className="button-light w-full sm:w-fit"
            >
              Start on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <span className="inline-block rounded-xl bg-white p-2.5">
            <span className="brand-logo-crop">
              <Image src="/briteq-logo.png" alt="BRITEQ" width={188} height={53} />
            </span>
          </span>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            Jharkhand&apos;s complete marketing partner—bringing strategy, creative, media and technology into one practical growth plan.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="BRITEQ on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:border-acid hover:bg-acid hover:text-ink">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="BRITEQ on LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:border-acid hover:bg-acid hover:text-ink">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/65">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/72">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="transition hover:text-acid">{service.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/65">Service areas</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/72 lg:grid-cols-1">
            {site.serviceAreas.map((city) => {
              const hasPage = ["Giridih", "Ranchi", "Dhanbad", "Bokaro", "Jamshedpur", "Deoghar"].includes(city);
              return <li key={city}>{hasPage ? <Link href={`/${city.toLowerCase()}`} className="transition hover:text-acid">{city}</Link> : city}</li>;
            })}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white/65">Company</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-white/72 lg:grid-cols-1">
            {companyLinks.map((item) => <li key={item.href}><Link href={item.href} className="transition hover:text-acid">{item.label}</Link></li>)}
          </ul>
        </div>
      </div>

      <div className="border-y border-white/15">
        <div className="container-shell grid divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 py-5 text-sm text-white/72 transition hover:text-acid md:px-6 md:first:pl-0">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 py-5 text-sm text-white/72 transition hover:text-acid md:px-6">
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <div className="flex items-center gap-3 py-5 text-sm leading-5 text-white/72 md:px-6 md:last:pr-0">
            <MapPin className="h-4 w-4 shrink-0" /> {site.address.full}
          </div>
        </div>
      </div>

      <div className="container-shell flex flex-col gap-2 pb-28 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} BRITEQ. All rights reserved.</p>
        <p>Based in Giridih · Built for businesses across Jharkhand</p>
      </div>
    </footer>
  );
}
