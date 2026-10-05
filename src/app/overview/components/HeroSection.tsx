"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { navItems, profile } from "@/app/data/portfolioData";
import { PrismaHero, WordsPullUp } from "@/components/shared/PrismaHero";
import { useTypewriter } from "@/hooks/useTypewriter";
import {
  INTRO_ROLES,
  OVERVIEW_HERO_CONFIG,
} from "@/lib/constants";

export function HeroSection() {
  const { typedText } = useTypewriter({ words: INTRO_ROLES });

  return (
    <section className="relative h-screen w-full p-0 m-0 overflow-hidden" id="overview">
      <PrismaHero
        className="h-full w-full p-0 m-0"
        showNavbar={false}
        navItems={navItems}
        containerClassName="flex h-full w-full flex-col justify-between rounded-none border-none"
      >


        {/* Center Hero Block: All elements centered in requested sequence */}
        <div className="reveal reveal-delay-2 my-auto mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center">
          {/* Avatar from IntroGate with modern glow and glass ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center justify-center rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 p-1.5 shadow-xl dark:border-white/25 dark:bg-white/10 dark:shadow-2xl backdrop-blur-md"
          >
            <div className="rounded-full border-2 border-primary/40 p-1">
              <img
                alt={profile.name}
                className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20 md:h-22 md:w-22 shadow-inner"
                src={profile.avatar}
              />
            </div>
          </motion.div>

          {/* Typewriter role badge migrated from IntroGate */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 px-3.5 py-1 text-xs font-medium text-[#221F1B] backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white sm:text-sm shadow-sm">
            <span className="text-[#6F695C] dark:text-white/70">{OVERVIEW_HERO_CONFIG.greetingPrefix}</span>
            <span className="font-semibold text-primary">{typedText}</span>
            <span className="h-3.5 w-0.5 animate-pulse bg-primary" />
          </div>

          {/* 1. Adam Rasyid (Centered) */}
          <h1 className="font-medium leading-[0.9] tracking-[-0.05em] text-[13vw] sm:text-[9.5vw] md:text-[7vw] lg:text-[6vw] text-[#FAF7F2] drop-shadow-[0_3px_16px_rgba(0,0,0,0.85)] dark:text-white dark:drop-shadow-md text-center">
            <WordsPullUp text={OVERVIEW_HERO_CONFIG.title} className="justify-center" />
          </h1>

          {/* 2. Description (Centered) */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-5 max-w-2xl text-balance text-xs leading-relaxed text-[#FAF7F2]/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] dark:text-white/90 dark:drop-shadow-none sm:text-sm md:text-base text-center font-normal"
          >
            {OVERVIEW_HERO_CONFIG.description}
          </motion.p>

          {/* 3. Github, Linkedin, Explore Projects (Centered) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 px-4 py-2 text-xs font-medium text-[#221F1B] backdrop-blur-md transition-all hover:bg-[#FAF7F2] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:text-sm shadow-sm"
            >
              <Github className="size-4" />
              {OVERVIEW_HERO_CONFIG.githubLabel}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D1C9B8]/80 bg-[#F4F0E8]/85 px-4 py-2 text-xs font-medium text-[#221F1B] backdrop-blur-md transition-all hover:bg-[#FAF7F2] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:text-sm shadow-sm"
            >
              <Linkedin className="size-4" />
              {OVERVIEW_HERO_CONFIG.linkedinLabel}
            </a>
            <Link
              href={OVERVIEW_HERO_CONFIG.ctaHref}
              prefetch={true}
              className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-xs font-semibold text-primary-foreground transition-all hover:gap-3 sm:text-sm shadow-xl"
            >
              {OVERVIEW_HERO_CONFIG.ctaText}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 dark:bg-white/25 text-primary-foreground transition-transform group-hover:scale-110 sm:h-8 sm:w-8">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom subtle credit */}
        <div className="reveal reveal-delay-3 pb-4 sm:pb-6 text-center text-[11px] text-[#FAF7F2]/70 dark:text-white/50 drop-shadow-sm tracking-wider">
          &copy; 2026 {profile.name} &middot; All Rights Reserved
        </div>
      </PrismaHero>
    </section>
  );
}