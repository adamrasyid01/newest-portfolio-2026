/**
 * Centralized Application, Theme & SEO Constants
 * Path: src/lib/constants.ts
 */

export const SITE_CONFIG = {
  name: "Adam Rasyid N",
  shortName: "Adam Rasyid",
  domain: "adamrasyid.my.id",
  siteUrl: "https://adamrasyid.my.id",
  title: "Adam Rasyid N | Software Engineer & Frontend Developer",
  description:
    "Portfolio of Adam Rasyid N — Frontend & aspiring Full-Stack Developer specializing in clean, responsive, and performance-driven web and mobile applications using Next.js, TypeScript, React, and Flutter.",
  keywords: [
    "Adam Rasyid",
    "Adam Rasyid N",
    "Adam Rasyid Nur Muhammad",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Web Developer Indonesia",
    "Surabaya Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Flutter Developer",
    "UI/UX Engineering",
    "PENS Surabaya",
  ],
  author: {
    name: "Adam Rasyid N",
    url: "https://adamrasyid.my.id",
    github: "https://github.com/adamrasyid01",
    linkedin: "https://www.linkedin.com/in/adamrasyid01/",
    email: "adamrasyid01@gmail.com",
    location: "Surabaya, Indonesia",
  },
  ogImage: "/og-image.png",
  locale: "en_US",
  themeColor: {
    dark: "#0c0c0b",
    light: "#F4F0E8",
  },
} as const;

export const SEO_PAGES = {
  overview: {
    title: "Overview",
    description:
      "Discover Adam Rasyid N's background, core competencies, frontend architecture focus, and passion for crafting modern, responsive digital products.",
    canonical: "/overview",
  },
  journey: {
    title: "Journey",
    description:
      "Explore Adam Rasyid N's career milestones, professional experience, academic background at PENS, and continuous learning timeline.",
    canonical: "/journey",
  },
  projects: {
    title: "Projects",
    description:
      "Showcase of featured web and mobile applications, including Bakuin AI Language Checker, Ready2Go, JaTeamCamp, and modern frontend solutions.",
    canonical: "/projects",
  },
  certifications: {
    title: "Certifications",
    description:
      "Verified professional credentials, course achievements, and skill milestones from industry-leading tech platforms and academies.",
    canonical: "/certifications",
  },
} as const;

export const THEME_COLORS = {
  // Prisma Signature Colors
  prismaCream: "#E1E0CC",
  prismaCreamMuted: "rgba(225, 224, 204, 0.8)",
  prismaCreamSubtle: "rgba(225, 224, 204, 0.15)",
  prismaObsidian: "#0c0c0b",
  prismaCharcoal: "#141412",
  prismaDarkElevated: "#1b1b18",
  prismaBorder: "#282723",
  prismaTextMuted: "#9e9c8f",
} as const;

export const PALETTE_TOKENS = {
  background: "#0c0c0b",
  foreground: "#E1E0CC",
  card: "#141412",
  cardForeground: "#E1E0CC",
  popover: "#141412",
  popoverForeground: "#E1E0CC",
  primary: "#E1E0CC",
  primaryForeground: "#0c0c0b",
  secondary: "#1c1b18",
  secondaryForeground: "#E1E0CC",
  muted: "#181715",
  mutedForeground: "#9e9c8f",
  accent: "#24231f",
  accentForeground: "#f5f4ec",
  border: "#282723",
  input: "#282723",
  ring: "#E1E0CC",
  batik: "#38362f",
} as const;

export const OVERVIEW_HERO_CONFIG = {
  title: "Adam Rasyid N",
  greetingPrefix: "Hello, I'm",
  description:
    "Frontend & aspiring Full-Stack Developer creating clean, scalable, and responsive digital products. Driven by curiosity, continuous learning, and crafting seamless web experiences.",
  ctaText: "Explore Projects",
  ctaHref: "/projects",
  githubLabel: "GitHub",
  linkedinLabel: "LinkedIn",
} as const;

export const INTRO_ROLES = [
  "Frontend Engineer",
  "Fullstack Engineer",
  "Problem Solver",
  "Your Business Partner",
] as const;


export const HERO_MEDIA_CONFIG = {
  defaultVideoSrc:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  // Poster removed to prevent computer chip / processor placeholder flashing
  defaultPosterSrc: "",
} as const;

export const SECTION_BACKGROUNDS = {
  journey: "/backgrounds/journey.jpg",
  journeyDaylight: "/backgrounds/journey-daylight.jpg",
  projects: "/backgrounds/projects.jpg",
  projectsDaylight: "/backgrounds/projects-daylight.jpg",
  certifications: "/backgrounds/certifications.jpg",
  certificationsDaylight: "/backgrounds/certifications-daylight.jpg",
} as const;

export const JOURNEY_CATEGORIES = [
  "All",
  "Work",
  "Education",
  "Teaching & Learning",
] as const;

export type JourneyCategoryFilter = (typeof JOURNEY_CATEGORIES)[number];
export type JourneyCategory = Exclude<JourneyCategoryFilter, "All">;

export const JOURNEY_CONFIG = {
  title: "The Journey",
  subtitle:
    "A chronicle of continuous growth, engineering discipline, and creating impactful web and mobile experiences from learning foundations to building scalable digital products.",
} as const;

export const PROJECT_CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "AI & Tools",
] as const;

export type ProjectCategoryFilter = (typeof PROJECT_CATEGORIES)[number];
export type ProjectCategory = Exclude<ProjectCategoryFilter, "All">;

export const PROJECTS_CONFIG = {
  title: "Projects",
  subtitle:
    "A collection of digital products, web applications, and mobile solutions developed with modern stacks and performance-driven mindset.",
} as const;

export const CERTIFICATIONS_CONFIG = {
  title: "Certifications",
  subtitle:
    "Official credentials, course completions, and validated skill milestones acquired from industry-leading tech academies and platforms.",
} as const;



