import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { profile } from "@/features/portfolio/data/portfolioData";

export function ContactSection() {
  return (
    <section className="section-shell py-6" id="contact">
      <div className="batik-panel rounded-lg border bg-card/78 p-5 backdrop-blur-md sm:p-7">
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <h2 className="display-title text-4xl font-semibold sm:text-5xl">
              Contact & Actions
            </h2>
            <p className="eyebrow text-[0.72rem] text-muted-foreground">
              Reach out and start a conversation
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="bg-background/72 p-5 backdrop-blur-sm sm:p-6">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="eyebrow text-[0.72rem] text-muted-foreground"
                      htmlFor="contact-full-name"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-2xl border border-border/80 bg-card/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground"
                      id="contact-full-name"
                      name="fullName"
                      placeholder="Your full name"
                      type="text"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="eyebrow text-[0.72rem] text-muted-foreground"
                      htmlFor="contact-email"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-2xl border border-border/80 bg-card/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground"
                      id="contact-email"
                      name="email"
                      placeholder="your@email.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="eyebrow text-[0.72rem] text-muted-foreground"
                      htmlFor="contact-phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded-2xl border border-border/80 bg-card/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground"
                      id="contact-phone"
                      name="phone"
                      placeholder="+62 8xx-xxxx-xxxx"
                      type="tel"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="eyebrow text-[0.72rem] text-muted-foreground"
                      htmlFor="contact-subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full rounded-2xl border border-border/80 bg-card/90 px-4 py-3 text-sm text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground"
                      id="contact-subject"
                      name="subject"
                      placeholder="Collaboration / Opportunity"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="eyebrow text-[0.72rem] text-muted-foreground"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="min-h-36 w-full rounded-[1.4rem] border border-border/80 bg-card/90 px-4 py-4 text-sm leading-7 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20 placeholder:text-muted-foreground"
                    id="contact-message"
                    name="message"
                    placeholder="Write your message here... Tell me about your project, collaboration idea, internship opportunity, or any frontend work you would like to discuss."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href={`mailto:${profile.email}`}>
                      <Mail />
                      Send Email
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={profile.linkedin} rel="noreferrer" target="_blank">
                      <Linkedin />
                      Open LinkedIn
                    </a>
                  </Button>
                </div>
              </form>
            </Card>

            <div className="grid gap-3">
              <Card className="bg-secondary/72 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 size-4 text-muted-foreground" />
                  <div>
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-2 break-all text-sm font-semibold text-foreground">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background/72 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 size-4 text-muted-foreground" />
                  <div>
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      Phone
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      {profile.phone}
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-background/72 p-4 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Github className="mt-1 size-4 text-muted-foreground" />
                  <div>
                    <p className="eyebrow text-[0.72rem] text-muted-foreground">
                      GitHub
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">
                      github.com/adamrasyid01
                    </p>
                  </div>
                </div>
              </Card>

              <Button asChild variant="secondary">
                <a href={profile.cv} rel="noreferrer" target="_blank">
                  <Download />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
