"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { profile } from "@/features/portfolio/data/portfolioData";

type IntroGateProps = {
  children: React.ReactNode;
};

const roles = [
  "Frontend Engineer",
  "Fullstack Engineer",
  "Problem Solver",
  "Your Business Partner"
];

export function IntroGate({ children }: IntroGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const firstName = useMemo(() => profile.name.split(" ")[0] ?? profile.name, []);
  const introSummary = useMemo(
    () =>
      `${profile.summary
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 140)}...`,
    [],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpening) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsOpen(true);
    }, 850);

    return () => window.clearTimeout(timeoutId);
  }, [isOpening]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isComplete = typedRole === currentRole;
    const isEmpty = typedRole.length === 0;

    const delay = isDeleting
      ? 45
      : isComplete
        ? 1100
        : 85;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
        return;
      }

      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, roleIndex, typedRole]);

  return (
    <>
      {children}

      {!isOpen ? (
        <div
          className={`fixed inset-0 z-9999 overflow-hidden bg-background transition-opacity duration-500 ${
            isOpening ? "opacity-0" : "opacity-100"
          }`}
        >
          
          <div
            className={`absolute inset-x-0 top-0 h-1/2 bg-card/88 backdrop-blur-sm transition-transform duration-700 ${
              isOpening ? "-translate-y-full" : "translate-y-0"
            }`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 h-1/2 bg-card/88 backdrop-blur-sm transition-transform duration-700 ${
              isOpening ? "translate-y-full" : "translate-y-0"
            }`}
          />

          <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8">
            <div
              className={`flex w-full max-w-3xl flex-col items-center text-center transition-all duration-700 ${
                isOpening ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              <div className="rounded-full border border-border/70 bg-card/80 p-2 shadow-[0_18px_50px_rgba(23,32,29,0.10)] backdrop-blur-md">
                <div className="rounded-full border-2 border-primary/20 p-2">
                  <img
                    alt={profile.name}
                    className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
                    src={profile.avatar}
                  />
                </div>
              </div>

              <p className="mt-6 text-xl text-muted-foreground sm:text-2xl">
                Hello, I'm
              </p>

              <h1 className="display-title mt-2 text-6xl font-semibold text-foreground sm:text-7xl md:text-8xl">
                {firstName}
                <span className="text-primary/45">.</span>
              </h1>

              <p className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl">
                {profile.name}
              </p>

              <div className="eyebrow mt-6 min-h-7 text-sm text-primary sm:text-base">
                {typedRole}
                <span className="ml-1 inline-block h-4 w-px animate-pulse bg-primary align-[-2px]" />
              </div>

              <p className="mt-5 max-w-3xl text-balance text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {introSummary}
              </p>

              <button
                className="eyebrow mt-8 inline-flex flex-col items-center gap-2 rounded-full border border-border/80 bg-card/84 px-7 py-4 text-xs font-semibold text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:bg-card sm:mt-10 sm:px-8 sm:py-5 sm:text-sm"
                onClick={() => setIsOpening(true)}
                type="button"
              >
                <span>See the magic thing</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
