"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Layers, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionBackground } from "@/components/shared/SectionBackground";
import {
  PROJECT_CATEGORIES,
  ProjectCategoryFilter,
  PROJECTS_CONFIG,
  SECTION_BACKGROUNDS,
} from "@/lib/constants";
import { projects } from "@/app/data/portfolioData";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={onClick}
      className="group flex h-full flex-col justify-between rounded-2xl border border-[#D1C9B8]/70 bg-[#F3EFE7]/85 p-5 shadow-[0_4px_20px_-2px_rgba(40,36,29,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2C261E]/30 hover:bg-[#FAF7F2] hover:shadow-xl dark:border-white/10 dark:bg-card/75 dark:shadow-none dark:hover:border-primary/40 dark:hover:bg-card/90 cursor-pointer"
    >
      <div>
        {/* Header: Compact Logo badge and Association/Year */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#D1C9B8]/70 bg-[#E8E4DC] p-2 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/15 dark:bg-secondary/80">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              className="object-contain p-1"
              sizes="48px"
            />
          </div>

          <div className="flex flex-col items-end gap-1">
            <Badge variant="secondary" className="text-[11px] font-normal border border-black/5 dark:border-white/10">
              {project.association}
            </Badge>
            {project.year ? (
              <span className="font-mono text-[11px] text-muted-foreground">
                {project.year}
              </span>
            ) : null}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-black dark:text-white dark:group-hover:text-primary">
          {project.title}
        </h3>

        {/* Short Synopsis (2 lines max) */}
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#6F695C] dark:text-muted-foreground sm:text-sm">
          {project.body}
        </p>

        {/* Tech Stack Badges */}
        {project.techStack.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[#D1C9B8]/80 bg-[#E8E4DC]/60 px-2 py-0.5 text-[11px] font-normal text-neutral-700 dark:border-white/10 dark:bg-secondary/40 dark:text-white/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      {/* Action Footer: Detail button */}
      <div className="mt-5 flex items-center justify-between border-t border-[#D1C9B8]/60 pt-3 text-xs font-medium text-neutral-900 transition-colors group-hover:text-black dark:border-white/10 dark:text-primary dark:group-hover:text-white">
        <span>Project Details</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Card>
  );
}

function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto no-scrollbar rounded-2xl border border-[#D1C9B8] bg-[#F5F2EA] p-5 shadow-2xl dark:border-white/15 dark:bg-[#141412] sm:p-7"
      >
        {/* Close Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Close dialog"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 h-8 w-8 rounded-full border-black/10 bg-black/5 text-neutral-800 hover:bg-black/10 dark:border-white/20 dark:bg-black/50 dark:text-white/80 dark:hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* High-Resolution Project Preview Banner (Loaded on-demand only!) */}
        <div className="relative mt-1 h-52 w-full overflow-hidden rounded-xl border border-black/10 bg-neutral-100 dark:border-white/10 dark:bg-secondary/60 sm:h-72">
          <Image
            src={project.logo}
            alt={project.title}
            fill
            priority
            className="object-contain p-4 sm:object-cover sm:p-0"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>

        {/* Project Meta Information */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {project.association}
          </Badge>
          {project.category ? (
            <Badge variant="outline" className="border-primary/40 text-primary text-xs">
              <Layers className="mr-1 h-3 w-3" />
              {project.category}
            </Badge>
          ) : null}
          {project.year ? (
            <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {project.year}
            </span>
          ) : null}
        </div>

        {/* Full Title */}
        <h2 className="mt-3 text-xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
          {project.title}
        </h2>

        {/* Full Description */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-white/80 sm:text-base">
          {project.body}
        </p>

        {/* Complete Tech Stack */}
        {project.techStack.length ? (
          <div className="mt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Technologies Used
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-black/10 bg-black/5 px-2.5 py-1 text-xs text-neutral-800 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ) : null}

        {/* Action Button */}
        <div className="mt-7 flex justify-end">
          <Button
            type="button"
            onClick={onClose}
            className="rounded-full bg-primary px-6 text-xs font-semibold text-primary-foreground hover:bg-primary/90 sm:text-sm"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <SectionBackground
      imageSrc={SECTION_BACKGROUNDS.projects}
      daylightImageSrc={SECTION_BACKGROUNDS.projectsDaylight}
      alt="Projects background"
    >
      <section className="section-shell py-12 pt-28 sm:pt-36" id="projects">
        {/* Open Editorial Header - Matching The Journey aesthetic */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="display-title text-4xl font-semibold tracking-tight text-neutral-950 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:text-white dark:drop-shadow-md sm:text-5xl md:text-6xl"
          >
            {PROJECTS_CONFIG.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-xs leading-relaxed text-neutral-900 font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)] dark:text-white/75 dark:drop-shadow-none sm:text-sm md:text-base"
          >
            {PROJECTS_CONFIG.subtitle}
          </motion.p>

          {/* Horizontally Scrollable Category Filter Pills for Mobile & Centered on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 w-full max-w-full overflow-x-auto no-scrollbar py-2 px-1"
          >
            <div className="mx-auto flex w-max items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 p-1.5 transition-colors duration-300 dark:border-white/20 dark:bg-black/45">
              {PROJECT_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "relative flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors duration-150 cursor-pointer sm:px-4",
                      isActive
                        ? "font-semibold text-primary-foreground"
                        : "text-[#6F695C] hover:text-[#221F1B] dark:text-white/75 dark:hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-project-filter"
                        className="absolute inset-0 rounded-full bg-primary shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 550,
                          damping: 35,
                          mass: 0.7,
                        }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                    <span
                      className={cn(
                        "relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-mono",
                        isActive
                          ? "bg-primary-foreground/20 text-primary-foreground font-bold"
                          : "bg-black/5 text-[#6F695C] font-semibold dark:bg-white/10 dark:text-white/60"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Unified Responsive Grid (Lightweight, No horizontal slider) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Detail Modal (Opens only on click, loads preview on-demand) */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectDetailModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </section>
    </SectionBackground>
  );
}
