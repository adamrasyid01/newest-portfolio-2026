"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/shared/SectionBackground";
import {
  JOURNEY_CATEGORIES,
  JOURNEY_CONFIG,
  JourneyCategory,
  JourneyCategoryFilter,
  SECTION_BACKGROUNDS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

interface JourneyItem {
  year: string;
  category: JourneyCategory;
  label: string;
  period: string;
  title: string;
  body: string;
  location?: string;
  logoSrc?: string;
}

const journeyDetails: JourneyItem[] = [
  {
    year: "2022",
    category: "Education",
    label: "Education",
    period: "2022 - 2025",
    title: "Associate Degree · Politeknik Elektronika Negeri Surabaya",
    body:
      "Enrolled in Informatics Engineering at Politeknik Elektronika Negeri Surabaya. Graduated with a GPA of 3.61/4.00",
    location: "Surabaya",
    logoSrc: "/logo/pensLogo.png",
  },
  {
    year: "2022",
    category: "Teaching & Learning",
    label: "Freelance",
    period: "2022",
    title: "Coding Teacher · Sang Juara School",
    body:
      "Taught basic programming concepts and web development to high school students, fostering their interest in technology and coding.",
    location: "Surabaya",
    logoSrc: "/logo/sangjuaraLogo.png",
  },
  {
    year: "2023",
    category: "Teaching & Learning",
    label: "Skill Building",
    period: "2023 - Frontend Growth",
    title: "From Layouts to Real Interfaces",
    body:
      "Moved from basic web pages into responsive UI work, learning how structure, spacing, and reusable components improve product quality.",
    location: "Surabaya",
  },
  {
    year: "2024",
    category: "Work",
    label: "Agile Development Experience",
    period: "Feb 2024 - June 2024",
    title: "Assistant Scrum Master & Flutter Dev · Ready2Go",
    body:
      "Assisted Product Owner with 5-person team using Agile methodologies to develop and launch the Ready2Go App — now on the Play Store with a 4.8+ star rating.",
    location: "Surabaya",
    logoSrc: "/logo/flutterLogo.png",
  },
  {
    year: "2024",
    category: "Work",
    label: "Internship",
    period: "July 2024 - Dec 2024",
    title: "Frontend Developer Intern · PT Wahana Meditek Indonesia",
    body:
      "Develop Adamlabs Laboratory Information System (LIS), AdamMEDS (Hospital Information System) using Vue.js, improving UI/UX and implementing new features to enhance user experience and operational efficiency.",
    location: "Surabaya",
    logoSrc: "/logo/wmiLogo.jpg",
  },
  {
    year: "2025",
    category: "Work",
    label: "Full-Time",
    period: "Sept 2025 - July 2026",
    title: "Frontend & Mobile Developer · PT Digitalisasi Perangkat Indonesia (Indofund.id)",
    body:
      "Develop Indofund.id Public Site, Indofund Admin Site, Kenari Mobile App, Indofund.id Mobile Apps using Flutter. Technologies: React JS, TypeScript, Next.js, Flutter, Firebase.",
    location: "Jakarta",
    logoSrc: "/logo/indofundLogo.png",
  },
  {
    year: "2026",
    category: "Education",
    label: "Education",
    period: "2026 - Present",
    title: "Applied Bachelor Degree (D4) · Politeknik Elektronika Negeri Surabaya",
    body:
      "Continuing education in Informatics Engineering (D4) at Politeknik Elektronika Negeri Surabaya, focusing on Artificial Intelligence, Machine Learning, Computer Vision, and Advanced Design Patterns for Software Engineering.",
    location: "Surabaya",
    logoSrc: "/logo/pensLogo.png",
  },
];

export function CareerSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<JourneyCategoryFilter>("All");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return [...journeyDetails].reverse();
    }
    return journeyDetails
      .filter((item) => item.category === selectedCategory)
      .reverse();
  }, [selectedCategory]);

  return (
    <SectionBackground
      imageSrc={SECTION_BACKGROUNDS.journey}
      daylightImageSrc={SECTION_BACKGROUNDS.journeyDaylight}
      alt="Journey background"
    >
      <section className="section-shell py-12 pt-28 sm:pt-36" id="journey">
        {/* Open Editorial Header - No enclosing square wrapper */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="display-title text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:drop-shadow-md"
          >
            {JOURNEY_CONFIG.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-xs sm:text-sm md:text-base leading-relaxed text-neutral-900 font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)] dark:text-white/75 dark:drop-shadow-none"
          >
            {JOURNEY_CONFIG.subtitle}
          </motion.p>

          {/* Horizontally Scrollable Category Filter Pills for Mobile & Centered on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 w-full max-w-full overflow-x-auto no-scrollbar py-2 px-1"
          >
            <div className="mx-auto flex w-max items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 p-1.5  transition-colors duration-300 dark:border-white/20 dark:bg-black/45">
              {JOURNEY_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? journeyDetails.length
                    : journeyDetails.filter((i) => i.category === category).length;

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
                        layoutId="active-journey-filter"
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

        {/* Free-flowing Timeline Stream */}
        <div className="relative mx-auto w-full max-w-4xl pb-8">
          {/* Single Continuous Timeline Vertical Spine */}
          <div className="pointer-events-none absolute left-3.5 sm:left-5 -translate-x-1/2 top-4 bottom-10 w-[2px] bg-gradient-to-b from-primary/70 via-primary/35 to-transparent" />

          {/* Timeline Items Stack */}
          <div className="flex w-full flex-col gap-3 sm:gap-4">
            {filteredItems.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="group relative w-full pl-9 sm:pl-14 pb-4 sm:pb-5"
              >
                {/* Glowing Node on Timeline Spine - Centered on the exact same axis */}
                <div className="absolute left-3.5 sm:left-5 -translate-x-1/2 top-5 z-10 flex size-4 sm:size-5 items-center justify-center rounded-full border-2 border-primary bg-[#E8E4DC] shadow-sm dark:bg-[#121212] dark:shadow-[0_0_12px_#E1E0CC]">
                  <div className="size-1.5 sm:size-2 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Frosted Glass Timeline Content - Identical layout, padding, and geometry across both modes */}
                <div className="rounded-2xl border border-black/8 bg-white/80 p-4 sm:p-5 shadow-sm backdrop-blur-md transition-all duration-200 group-hover:translate-x-1 group-hover:bg-white/95 dark:border-white/10 dark:bg-[#141412]/75 dark:shadow-none dark:hover:bg-[#141412]/90">
                  {/* Meta Row: Badges, Period & Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-0.5 text-xs font-bold tracking-wide text-neutral-950 dark:border-primary/25 dark:bg-primary/10 dark:text-primary">
                        {item.label}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-neutral-800 font-medium dark:text-white/60">
                        <Calendar className="size-3 text-primary/80" />
                        {item.period}
                      </span>
                    </div>

                    {item.location && (
                      <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-800 font-medium dark:text-white/60">
                        <MapPin className="size-3.5 text-primary/80" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Content Row: Logo Medallion + Title & Description */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {item.logoSrc ? (
                      <div className="relative size-12 sm:size-14 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-white p-2 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105 dark:border-white/15 dark:bg-white/10">
                        <img
                          src={item.logoSrc}
                          alt={item.title}
                          className="size-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-neutral-950 font-mono text-xs sm:text-sm font-bold shadow-inner dark:border-primary/20 dark:bg-primary/10 dark:text-primary">
                        {item.year}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight leading-snug transition-colors group-hover:text-primary dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-xs sm:text-sm md:text-base text-neutral-900 leading-relaxed font-normal dark:text-white/80">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
