export type PricingPlan = {
  id: string;
  category: "Weekly" | "Alternate Days" | "Regular" | "Comprehensive";
  hours: string;
  duration: string;
  popular?: boolean;
};

export const billboardPlans: PricingPlan[] = [
  { id: "weekly-ad", category: "Weekly", hours: "7am – 11pm", duration: "Weekly Ad" },
  { id: "weekend-monthly", category: "Weekly", hours: "7am – 11pm", duration: "Weekend Monthly" },
  { id: "weekdays-monthly", category: "Weekly", hours: "7am – 11pm", duration: "Weekdays Monthly (2 days/week)" },

  { id: "alt-7-7-monthly", category: "Alternate Days", hours: "7am – 7pm", duration: "Monthly" },
  { id: "alt-7-7-quarterly", category: "Alternate Days", hours: "7am – 7pm", duration: "Quarterly" },
  { id: "alt-7-7-half", category: "Alternate Days", hours: "7am – 7pm", duration: "Half-Yearly" },
  { id: "alt-7-7-annual", category: "Alternate Days", hours: "7am – 7pm", duration: "Annually" },

  { id: "alt-7-11-monthly", category: "Alternate Days", hours: "7am – 11pm", duration: "Monthly" },
  { id: "alt-7-11-quarterly", category: "Alternate Days", hours: "7am – 11pm", duration: "Quarterly" },
  { id: "alt-7-11-half", category: "Alternate Days", hours: "7am – 11pm", duration: "Half-Yearly" },
  { id: "alt-7-11-annual", category: "Alternate Days", hours: "7am – 11pm", duration: "Annually" },

  { id: "reg-7-7-monthly", category: "Regular", hours: "7am – 7pm", duration: "Monthly" },
  { id: "reg-7-7-quarterly", category: "Regular", hours: "7am – 7pm", duration: "Quarterly" },
  { id: "reg-7-7-half", category: "Regular", hours: "7am – 7pm", duration: "Half-Yearly" },
  { id: "reg-7-7-annual", category: "Regular", hours: "7am – 7pm", duration: "Annually" },

  { id: "reg-7-11-monthly", category: "Regular", hours: "7am – 11pm", duration: "Monthly" },
  { id: "reg-7-11-quarterly", category: "Regular", hours: "7am – 11pm", duration: "Quarterly", popular: true },
  { id: "reg-7-11-half", category: "Regular", hours: "7am – 11pm", duration: "Half-Yearly" },
  { id: "reg-7-11-annual", category: "Regular", hours: "7am – 11pm", duration: "Annually" },
];

export const comprehensivePlans: PricingPlan[] = [
  { id: "comp-monthly", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Monthly" },
  { id: "comp-quarterly", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Quarterly" },
  { id: "comp-annual", category: "Comprehensive", hours: "Social Media + Billboard", duration: "Annually", popular: true },
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
  return `Hi BRITEQ, I'm interested in the "${planLabel(plan)}" plan. Please share the pricing and details.`;
}
