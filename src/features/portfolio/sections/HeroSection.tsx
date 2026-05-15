import { Download, Github, Linkedin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndonesiaMapCard } from "@/features/portfolio/components/IndonesiaMapCard";
import { LanyardCard } from "@/features/portfolio/components/LanyardCard";
import { profile } from "@/features/portfolio/data/portfolioData";

export function HeroSection() {
  const summaryParagraphs = profile.summary
    .split(/\r?\n\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="section-shell py-6 sm:py-8" id="overview">
      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <LanyardCard />

        <div className="grid gap-4">
          <div className="batik-panel reveal reveal-delay-1 rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-6">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="secondary">Portfolio 2026</Badge>
                <Badge className="bg-accent text-accent-foreground">
                  Open for collaboration / work
                </Badge>
              </div>

              <h1 className="display-title mt-5 text-5xl font-semibold text-foreground sm:text-6xl">
                {profile.name}
              </h1>
              <div className="mt-4 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
                {summaryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border bg-secondary/72 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">37+</p>
                  <p className="text-sm text-muted-foreground">Public repos</p>
                </div>
                <div className="rounded-lg border bg-secondary/72 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold">2022</p>
                  <p className="text-sm text-muted-foreground">
                    Started building
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={profile.github} rel="noreferrer" target="_blank">
                <Github />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.linkedin} rel="noreferrer" target="_blank">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.cv} rel="noreferrer" target="_blank">
                <Download />
                Download CV
              </a>
            </Button>
          </div>

          <IndonesiaMapCard />
        </div>
      </div>
    </section>
  );
}
