import type { Metadata } from "next";

import { SEO_PAGES, SITE_CONFIG } from "@/lib/constants";
import { CertificationsSection } from "./CertificationsSection";

export const metadata: Metadata = {
  title: SEO_PAGES.certifications.title,
  description: SEO_PAGES.certifications.description,
  alternates: {
    canonical: SEO_PAGES.certifications.canonical,
  },
  openGraph: {
    title: `${SEO_PAGES.certifications.title} | ${SITE_CONFIG.name}`,
    description: SEO_PAGES.certifications.description,
    url: `${SITE_CONFIG.siteUrl}${SEO_PAGES.certifications.canonical}`,
  },
};

export default function CertificationsPage() {
  return <CertificationsSection />;
}