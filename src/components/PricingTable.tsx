"use client";

import { Check, Lock, MessageCircle, Star } from "lucide-react";
import { PricingPlan, planInquiryMessage } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

type Props = {
  plans: PricingPlan[];
  variant?: "billboard" | "comprehensive";
};

const featuresByCategory: Record<string, string[]> = {
  Weekly: [
    "30–45 sec ad slot",
    "4–10 ads per slot rotation",
    "High-traffic junction visibility",
  ],
  "Alternate Days": [
    "Plays on alternating days",
    "30–45 sec ad slot",
    "Cost-effective long-run reach",
  ],
  Regular: [
    "Plays every single day",
    "Maximum daily impressions",
    "Premium prime-time exposure",
  ],
  Comprehensive: [
    "Min 4 reels per month",
    "Up to 10 social posts per month",
    "Full LED billboard included",
    "Page management + boosting",
  ],
};

export default function PricingTable({ plans, variant = "billboard" }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => {
        const features = featuresByCategory[plan.category] ?? [];
        const isPopular = plan.popular;
        return (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
              isPopular
                ? "border-magenta-400 bg-gradient-to-br from-navy-900 to-purple-700 text-white shadow-glow"
                : "border-navy-800/10 bg-white text-navy-900 shadow-sm hover:shadow-glow hover:border-magenta-400/40"
            }`}
          >
            {isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-magenta-500 to-magenta-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                <Star className="h-3 w-3 fill-white" />
                Most Popular
              </div>
            )}

            <div>
              <p
                className={`text-xs font-bold uppercase tracking-wider ${
                  isPopular ? "text-magenta-300" : "text-magenta-500"
                }`}
              >
                {plan.category === "Weekly" ? "Weekly Plans" : plan.category}
              </p>
              <h3 className={`heading-display mt-2 text-xl ${isPopular ? "text-white" : "text-navy-900"}`}>
                {plan.duration}
              </h3>
              {variant === "billboard" && (
                <p className={`mt-1 text-sm ${isPopular ? "text-white/70" : "text-navy-900/60"}`}>
                  {plan.hours}
                </p>
              )}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <Lock className={`h-5 w-5 ${isPopular ? "text-magenta-300" : "text-magenta-500"}`} />
              <span className={`heading-display text-2xl ${isPopular ? "text-white" : "text-navy-900"}`}>
                Custom Pricing
              </span>
            </div>
            <p className={`mt-1 text-sm ${isPopular ? "text-white/70" : "text-navy-900/60"}`}>
              Tailored to your brand & campaign.
            </p>

            <ul
              className={`mt-6 space-y-2.5 text-sm ${
                isPopular ? "text-white/85" : "text-navy-900/75"
              }`}
            >
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      isPopular ? "text-magenta-300" : "text-magenta-500"
                    }`}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(planInquiryMessage(plan))}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 ${
                isPopular
                  ? "btn bg-white text-navy-900 hover:bg-magenta-400 hover:text-white"
                  : "btn-whatsapp"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              Reveal Price
            </a>
          </div>
        );
      })}
    </div>
  );
}
