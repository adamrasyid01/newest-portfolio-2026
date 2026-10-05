import type { Metadata } from "next";

import { HeroSection } from "./components/HeroSection";

export const metadata: Metadata = {
  title: "Overview | Adam Rasyid N Portfolio",
};

export default function OverviewPage() {
  return <HeroSection />;
}