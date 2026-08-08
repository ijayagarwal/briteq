import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "BRITEQ | Jharkhand's Complete Marketing Partner",
    template: "%s | BRITEQ",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "BRITEQ", url: site.url }],
  creator: "BRITEQ",
  publisher: "BRITEQ",
  category: "Marketing",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "marketing agency Jharkhand",
    "digital marketing Jharkhand",
    "billboard advertising Jharkhand",
    "social media management Jharkhand",
    "branding agency Jharkhand",
    "website development Jharkhand",
    "BRITEQ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "BRITEQ | Jharkhand's Complete Marketing Partner",
    description: site.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "BRITEQ — One partner. Every way to grow.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F2EC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B12" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: absoluteUrl("/briteq-logo.png"),
      email: site.email,
      telephone: site.phoneHref,
      sameAs: [site.instagramUrl, site.linkedinUrl],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      image: absoluteUrl("/briteq-logo.png"),
      telephone: site.phoneHref,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, Hotel Blue Whale, Sitalpur",
        addressLocality: "Giridih",
        addressRegion: "Jharkhand",
        postalCode: "815301",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "State", name: "Jharkhand" },
        ...site.serviceAreas.map((name) => ({ "@type": "City", name })),
      ],
      parentOrganization: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${space.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={organizationSchema} />
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
