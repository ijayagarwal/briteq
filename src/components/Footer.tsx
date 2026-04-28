import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Clock, Instagram, MessageCircle, Facebook, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 text-white">
      <div className="absolute inset-0 led-dots-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-magenta-500/20 blur-3xl pointer-events-none" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="rounded-xl bg-white/95 p-3 inline-block">
              <Image
                src="/briteq-logo.png"
                alt="BRITEQ"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {site.tagline}. Premium digital LED screen advertising at Giridih's busiest
              junction — KB Sahay Chowk. Ground-level reach, day and night.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hi BRITEQ, I'd like to know more about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link href="/" className="hover:text-magenta-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-magenta-400">About</Link></li>
              <li><Link href="/services" className="hover:text-magenta-400">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-magenta-400">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-magenta-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-magenta-400" />
                <a href={`tel:+917461958873`} className="hover:text-magenta-400">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-magenta-400" />
                <a href={`mailto:${site.email}`} className="hover:text-magenta-400 break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-magenta-400" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-magenta-400" />
                <span>{site.hours} (Daily)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BRITEQ. All rights reserved.</p>
          <p>Illuminate Your Brand, Digitally.</p>
        </div>
      </div>
    </footer>
  );
}
