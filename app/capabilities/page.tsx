import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { CAPABILITIES } from "@/data/content";
import {
  CheckCircle2,
  ArrowUpRight,
  MoveUpRight,
  Cpu,
  Workflow,
  Target,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Capabilities",
  description:
    "Comprehensive capabilities in stamping simulation, die design, and formability analysis.",
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[640px] overflow-hidden border-b border-border/60 flex items-center">
        <SectionBackground
          src="/images/backgrounds/bg-7.jpeg"
          alt="Core engineering capabilities"
          priority
          overlayClassName="bg-gradient-to-r from-background via-background/95 to-background/35"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] pointer-events-none" />

        {/* Technical decorative system */}
        <div className="absolute right-0 top-0 hidden h-full w-[38%] lg:block pointer-events-none">
          <div className="absolute right-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute right-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute right-24 top-28 h-px w-72 bg-primary/30" />
          <div className="absolute right-24 top-28 h-28 w-px bg-primary/30" />

          <div className="absolute bottom-32 right-24 h-px w-52 bg-border/40" />

          <div className="absolute right-24 top-20 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            TB / CAP / 001
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  Engineering Expertise
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Core
                <br />
                <span className="text-primary">Capabilities</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                We leverage advanced tools and deep engineering knowledge to
                solve complex manufacturing challenges.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="/contact"
                  className="group inline-flex h-14 items-center gap-3 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                >
                  Discuss Your Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Capabilities
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-8 left-6 hidden items-center gap-4 md:flex lg:left-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              SIMULATION
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              TOOLING
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              FORMING
            </span>
          </div>

          {/* Page index */}
          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex lg:right-8">
            <span>Capabilities</span>
            <span className="h-px w-12 bg-border" />
            <span>01 / 01</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <Section className="relative bg-background py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Left */}
            <FadeIn direction="right">
              <div className="lg:sticky lg:top-28">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    What We Do
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Engineering
                  <br />
                  <span className="text-muted-foreground">
                    Capability.
                  </span>
                </h2>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div className="relative border-l border-border pl-7 sm:pl-10">
                <span className="absolute -left-[1px] top-0 h-20 w-[2px] bg-primary" />

                <p className="text-2xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-3xl">
                  Our capabilities combine simulation, die engineering,
                  formability analysis, process planning, and manufacturing
                  support to address complex sheet metal engineering
                  requirements.
                </p>

                {/* Supporting capabilities */}
                <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  <div>
                    <Cpu className="h-5 w-5 text-primary" />

                    <p className="mt-3 text-sm font-semibold text-muted-foreground">
                      Advanced Engineering
                    </p>
                  </div>

                  <div>
                    <Workflow className="h-5 w-5 text-primary" />

                    <p className="mt-3 text-sm font-semibold text-muted-foreground">
                      Process Optimization
                    </p>
                  </div>

                  <div>
                    <Target className="h-5 w-5 text-primary" />

                    <p className="mt-3 text-sm font-semibold text-muted-foreground">
                      Production Focus
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          CAPABILITIES LIST
      ========================================================= */}
      <section
        id="capabilities"
        className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <FadeIn direction="up">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Technical Scope
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Our Core
                  <br />
                  <span className="text-muted-foreground">
                    Capabilities.
                  </span>
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-base font-medium leading-relaxed text-muted-foreground">
                  Engineering capabilities focused on sheet metal stamping,
                  tooling, formability, process planning, and manufacturing
                  support.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Capability list */}
          <StaggerContainer className="border-t border-border/70">
            {CAPABILITIES.map((capability, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.06 * index}
              >
                <div className="group relative border-b border-border/70 py-8 transition-all duration-500 hover:bg-background/50 sm:py-10">
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-500 group-hover:w-[3px]" />

                  <div className="grid items-center gap-6 md:grid-cols-[80px_70px_1fr_70px]">
                    {/* Number */}
                    <div className="font-mono text-sm font-bold tracking-widest text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <CheckCircle2 className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Capability */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {capability}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        Technical engineering capability
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden justify-end md:flex">
                      <div className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <MoveUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING APPROACH
      ========================================================= */}
      <Section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
            {/* Left */}
            <FadeIn direction="right">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Engineering Approach
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  From Analysis
                  <br />
                  <span className="text-muted-foreground">
                    To Manufacturing.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  TechBruce Dynamics brings together engineering analysis and
                  tooling expertise to support better manufacturing decisions
                  before and during production.
                </p>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div className="space-y-0 border-t border-border">
                {[
                  "Sheet Metal Stamping Simulation",
                  "Formability & FLD Analysis",
                  "Progressive Die Design",
                  "Strip Layout Development",
                  "Process Planning & Feasibility Studies",
                  "Manufacturing & Die Tryout Support",
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
                  Have a complex engineering requirement?
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
                  Discuss your sheet metal stamping, simulation, die design,
                  or manufacturing requirements with our team.
                </p>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
