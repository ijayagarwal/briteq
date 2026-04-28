"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Clock } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden led-bg">
      <div className="absolute inset-0 led-dots-bg opacity-30" />
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-magenta-500/30 blur-3xl animate-pulse-glow" />

      <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="pill-light">
            <span className="h-2 w-2 rounded-full bg-magenta-400 animate-pulse" />
            Live at KB Sahay Chowk · Giridih
          </span>

          <h1 className="heading-display mt-6 text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Illuminate Your Brand,{" "}
            <span className="text-gradient">Digitally.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Premium LED screen advertising at Giridih's busiest junction.
            High-impact billboard ads + social media boost — built for local
            brands that want to be seen, day and night.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="btn-primary w-full sm:w-auto">
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink("Hi BRITEQ, I'd like a quote for advertising on your LED screen.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Get a Quote
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 text-left sm:grid-cols-4 sm:gap-6">
            {[
              { icon: Clock, label: "Operating Hours", value: "7am – 11pm" },
              { icon: MapPin, label: "Prime Spot", value: "KB Sahay Chowk" },
              { icon: ArrowRight, label: "Ad Length", value: "30–45 seconds" },
              { icon: MessageCircle, label: "Reach", value: "Day & Night" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <Icon className="h-5 w-5 text-magenta-400" />
                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  {label}
                </p>
                <p className="mt-1 text-sm font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative LED screen mock with real city backdrop */}
      <div className="container-x relative -mb-16 hidden md:block">
        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[16/6] overflow-hidden rounded-3xl border border-white/10 bg-navy-900 shadow-glow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80"
              alt="LED billboard at night"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/70 via-purple-600/40 to-magenta-500/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-magenta-300" />
                  Now Live · KB Sahay Chowk
                </div>
                <p className="mt-3 font-display text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                  YOUR BRAND HERE
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
                  30–45 sec spot · Day & Night
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/30" />
          </div>
          <div className="mx-auto mt-2 h-3 w-2/3 rounded-b-3xl bg-gradient-to-b from-navy-700 to-navy-900" />
          <div className="mx-auto h-12 w-2 rounded bg-navy-900" />
        </div>
      </div>
    </section>
  );
}
