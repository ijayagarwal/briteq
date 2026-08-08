"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const goals = [
  "More visibility",
  "More enquiries or sales",
  "A stronger brand",
  "A new website",
  "Complete marketing support",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [goal, setGoal] = useState("");

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("goal");
    const values: Record<string, string> = {
      visibility: "More visibility",
      customers: "More enquiries or sales",
      brand: "A stronger brand",
      complete: "Complete marketing support",
    };
    if (selected && values[selected]) {
      const frame = requestAnimationFrame(() => setGoal(values[selected]));
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi BRITEQ, I'd like to discuss a marketing plan.",
      "",
      `Name: ${form.get("name")}`,
      `Business: ${form.get("business")}`,
      `Phone: ${form.get("phone")}`,
      `City: ${form.get("city")}`,
      `Goal: ${form.get("goal")}`,
      `Preferred timing: ${form.get("timing") || "Not selected"}`,
      "",
      `Project details: ${form.get("message") || "I'd like BRITEQ's recommendation."}`,
    ].join("\n");
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.75rem] border border-ink/20 bg-white p-5 shadow-crisp sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-ink">
          Your name
          <input className="input-field" type="text" name="name" autoComplete="name" placeholder="Ravi Kumar" required />
        </label>
        <label className="text-sm font-semibold text-ink">
          Business name
          <input className="input-field" type="text" name="business" autoComplete="organization" placeholder="Your business" required />
        </label>
        <label className="text-sm font-semibold text-ink">
          Phone / WhatsApp
          <input className="input-field" type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+91 98XXX XXXXX" required />
        </label>
        <label className="text-sm font-semibold text-ink">
          City
          <input className="input-field" type="text" name="city" autoComplete="address-level2" placeholder="Giridih, Ranchi…" required />
        </label>
        <label className="text-sm font-semibold text-ink">
          Main goal
          <select className="input-field" name="goal" value={goal} onChange={(event) => setGoal(event.target.value)} required>
            <option value="" disabled>Select an outcome</option>
            {goals.map((goal) => <option key={goal} value={goal}>{goal}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-ink">
          Preferred timing <span className="font-normal text-ink/65">(optional)</span>
          <select className="input-field" name="timing" defaultValue="">
            <option value="">Let&apos;s discuss</option>
            <option value="Ready to start">Ready to start</option>
            <option value="Within 1–3 months">Within 1–3 months</option>
            <option value="Exploring options">Exploring options</option>
            <option value="Ongoing support">Ongoing support</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold text-ink">
        Tell us a little more <span className="font-normal text-ink/65">(optional)</span>
        <textarea className="input-field min-h-32 resize-y" name="message" placeholder="What do you sell, who do you want to reach, and what would a good result look like?" />
      </label>
      <button type="submit" className="button-primary mt-6 w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" /> Continue on WhatsApp <ArrowUpRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-5 text-ink/65" aria-live="polite">
        {submitted ? "Your project brief has opened in WhatsApp." : "Your details are used only to prepare the WhatsApp message. Nothing is stored on this website."}
      </p>
      <noscript><p className="mt-3 text-xs text-ink/65">JavaScript is off. Please use the WhatsApp button on this page to contact BRITEQ directly.</p></noscript>
    </form>
  );
}
