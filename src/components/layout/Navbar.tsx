"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { navItems } from "@/app/data/portfolioData";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeHref, setActiveHref] = useState(pathname);
  const [isDark, setIsDark] = useState(true);

  // Sync with browser back/forward navigation and route resolution
  useEffect(() => {
    setActiveHref(pathname);
  }, [pathname]);

  // Sync theme with document class on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  // Proactively prefetch all routes on mount so Next.js caches them in memory
  useEffect(() => {
    navItems.forEach((item) => {
      router.prefetch(item.href);
    });
  }, [router]);

  return (
    <nav
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-5"
      aria-label="Main Navigation"
    >
      <div className="flex items-center gap-1 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 p-1.5 transition-colors duration-300 dark:border-white/20 dark:bg-black/45 sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              onMouseEnter={() => router.prefetch(item.href)}
              onTouchStart={() => router.prefetch(item.href)}
              onClick={() => setActiveHref(item.href)}
              className={cn(
                "relative rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-150 sm:px-4 sm:text-sm",
                isActive
                  ? "font-semibold text-primary-foreground"
                  : "text-[#6F695C] hover:text-[#221F1B] dark:text-white/75 dark:hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 rounded-full bg-primary shadow-md"
                  transition={{
                    type: "spring",
                    stiffness: 550,
                    damping: 35,
                    mass: 0.7,
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="relative ml-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-black/5 text-neutral-800 transition-all hover:scale-105 hover:bg-black/10 dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 cursor-pointer sm:h-8 sm:w-8"
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5 text-primary transition-transform duration-200" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-amber-600 transition-transform duration-200" />
          )}
        </button>
      </div>
    </nav>
  );
}


