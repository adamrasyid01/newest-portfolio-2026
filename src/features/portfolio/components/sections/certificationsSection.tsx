import { Card } from "@/components/ui/card";
import { certifications } from "@/features/portfolio/data/portfolioData";

export function CertificationsSection() {
  return (
    <section className="section-shell py-6" id="certifications">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold sm:text-3xl">Certifications</h2>
            <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
              Institution + certificate preview
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card
                className="overflow-hidden bg-background/72 backdrop-blur-sm"
                key={cert.title}
              >
                <div className="flex h-32 items-center justify-center border-b bg-secondary/70 backdrop-blur-sm">
                  <div className="float-soft flex h-20 w-32 items-center justify-center rounded-md border bg-card/82 shadow-sm backdrop-blur-sm">
                    <cert.Icon className="size-7 text-muted-foreground" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-2 font-semibold">{cert.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {cert.note}
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
