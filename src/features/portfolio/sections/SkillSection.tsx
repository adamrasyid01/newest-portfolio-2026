import {
  Blocks,
  BriefcaseBusiness,
  Code2,
  Smartphone,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const technicalSkillGroups = [
  {
    phase: "Core 01",
    title: "Frontend Engineering",
    summary:
      "Built responsive interfaces across portfolio work, internship products, and production-facing web apps.",
    Icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Vue.js",
      "Responsive UI",
      "UI/UX Implementation",
    ],
  },
  {
    phase: "Core 02",
    title: "Mobile Development",
    summary:
      "Worked on mobile product delivery through Flutter projects and app-oriented collaboration.",
    Icon: Smartphone,
    skills: [
      "Flutter",
      "Firebase",
      "Cross-Platform App Development",
      "Mobile Feature Development",
      "Play Store Release Support",
    ],
  },
  {
    phase: "Core 03",
    title: "Product Delivery",
    summary:
      "Contributed to product-building flow from interface execution to collaboration in agile environments.",
    Icon: BriefcaseBusiness,
    skills: [
      "Agile Workflow",
      "Scrum Support",
      "Feature Planning",
      "Product Thinking",
      "Team Collaboration",
      "Problem Solving",
    ],
  },
  {
    phase: "Core 04",
    title: "Tools & Workflow",
    summary:
      "Used practical tooling that supports everyday development, iteration, and versioned collaboration.",
    Icon: Blocks,
    skills: [
      "Git",
      "GitHub",
      "Component Reuse",
      "Frontend Debugging",
      "System Adaptation",
      "Continuous Learning",
    ],
  },
];

export function SkillSection() {
  return (
    <section className="section-shell py-6" id="skills">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="display-title text-4xl font-semibold sm:text-5xl">
              Technical Skills
            </h2>
            <p className="eyebrow text-[0.72rem] text-muted-foreground">
              Summarized from the journey i have built so far
            </p>
          </div>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            These are the technical strengths consistently reflected across your
            education, teaching experience, internship work, and current product
            development roles.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {technicalSkillGroups.map((group) => (
              <Card
                className="bg-background/72 p-5 backdrop-blur-sm sm:p-6"
                key={group.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-[0.72rem] text-muted-foreground">
                    {group.phase}
                  </p>
                  <group.Icon className="size-5 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {group.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge className="px-3 py-1" key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
