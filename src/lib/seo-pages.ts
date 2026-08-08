export type ServicePageData = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  promise: string;
  outcomes: { title: string; description: string }[];
  deliverables: string[];
  fit: string[];
  boundary: string;
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "digital-billboard-advertising",
    name: "Digital Billboard Advertising",
    title: "Digital Billboard Advertising in Jharkhand | BRITEQ",
    description:
      "Plan digital billboard campaigns in Jharkhand with location guidance, campaign-ready creative and flexible schedules. Request a custom BRITEQ plan.",
    h1: "Digital billboard advertising across Jharkhand",
    lede:
      "Turn busy routes and high-attention locations into real-world brand presence. BRITEQ helps plan the placement, message, creative and schedule as one campaign.",
    promise: "Be seen in the real world—and give people a reason to remember you.",
    outcomes: [
      { title: "Local awareness", description: "Build recognition around the places your audience already moves through." },
      { title: "Launch impact", description: "Give openings, offers and events a bold, time-sensitive presence." },
      { title: "Connected reach", description: "Link outdoor visibility with social, creator and digital follow-through." },
    ],
    deliverables: [
      "Campaign objective and audience definition",
      "Location and inventory guidance",
      "Schedule and duration planning",
      "Billboard-ready creative direction",
      "30–45 second digital ad support",
      "Optional social and creator amplification",
    ],
    fit: ["Retail launches", "Restaurants", "Real estate", "Education", "Events", "Local services"],
    boundary:
      "Billboard availability and final pricing depend on city, location, inventory, campaign dates and creative requirements. BRITEQ confirms these in a written proposal before launch.",
    faqs: [
      { question: "How long can a digital billboard ad be?", answer: "Current BRITEQ digital billboard formats support 30–45 second ads, subject to the selected inventory and schedule." },
      { question: "Can BRITEQ design the billboard creative?", answer: "Yes. Creative can be scoped as part of the campaign so the message is readable, focused and suited to the screen format." },
      { question: "Can a billboard campaign run with social media?", answer: "Yes. Outdoor, social and creator activity can be planned around one message and launch window." },
    ],
    related: ["creative-design", "social-media-management", "digital-marketing"],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    title: "Social Media Management in Jharkhand | BRITEQ",
    description:
      "Build a consistent social presence with content planning, design, publishing and campaign support from BRITEQ across Jharkhand.",
    h1: "Social media management built for consistency",
    lede:
      "Move from occasional posting to a clear content system. We connect the plan, creative, publishing and campaign support around what your audience needs to see next.",
    promise: "Show up with a recognizable voice, useful content and a clear next action.",
    outcomes: [
      { title: "A clearer presence", description: "Make every profile, post and campaign feel like the same brand." },
      { title: "Consistent output", description: "Work from an agreed calendar instead of last-minute posting." },
      { title: "Stronger action", description: "Shape content around enquiries, visits, launches and recall." },
    ],
    deliverables: [
      "Channel and audience review",
      "Monthly content direction",
      "Content calendar and themes",
      "Post, carousel and reel design",
      "Publishing and campaign support",
      "Monthly review and next-step plan",
    ],
    fit: ["Retail", "Restaurants", "Healthcare", "Education", "Hospitality", "Personal brands"],
    boundary:
      "The exact number of posts, reels, channels and paid-media support is agreed in the proposal. Ad spend and third-party production are quoted separately where required.",
    faqs: [
      { question: "Which social platforms can you manage?", answer: "The channel mix is chosen around your audience. Instagram and Facebook are common starting points, with other channels added when they support the goal." },
      { question: "Do you create reels and graphics?", answer: "Yes. Content design and short-form creative can be included, with the exact production scope agreed before the month begins." },
      { question: "Is paid boosting included?", answer: "Paid support can be added. Media spend and management scope are shown separately so you know what is being invested." },
    ],
    related: ["creative-design", "influencer-marketing", "digital-marketing"],
  },
  {
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    title: "Influencer Marketing Agency in Jharkhand | BRITEQ",
    description:
      "Plan creator campaigns by audience, category and location with BRITEQ—from shortlisting and briefs to deliverables and rollout.",
    h1: "Influencer campaigns built around the right audience",
    lede:
      "Creator marketing works when the fit is believable. BRITEQ plans the campaign around audience, location, category, content format and a clear commercial objective.",
    promise: "Choose creators for relevance and execution—not just follower count.",
    outcomes: [
      { title: "Relevant reach", description: "Prioritise audience and location fit for the campaign." },
      { title: "Clear delivery", description: "Agree briefs, formats, timelines and approvals before content goes live." },
      { title: "Campaign consistency", description: "Keep creator content connected to the wider brand message." },
    ],
    deliverables: [
      "Campaign concept and creator brief",
      "Audience and category criteria",
      "Creator discovery and shortlist",
      "Deliverable and timeline coordination",
      "Content review and rollout support",
      "Campaign wrap-up and learnings",
    ],
    fit: ["Product launches", "Restaurants", "Retail", "Events", "Hospitality", "Consumer services"],
    boundary:
      "Creator availability, fees and audience data vary by brief. Final selections and deliverables are approved by the client before confirmation.",
    faqs: [
      { question: "How are creators shortlisted?", answer: "We consider audience fit, location, category, content quality, brand suitability and the agreed campaign requirements." },
      { question: "Can I approve the creators first?", answer: "Yes. The shortlist, commercials and deliverables are agreed before creators are confirmed." },
      { question: "Can influencer content support a larger launch?", answer: "Yes. Creator activity can connect with outdoor, social, paid media and an offer or landing page." },
    ],
    related: ["social-media-management", "digital-marketing", "creative-design"],
  },
  {
    slug: "website-development",
    name: "Website Development",
    title: "Website Development Company in Jharkhand | BRITEQ",
    description:
      "Get a responsive, conversion-focused business website built for clarity, trust, enquiries and search visibility by BRITEQ in Jharkhand.",
    h1: "Business websites designed to earn trust and enquiries",
    lede:
      "Your website should explain the business quickly, remove doubt and make the next step easy. We connect positioning, copy, design, development and search foundations in one build.",
    promise: "A fast, responsive website with a clear job to do.",
    outcomes: [
      { title: "Instant clarity", description: "Help visitors understand what you offer, who it is for and why it matters." },
      { title: "More confidence", description: "Use structure, proof and polished design to reduce hesitation." },
      { title: "Easier enquiries", description: "Create focused paths to call, WhatsApp, book or enquire." },
    ],
    deliverables: [
      "Website strategy and sitemap",
      "Conversion-focused page structure",
      "Responsive interface design",
      "Front-end development",
      "Technical and on-page SEO foundations",
      "Analytics-ready launch setup",
    ],
    fit: ["Professional services", "Healthcare", "Education", "Real estate", "Hospitality", "Startups"],
    boundary:
      "Hosting, domain, third-party tools, photography, advanced integrations and ongoing content are scoped transparently based on what the website needs.",
    faqs: [
      { question: "Will the website work on mobile?", answer: "Yes. Responsive behaviour, touch targets and mobile conversion paths are part of the core build." },
      { question: "Is SEO included?", answer: "Technical and on-page foundations can be included at launch. Ongoing SEO is a separate growth programme." },
      { question: "Can you write the website content?", answer: "Yes. Content strategy and conversion copy can be included so the design and message work together." },
    ],
    related: ["branding", "seo-services", "digital-marketing"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    title: "Digital Marketing Agency in Jharkhand | BRITEQ",
    description:
      "BRITEQ builds practical digital marketing plans across content, search, paid media and conversion for businesses across Jharkhand.",
    h1: "Connected digital marketing for Jharkhand businesses",
    lede:
      "Stop running disconnected activity. We start with the commercial goal, then shape the message, audience, channels and conversion path around it.",
    promise: "A practical channel mix built around the outcome—not a list of tactics.",
    outcomes: [
      { title: "Focused investment", description: "Choose channels based on the goal, audience and buying journey." },
      { title: "Connected campaigns", description: "Align content, media and landing experiences around one message." },
      { title: "Useful measurement", description: "Agree what can be measured and review it without inflated promises." },
    ],
    deliverables: [
      "Goal and audience definition",
      "Channel and campaign plan",
      "Message and offer development",
      "Creative and landing-page support",
      "Media setup and rollout",
      "Reporting and optimisation plan",
    ],
    fit: ["Lead generation", "Local discovery", "Launches", "E-commerce", "Bookings", "Brand growth"],
    boundary:
      "Media spend, platform costs and production are separated from management fees. Results depend on the offer, market, budget, competition and customer journey.",
    faqs: [
      { question: "Which digital channels do you use?", answer: "The mix may include search, social, content, email, WhatsApp and landing pages—only where they support the agreed goal." },
      { question: "Do you manage paid ads?", answer: "Yes. Paid media can be planned and managed with a clearly separated media budget." },
      { question: "How do you report performance?", answer: "The proposal defines the useful metrics, review rhythm and data sources available for the campaign." },
    ],
    related: ["seo-services", "social-media-management", "website-development"],
  },
  {
    slug: "branding",
    name: "Branding & Identity",
    title: "Branding Agency in Jharkhand | BRITEQ",
    description:
      "Build a recognizable brand with positioning, identity design and campaign-ready assets from BRITEQ, a branding agency in Jharkhand.",
    h1: "Branding that makes your business easier to recognize",
    lede:
      "A strong identity is more than a logo. We clarify the position, shape the verbal and visual direction, then turn it into a system your business can actually use.",
    promise: "A clearer story and a consistent identity across every customer touchpoint.",
    outcomes: [
      { title: "A sharper position", description: "Explain the value in language customers can understand and remember." },
      { title: "A recognizable system", description: "Build consistent visual cues across physical and digital channels." },
      { title: "Practical brand tools", description: "Give teams useful assets and guidance for everyday execution." },
    ],
    deliverables: [
      "Discovery and positioning workshop",
      "Audience and competitor perspective",
      "Brand story and key messages",
      "Logo and visual identity direction",
      "Colour, type and image system",
      "Launch-ready brand toolkit",
    ],
    fit: ["New businesses", "Rebrands", "Multi-location brands", "Real estate", "Hospitality", "Startups"],
    boundary:
      "Final scope depends on whether the need is a focused identity refresh or a complete brand system. Naming, research, packaging and production can be added when required.",
    faqs: [
      { question: "Can you redesign an existing brand?", answer: "Yes. We can retain useful brand equity while improving the position, identity and consistency." },
      { question: "Do I receive brand guidelines?", answer: "Guidance and handover assets are scoped to the project so the system can be used consistently after launch." },
      { question: "Can branding include a website and launch campaign?", answer: "Yes. Identity, website, content and campaign rollout can be planned as one connected transformation." },
    ],
    related: ["creative-design", "website-development", "digital-marketing"],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    title: "SEO Services in Jharkhand | BRITEQ",
    description:
      "Improve local discoverability with technical SEO, on-page content and measurement tailored to your business and market in Jharkhand.",
    h1: "SEO services built for sustainable discoverability",
    lede:
      "Help the right customers find and understand your business. We connect technical foundations, useful content, local-search signals and measurement into a realistic improvement plan.",
    promise: "Build search visibility with useful work—not ranking guarantees.",
    outcomes: [
      { title: "A stronger foundation", description: "Remove technical and structural barriers that hold useful pages back." },
      { title: "Better local relevance", description: "Make location, service and business information clear and consistent." },
      { title: "Content with purpose", description: "Answer real questions and create useful paths toward enquiry." },
    ],
    deliverables: [
      "Technical and content audit",
      "Keyword and search-intent mapping",
      "On-page structure and metadata",
      "Local SEO and profile guidance",
      "Content plan and priority pages",
      "Measurement and improvement roadmap",
    ],
    fit: ["Local services", "Healthcare", "Education", "Hospitality", "Real estate", "Professional services"],
    boundary:
      "SEO is an ongoing improvement process. BRITEQ does not guarantee a specific ranking, traffic level or lead volume, and recommendations depend on the site, competition and resources available.",
    faqs: [
      { question: "How long does SEO take?", answer: "The timeline varies by the site's condition, competition and work required. We set realistic priorities and review progress over time." },
      { question: "Do you optimise Google Business Profile?", answer: "Yes. Profile accuracy, categories, content and local consistency can be included where access is available." },
      { question: "Can you improve an existing website?", answer: "Yes. We can audit and improve an existing site or coordinate SEO with a website rebuild when the foundation needs deeper work." },
    ],
    related: ["website-development", "digital-marketing", "social-media-management"],
  },
  {
    slug: "creative-design",
    name: "Creative Design & Production",
    title: "Creative Design Agency in Jharkhand | BRITEQ",
    description:
      "Get campaign-ready graphic design, video ads and creative production built for outdoor, social and digital channels by BRITEQ in Jharkhand.",
    h1: "Creative built to work across every channel",
    lede:
      "Turn one campaign idea into a coherent family of graphics, video and advertising assets. BRITEQ designs for the format, audience and action each channel needs.",
    promise: "One strong idea, adapted without losing the brand or the message.",
    outcomes: [
      { title: "Faster recognition", description: "Carry recognizable cues across social, outdoor, web and print." },
      { title: "Format-ready assets", description: "Design around the placement instead of forcing one file everywhere." },
      { title: "A clearer message", description: "Use hierarchy, copy and motion to make the next action obvious." },
    ],
    deliverables: [
      "Campaign concept and visual direction",
      "Graphic design and social formats",
      "Digital billboard creative",
      "Short-form video and ad edits",
      "Website and landing-page assets",
      "Production-ready campaign toolkit",
    ],
    fit: ["Product launches", "Retail", "Restaurants", "Events", "Real estate", "Education"],
    boundary:
      "Photography, location shoots, talent, voice-over, printing and media placement are scoped separately where required. Formats and revision rounds are agreed before production begins.",
    faqs: [
      { question: "Can you adapt one idea for multiple platforms?", answer: "Yes. We can create a master direction and adapt it for the agreed outdoor, social, website and paid-media formats." },
      { question: "Do you create video ads?", answer: "Yes. Short-form video, edits and motion-led campaign assets can be included based on the production scope." },
      { question: "Can creative be added to another BRITEQ service?", answer: "Yes. Creative production can support billboard, social, influencer, website and performance campaigns." },
    ],
    related: ["branding", "digital-billboard-advertising", "social-media-management"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
