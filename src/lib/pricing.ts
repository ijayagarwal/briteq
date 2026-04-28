export type PricingPlan = {
  id: string;
  category: "Weekly" | "Alternate Days" | "Regular" | "Comprehensive";
  hours: string;
  duration: string;
  price: number;
  priceLabel: string;
  popular?: boolean;
};

export const billboardPlans: PricingPlan[] = [
  { id: "weekly-ad", category: "Weekly", hours: "7am – 11pm", duration: "Weekly Ad", price: 3500, priceLabel: "₹3,500" },
  { id: "weekend-monthly", category: "Weekly", hours: "7am – 11pm", duration: "Weekend Monthly", price: 4000, priceLabel: "₹4,000" },
  { id: "weekdays-monthly", category: "Weekly", hours: "7am – 11pm", duration: "Weekdays Monthly (2 days/week)", price: 3500, priceLabel: "₹3,500" },

  { id: "alt-7-7-monthly", category: "Alternate Days", hours: "7am – 7pm", duration: "Monthly", price: 7000, priceLabel: "₹7,000" },
  { id: "alt-7-7-quarterly", category: "Alternate Days", hours: "7am – 7pm", duration: "Quarterly", price: 20000, priceLabel: "₹20,000" },
  { id: "alt-7-7-half", category: "Alternate Days", hours: "7am – 7pm", duration: "Half-Yearly", price: 36000, priceLabel: "₹36,000" },
  { id: "alt-7-7-annual", category: "Alternate Days", hours: "7am – 7pm", duration: "Annually", price: 70000, priceLabel: "₹70,000" },

  { id: "alt-7-11-monthly", category: "Alternate Days", hours: "7am – 11pm", duration: "Monthly", price: 8000, priceLabel: "₹8,000" },
  { id: "alt-7-11-quarterly", category: "Alternate Days", hours: "7am – 11pm", duration: "Quarterly", price: 22000, priceLabel: "₹22,000" },
  { id: "alt-7-11-half", category: "Alternate Days", hours: "7am – 11pm", duration: "Half-Yearly", price: 40000, priceLabel: "₹40,000" },
  { id: "alt-7-11-annual", category: "Alternate Days", hours: "7am – 11pm", duration: "Annually", price: 75000, priceLabel: "₹75,000" },

  { id: "reg-7-7-monthly", category: "Regular", hours: "7am – 7pm", duration: "Monthly", price: 12000, priceLabel: "₹12,000" },
  { id: "reg-7-7-quarterly", category: "Regular", hours: "7am – 7pm", duration: "Quarterly", price: 30000, priceLabel: "₹30,000" },
  { id: "reg-7-7-half", category: "Regular", hours: "7am – 7pm", duration: "Half-Yearly", price: 55000, priceLabel: "₹55,000" },
  { id: "reg-7-7-annual", category: "Regular", hours: "7am – 7pm", duration: "Annually", price: 90000, priceLabel: "₹90,000" },

  { id: "reg-7-11-monthly", category: "Regular", hours: "7am – 11pm", duration: "Monthly", price: 15000, priceLabel: "₹15,000" },
  { id: "reg-7-11-quarterly", category: "Regular", hours: "7am – 11pm", duration: "Quarterly", price: 38000, priceLabel: "₹38,000", popular: true },
  { id: "reg-7-11-half", category: "Regular", hours: "7am – 11pm", duration: "Half-Yearly", price: 65000, priceLabel: "₹65,000" },
  { id: "reg-7-11-annual", category: "Regular", hours: "7am – 11pm", duration: "Annually", price: 120000, priceLabel: "₹1,20,000" },
];

export const comprehensivePlans: PricingPlan[] = [
  { id: "comp-monthly", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Monthly", price: 35000, priceLabel: "₹35,000" },
  { id: "comp-quarterly", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Quarterly", price: 95000, priceLabel: "₹95,000" },
  { id: "comp-annual", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Annually", price: 350000, priceLabel: "₹3,50,000", popular: true },
];

export const allPlans: PricingPlan[] = [...billboardPlans, ...comprehensivePlans];

export function planLabel(plan: PricingPlan): string {
  if (plan.category === "Comprehensive") {
    return `Social Media + Billboard — ${plan.duration}`;
  }
  if (plan.category === "Weekly") {
    return plan.duration;
  }
  return `${plan.category} (${plan.hours}) — ${plan.duration}`;
}

export function planInquiryMessage(plan: PricingPlan): string {
  return `Hi BRITEQ, I'm interested in the "${planLabel(plan)}" plan (${plan.priceLabel}). Please share more details.`;
}
