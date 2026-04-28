"use client";

import { useState, useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { allPlans, planLabel } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [planId, setPlanId] = useState("");
  const [message, setMessage] = useState("");

  const planOptions = useMemo(
    () =>
      allPlans.map((p) => ({
        id: p.id,
        label: `${planLabel(p)} — ${p.priceLabel}`,
      })),
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = allPlans.find((p) => p.id === planId);
    const lines = [
      `Hi BRITEQ,`,
      ``,
      `My name is ${name || "[Name]"}.`,
      selected
        ? `I'm interested in: ${planLabel(selected)} (${selected.priceLabel}).`
        : `I'd like to know more about your services.`,
      ``,
      message ? `${message}` : `Please share more details.`,
    ];
    const url = whatsappLink(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-navy-900">
          Your Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ravi Kumar"
          className="mt-2 block w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/40 focus:border-magenta-400 focus:outline-none focus:ring-2 focus:ring-magenta-400/30"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">
          Interested Package <span className="font-normal text-navy-900/50">(optional)</span>
        </label>
        <select
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
          className="mt-2 block w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-magenta-400 focus:outline-none focus:ring-2 focus:ring-magenta-400/30"
        >
          <option value="">— Choose a plan (optional) —</option>
          {planOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-navy-900">
          Message
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your business or campaign goals..."
          className="mt-2 block w-full rounded-xl border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/40 focus:border-magenta-400 focus:outline-none focus:ring-2 focus:ring-magenta-400/30"
        />
      </div>

      <button type="submit" className="btn-whatsapp w-full">
        <MessageCircle className="h-5 w-5" />
        Send via WhatsApp
      </button>

      <p className="text-center text-xs text-navy-900/50">
        Your message opens directly in WhatsApp — no signup, no spam.
      </p>
    </form>
  );
}
