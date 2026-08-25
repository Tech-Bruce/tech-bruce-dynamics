import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { MATERIALS } from "@/data/content";
import { Metadata } from "next";
import {
  Layers,
  ArrowUpRight,
  Check,
  MoveUpRight,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Material Expertise",
  description:
    "Experience with a wide range of sheet metal grades used in automotive applications.",
};

export default function MaterialsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[640px] overflow-hidden border-b border-border/60 flex items-center">
        <SectionBackground
          src="/images/backgrounds/bg-8.jpeg"
          alt="Sheet metal material expertise"
          priority
          overlayClassName="bg-gradient-to-r from-background via-background/95 to-background/35"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] pointer-events-none" />

        {/* Technical lines */}
        <div className="absolute right-0 top-0 hidden h-full w-[38%] lg:block pointer-events-none">
          <div className="absolute right-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute right-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute right-24 top-28 h-px w-72 bg-primary/30" />
          <div className="absolute right-24 top-28 h-28 w-px bg-primary/30" />

          <div className="absolute bottom-32 right-24 h-px w-52 bg-border/40" />

          <div className="absolute right-24 top-20 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            TB / MAT / 001
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  Engineering Materials
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Material
                <br />
                <span className="text-primary">Expertise</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                We have experience working with a wide range of sheet metal
                grades used in automotive applications.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="/contact"
                  className="group inline-flex h-14 items-center gap-3 rounded-sm bg-primary px-7 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                >
                  Discuss Your Requirement
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="#materials"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Materials
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Bottom technical metadata */}
          <div className="absolute bottom-8 left-6 hidden items-center gap-4 md:flex lg:left-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              SHEET METAL
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              AUTOMOTIVE
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              FORMING
            </span>
          </div>

          {/* Page index */}
          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex lg:right-8">
            <span>Materials</span>
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
                    Material Knowledge
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Understanding
                  <br />
                  <span className="text-muted-foreground">
                    Material Behavior.
                  </span>
                </h2>
              </div>
            </FadeIn>

            {/* Right */}
            <FadeIn direction="left">
              <div className="relative border-l border-border pl-7 sm:pl-10">
                <span className="absolute -left-[1px] top-0 h-20 w-[2px] bg-primary" />

                <p className="text-2xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-3xl">
                  Our material experience supports engineering decisions
                  throughout sheet metal forming and automotive manufacturing
                  applications.
                </p>

                <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      01
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Sheet Metal
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      02
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Automotive Applications
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-2xl font-bold text-primary">
                      03
                    </p>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground">
                      Project-Specific Support
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          MATERIALS
      ========================================================= */}
      <section
        id="materials"
        className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <FadeIn direction="up">
            <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Material Database
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Supported
                  <br />
                  <span className="text-muted-foreground">
                    Material Grades.
                  </span>
                </h2>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Database className="h-5 w-5 text-primary" />

                <span className="text-sm font-semibold">
                  Automotive Sheet Metal
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Material grid */}
          <StaggerContainer className="grid gap-px border border-border/70 bg-border sm:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.map((material, index) => (
              <FadeIn
                key={index}
                direction="up"
                delay={0.05 * index}
              >
                <div className="group relative h-full min-h-[260px] overflow-hidden bg-background p-7 transition-all duration-500 hover:bg-muted/40 sm:p-9">
                  {/* Hover accent */}
                  <div className="absolute left-0 top-0 h-0 w-[3px] bg-primary transition-all duration-500 group-hover:h-full" />

                  {/* Number */}
                  <div className="absolute right-7 top-7 font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground/40">
                    MAT / {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="mb-12 flex h-12 w-12 items-center justify-center border border-border bg-muted/30 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Layers className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="max-w-[80%] text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                      {material.name}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-muted-foreground">
                      {material.description}
                    </p>
                  </div>

                  {/* Bottom arrow */}
                  <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <MoveUpRight className="h-4 w-4" />
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute bottom-7 right-7 h-px w-10 bg-primary/40" />
                    <div className="absolute bottom-7 right-7 h-10 w-px bg-primary/40" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          PROJECT SPECIFIC MATERIAL SUPPORT
      ========================================================= */}
      <Section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="relative overflow-hidden border border-border/70 bg-muted/20">
              {/* Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />

              {/* Accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

              <div className="relative z-10 grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
                <div className="max-w-3xl">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      Project-Specific Support
                    </span>

                    <span className="h-px w-12 bg-primary/50" />
                  </div>

                  <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    Need support for a
                    <br />
                    <span className="text-muted-foreground">
                      specific material?
                    </span>
                  </h2>

                  <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                    Additional materials can be evaluated and supported based
                    on specific project requirements.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 border border-border bg-background px-7 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Discuss Requirements
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-border bg-muted/30 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    TechBruce Dynamics
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Let&apos;s discuss your material requirements.
                </h2>
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
