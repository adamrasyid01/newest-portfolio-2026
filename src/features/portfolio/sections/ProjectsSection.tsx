"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/features/portfolio/data/portfolioData";

const featuredProjects = projects.slice(0, 3);
const sliderProjects = projects.slice(3);

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  imageSizes,
  compact = false,
  expanded = false,
}: {
  project: Project;
  imageSizes: string;
  compact?: boolean;
  expanded?: boolean;
}) {
  return (
    <Card
      className={`flex h-full flex-col overflow-hidden bg-background/72 backdrop-blur-sm ${
        expanded ? "border-border/80 bg-card shadow-2xl" : ""
      }`}
    >
      <div className="border-b bg-secondary/70 backdrop-blur-sm">
        <div
          className={`relative w-full overflow-hidden ${
            expanded
              ? "h-[42vh] sm:h-[46vh] lg:h-[50vh]"
              : compact
                ? "h-36 sm:h-40"
                : "h-40 sm:h-44"
          }`}
        >
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            className="object-cover object-center"
            sizes={imageSizes}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{project.association}</Badge>
          {project.year ? (
            <span className="text-xs font-medium text-muted-foreground">
              {project.year}
            </span>
          ) : null}
        </div>

        <h3
          className={`mt-4 font-semibold leading-tight ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.body}
        </p>

        {project.techStack.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeProjectTitle, setActiveProjectTitle] = useState<string | null>(
    null,
  );
  const activeProject =
    projects.find((project) => project.title === activeProjectTitle) ?? null;

  const scrollSlider = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) {
      return;
    }

    const amount = Math.max(container.clientWidth * 0.9, 320);
    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-shell py-6" id="projects">
      <AnimatePresence>
        {activeProject ? (
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none fixed inset-0 z-50 hidden items-center justify-center bg-primary/18 p-6 backdrop-blur-md lg:flex"
          >
            <motion.div
              initial={{ scale: 0.9, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 18, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="h-[min(88vh,960px)] w-[min(92vw,1240px)]"
            >
              <ProjectCard
                project={activeProject}
                imageSizes="92vw"
                expanded
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
            <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
              Hover to see the Details :)
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="cursor-default transition-transform duration-300 lg:cursor-zoom-in lg:hover:scale-[1.02]"
                onMouseEnter={() => setActiveProjectTitle(project.title)}
                onMouseLeave={() => setActiveProjectTitle(null)}
              >
                <ProjectCard
                  project={project}
                  imageSizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>

          {sliderProjects.length ? (
            <div className="mt-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    More Projects
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">Explore The Rest</h3>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Previous projects"
                    onClick={() => scrollSlider("left")}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Next projects"
                    onClick={() => scrollSlider("right")}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div
                ref={sliderRef}
                className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {sliderProjects.map((project) => (
                  <div
                    key={project.title}
                    className="w-[88%] shrink-0 snap-start transition-transform duration-300 sm:w-[70%] lg:w-[38%] lg:cursor-zoom-in lg:hover:scale-[1.02]"
                    onMouseEnter={() => setActiveProjectTitle(project.title)}
                    onMouseLeave={() => setActiveProjectTitle(null)}
                  >
                    <ProjectCard
                      project={project}
                      compact
                      imageSizes="(min-width: 1024px) 38vw, (min-width: 640px) 70vw, 88vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
