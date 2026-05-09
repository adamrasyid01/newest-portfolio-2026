import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { career } from "@/features/portfolio/data/portfolioData";

export function CareerSection() {
  return (
    <section className="section-shell py-6" id="career">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Career Journey</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Timeline structure that maps cleanly to shadcn cards, separators,
            and responsive grid sections in Next.js.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-[28px_1fr]">
            <div className="hidden flex-col items-center sm:flex">
              <div className="h-7 w-px bg-border" />
              <div className="size-3 rounded-full bg-primary" />
              <div className="h-16 w-px bg-border" />
              <div className="size-3 rounded-full bg-primary" />
              <div className="h-16 w-px bg-border" />
              <div className="size-3 rounded-full bg-primary" />
              <div className="h-7 w-px bg-border" />
            </div>

            <div className="grid gap-3">
              {career.map((item, index) => (
                <Card
                  className="reveal grid gap-4 bg-background/72 p-4 backdrop-blur-sm sm:grid-cols-[56px_1fr]"
                  key={item.title}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="flex size-12 items-center justify-center rounded-lg border bg-secondary/72 backdrop-blur-sm">
                    <item.Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      {item.period}
                    </p>
                    <h3 className="mt-1 font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                    <Separator className="mt-3" />
                    <p className="mt-3 text-xs font-medium text-muted-foreground">
                      Logo slot: {item.company}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
