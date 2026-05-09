import { profile, navItems } from "@/features/portfolio/data/portfolioData";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/72 backdrop-blur-md">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a className="text-sm font-bold sm:text-base" href="#overview">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <a
              className="transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-sm"
          href="#cpleeeoenoe"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}
