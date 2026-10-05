import type { Metadata } from "next";

import { SEO_PAGES, SITE_CONFIG } from "@/lib/constants";
import { CareerSection } from "./CareerSection";

export const metadata: Metadata = {
  title: SEO_PAGES.journey.title,
  description: SEO_PAGES.journey.description,
  alternates: {
    canonical: SEO_PAGES.journey.canonical,
  },
  openGraph: {
    title: `${SEO_PAGES.journey.title} | ${SITE_CONFIG.name}`,
    description: SEO_PAGES.journey.description,
    url: `${SITE_CONFIG.siteUrl}${SEO_PAGES.journey.canonical}`,
  },
};

export default function JourneyPage() {
  return <CareerSection />;
}