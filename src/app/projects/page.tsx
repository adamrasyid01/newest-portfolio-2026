import type { Metadata } from "next";

import { ProjectsSection } from "./ProjectsSection";

export const metadata: Metadata = {
  title: "Projects | Adam Rasyid N Portfolio",
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}