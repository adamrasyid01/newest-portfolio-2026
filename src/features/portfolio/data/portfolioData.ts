import {
  BookOpen,
  Braces,
  Code2,
  Github,
  GraduationCap,
  Laptop,
  Layers3,
  Mail,
  MapPin,
  Network,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";

export const profile = {
  name: "Adam Rasyid N",
  location: "Surabaya, Indonesia",
  tagline: "Lifelong Learner",
  summary:
    "Engineering-focused builder from Indonesia, designing product-ready interfaces and turning public work into a clear portfolio system for Next.js and TypeScript.",
  github: "https://github.com/adamrasyid01",
  linkedin: "https://www.linkedin.com/in/your-linkedin",
  cv: "https://drive.google.com/file/d/your-cv-id/view?usp=sharing",
  email: "ADD-YOUR-EMAIL@MAIL.COM",
  avatar: "https://avatars.githubusercontent.com/u/117847146?v=4",
};

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const career = [
  {
    period: "2022 - Present",
    title: "Public GitHub Builder",
    body: "A personal builder path centered on public work, experiments, and visible learning.",
    company: "Personal Builder",
    Icon: Github,
  },
  {
    period: "Current Base",
    title: "Electronic Engineering Polytechnic Institute of Surabaya",
    body: "Technical foundation in electronics, systems thinking, and implementation discipline.",
    company: "EEPIS Surabaya",
    Icon: GraduationCap,
  },
  {
    period: "Next Step",
    title: "Future Team or Company Milestone",
    body: "Prepared for internship, collaboration, and frontend/product engineering opportunities.",
    company: "Future Team",
    Icon: Network,
  },
];

export const skillGroups = [
  {
    phase: "Career 01",
    title: "Public Builder",
    skills: ["Next.js", "TypeScript", "GitHub"],
    Icon: Code2,
  },
  {
    phase: "Career 02",
    title: "Engineering Base",
    skills: ["Electronics", "Systems", "Problem Solving"],
    Icon: Braces,
  },
  {
    phase: "Career 03",
    title: "Open Collaborator",
    skills: ["Frontend", "UI Systems", "Collaboration"],
    Icon: Layers3,
  },
];

export const projects = [
  {
    association: "Assoc: Personal Builder",
    title: "Public GitHub Portfolio",
    body: "Public repository work associated with the personal builder path in Career Journey.",
    image: "Code archive and repository workflow",
    Icon: Github,
  },
  {
    association: "Assoc: EEPIS Surabaya",
    title: "Engineering Project Builds",
    body: "Engineering-focused work associated with Electronic Engineering Polytechnic Institute of Surabaya.",
    image: "Electronics prototype and technical workflow",
    Icon: Laptop,
  },
  {
    association: "Assoc: Future Team",
    title: "Product Interface Direction",
    body: "Product interface direction associated with the future team or company milestone.",
    image: "Frontend interface and shadcn-ready layout",
    Icon: PanelsTopLeft,
  },
];

export const certifications = [
  {
    issuer: "Institution / Issuer",
    title: "Add certification title here.",
    note: "Issuer, year, and credential detail.",
    Icon: BookOpen,
  },
  {
    issuer: "Institution / Issuer",
    title: "Add workshop or badge title here.",
    note: "Online course, workshop, or technical badge.",
    Icon: Sparkles,
  },
];

export const contactMeta = [
  {
    label: "Availability",
    value: "Open for frontend collaboration, internship, and company product work.",
    Icon: MapPin,
  },
  {
    label: "Response",
    value: "Usually replies within 1-3 days for study, internship, and product inquiries.",
    Icon: Mail,
  },
];
