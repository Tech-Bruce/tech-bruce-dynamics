import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { ABOUT_CONTENT, COMPANY_NAME } from "@/data/content";
import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  Factory,
  Workflow,
  MoveUpRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechBruce Dynamics, an engineering-focused organization specializing in Sheet Metal Stamping Simulation, Die Design, and Progressive Die Development.",
};

const strengths = [
  {
    title: "Engineering Precision",
    desc: "Focus on accurate simulation and engineering analysis.",
    icon: Target,
  },
  {
    title: "Production Readiness",
    desc: "Solutions developed with actual manufacturing requirements in mind.",
    icon: Factory,
  },
  {
    title: "Reduced Trial & Error",
    desc: "Simulation and optimization identify potential issues early.",
    icon: Workflow,
  },
  {
    title: "Tooling Optimization",
    desc: "Die design and process engineering support better tooling performance.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden border-b border-border/60 flex items-center">
        <SectionBackground
          src="/images/backgrounds/bg-5.jpeg"
          alt={`About ${COMPANY_NAME}`}
          priority
          overlayClassName="bg-gradient-to-r from-background via-background/95 to-background/35"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] pointer-events-none" />

        {/* Technical decoration */}
        <div className="absolute right-0 top-0 hidden h-full w-[38%] lg:block pointer-events-none">
          <div className="absolute right-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute right-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute right-24 top-28 h-px w-72 bg-primary/30" />
          <div className="absolute right-24 top-28 h-28 w-px bg-primary/30" />

          <div className="absolute bottom-32 right-24 h-px w-52 bg-border/40" />

          <div className="absolute right-24 top-20 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            TB / ABT / 001
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  About The Company
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                About
                <br />
                <span className="text-primary">{COMPANY_NAME}</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                An engineering-focused organization committed to bridging the
                gap between design and manufacturing.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="/contact"
                  className="group inline-flex h-14 items-center gap-3 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                >
                  Work With Us
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="#objective"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  Our Objective
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-8 left-6 hidden items-center gap-4 md:flex lg:left-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              ENGINEERING
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              SIMULATION
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              MANUFACTURING
            </span>
          </div>

          {/* Page index */}
          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex lg:right-8">
            <span>About</span>
            <span className="h-px w-12 bg-border" />
            <span>01 / 01</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          OBJECTIVE
      ========================================================= */}
      <Section
        id="objective"
        className="relative bg-background py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            {/* Left */}
            <FadeIn direction="right">
              <div className="lg:sticky lg:top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Our Objective
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Bridging
                  <br />
                  <span className="text-muted-foreground">
                    Design & Manufacturing.
                  </span>
                </h2>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div className="relative border-l border-border pl-7 sm:pl-10">
                <span className="absolute -left-[1px] top-0 h-20 w-[2px] bg-primary" />

                <div className="space-y-6">
                  <p className="text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl">
                    {ABOUT_CONTENT.whoWeAre}
                  </p>

                  <p className="text-xl font-medium leading-relaxed text-muted-foreground sm:text-2xl">
                    {ABOUT_CONTENT.approach}
                  </p>
                </div>

                {/* Objective statement */}
                <div className="relative mt-12 overflow-hidden border border-primary/20 bg-primary/[0.04] p-7 sm:p-9">
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

                  <div className="mb-5 flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Our Objective
                    </span>
                  </div>

                  <p className="text-xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-2xl">
                    &quot;{ABOUT_CONTENT.objective}&quot;
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          WHY TECHBRUCE
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <FadeIn direction="up">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Why Choose Us
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Why
                  <br />
                  <span className="text-muted-foreground">
                    {COMPANY_NAME}?
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base font-medium leading-relaxed text-muted-foreground">
                Engineering-focused thinking designed around accuracy,
                manufacturability, production requirements, and tooling
                performance.
              </p>
            </div>
          </FadeIn>

          {/* Strengths */}
          <StaggerContainer className="grid gap-px border border-border/70 bg-border sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn
                  key={item.title}
                  direction="up"
                  delay={0.08 * index}
                >
                  <article className="group relative h-full min-h-[270px] overflow-hidden bg-background p-8 transition-all duration-500 hover:bg-muted/30 lg:p-10">
                    {/* Hover accent */}
                    <div className="absolute left-0 top-0 h-0 w-[3px] bg-primary transition-all duration-500 group-hover:h-full" />

                    {/* Number */}
                    <div className="absolute right-8 top-8 font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground/40">
                      WHY / {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div className="mb-12 flex h-14 w-14 items-center justify-center border border-border bg-muted/30 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                      {item.desc}
                    </p>

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <MoveUpRight className="h-4 w-4" />
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING APPROACH
      ========================================================= */}
      <Section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Left */}
            <FadeIn direction="right">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Our Approach
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Engineering
                  <br />
                  <span className="text-muted-foreground">
                    With Purpose.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  We focus on connecting engineering analysis with real
                  manufacturing requirements, helping create solutions that
                  are practical for production.
                </p>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div className="border-t border-border">
                {[
                  "Engineering-focused analysis",
                  "Manufacturing-oriented solutions",
                  "Simulation before production",
                  "Improved tooling decisions",
                  "Reduced trial and error",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between gap-5 border-b border-border py-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold transition-colors group-hover:text-primary sm:text-base">
                        {item}
                      </span>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-border bg-muted/30 py-20 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    TechBruce Dynamics
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Ready to discuss your engineering requirement?
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
                  Connect with our team to discuss your sheet metal stamping,
                  simulation, die design, or manufacturing requirements.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
              >
                Get In Touch
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}