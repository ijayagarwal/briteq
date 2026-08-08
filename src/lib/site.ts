import type { Metadata } from "next";

export const site = {
  name: "BRITEQ",
  legalName: "BRITEQ",
  tagline: "Jharkhand's complete marketing partner",
  description:
    "BRITEQ brings outdoor advertising, social media, influencer campaigns, websites, branding, creative and performance marketing into one practical growth plan for businesses across Jharkhand.",
  url: "https://briteq.in",
  email: "ravi@briteq.in",
  phone: "+91 74619 58873",
  phoneHref: "+917461958873",
  whatsappNumber: "917461958873",
  instagramUrl: "https://www.instagram.com/briteq_in/",
  instagramHandle: "@briteq_in",
  linkedinUrl: "https://www.linkedin.com/company/briteqin",
  address: {
    line1: "1st Floor, Hotel Blue Whale",
    line2: "Sitalpur, Giridih",
    state: "Jharkhand 815301",
    country: "India",
    full: "1st Floor, Hotel Blue Whale, Sitalpur, Giridih, Jharkhand 815301, India",
  },
  billboardLocation: "KB Sahay Chowk, Giridih",
  mapsEmbed:
    "https://www.google.com/maps?q=Hotel+Blue+Whale+Sitalpur+Giridih+Jharkhand+815301&output=embed",
  serviceAreas: [
    "Giridih",
    "Ranchi",
    "Dhanbad",
    "Bokaro",
    "Jamshedpur",
    "Deoghar",
    "Hazaribagh",
    "Ramgarh",
  ],
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path = ""): string {
  return new URL(path, site.url).toString();
}

export function routeUrl(path = ""): string {
  const route = path.replace(/^\/+|\/+$/g, "");
  return route ? `${site.url}/${route}/` : `${site.url}/`;
}

export const socialImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "BRITEQ — One partner. Every way to grow.",
  type: "image/jpeg",
} as const;

export function pageOpenGraph(
  title: string,
  description: string,
  path: string
): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title,
    description,
    url: path,
    images: [socialImage],
  };
}
