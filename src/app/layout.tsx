import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "leaflet/dist/leaflet.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}