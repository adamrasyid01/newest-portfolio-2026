import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Manrope,
} from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
  icons: {
    icon: [
      { url: "/icon/metaIcon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon/metaIcon.png",
    apple: "/icon/metaIcon.png",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} ${ibmPlexMono.variable} min-h-screen overflow-x-hidden bg-background antialiased`}
      >
        <Navbar />
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="relative z-10">
            <main>{children}</main>

            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}