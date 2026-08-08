export type Service = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  accent: "magenta" | "violet" | "lime" | "blue";
};

export const services: Service[] = [
  {
    slug: "digital-billboard-advertising",
    name: "Digital Billboard Advertising",
    shortName: "Billboards",
    description:
      "Put your brand in high-visibility outdoor locations with campaign planning, creative support and flexible schedules.",
    accent: "lime",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media",
    description:
      "Build a consistent social presence with content planning, design, publishing and campaign support.",
    accent: "magenta",
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    shortName: "Influencers",
    description:
      "Plan creator campaigns around audience, location and category—from shortlisting to rollout.",
    accent: "violet",
  },
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Websites",
    description:
      "Responsive, conversion-focused websites designed around clarity, trust, enquiries and search visibility.",
    accent: "blue",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital Growth",
    description:
      "Connected campaigns across the channels that fit your audience, goal and budget.",
    accent: "violet",
  },
  {
    slug: "branding",
    name: "Branding & Identity",
    shortName: "Branding",
    description:
      "Create a recognizable brand through positioning, visual direction and practical brand assets.",
    accent: "lime",
  },
  {
    slug: "creative-design",
    name: "Creative Design & Production",
    shortName: "Creative",
    description:
      "Campaign-ready graphics, videos and advertising assets tailored to every channel.",
    accent: "magenta",
  },
  {
    slug: "seo-services",
    name: "SEO & Performance Marketing",
    shortName: "SEO & Performance",
    description:
      "Improve discoverability and run measurable campaigns with clear goals and ongoing optimisation.",
    accent: "blue",
  },
];

export const capabilities = [
  "Digital billboard advertising",
  "Social media management",
  "Influencer marketing",
  "Website development",
  "Digital marketing",
  "Branding & identity",
  "Graphic design",
  "Creative production",
  "Video ads",
  "Performance marketing",
  "SEO",
  "Google Business Profile optimisation",
  "WhatsApp marketing",
  "Email marketing",
  "Marketing consultation",
];

export const industries = [
  "Retail",
  "Restaurants",
  "Healthcare",
  "Education",
  "Real estate",
  "Hotels",
  "Jewellery",
  "Automobile",
  "Construction",
  "Political campaigns",
  "Events",
  "Startups",
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the business, audience, goal and budget.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Choose the message, channels, deliverables and milestones.",
  },
  {
    step: "03",
    title: "Create",
    description: "Build the campaign assets and conversion journey.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Publish, place and activate the agreed campaign.",
  },
  {
    step: "05",
    title: "Improve",
    description: "Review available data and refine what happens next.",
  },
];

export const growthPlans = [
  {
    id: "visibility",
    eyebrow: "I want",
    title: "More visibility",
    description: "For launches, local awareness and stronger recall.",
    idealFor: ["New launches", "Retail & restaurants", "Events"],
    channels: ["Billboards", "Creator amplification", "Campaign creative"],
    featured: false,
  },
  {
    id: "customers",
    eyebrow: "I want",
    title: "More customers",
    description: "For enquiries, bookings and sales—not vanity metrics.",
    idealFor: ["Lead generation", "Local discovery", "Conversion"],
    channels: ["Landing pages", "Search & paid media", "Social content"],
    featured: true,
  },
  {
    id: "brand",
    eyebrow: "I want",
    title: "A stronger brand",
    description: "For businesses that need a clearer, more consistent identity.",
    idealFor: ["New businesses", "Rebrands", "Campaign launches"],
    channels: ["Brand strategy", "Identity & content", "Photo & video"],
    featured: false,
  },
  {
    id: "complete",
    eyebrow: "I need",
    title: "Complete marketing",
    description: "One integrated plan across brand, media, digital and creative.",
    idealFor: ["Growing teams", "Ongoing support", "Multi-channel growth"],
    channels: ["Strategy", "Execution", "Review & optimisation"],
    featured: false,
  },
];

export const faqs = [
  {
    question: "What marketing services does BRITEQ provide?",
    answer:
      "BRITEQ offers outdoor advertising, social media, influencer campaigns, websites, digital marketing, branding, creative production, SEO and performance marketing.",
  },
  {
    question: "Can I combine more than one service?",
    answer:
      "Yes. We can scope one service or combine the channels that fit your goal, audience and budget.",
  },
  {
    question: "Do you work outside Giridih?",
    answer:
      "Yes. BRITEQ supports businesses across Jharkhand. Billboard and on-ground availability varies by city, inventory and campaign dates.",
  },
  {
    question: "How much does billboard advertising cost?",
    answer:
      "Pricing depends on location, schedule, campaign duration, creative requirements and available inventory. We provide a written custom quote after understanding the campaign.",
  },
  {
    question: "How do you choose the right marketing plan?",
    answer:
      "We begin with your objective, audience, location, timeline and budget, then recommend the smallest useful channel mix.",
  },
  {
    question: "How long does a campaign take to launch?",
    answer:
      "Timelines depend on the scope and approvals required. Your proposal will include clear deliverables and an agreed launch schedule.",
  },
  {
    question: "How do you select influencers?",
    answer:
      "Creators are considered by audience fit, location, category, content quality and campaign requirements. The shortlist and deliverables are agreed before launch.",
  },
  {
    question: "Can BRITEQ manage Instagram and other social channels?",
    answer:
      "Yes. A plan can include content planning, design, publishing and campaign support based on the channels your audience uses.",
  },
  {
    question: "Do you build websites and provide SEO?",
    answer:
      "Yes. BRITEQ builds responsive business websites and can include technical foundations, on-page content and local-search optimisation.",
  },
  {
    question: "Do you guarantee leads or rankings?",
    answer:
      "No responsible agency can promise a fixed number of leads or a specific ranking. We agree on measurable objectives, execute the plan and improve it using the data available.",
  },
];

export const proofNumbers = [
  { value: 15, suffix: "", label: "listed capabilities" },
  { value: 8, suffix: "", label: "core service groups" },
  { value: 5, suffix: "", label: "clear delivery stages" },
  { value: 1, suffix: "", label: "accountable growth partner" },
];

export const workFormats = [
  {
    number: "01",
    title: "Local launch system",
    category: "Outdoor · Social · Creative",
    description:
      "A coordinated launch idea designed to move from street-level attention to online action.",
    accent: "lime",
  },
  {
    number: "02",
    title: "Always-on growth engine",
    category: "Content · Paid media · Conversion",
    description:
      "A practical monthly system that keeps the message consistent and the next action clear.",
    accent: "magenta",
  },
  {
    number: "03",
    title: "Brand transformation",
    category: "Strategy · Identity · Website",
    description:
      "A connected foundation for businesses ready to look sharper, explain themselves better and grow.",
    accent: "violet",
  },
];
