import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Manrope,
} from "next/font/google";

import "leaflet/dist/leaflet.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  icons:{
    icon: "/icon/metaIcon.png",
  },
  title: "Adam Rasyid N Portfolio",
  description:
    "Personal portfolio for Adam Rasyid N, built with Next.js, TypeScript, Tailwind CSS, and shadcn-style components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} ${ibmPlexMono.variable} min-h-screen overflow-x-hidden bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
