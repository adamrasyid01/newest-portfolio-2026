import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/features/portfolio/data/portfolioData";

export function SkillSection() {
  return (
    <section className="section-shell py-6" id="skills">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Skill & Position
            </h2>
            <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
              Mapped to each career phase
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {skillGroups.map((group) => (
              <Card
                className="bg-background/72 p-4 backdrop-blur-sm"
                key={group.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
                    {group.phase}
                  </p>
                  <group.Icon className="size-5 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-lg font-bold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
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
