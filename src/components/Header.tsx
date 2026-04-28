"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-800/10 bg-white/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/briteq-logo.png"
            alt="BRITEQ"
            width={160}
            height={48}
            priority
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-900/80 transition-colors hover:text-magenta-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink("Hi BRITEQ, I'd like to know more about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-whatsapp text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </a>

        <button
          className="md:hidden rounded-lg p-2 text-navy-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-800/10 bg-white">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-navy-900 hover:bg-magenta-400/5 hover:text-magenta-500"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hi BRITEQ, I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
