import { SiteHeader } from "@/features/portfolio/components/SiteHeader";
import { CareerSection } from "@/features/portfolio/sections/CareerSection";
import { CertificationsSection } from "@/features/portfolio/sections/CertificationsSection";
import { ContactSection } from "@/features/portfolio/sections/ContactSection";
import { HeroSection } from "@/features/portfolio/sections/HeroSection";
import { ProjectsSection } from "@/features/portfolio/sections/ProjectsSection";
import { SkillSection } from "@/features/portfolio/sections/SkillSection";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <SiteHeader />

        <main>
          <div aria-hidden="true" className="h-16" />
          <HeroSection />
          <CareerSection />
          <SkillSection />
          <ProjectsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        <footer className="section-shell py-8 text-center text-sm text-muted-foreground">
          v.1.0.0 Build May 2026 © Adam Rasyid N 
        </footer>
      </div>
    </div>
  );
}
