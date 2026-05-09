import { Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactMeta, profile } from "@/features/portfolio/data/portfolioData";

export function ContactSection() {
  return (
    <section className="section-shell py-6" id="contact">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Contact & Actions
            </h2>
            <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
              Primary links and actions
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            <Card className="flex items-center gap-3 bg-secondary/72 p-4 backdrop-blur-sm">
              <Mail className="size-5" />
              <p className="break-all font-mono text-sm font-semibold">
                {profile.email}
              </p>
            </Card>
            <Card className="flex items-center gap-3 bg-background/72 p-4 backdrop-blur-sm">
              <Linkedin className="size-5" />
              <p className="break-all font-mono text-sm font-semibold">
                ADD YOUR LINKEDIN URL
              </p>
            </Card>
            <Card className="flex items-center gap-3 bg-background/72 p-4 backdrop-blur-sm">
              <Github className="size-5" />
              <p className="break-all font-mono text-sm font-semibold">
                github.com/adamrasyid01
              </p>
            </Card>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {contactMeta.map((item) => (
              <Card
                className="bg-background/72 p-4 backdrop-blur-sm"
                key={item.label}
              >
                <div className="flex items-start gap-3">
                  <item.Icon className="mt-1 size-4 text-muted-foreground" />
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-normal text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={profile.linkedin} rel="noreferrer" target="_blank">
                <Linkedin />
                Open LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={profile.github} rel="noreferrer" target="_blank">
                <Github />
                Open GitHub
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={profile.cv} rel="noreferrer" target="_blank">
                <Download />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
