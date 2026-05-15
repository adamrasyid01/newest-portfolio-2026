import Image from "next/image";
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
                className="flex h-full flex-col overflow-hidden bg-background/72 backdrop-blur-sm"
                key={cert.title}
              >
                <div className="border-b bg-secondary/70 backdrop-blur-sm">
                  {cert.image ? (
                    <div className="relative h-40 w-full overflow-hidden bg-secondary/70 sm:h-44">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} certificate preview`}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-secondary via-muted/60 to-accent/30 px-6 text-center sm:h-44">
                      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Certificate Preview
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    {cert.issuerIcon ? (
                      <div className="relative h-5 w-5 shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={cert.issuerIcon}
                          alt={`${cert.issuer} icon`}
                          fill
                          className="object-contain"
                          sizes="20px"
                        />
                      </div>
                    ) : null}
                    <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl">
                    {cert.title}
                  </h3>
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
