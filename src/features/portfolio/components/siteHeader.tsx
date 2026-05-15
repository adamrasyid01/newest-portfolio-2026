"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navItems, profile } from "@/features/portfolio/data/portfolioData";

export function SiteHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/76 backdrop-blur-md">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a
            className="text-base font-semibold tracking-[-0.03em] sm:text-lg"
            href="#overview"
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground sm:flex">
            {navItems.map((item) => (
              <a
                className="eyebrow text-[0.76rem] tracking-[0.16em] transition-colors hover:text-foreground"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex sm:text-sm"
              href="#contact"
            >
              Message Me!
            </a>

            <button
              aria-label="Open navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm transition-colors hover:bg-card sm:hidden"
              onClick={() => setIsSidebarOpen(true)}
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-70 bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 sm:hidden ${
          isSidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-80 w-[84vw] max-w-sm border-l border-border/80 bg-card/96 p-6 shadow-[-20px_0_60px_rgba(27,23,20,0.12)] backdrop-blur-md transition-transform duration-300 sm:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-[0.72rem] text-muted-foreground">
              Navigation
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Explore
            </h2>
          </div>

          <button
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground transition-colors hover:bg-background"
            onClick={() => setIsSidebarOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              className="rounded-2xl border border-border/70 bg-background/72 px-4 py-4 text-base font-semibold text-foreground transition-colors hover:bg-background"
              href={item.href}
              key={item.href}
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-3xl border border-border/70 bg-background/72 p-4">
          <p className="eyebrow text-[0.72rem] text-muted-foreground">
            Contact
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Jump straight to the contact section if you want to collaborate or
            say hello.
          </p>
          <a
            className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            href="#contact"
            onClick={() => setIsSidebarOpen(false)}
          >
            Message Me!
          </a>
        </div>
      </aside>
    </>
  );
}
