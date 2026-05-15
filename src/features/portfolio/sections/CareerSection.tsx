"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/ui/card";

const journeyDetails = [
  {
 
    year: "2022",
    label: "Educations",
    period: "2022 - 2025",
    title: "Associate Degree · Politeknik Elektronika Negeri Surabaya",
    body:
      "Enrolled in Informatics Engineering at Politeknik Elektronika Negeri Surabaya. Graduated with a GPA of 3.61/4.00",
    company: "Self Learning Phase",

    logoSrc: "/logo/pensLogo.png",
  },
  {
 
    year: "2022",
    label: "Freelance",
    period: "2022",
    title: "Coding Teacher· Sang Juara School",
    body:
      "Taught basic programming concepts and web development to high school students, fostering their interest in technology and coding.",
    company: "Self Learning Phase",

    logoSrc: "/logo/sangJuaraLogo.png",
  },
  
  {
    year: "2023",
    label: "Skill Building",
    period: "2023 - Frontend Growth",
    title: "From Layouts to Real Interfaces",
    body:
      "Moved from basic web pages into responsive UI work, learning how structure, spacing, and reusable components improve product quality.",
    company: "Interface Practice",
   
  },
  {
    year: "2024",
    label: "Agile Development Experience",
    period: "Feb 2024 - June 2024",
    title: "Assistant Scrum Master & Flutter Dev · Ready2Go",
    body:
      "Assisted Product Owner with 5-person team using Agile methodologies to develop and launch the Ready2Go App — now on the Play Store with a 4.8+ star rating.",
    company: "Associated With Politeknik Elektronika Negeri Surabaya",
     logoSrc: "/logo/flutterLogo.png",

  },
  {
    year: "2024",
    label: "Internship",
    period: "July 2024 - Dec 2024",
    title: "Frontend Developer Intern · PT Wahana Meditek Indonesia",
    body:
      "Develop Adamlabs Laboratory Information System (LIS), AdamMEDS (Hosptal Information System) using Vue.js, improving UI/UX and implementing new features to enhance user experience and operational efficiency.",
    company: "Surabaya",
     logoSrc: "/logo/wmiLogo.jpg",

  },
  {
    year: "2025",
    label: "Fulltime",
    period: "Sept 2025 - Present",
    title: "Frontend & Mobile Developer · PT Digitalisasi Perangkat Indonesia (Indofund.id)",
    body:
      "Develop Indofund.id Public Site, Indofund Admin Site, Kenari Mobile App, Indofund.id Mobile Apps using Flutter.  Technologies: React JS, TypeScript, Next.js, Flutter, Firebase.",
    company: "Jakarta",
      logoSrc: "/logo/indofundLogo.png",

  },
  
];

export function CareerSection() {
  const [activeYear, setActiveYear] = useState("2025");

  const yearGroups = useMemo(
    () =>
      journeyDetails.reduce<Array<(typeof journeyDetails)[number] & { items: typeof journeyDetails }>>(
        (groups, item) => {
          const existingGroup = groups.find((group) => group.year === item.year);

          if (existingGroup) {
            existingGroup.items.push(item);
            return groups;
          }

          groups.push({
            ...item,
            items: [item],
          });

          return groups;
        },
        [],
      ),
    [],
  );

  const activeItems =
    yearGroups.find((group) => group.year === activeYear)?.items ??
    yearGroups[0]?.items ??
    [];

  return (
    <section className="section-shell py-6" id="journey">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <h2 className="display-title text-4xl font-semibold sm:text-5xl">
            Journey
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            My journey reflects steady growth from learning the foundations in
            2022 to shaping stronger product and engineering direction through
            2026.
          </p>

          <div className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {yearGroups.map((group) => {
                const isActive = group.year === activeYear;

                return (
                  <button
                    className={`rounded-[1.35rem] border p-4 text-left transition-all sm:p-5 ${
                      isActive
                        ? "border-primary/35 bg-card shadow-[0_18px_40px_rgba(27,23,20,0.10)]"
                        : "border-border/75 bg-background/74 hover:border-primary/25 hover:bg-card/90"
                    }`}
                    key={group.year}
                    onClick={() => setActiveYear(group.year)}
                    type="button"
                  >
                    <p
                      className={`eyebrow text-[0.72rem] ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      Chapter {group.items.length > 1 ? `(${group.items.length})` : ""}
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                      {group.year}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      {group.items.length > 1
                        ? `${group.items.length} milestones inside this year`
                        : "1 milestone inside this year"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {activeItems.map((activeItem, index) => (
              <Card
                className="reveal bg-background/72 p-5 backdrop-blur-sm sm:p-6"
                key={`${activeItem.year}-${activeItem.period}-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border bg-secondary/78">
                    {activeItem.logoSrc ? (
                      <img
                        alt={`${activeItem.year} logo`}
                        className="h-7 w-7 object-contain"
                        src={activeItem.logoSrc}
                      />
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">
                        {activeItem.year}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      {activeItem.label}
                    </p>
                    <h3 className="display-title mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
                      {activeItem.period}
                    </h3>
                    <p className="mt-4 text-xl font-semibold text-foreground">
                      {activeItem.title}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                      {activeItem.body}
                    </p>
                    <p className="mt-5 text-xs font-medium text-muted-foreground">
                      {activeItem.company}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
