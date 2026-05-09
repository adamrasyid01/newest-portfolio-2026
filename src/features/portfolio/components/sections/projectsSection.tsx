import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/features/portfolio/data/portfolioData";

export function ProjectsSection() {
  return (
    <section className="section-shell py-6" id="projects">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
            <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
              Connected to Career Journey
            </p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                className="overflow-hidden bg-background/72 backdrop-blur-sm"
                key={project.title}
              >
                <div className="flex h-28 items-center justify-center border-b bg-secondary/70 backdrop-blur-sm">
                  <project.Icon className="size-8 text-muted-foreground" />
                </div>
                <div className="p-4">
                  <Badge variant="secondary">{project.association}</Badge>
                  <h3 className="mt-4 font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.body}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {project.image}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
