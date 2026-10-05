"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { HERO_MEDIA_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ---------------- WordsPullUp ---------------- */
export interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center", className)} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export interface Segment {
  text: string;
  className?: string;
}

export interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={cn("inline-flex flex-wrap justify-center", className)}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={cn("inline-block", w.className)}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
const DEFAULT_NAV_ITEMS = ["Our story", "Collective", "Workshops", "Programs", "Inquiries"];
const DEFAULT_VIDEO_SRC = HERO_MEDIA_CONFIG.defaultVideoSrc;
const DEFAULT_POSTER_SRC = HERO_MEDIA_CONFIG.defaultPosterSrc;
const DEFAULT_DESCRIPTION =
  "Prisma is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.";

export interface PrismaHeroNavItem {
  label: string;
  href?: string;
}

export interface PrismaHeroProps {
  title?: string;
  showAsterisk?: boolean;
  titleClassName?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  videoSrc?: string;
  posterSrc?: string;
  showNavbar?: boolean;
  navItems?: Array<string | PrismaHeroNavItem>;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

const PrismaHero = ({
  title = "Prisma",
  showAsterisk = true,
  titleClassName = "",
  description = DEFAULT_DESCRIPTION,
  ctaText = "Join the lab",
  ctaHref,
  onCtaClick,
  videoSrc = DEFAULT_VIDEO_SRC,
  posterSrc = DEFAULT_POSTER_SRC,
  showNavbar = true,
  navItems = DEFAULT_NAV_ITEMS,
  className = "h-screen w-full",
  containerClassName = "",
  children,
}: PrismaHeroProps) => {
  const currentPathname = usePathname();

  return (
    <section className={cn("relative h-screen w-full overflow-hidden", className)}>
      <div
        className={cn(
          "relative h-full w-full overflow-hidden",
          containerClassName,
        )}
      >
        {/* Background video (Active in both modes) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          {...(posterSrc ? { poster: posterSrc } : {})}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
        />

        {/* Dark mode moody cinematic contrast vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 hidden dark:block" />

        {/* Light mode gentle ambient daylight exposure */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#E8E4DC]/40 dark:hidden block" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(255,248,220,0.4),transparent_75%)] dark:hidden block" />

        {/* Navbar */}
        {showNavbar && (
          <nav className="absolute left-1/2 top-4 sm:top-5 z-40 -translate-x-1/2">
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8 rounded-full border border-white/20 bg-black/25 px-5 py-2 shadow-2xl backdrop-blur-xl">
              {navItems.map((item, index) => {
                const label = typeof item === "string" ? item : item.label;
                const href = typeof item === "string" ? "#" : item.href ?? "#";
                const isActive = currentPathname === href;
                return (
                  <Link
                    key={`${label}-${index}`}
                    href={href}
                    className={cn(
                      "text-[11px] font-medium tracking-wide transition-colors sm:text-xs md:text-sm",
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/75 hover:text-white",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}

        {/* Content */}
        {children ? (
          <div className="relative z-10 flex h-full w-full flex-col">
            {children}
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 sm:px-6 md:px-10">
            <div className="grid grid-cols-12 items-end gap-4">
              <div className="col-span-12 lg:col-span-8">
                <h1
                  className={cn(
                    "font-medium leading-[0.85] tracking-[-0.07em] text-[22vw] sm:text-[20vw] md:text-[18vw] lg:text-[15vw] xl:text-[14vw]",
                    titleClassName,
                  )}
                  style={{ color: "#E1E0CC" }}
                >
                  <WordsPullUp text={title} showAsterisk={showAsterisk} />
                </h1>
              </div>

              <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-10">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs text-primary/70 sm:text-sm md:text-base"
                  style={{ lineHeight: 1.2 }}
                >
                  {description}
                </motion.p>

                {ctaHref ? (
                  <motion.a
                    href={ctaHref}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                  >
                    {ctaText}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </motion.a>
                ) : (
                  <motion.button
                    type="button"
                    onClick={onCtaClick}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group inline-flex items-center gap-2 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base cursor-pointer"
                  >
                    {ctaText}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { PrismaHero };
