import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BRITEQ — Jharkhand's Complete Marketing Partner",
    short_name: "BRITEQ",
    description: "Outdoor, digital, creative and technology for businesses across Jharkhand.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F2EC",
    theme_color: "#0B0B12",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
