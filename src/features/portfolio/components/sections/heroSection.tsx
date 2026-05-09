import { Download, Github, Linkedin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IndonesiaMapCard } from "@/features/portfolio/components/indonesiaMapCard";
import { profile } from "@/features/portfolio/data/portfolioData";

export function HeroSection() {
  return (
    <section className="section-shell py-6 sm:py-8" id="overview">
      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <Card className="batik-panel reveal self-start overflow-hidden bg-secondary/72 backdrop-blur-md">
          <CardContent className="relative z-10 p-4">
            <Badge variant="outline">Portfolio Identity</Badge>

            <h2 className="mt-4 text-2xl font-bold tracking-tight">
              Frontend Developer
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Building clean, responsive, and product-ready web experiences with
              modern frontend tools.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "React", "Tailwind", "shadcn/ui"].map(
                (item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ),
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <div className="batik-panel reveal reveal-delay-1 rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-6">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="secondary">Portfolio 2026</Badge>
                <Badge className="bg-accent text-accent-foreground">
                  Open for collaboration / work
                </Badge>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {profile.summary}
              </p>

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
