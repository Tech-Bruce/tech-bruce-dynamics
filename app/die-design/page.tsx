import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import {
  Wrench,
  Settings,
  Search,
  ArrowUpRight,
  Check,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Precision Die Design",
  description:
    "Precision sheet metal die design engineered for reliable production, improved tool life, and seamless manufacturing support.",
};

const capabilities = [
  {
    number: "01",
    title: "Die Design",
    icon: Settings,
    desc: "Comprehensive engineering for progressive and transfer dies.",
  },
  {
    number: "02",
    title: "Manufacturing Support & Production Validation",
    icon: Search,
    desc: "Ensuring the design translates successfully to the manufacturing floor.",
  },
  {
    number: "03",
    title: "Die Tryout Support",
    icon: Wrench,
    desc: "Tryout support based on press tonnage and specific press specifications.",
  },
];

export default function DieDesignPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden border-b border-border/60 flex items-center">
        <SectionBackground
          src="/images/backgrounds/bg-9.jpeg"
          alt="Precision die design engineering"
          priority
          overlayClassName="bg-gradient-to-l from-background via-background/95 to-background/35"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] pointer-events-none" />

        {/* Technical decorative elements */}
        <div className="absolute left-0 top-0 hidden h-full w-[38%] lg:block pointer-events-none">
          <div className="absolute left-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute left-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute left-24 top-28 h-px w-72 bg-primary/30" />
          <div className="absolute left-24 top-28 h-28 w-px bg-primary/30" />

          <div className="absolute bottom-28 left-24 h-px w-48 bg-border/40" />

          <div className="absolute left-24 top-20 text-[10px] font-mono tracking-[0.3em] text-muted-foreground">
            TB / DIE / 001
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl ml-auto flex flex-col items-end text-right">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center justify-end gap-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  Engineering Capability
                </span>
                <span className="h-px w-10 bg-primary" />
              </div>

              {/* Heading */}
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Precision
                <br />
                <span className="text-primary">Die Design</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                Precision sheet metal die design engineered for reliable
                production, improved tool life, and seamless manufacturing
                support from design to production.
              </p>

              {/* Hero actions */}
              <div className="mt-10 flex flex-wrap items-center justify-end gap-5">
                <a
                  href="#capabilities"
                  className="group inline-flex flex-row-reverse items-center gap-3 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Capability
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </a>

                <Button
                  href="/contact"
                  size="lg"
                  className="group h-14 rounded-sm px-7"
                >
                  Discuss Your Project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero page index */}
          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex lg:right-8">
            <span>Die Design</span>
            <span className="h-px w-12 bg-border" />
            <span>01 / 01</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / VALUE SECTION
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
                    Die Engineering
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Engineered for
                  <br />
                  <span className="text-muted-foreground">
                    Reliable Production.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  Our die design capability focuses on creating tooling
                  solutions that support reliable production, improved tool
                  life, and seamless manufacturing requirements.
                </p>

                <div className="mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-2 w-2 bg-primary" />
                  Design → Validation → Production
                </div>
              </div>
            </FadeIn>

            {/* Right feature statement */}
            <FadeIn direction="left">
              <div className="relative border-l border-border pl-7 sm:pl-10">
                <span className="absolute -left-[1px] top-0 h-20 w-[2px] bg-primary" />

                <p className="text-2xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-3xl">
                  Precision sheet metal die design engineered to connect
                  engineering intent with practical manufacturing requirements.
                </p>

                <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      01
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Design Engineering
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      02
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Manufacturing Support
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      03
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Production Validation
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section
        id="capabilities"
        className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <FadeIn direction="up">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    What We Do
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Die Design
                  <br />
                  <span className="text-muted-foreground">
                    Capabilities.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base font-medium leading-relaxed text-muted-foreground">
                Engineering support focused on die design, manufacturing
                support, production validation, and tryout requirements.
              </p>
            </div>
          </FadeIn>

          {/* Capability list */}
          <StaggerContainer className="border-t border-border/70">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn
                  key={item.number}
                  direction="up"
                  delay={0.08 * index}
                >
                  <div className="group relative border-b border-border/70 py-9 transition-all duration-500 hover:bg-background/50 sm:py-11">
                    {/* Hover accent */}
                    <div className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-500 group-hover:w-[3px]" />

                    <div className="grid items-center gap-7 md:grid-cols-[70px_80px_1fr_80px]">
                      {/* Number */}
                      <div className="font-mono text-sm font-bold tracking-widest text-muted-foreground/50">
                        {item.number}
                      </div>

                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center border border-border bg-background text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                          {item.desc}
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
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          IMAGE / ENGINEERING VISUAL
      ========================================================= */}
      <Section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Image */}
            <FadeIn direction="right">
              <div className="relative">
                {/* Technical labels */}
                <div className="absolute left-5 top-5 z-20 flex items-center gap-2 bg-background/90 px-3 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 bg-primary" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                    Engineering Visual
                  </span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden border border-border/70 bg-muted">
                  <Image
                    src="/images/backgrounds/bg-10.jpeg"
                    alt="Die Design Engineering"
                    fill
                    className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                  {/* Technical corner */}
                  <div className="absolute bottom-5 right-5 border border-white/20 bg-background/70 px-4 py-3 backdrop-blur-sm">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      DIE DESIGN / TB
                    </p>
                  </div>
                </div>

                {/* Offset border */}
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-primary/20" />
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="left">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Manufacturing Support
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
                  From Design
                  <br />
                  <span className="text-muted-foreground">
                    To Production.
                  </span>
                </h2>

                <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  Die design is developed with manufacturing requirements in
                  mind, supporting the transition from engineering design to
                  production.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Precision sheet metal die design",
                    "Manufacturing support & production validation",
                    "Die tryout support",
                    "Press tonnage & press specification considerations",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>

                      <span className="text-sm font-semibold leading-relaxed text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    href="/contact"
                    size="lg"
                    className="group h-14 rounded-sm px-8"
                  >
                    Discuss Your Die Design Project
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          FINAL CTA
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
                    Start a Project
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Have a die design requirement?
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
                  Discuss your tooling and manufacturing requirements with
                  TechBruce Dynamics.
                </p>
              </div>

              <Button
                href="/contact"
                size="lg"
                className="group h-14 shrink-0 rounded-sm px-8"
              >
                Get In Touch
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
