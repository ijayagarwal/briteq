export type LocationPageData = {
  slug: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  localAngle: string;
  contexts: { title: string; description: string; sourceUrl: string; sourceLabel: string }[];
  audiences: string[];
  campaignIdeas: string[];
  availability: string;
  office: boolean;
};

export const locationPages: LocationPageData[] = [
  {
    slug: "ranchi",
    city: "Ranchi",
    title: "Marketing Agency in Ranchi, Jharkhand | BRITEQ",
    description:
      "BRITEQ helps Ranchi businesses grow with social media, websites, branding, SEO, creator campaigns, paid media and integrated marketing.",
    h1: "Marketing solutions for growing businesses in Ranchi",
    intro:
      "Ranchi brings consumer brands, institutions, professional services and industrial organisations into one market. BRITEQ builds focused campaigns for the audience and buying journey that matter to your business.",
    localAngle:
      "A mixed market needs more than one generic message. We can separate local customer acquisition, institutional communication, recruitment and brand-building into clear campaign paths.",
    contexts: [
      {
        title: "Trade, retail and institutions",
        description:
          "The Ranchi district administration describes the capital as an important trade and commerce centre with retail, private companies and public-sector organisations.",
        sourceUrl: "https://ranchi.nic.in/economy/",
        sourceLabel: "Ranchi district economy overview",
      },
      {
        title: "A strong education audience",
        description:
          "Official listings include major universities and institutes, making admissions, training, recruitment and student-facing services relevant campaign categories.",
        sourceUrl: "https://ranchi.nic.in/public-utility-category/college-university/",
        sourceLabel: "Ranchi district education directory",
      },
    ],
    audiences: ["Retail & restaurants", "Education", "Professional services", "Industrial B2B", "Healthcare", "Real estate"],
    campaignIdeas: ["Local search and lead generation", "Admissions and recruitment", "Retail launch campaigns", "B2B brand systems"],
    availability:
      "Strategy, websites, social, branding, SEO and digital campaigns are available for Ranchi businesses. Outdoor inventory and on-ground production are confirmed by location and campaign dates.",
    office: false,
  },
  {
    slug: "giridih",
    city: "Giridih",
    title: "Marketing Agency in Giridih, Jharkhand | BRITEQ",
    description:
      "Work with BRITEQ in Giridih for digital billboards, social media, branding, websites, creative, SEO and integrated business growth campaigns.",
    h1: "A complete marketing partner for Giridih businesses",
    intro:
      "BRITEQ is based in Giridih. That local foundation lets us connect digital execution with outdoor visibility and practical, on-the-ground understanding for businesses across the district.",
    localAngle:
      "From a first brand identity to a multi-channel launch, Giridih businesses can work with one local team for planning, creative, digital and outdoor campaign coordination.",
    contexts: [
      {
        title: "Local trade and a wider industrial region",
        description:
          "The district administration describes the wider Giridih district as mineral-rich, creating distinct audiences for local trade, industrial suppliers and professional services.",
        sourceUrl: "https://giridih.nic.in/about-district/",
        sourceLabel: "Giridih district overview",
      },
      {
        title: "Travel, hospitality and pilgrimage",
        description:
          "Official district sources highlight religious and nature destinations across the region, supporting seasonal, route-aware campaigns for hospitality, food, retail and travel services.",
        sourceUrl: "https://giridih.nic.in/culture-heritage/",
        sourceLabel: "Giridih culture and heritage",
      },
    ],
    audiences: ["Retail & restaurants", "Education", "Healthcare", "Hospitality", "Local services", "Industrial suppliers"],
    campaignIdeas: ["Outdoor and social launches", "Hindi-first local creative", "Google Business Profile growth", "Seasonal hospitality campaigns"],
    availability:
      "BRITEQ's office is in Sitalpur, Giridih. Digital billboard availability, schedules and creative requirements are confirmed in a written campaign proposal.",
    office: true,
  },
  {
    slug: "dhanbad",
    city: "Dhanbad",
    title: "Marketing Agency in Dhanbad, Jharkhand | BRITEQ",
    description:
      "BRITEQ helps Dhanbad businesses with social media, websites, branding, SEO, creator campaigns, paid media and practical integrated marketing.",
    h1: "Marketing solutions built for Dhanbad's varied audiences",
    intro:
      "Dhanbad's wider industrial context sits alongside education, retail, services and a culturally varied consumer market. We shape the message and channel mix around the specific audience—not a city-wide stereotype.",
    localAngle:
      "Campaigns can be segmented for industrial B2B, recruitment, education, professional services and everyday consumer demand, with language variants used only when audience evidence supports them.",
    contexts: [
      {
        title: "Industrial and mining ecosystem",
        description:
          "The district administration identifies Jharia with coking-coal deposits, mining and washeries, supporting relevant B2B, training and recruitment use cases across the wider region.",
        sourceUrl: "https://dhanbad.nic.in/jharia/",
        sourceLabel: "Dhanbad district: Jharia block",
      },
      {
        title: "Technology and education",
        description:
          "IIT (ISM) Dhanbad's long-standing presence supports a real audience for education, technology, research, recruitment and student-facing businesses.",
        sourceUrl: "https://iitism.ac.in/about-history",
        sourceLabel: "IIT (ISM) history",
      },
    ],
    audiences: ["Industrial B2B", "Education & training", "Retail", "Healthcare", "Professional services", "Recruitment"],
    campaignIdeas: ["B2B authority content", "Admissions and training leads", "Local search programmes", "Recruitment campaigns"],
    availability:
      "Digital strategy and production are available for Dhanbad businesses. Outdoor, creator and on-ground activity is confirmed against the brief, inventory and campaign dates.",
    office: false,
  },
  {
    slug: "bokaro",
    city: "Bokaro",
    title: "Marketing Agency in Bokaro, Jharkhand | BRITEQ",
    description:
      "BRITEQ helps Bokaro businesses grow with social media, websites, branding, SEO, creative, paid campaigns and integrated marketing support.",
    h1: "Marketing solutions for Bokaro's industry and local trade",
    intro:
      "Bokaro Steel City and nearby Chas create different campaign contexts—from industrial and workforce communication to wholesale, retail and local-service acquisition.",
    localAngle:
      "We plan these audiences separately, choosing a B2B, recruitment, workforce or consumer path before choosing channels and creative.",
    contexts: [
      {
        title: "A major steel-industry context",
        description:
          "SAIL describes Bokaro Steel Plant as an integrated public-sector steel plant whose products serve multiple downstream industries.",
        sourceUrl: "https://www.sail.co.in/en/plants/about-bokaro-steel-plant-0",
        sourceLabel: "SAIL: Bokaro Steel Plant overview",
      },
      {
        title: "Wholesale and local trade in Chas",
        description:
          "The district administration describes Chas as a suburban area of Bokaro Steel City with a large wholesale market, creating a distinct retail and trade audience.",
        sourceUrl: "https://bokaro.nic.in/chas-municipal-corporation/",
        sourceLabel: "Bokaro district: Chas Municipal Corporation",
      },
    ],
    audiences: ["Industrial B2B", "Wholesale & retail", "Recruitment", "Education", "Healthcare", "Local services"],
    campaignIdeas: ["Vendor and B2B positioning", "Trade lead generation", "Workforce-facing campaigns", "Chas retail discovery"],
    availability:
      "BRITEQ can deliver digital and brand programmes for Bokaro businesses. Local production, outdoor placements and creator activity are subject to confirmed availability.",
    office: false,
  },
  {
    slug: "jamshedpur",
    city: "Jamshedpur",
    title: "Marketing Agency in Jamshedpur, Jharkhand | BRITEQ",
    description:
      "BRITEQ helps Jamshedpur businesses with social media, websites, branding, SEO, digital campaigns, creative and integrated growth plans.",
    h1: "Marketing solutions for Jamshedpur businesses",
    intro:
      "Jamshedpur combines an industrial business environment with a cosmopolitan consumer audience and a regional healthcare catchment. Strong campaigns begin by deciding which of those markets you actually need to reach.",
    localAngle:
      "BRITEQ can shape separate B2B, recruitment, healthcare and consumer journeys, with language and location variants driven by real customer data.",
    contexts: [
      {
        title: "Industrial and manufacturing context",
        description:
          "The Government of India's district industrial profile describes East Singhbhum as holding a leading position in Jharkhand's industrial growth and mining context.",
        sourceUrl: "https://dcmsme.gov.in/dips/2016-17/Singhbhum%20East.pdf",
        sourceLabel: "Government of India: East Singhbhum industrial profile",
      },
      {
        title: "A mixed district market",
        description:
          "The Government of India's district profile covers Jamshedpur alongside eleven blocks and a broad industrial and service base, so campaigns should define whether the audience is city, industrial or district-wide.",
        sourceUrl: "https://dcmsme.gov.in/dips/2016-17/Singhbhum%20East.pdf",
        sourceLabel: "Government of India: East Singhbhum district profile",
      },
    ],
    audiences: ["Industrial B2B", "Healthcare", "Recruitment", "Retail & hospitality", "Education", "Professional services"],
    campaignIdeas: ["B2B content and websites", "Regional healthcare discovery", "Recruitment campaigns", "Segmented multilingual creative"],
    availability:
      "Digital, website, brand and performance programmes are available for Jamshedpur businesses. On-ground and outdoor campaigns require inventory and production confirmation.",
    office: false,
  },
  {
    slug: "deoghar",
    city: "Deoghar",
    title: "Marketing Agency in Deoghar, Jharkhand | BRITEQ",
    description:
      "BRITEQ helps Deoghar businesses grow with social media, websites, branding, SEO, outdoor, creative and seasonal integrated campaigns.",
    h1: "Marketing built around Deoghar's local and visitor audiences",
    intro:
      "Deoghar businesses can serve year-round local demand and highly seasonal visitor demand. The right campaign changes its timing, offer, location and conversion path for each audience.",
    localAngle:
      "We can plan pre-arrival, arrival and in-market communication for hospitality, transport, food and retail—while keeping availability, permits and claims transparent.",
    contexts: [
      {
        title: "A major pilgrimage season",
        description:
          "The district administration describes Shravani Mela as a month-long pilgrimage period, making seasonal planning especially relevant for local businesses.",
        sourceUrl: "https://deoghar.nic.in/shrawani-mela-2/",
        sourceLabel: "Deoghar district: Shravani Mela",
      },
      {
        title: "Multiple arrival points",
        description:
          "Official access information identifies Deoghar Airport and Jasidih Junction as important gateways, supporting pre-arrival and location-aware visitor campaigns.",
        sourceUrl: "https://deoghar.nic.in/how-to-reach/",
        sourceLabel: "Deoghar district access guide",
      },
    ],
    audiences: ["Hospitality", "Food & retail", "Transport", "Healthcare", "Local services", "Events"],
    campaignIdeas: ["Shravan season planning", "Pre-arrival search campaigns", "Hospitality conversion pages", "Location-aware outdoor creative"],
    availability:
      "Digital planning and production are available for Deoghar businesses. Outdoor inventory, permits and on-ground activation are verified for the relevant season and campaign dates.",
    office: false,
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
