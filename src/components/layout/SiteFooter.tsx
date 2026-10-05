"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/app/data/portfolioData";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/overview") {
    return null;
  }

  return (
    <footer className="w-full pb-4 sm:pb-6 text-center text-[11px] text-neutral-500 dark:text-white/50 tracking-wider">
      &copy; 2026 {profile.name} &middot; All Rights Reserved
    </footer>
  );
}
