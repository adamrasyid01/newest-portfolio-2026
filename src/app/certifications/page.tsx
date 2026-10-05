import type { Metadata } from "next";

import { CertificationsSection } from "./CertificationsSection";

export const metadata: Metadata = {
  title: "Certifications | Adam Rasyid N Portfolio",
};

export default function CertificationsPage() {
  return <CertificationsSection />;
}