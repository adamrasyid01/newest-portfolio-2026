"use client";

import Image from "next/image";

export interface SectionBackgroundProps {
  imageSrc: string;
  daylightImageSrc?: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({
  imageSrc,
  daylightImageSrc,
  alt,
  children,
  className = "",
}: SectionBackgroundProps) {
  const activeDaylightSrc = daylightImageSrc || imageSrc;

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      {/* Background Image Layer (Dark Mode: Night Cinematic 3D Render) */}
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none select-none hidden dark:block">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        {/* Film grain noise overlay matching Overview aesthetic */}
        <div className="noise-overlay absolute inset-0 opacity-35 mix-blend-overlay" />
        {/* Ambient atmospheric dark vignette for contrast in Dark Mode */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0b]/65 via-[#0c0c0b]/80 to-[#0c0c0b]" />
      </div>

      {/* Background Image Layer (Light Mode: Daylight Sunlit 3D Architectural Render) */}
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none select-none dark:hidden block">
        <Image
          src={activeDaylightSrc}
          alt={`${alt} daylight`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={92}
        />
        {/* Film grain noise overlay for tactile paper/stone texture */}
        <div className="noise-overlay absolute inset-0 opacity-15 mix-blend-overlay" />
        {/* Atmospheric daylight diffusion: gently softens high-contrast ridges so dark text pops forward with crystal clarity */}
        <div className="absolute inset-0 bg-[#FAF7F0]/45 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#E8E4DC]/50" />
        {/* Natural sunbeam bloom from top */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(255,248,220,0.5),transparent_75%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
