import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationDetailPage from "@/components/LocationDetailPage";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getLocationPage, locationPages } from "@/lib/locations";
import { getServicePage, servicePages } from "@/lib/seo-pages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...servicePages.map((service) => ({ slug: service.slug })),
    ...locationPages.map((location) => ({ slug: location.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) {
    return {
      title: { absolute: service.title },
      description: service.description,
      alternates: { canonical: `/${service.slug}` },
      openGraph: {
        title: service.title,
        description: service.description,
        url: `/${service.slug}`,
        type: "website",
        images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BRITEQ — One partner. Every way to grow." }],
      },
    };
  }

  const location = getLocationPage(slug);
  if (location) {
    return {
      title: { absolute: location.title },
      description: location.description,
      alternates: { canonical: `/${location.slug}` },
      openGraph: {
        title: location.title,
        description: location.description,
        url: `/${location.slug}`,
        type: "website",
        images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BRITEQ — One partner. Every way to grow." }],
      },
    };
  }

  return {};
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (service) return <ServiceDetailPage service={service} />;

  const location = getLocationPage(slug);
  if (location) return <LocationDetailPage location={location} />;

  notFound();
}
