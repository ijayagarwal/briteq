export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "local-marketing-plan-jharkhand-businesses",
    title: "How to Build a Local Marketing Plan in Jharkhand",
    description:
      "A practical framework for choosing audiences, offers, channels and measurement for a local business marketing plan in Jharkhand.",
    category: "Local marketing",
    published: "2026-08-09",
    readTime: "7 min read",
    intro:
      "A useful local marketing plan is not a list of platforms. It is a clear decision about who you need to reach, what should make them act and which few channels can carry that message well.",
    sections: [
      {
        heading: "Start with one commercial outcome",
        paragraphs: [
          "Choose the result before choosing the channel. Awareness, store visits, calls, bookings and repeat purchases need different messages and conversion paths.",
          "Write the outcome in plain language and add a realistic time window. This gives every creative and media decision a job to do.",
        ],
        bullets: ["More qualified enquiries", "A stronger launch in one city", "More repeat visits", "Better local search discovery"],
      },
      {
        heading: "Define the audience by need and location",
        paragraphs: [
          "A city name alone is not an audience. Separate customers by what they need, where they are in the buying journey and how far they are likely to travel.",
          "For multilingual creative, start with the language your actual customers use. Add variants only when the audience and review process support them.",
        ],
      },
      {
        heading: "Build the smallest useful channel mix",
        paragraphs: [
          "Outdoor can create local memory. Search can capture existing demand. Social and creators can build familiarity. A website or landing page can turn attention into action.",
          "You do not need every channel at once. Choose the few that cover attention, confidence and conversion, then make the message consistent across them.",
        ],
      },
      {
        heading: "Plan the offer and the next step",
        paragraphs: [
          "Every campaign needs a visible next action. That may be a WhatsApp conversation, call, visit, booking form or product page. Remove unnecessary steps and make the response expectation clear.",
        ],
        bullets: ["Use one main call to action", "Match the landing message to the advertisement", "Make mobile contact easy", "Prepare the team that will handle enquiries"],
      },
      {
        heading: "Measure what the campaign can genuinely show",
        paragraphs: [
          "Agree measurement before launch. Digital channels may show clicks, calls and forms. Outdoor and brand activity may need offer codes, location-specific links, recall questions or changes in direct traffic as supporting signals.",
          "Avoid treating one metric as the whole truth. Review the available evidence, note outside factors and decide what to keep, change or stop.",
        ],
      },
    ],
  },
  {
    slug: "digital-billboard-campaign-guide",
    title: "A Practical Guide to Digital Billboard Campaigns",
    description:
      "Plan a clearer digital billboard campaign with the right objective, message, creative hierarchy, schedule and follow-through.",
    category: "Billboard advertising",
    published: "2026-08-09",
    readTime: "6 min read",
    intro:
      "A billboard has only a few seconds to communicate. The strongest campaigns make one idea easy to notice, understand and remember—then connect it to a simple next action.",
    sections: [
      {
        heading: "Give the billboard one job",
        paragraphs: [
          "Decide whether the campaign should introduce the brand, announce a launch, promote a time-sensitive offer or direct people to a location. Trying to do all four usually weakens the result.",
        ],
      },
      {
        heading: "Design for distance and motion",
        paragraphs: [
          "Use a short headline, a strong visual hierarchy and high contrast. The business name and key message should remain understandable without relying on small supporting text.",
          "Preview the creative at a small size and for a short time. If the main idea is not clear, simplify it before the campaign goes live.",
        ],
        bullets: ["One dominant message", "Large, readable type", "High foreground/background contrast", "Minimal contact information", "A recognizable brand cue"],
      },
      {
        heading: "Match schedule to audience behaviour",
        paragraphs: [
          "Location, day, time and campaign duration affect who is likely to see the creative. Ask what movement pattern matters to the business instead of choosing a schedule only by price.",
          "Inventory and operating conditions vary. Confirm the exact placement, format, rotation, dates and creative requirements in writing.",
        ],
      },
      {
        heading: "Connect outdoor attention to digital action",
        paragraphs: [
          "Use the same offer and visual idea on social media, creator content and the relevant landing page. This repetition helps the audience recognize the campaign when they see it again.",
          "A short, memorable next step—such as a brand search, WhatsApp prompt or simple URL—usually works better than a dense list of options.",
        ],
      },
      {
        heading: "Review the campaign honestly",
        paragraphs: [
          "Outdoor reach cannot always be tied directly to a sale. Use available indicators such as branded search, direct enquiries, offer-code use, location response and customer feedback, and be clear about what the evidence can and cannot prove.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-checklist-jharkhand",
    title: "Local SEO Checklist for Jharkhand Businesses",
    description:
      "A no-hype local SEO checklist covering website foundations, Google Business Profile, service pages, consistency and measurement.",
    category: "SEO",
    published: "2026-08-09",
    readTime: "8 min read",
    intro:
      "Local SEO helps customers understand what a business offers, where it operates and how to take the next step. The foundation is accuracy and usefulness—not repeating city names across thin pages.",
    sections: [
      {
        heading: "Make the business details consistent",
        paragraphs: [
          "Use the same business name, address and phone details on the website, Google Business Profile and important directory listings. If a city is only a service area, do not present it as an office.",
        ],
        bullets: ["Business name", "Complete address", "Primary phone", "Opening hours", "Website URL", "Service areas"],
      },
      {
        heading: "Create one useful page for each real service",
        paragraphs: [
          "A service page should explain the problem, outcome, scope, process, boundaries and common questions. Give it a focused title and a clear enquiry path.",
          "Avoid creating many near-identical location pages. Each published page should contain real local relevance, distinct service information and honest availability.",
        ],
      },
      {
        heading: "Strengthen the website foundation",
        paragraphs: [
          "Use crawlable navigation, descriptive headings, self-referencing canonical URLs, an XML sitemap and a robots file. Keep the mobile experience fast and make the primary contact action easy to use.",
        ],
        bullets: ["Unique page titles and descriptions", "Responsive layout", "Fast-loading assets", "Helpful internal links", "Accessible labels and headings", "Structured business data"],
      },
      {
        heading: "Use Google Business Profile as a living storefront",
        paragraphs: [
          "Choose accurate categories, complete the services, use current photos and keep changes to hours or contact details up to date. Reviews should come from real customers and should never be fabricated or selectively misrepresented.",
        ],
      },
      {
        heading: "Publish answers to real customer questions",
        paragraphs: [
          "Useful content can address pricing factors, timelines, service choices, location coverage and preparation. Connect each article to the relevant service and a practical next step.",
          "Track search visibility alongside calls, forms, WhatsApp conversations and qualified enquiries. Rankings alone do not show whether the work helps the business.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
