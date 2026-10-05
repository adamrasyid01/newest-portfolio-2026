import type { Metadata } from "next";

import { SEO_PAGES, SITE_CONFIG } from "@/lib/constants";
import { ProjectsSection } from "./ProjectsSection";

export const metadata: Metadata = {
  title: SEO_PAGES.projects.title,
  description: SEO_PAGES.projects.description,
  alternates: {
    canonical: SEO_PAGES.projects.canonical,
  },
  openGraph: {
    title: `${SEO_PAGES.projects.title} | ${SITE_CONFIG.name}`,
    description: SEO_PAGES.projects.description,
    url: `${SITE_CONFIG.siteUrl}${SEO_PAGES.projects.canonical}`,
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}