"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const SurabayaMap = dynamic(
  () => import("./SurabayaMap").then((mod) => mod.SurabayaMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
        Loading map...
      </div>
    ),
  },
);

export function IndonesiaMapCard() {
  return (
    <div className="batik-panel rounded-lg border bg-card/78 p-4 backdrop-blur-md">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Domicile Surabaya, but Always open in every countries</p>
         
        </div>

        <div className="hidden rounded-full bg-accent p-3 text-accent-foreground sm:block">
          <MapPin className="size-5" />
        </div>
      </div>

      <div className="relative z-10 mt-4 h-72 overflow-hidden rounded-lg border bg-secondary/62 backdrop-blur-sm">
        <SurabayaMap />
      </div>
    </div>
  );
}
