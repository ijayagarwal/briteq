import {
  ArrowUpRight,
  CalendarRange,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  MonitorPlay,
  Palette,
  Repeat2,
} from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

const billboardPlans = [
  {
    name: "Weekdays & Weekly Package",
    schedule: "7 AM to 11 PM",
    description: "Short and selected-day options for launches, events and focused local campaigns.",
    options: ["Weekly Ad", "Weekend Monthly Ad", "Weekdays Monthly Ad - two days per week"],
  },
  {
    name: "Alternate Days Package",
    schedule: "7 AM to 7 PM",
    description: "Daytime visibility on alternate campaign days, available across longer commitments.",
    options: ["Monthly", "Quarterly", "Half-yearly", "Annual"],
  },
  {
    name: "Alternate Days Package",
    schedule: "7 AM to 11 PM",
    description: "Alternate-day coverage extending from morning through the evening window.",
    options: ["Monthly", "Quarterly", "Half-yearly", "Annual"],
  },
  {
    name: "Regular Package",
    schedule: "7 AM to 7 PM",
    description: "A standard daytime operating window available across monthly and longer commitments.",
    options: ["Monthly", "Quarterly", "Half-yearly", "Annual"],
  },
  {
    name: "Regular Package",
    schedule: "7 AM to 11 PM",
    description: "A standard full-day window from morning through evening for monthly and longer commitments.",
    options: ["Monthly", "Quarterly", "Half-yearly", "Annual"],
  },
] as const;

const operatingDetails = [
  {
    icon: MonitorPlay,
    title: "30-45 second ads",
    copy: "Standard BRITEQ digital billboard creatives run for 30 to 45 seconds.",
  },
  {
    icon: Repeat2,
    title: "4-10 ads per rotation",
    copy: "The number of ads sharing a selected slot varies between 4 and 10, depending on that slot.",
  },
  {
    icon: Clock3,
    title: "Custom hourly slots",
    copy: "Hourly scheduling is available and can be shaped around the campaign requirement.",
  },
  {
    icon: Palette,
    title: "Content & presentation",
    copy: "Supply a finished ad, or add separately quoted BRITEQ creative designed for a clean LED presentation.",
  },
] as const;

function quoteLink(planName: string, schedule: string, options: readonly string[]) {
  return whatsappLink(
    `Hi BRITEQ, please share the current price and availability for the ${planName} (${schedule}) at ${site.billboardLocation}. Available options: ${options.join(", ")}. My preferred option is: `
  );
}

export default function BillboardPlans() {
  return (
    <>
      <section id="billboard-plans" className="section-pad scroll-mt-24 border-y border-ink/15 bg-acid">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <span className="eyebrow"><CalendarRange className="h-3.5 w-3.5" /> Billboard plan menu</span>
              <h2 className="section-title mt-6">Choose the schedule. Ask for today&apos;s quote.</h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-7 text-ink/70">These are BRITEQ&apos;s established billboard plan formats. Prices stay private because availability, slot rotation and creative requirements can change.</p>
              <div className="mt-5 flex items-start gap-3 border-t border-ink/25 pt-5 text-sm font-semibold leading-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Documented display location: {site.billboardLocation}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {billboardPlans.map((plan, index) => (
              <article key={`${plan.name}-${plan.schedule}`} className={`flex min-h-full flex-col rounded-[1.6rem] border-2 border-ink p-6 sm:p-7 ${index === 0 ? "bg-ink text-white md:col-span-2 xl:col-span-1" : "bg-white text-ink"}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`rounded-full px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[.14em] ${index === 0 ? "bg-acid text-ink" : "bg-paper text-ink"}`}>Plan {String(index + 1).padStart(2, "0")}</span>
                  <span className={`text-right font-display text-xs font-bold ${index === 0 ? "text-acid" : "text-[#5736D1]"}`}>{plan.schedule}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold leading-tight tracking-[-0.04em]">{plan.name}</h3>
                <p className={`mt-4 text-sm leading-6 ${index === 0 ? "text-white/72" : "text-ink/65"}`}>{plan.description}</p>
                <ul className={`mt-7 space-y-3 border-t pt-6 text-sm font-semibold ${index === 0 ? "border-white/20" : "border-ink/15"}`}>
                  {plan.options.map((option) => (
                    <li key={option} className="flex items-start gap-3">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-acid text-ink" : "bg-paper text-ink"}`}><Check className="h-3 w-3" /></span>
                      {option}
                    </li>
                  ))}
                </ul>
                <a href={quoteLink(plan.name, plan.schedule, plan.options)} target="_blank" rel="noreferrer" className={`mt-auto pt-8 inline-flex items-center gap-2 font-display text-sm font-bold underline decoration-2 ${index === 0 ? "text-acid" : "text-ink"}`}>
                  Ask price on WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs font-semibold leading-5 text-ink/70">All schedules are subject to current slot availability. BRITEQ confirms the selected rotation, campaign dates, content readiness and final quote before booking.</p>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <span className="eyebrow-dark"><MessageCircle className="h-3.5 w-3.5" /> Combined plan</span>
            <h2 className="section-title mt-6">Social media management plus billboard.</h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/72">Connect local street visibility with an active social presence around the same brand and campaign.</p>
            <a href={whatsappLink(`Hi BRITEQ, please share the current price and scope for a social media management plus billboard plan at ${site.billboardLocation}. My preferred term is: Monthly / Quarterly / Annual.`)} target="_blank" rel="noreferrer" className="button-primary mt-8">
              Ask for combined-plan pricing <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-white/20 bg-white/[0.06] p-7 sm:p-10">
            <div className="flex flex-wrap gap-2">
              {["Monthly", "Quarterly", "Annual"].map((term) => <span key={term} className="rounded-full border border-white/25 px-3 py-2 text-xs font-bold text-acid">{term}</span>)}
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">Established brochure inclusions</h3>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Social account management", "Brand promotion and page boosting", "At least 4 reels per month", "Up to 10 posts per month", "Billboard display of your ad", "Online and on-ground campaign connection"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/75"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid text-ink"><Check className="h-3 w-3" /></span>{item}</li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/20 pt-5 text-xs leading-5 text-white/65">Final platforms, media spend, production needs, posting calendar and billboard schedule are confirmed in the written quote.</p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-ink/15 bg-paper">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div><span className="eyebrow">How the screen works</span><h2 className="section-title mt-6">The details behind every booking.</h2></div>
            <p className="max-w-2xl text-base leading-7 text-ink/65 lg:justify-self-end">Clear operating rules help you compare plans properly and prepare the right creative before your campaign begins.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {operatingDetails.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-[1.5rem] border border-ink/20 bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-acid"><Icon className="h-5 w-5" /></span>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
