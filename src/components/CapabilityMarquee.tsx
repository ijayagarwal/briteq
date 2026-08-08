"use client";

import { Pause, Play, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CapabilityMarquee({ items }: { items: string[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-acid py-3">
      <p className="sr-only">BRITEQ capabilities: {items.join(", ")}</p>
      <button
        type="button"
        onClick={() => setPaused((current) => !current)}
        className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border-2 border-ink bg-white text-ink shadow-crisp-sm"
        aria-label={paused ? "Resume capability ticker" : "Pause capability ticker"}
      >
        {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
      </button>
      <div className="marquee-track pr-16" data-paused={paused} aria-hidden="true">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center whitespace-nowrap font-display text-sm font-bold uppercase tracking-[.14em] text-ink">
            <span className="mx-6">{item}</span><Sparkles className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
