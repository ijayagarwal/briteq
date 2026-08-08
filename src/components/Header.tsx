"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Work" },
  { href: "/pricing", label: "Plans" },
  { href: "/blog", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia("(min-width: 1024px)");
    const menu = menuRef.current;
    const focusable = menu
      ? Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      : [];
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAndRestoreFocus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onDesktop);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => focusable[0]?.focus());
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onDesktop);
      document.body.style.overflow = "";
    };
  }, [open, closeAndRestoreFocus]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between gap-6">
        <Link href="/" aria-label="BRITEQ home" onClick={() => setOpen(false)}>
          <span className="brand-logo-crop">
            <Image
              src="/briteq-logo.png"
              alt="BRITEQ"
              width={188}
              height={53}
              priority
            />
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="button-dark min-h-10 px-5 py-2.5">
            Start a project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 bg-white lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div ref={menuRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu" className="fixed inset-x-0 top-[74px] h-[calc(100dvh-74px)] overflow-y-auto border-t border-ink/15 bg-paper lg:hidden">
          <nav aria-label="Mobile navigation" className="container-shell flex min-h-full flex-col py-7">
            <div className="mb-3 flex items-center justify-between border-b border-ink/15 pb-4">
              <span className="font-display text-xs font-bold uppercase tracking-[.14em] text-ink/65">Menu</span>
              <button type="button" onClick={closeAndRestoreFocus} className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 bg-white" aria-label="Close navigation menu">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-ink/15 py-4 font-display text-2xl font-bold tracking-tight"
              >
                <span>{item.label}</span>
                <span className="text-xs font-semibold text-ink/65">0{index + 1}</span>
              </Link>
            ))}
            <div className="mt-auto pt-8">
              <Link href="/contact" className="button-primary w-full" onClick={() => setOpen(false)}>
                Book a free consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-4 text-center text-xs text-ink/65">Based in Giridih · Serving Jharkhand</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
