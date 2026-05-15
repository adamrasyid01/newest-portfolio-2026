"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";

const primaryRole = "Passionated Engineer";

export function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="reveal self-start">
      <div className="mx-auto flex w-full max-w-78 flex-col items-center sm:max-w-84 lg:max-w-[18rem]">
        <div className="h-8 w-1 rounded-full bg-linear-to-b from-primary/25 via-primary/60 to-primary/15 sm:h-10 sm:w-1.5" />

        <button
          aria-label="Flip portfolio identity card"
          className="group -mt-px w-full text-left perspective-[1400px]"
          onClick={() => setIsFlipped((prev) => !prev)}
          type="button"
        >
          <div
            className={`relative h-[24rem] w-full rounded-[1.8rem] transition-transform duration-700 [transform-style:preserve-3d] sm:h-[25rem] lg:h-[25rem] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <div className="batik-panel h-full rounded-[1.8rem] border border-border/90 bg-card/92 p-5 shadow-[0_20px_60px_rgba(27,23,20,0.12)] backdrop-blur-md sm:p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <Badge
                    className="w-fit border-border/90 bg-background/75 px-3 py-1.5 text-xs text-foreground shadow-none sm:px-4 sm:py-2 sm:text-sm"
                    variant="outline"
                  >
                    Card Identity
                  </Badge>

                  <div className="mt-4">
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      ID Card
                    </p>
                    <p className="text-lg font-semibold text-foreground sm:text-xl">
                      01-01-2026-AR
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      Holder Name
                    </p>
                    <h3 className="display-title mt-3 text-[3.2rem] font-semibold text-foreground sm:text-[3.5rem] lg:text-5xl">
                      Adam
                    </h3>
                  </div>

                  <div className="mt-6">
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      Primary Role
                    </p>
                    <p className="text-lg font-semibold text-foreground sm:text-xl">
                      {primaryRole}
                    </p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {["Indonesia"].map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      Tap to flip
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)]">
              <div className="h-full rounded-[1.8rem] border border-border/90 bg-[linear-gradient(180deg,rgba(255,250,244,0.98),rgba(239,229,216,0.9))] p-5 shadow-[0_20px_60px_rgba(27,23,20,0.12)] backdrop-blur-md sm:p-6">
                <div className="flex h-full flex-col rounded-[1.25rem] border border-dashed border-primary/25 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow text-[0.72rem] text-muted-foreground">
                        Card Status
                      </p>
                    </div>

                    <div className="rounded-full border border-border/80 bg-card/80 px-3 py-1 text-xs font-semibold text-primary">
                      Active
                    </div>
                  </div>

                  <div className="mt-8 space-y-5 lg:mt-10 lg:space-y-6">
                    <div className="border-b border-border/70 pb-4">
                      <p className="eyebrow text-[0.72rem] text-muted-foreground">
                        Join Date
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                        1 January 2026
                      </p>
                    </div>

                    <div className="border-b border-border/70 pb-4">
                      <p className="eyebrow text-[0.72rem] text-muted-foreground">
                        Expired Date
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
                        Never
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Long-lasting Card
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-4 lg:pt-6">
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      Tap again to flip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
