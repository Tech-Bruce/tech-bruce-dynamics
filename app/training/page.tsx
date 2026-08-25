import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { 
  TRAINING_COURSES, 
  TRAINING_AUDIENCE, 
  TRAINING_PROCESS, 
  CAREER_PATHS,
  COMPANY_NAME 
} from "@/data/content";
import { Metadata } from "next";
import {
  ArrowUpRight,
  MoveUpRight,
  GraduationCap,
  Target,
  Briefcase,
  MonitorPlay,
  Settings,
  Layers,
  Cpu,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: `Mechanical Engineering Training & Career Development | ${COMPANY_NAME}`,
  description:
    "Professional mechanical engineering training programs covering CATIA, SOLIDWORKS, AutoCAD, and Engineering Simulation. Practical training, career guidance, and placement assistance.",
};

const COURSE_ICONS: Record<string, any> = {
  catia: Layers,
  solidworks: Settings,
  autocad: MonitorPlay,
  simulation: Cpu,
};

export default function TrainingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden border-b border-border/60 flex items-center">
        <SectionBackground
          src="/images/backgrounds/bg-4.jpeg"
          alt="Mechanical Engineering Training"
          priority
          overlayClassName="bg-gradient-to-r from-background via-background/95 to-background/35"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.16] pointer-events-none" />

        {/* Technical decorative elements */}
        <div className="absolute right-0 top-0 hidden h-full w-[38%] lg:block pointer-events-none">
          <div className="absolute right-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute right-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute right-24 top-28 h-px w-72 bg-primary/30" />
          <div className="absolute right-24 top-28 h-28 w-px bg-primary/30" />

          <div className="absolute bottom-28 right-24 h-px w-48 bg-border/40" />

          <div className="absolute right-24 top-20 text-[10px] font-mono tracking-[0.3em] text-muted-foreground">
            TB / TRN / 001
          </div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn direction="up">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />

                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  Career Development
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Build Practical Skills.
                <br />
                <span className="text-primary">Prepare for Industry.</span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                Professional training programs designed for students and graduates who want to develop practical mechanical engineering skills and prepare for industry-oriented career opportunities.
              </p>

              {/* Hero actions */}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Button
                  href="/contact"
                  size="lg"
                  className="group h-14 rounded-sm px-7"
                >
                  Enquire About Training
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>

                <a
                  href="#courses"
                  className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  Explore Courses
                  <span className="h-px w-10 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Hero bottom data */}
          <div className="absolute bottom-8 left-6 hidden items-center gap-4 md:flex lg:left-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              CAD MODELLING
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              SIMULATION
            </span>

            <span className="h-px w-10 bg-border" />

            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              INDUSTRY SKILLS
            </span>
          </div>

          {/* Hero page index */}
          <div className="absolute bottom-8 right-6 hidden items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex lg:right-8">
            <span>Training</span>
            <span className="h-px w-12 bg-border" />
            <span>01 / 01</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO CAN JOIN
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
                    Target Audience
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                  Who Can
                  <br />
                  <span className="text-muted-foreground">
                    Join?
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
                  Our training programs are tailored specifically for individuals seeking to bridge the gap between academic knowledge and practical industry requirements.
                </p>
              </div>
            </FadeIn>

            {/* Right feature statement */}
            <FadeIn direction="left">
              <div className="relative border-l border-border pl-7 sm:pl-10">
                <span className="absolute -left-[1px] top-0 h-20 w-[2px] bg-primary" />

                <div className="grid gap-4 sm:grid-cols-2">
                  {TRAINING_AUDIENCE.map((audience, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/20 p-4 border border-border/50">
                      <GraduationCap className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm font-semibold leading-relaxed text-foreground">
                        {audience}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          COURSES
      ========================================================= */}
      <section
        id="courses"
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
                    Professional Courses
                  </span>

                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  Engineering
                  <br />
                  <span className="text-muted-foreground">
                    Software Training.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-base font-medium leading-relaxed text-muted-foreground">
                Learn practical CAD and CAE skills using industry-standard tools, focusing on actual mechanical engineering workflows.
              </p>
            </div>
          </FadeIn>

          {/* Courses grid */}
          <StaggerContainer className="grid gap-px border border-border/70 bg-border md:grid-cols-2 lg:grid-cols-2">
            {TRAINING_COURSES.map((course, index) => {
              const Icon = COURSE_ICONS[course.id] || Settings;

              return (
                <FadeIn
                  key={course.id}
                  direction="up"
                  delay={0.08 * index}
                >
                  <article className="group relative flex h-full flex-col overflow-hidden bg-background p-8 transition-all duration-500 hover:bg-muted/30 lg:p-10">
                    {/* Hover accent */}
                    <div className="absolute left-0 top-0 h-0 w-[3px] bg-primary transition-all duration-500 group-hover:h-full" />

                    {/* Number */}
                    <div className="absolute right-8 top-8 font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground/40">
                      CRS / {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center border border-border bg-muted/30 text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <h3 className="text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary lg:text-3xl">
                        {course.title.split("–")[0].trim()}
                      </h3>
                      <p className="text-sm font-semibold text-primary mt-1 mb-4">
                        {course.title.split("–")[1]?.trim()}
                      </p>

                      <p className="mb-6 text-sm font-medium leading-relaxed text-muted-foreground lg:text-base">
                        {course.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        {course.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                            <span className="text-xs font-semibold text-foreground/80 leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                      <a href={`/contact?course=${course.id}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        Enquire Now
                        <ArrowUpRight className="h-3 w-3" />
                      </a>

                      <div className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <MoveUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================================
          SOFTWARE / SKILLS SECTION (TYPOGRAPHIC)
      ========================================================= */}
      <section className="border-b border-border bg-background py-16 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:justify-between items-center opacity-70 grayscale">
            <h3 className="font-extrabold text-3xl md:text-5xl tracking-tighter text-muted-foreground transition-all hover:grayscale-0 hover:opacity-100 hover:text-foreground">CATIA</h3>
            <h3 className="font-extrabold text-3xl md:text-5xl tracking-tighter text-muted-foreground transition-all hover:grayscale-0 hover:opacity-100 hover:text-foreground">SOLIDWORKS</h3>
            <h3 className="font-extrabold text-3xl md:text-5xl tracking-tighter text-muted-foreground transition-all hover:grayscale-0 hover:opacity-100 hover:text-foreground">AutoCAD</h3>
            <h3 className="font-extrabold text-2xl md:text-4xl tracking-tighter text-muted-foreground transition-all hover:grayscale-0 hover:opacity-100 hover:text-foreground uppercase">Simulation</h3>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINING APPROACH
      ========================================================= */}
      <Section className="bg-background py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                How We Train
              </span>
              <span className="h-px w-12 bg-primary/50" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              From Student to
              <br />
              <span className="text-muted-foreground">Industry Ready.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-border md:left-0 md:top-6 md:right-0 md:w-full md:h-px" />
            
            <StaggerContainer className="grid gap-12 md:grid-cols-4 md:gap-6 relative">
              {TRAINING_PROCESS.map((process, index) => (
                <FadeIn key={index} direction="up" delay={0.1 * index}>
                  <div className="relative pl-16 md:pl-0 md:pt-16">
                    {/* Timeline dot */}
                    <div className="absolute left-[21px] top-1 md:left-6 md:top-[-5px] h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    
                    <div className="font-mono text-sm font-bold tracking-widest text-primary mb-3">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* =========================================================
          CAREER & PLACEMENT SUPPORT
      ========================================================= */}
      <Section className="relative bg-muted/20 py-24 lg:py-32 border-y border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
        
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Career Assistance
                  </span>
                  <span className="h-px w-12 bg-primary/50" />
                </div>

                <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl mb-6">
                  Career & Placement Support
                </h2>
                
                <p className="text-lg font-medium leading-relaxed text-muted-foreground mb-8">
                  We help students move from software knowledge to industry readiness through practical training, portfolio development, interview preparation, and career guidance.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Resume / CV Guidance",
                    "Portfolio Development",
                    "Technical Interview Prep",
                    "HR Interview Preparation",
                    "Industry Skill Assessment",
                    "Placement Assistance"
                  ].map((support, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Target className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm font-semibold">{support}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-background border border-border p-8 sm:p-10 relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Potential Career Paths
                </h3>
                
                <div className="space-y-4">
                  {CAREER_PATHS.map((path, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0 group">
                      <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {path}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-muted/30 border border-border text-xs font-medium text-muted-foreground italic text-center">
                  * Note: Completion of training programs assists in career development but does not constitute a guaranteed placement or job offer.
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
                    Ready to Build Your Engineering Career?
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Start developing practical mechanical engineering skills.
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
                  Get industry-oriented training and career guidance designed to prepare you for the manufacturing sector.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Button
                  href="/contact"
                  size="lg"
                  className="group h-14 rounded-sm px-8"
                >
                  Enquire About Training
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="group h-14 rounded-sm px-8"
                >
                  Talk to Us
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
