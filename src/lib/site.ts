export const site = {
  name: "BRITEQ",
  tagline: "Illuminate Your Brand, Digitally",
  description:
    "Premium digital LED screen advertising at Giridih's busiest junction — KB Sahay Chowk. High-impact billboard ads + social media boost for local brands.",
  email: "ravi@briteq.in",
  phone: "+91 74619 58873",
  whatsappNumber: "917461958873",
  instagramUrl: "https://www.instagram.com/briteq_in/",
  instagramHandle: "@briteq_in",
  facebookUrl: "https://www.facebook.com/share/p/1CR5C5EyAQ/",
  address: {
    line1: "1st Floor, Hotel Blue Whale",
    line2: "Sitalpur, Giridih",
    state: "Jharkhand 815301",
    full: "1st Floor, Hotel Blue Whale, Sitalpur, Giridih, Jharkhand 815301",
  },
  location: "KB Sahay Chowk, Giridih",
  hours: "7:00 AM – 11:00 PM",
  mapsEmbed:
    "https://www.google.com/maps?q=Hotel+Blue+Whale+Sitalpur+Giridih+Jharkhand+815301&output=embed",
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
