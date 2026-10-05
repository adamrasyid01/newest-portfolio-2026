"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award, CheckCircle2, ExternalLink, Eye, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionBackground } from "@/components/shared/SectionBackground";
import {
  CERTIFICATIONS_CONFIG,
  SECTION_BACKGROUNDS,
} from "@/lib/constants";
import { certifications } from "@/app/data/portfolioData";
import { cn } from "@/lib/utils";

type Certification = (typeof certifications)[number];

function CertificationCard({
  cert,
  onClick,
}: {
  cert: Certification;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={onClick}
      className="group flex h-full flex-col justify-between rounded-2xl border border-[#D1C9B8]/70 bg-[#F3EFE7]/85 p-6 shadow-[0_4px_20px_-2px_rgba(40,36,29,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2C261E]/30 hover:bg-[#FAF7F2] hover:shadow-xl dark:border-white/10 dark:bg-card/75 dark:shadow-none dark:hover:bg-card/90 dark:hover:shadow-2xl cursor-pointer"
    >
      <div>
        {/* Header: Issuer Logo Badge & Verified Tag */}
        <div className="flex items-start justify-between gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#D1C9B8]/70 bg-[#E8E4DC] p-2 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-white/15 dark:bg-secondary/80">
            {cert.issuerIcon ? (
              <Image
                src={cert.issuerIcon}
                alt={`${cert.issuer} logo`}
                fill
                className="object-contain p-1"
                sizes="48px"
              />
            ) : (
              <Award className="h-full w-full text-primary" />
            )}
          </div>

          <Badge
            variant="secondary"
            className="flex items-center gap-1.5 border border-[#D1C9B8]/70 bg-[#E8E4DC]/70 text-[11px] font-normal text-neutral-700 dark:border-white/10 dark:bg-secondary/60 dark:text-white/80"
          >
            <CheckCircle2 className="h-3 w-3 text-primary" />
            Verified
          </Badge>
        </div>

        {/* Issuer Name */}
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-primary/80">
          {cert.issuer}
        </p>

        {/* Certificate Title */}
        <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-primary dark:text-white sm:text-xl">
          {cert.title}
        </h3>

        {/* Note / Skill Scope */}
        <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-[#6F695C] dark:text-muted-foreground sm:text-sm">
          {cert.note}
        </p>
      </div>

      {/* Action Footer: View Certificate */}
      <div className="mt-6 flex items-center justify-between border-t border-[#D1C9B8]/60 pt-3.5 text-xs font-medium text-primary transition-colors group-hover:text-neutral-900 dark:border-white/10 dark:group-hover:text-white">
        <span className="flex items-center gap-1.5">
          <Eye className="h-4 w-4" />
          View Certificate
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Card>
  );
}

function CertificateDetailModal({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (cert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md dark:bg-black/85"
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto no-scrollbar rounded-2xl border border-[#D1C9B8] bg-[#F5F2EA] p-5 shadow-2xl dark:border-white/15 dark:bg-[#141412] sm:p-7"
      >
        {/* Close Button */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Close certificate preview"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 h-8 w-8 rounded-full border-black/10 bg-black/5 text-neutral-700 hover:bg-black/15 hover:text-black dark:border-white/20 dark:bg-black/50 dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Certificate Full Resolution Image (Loaded on-demand only!) */}
        <div className="relative mt-1 h-[45vh] w-full overflow-hidden rounded-xl border border-black/10 bg-neutral-100 sm:h-[55vh] md:h-[60vh] dark:border-white/10 dark:bg-black/60">
          {cert.image ? (
            <Image
              src={cert.image}
              alt={`${cert.title} certificate`}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              Certificate image not available
            </div>
          )}
        </div>

        {/* Certificate Meta & Details */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            {cert.issuerIcon ? (
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-md border border-black/10 dark:border-white/10">
                <Image
                  src={cert.issuerIcon}
                  alt={`${cert.issuer} icon`}
                  fill
                  className="object-contain p-0.5"
                  sizes="24px"
                />
              </div>
            ) : null}
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              {cert.issuer}
            </span>
          </div>

          <Badge variant="secondary" className="text-xs">
            Verified Credential
          </Badge>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
          {cert.title}
        </h2>

        {/* Complete Description / Note */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-white/80 sm:text-base">
          {cert.note}
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4 dark:border-white/10">
          {cert.image ? (
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-100 px-4 py-2 text-xs font-medium text-neutral-800 backdrop-blur-md transition-colors hover:bg-neutral-200 dark:border-white/20 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/15 sm:text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              View Full Image
            </a>
          ) : <div />}

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

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <SectionBackground
      imageSrc={SECTION_BACKGROUNDS.certifications}
      daylightImageSrc={SECTION_BACKGROUNDS.certificationsDaylight}
      alt="Certifications background"
    >
      <section className="section-shell py-12 pt-28 sm:pt-36" id="certifications">
        {/* Open Editorial Header - Matching The Journey & Projects */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="display-title text-4xl font-semibold tracking-tight text-neutral-950 drop-shadow-[0_2px_12px_rgba(255,255,255,0.9)] dark:text-white dark:drop-shadow-md sm:text-5xl md:text-6xl"
          >
            {CERTIFICATIONS_CONFIG.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 max-w-2xl text-balance text-xs leading-relaxed text-neutral-900 font-medium drop-shadow-[0_1px_6px_rgba(255,255,255,0.95)] dark:text-white dark:drop-shadow-none sm:text-sm md:text-base"
          >
            {CERTIFICATIONS_CONFIG.subtitle}
          </motion.p>
        </div>

        {/* Modern Credential Grid (2 Columns, Lightweight, Uncropped) */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>

        {/* Certificate Fullscreen / Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <CertificateDetailModal
              cert={selectedCert}
              onClose={() => setSelectedCert(null)}
            />
          )}
        </AnimatePresence>
      </section>
    </SectionBackground>
  );
}
