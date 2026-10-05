import type { Metadata } from "next";

import { SEO_PAGES, SITE_CONFIG } from "@/lib/constants";
import { HeroSection } from "./components/HeroSection";

export const metadata: Metadata = {
  title: SEO_PAGES.overview.title,
  description: SEO_PAGES.overview.description,
  alternates: {
    canonical: SEO_PAGES.overview.canonical,
  },
  openGraph: {
    title: `${SEO_PAGES.overview.title} | ${SITE_CONFIG.name}`,
    description: SEO_PAGES.overview.description,
    url: `${SITE_CONFIG.siteUrl}${SEO_PAGES.overview.canonical}`,
  },
};

export default function OverviewPage() {
  return <HeroSection />;
}