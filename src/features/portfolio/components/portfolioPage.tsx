import { PortfolioBackground } from "@/features/portfolio/components/portfolioBackground";
import { SiteHeader } from "@/features/portfolio/components/siteHeader";
import { CareerSection } from "@/features/portfolio/components/sections/careerSection";
import { CertificationsSection } from "@/features/portfolio/components/sections/certificationsSection";
import { ContactSection } from "@/features/portfolio/components/sections/contactSection";
import { HeroSection } from "@/features/portfolio/components/sections/heroSection";
import { ProjectsSection } from "@/features/portfolio/components/sections/projectsSection";
import { SkillSection } from "@/features/portfolio/components/sections/skillSection";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PortfolioBackground />

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
          2026 Adam Rasyid N All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
