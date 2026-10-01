import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { SERVICES, COMPANY_NAME } from "@/data/content";
import { ArrowRight, CheckCircle2, Factory, MonitorPlay, Ruler, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32 lg:pt-44 lg:pb-40">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/qje03hi5/video/upload/v1790833560/15452141_1920_1080_60fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60 z-0 backdrop-blur-sm" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn className="max-w-3xl" direction="up">
              <p className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-12 bg-primary" />
                {COMPANY_NAME}
              </p>
              <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Precision Engineering for{" "}
                <span className="text-primary">Sheet Metal Tooling</span>
              </h1>
              <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
                Specialized engineering solutions in sheet metal stamping simulation, progressive die design, strip layout development, formability analysis, and manufacturing feasibility.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg" className="h-14 rounded-sm px-10 text-base">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-sm bg-background/50 px-10 text-base backdrop-blur-md"
                >
                  Explore Services
                </Button>
              </div>
            </FadeIn>

            <FadeIn className="relative lg:pl-10" direction="left">
              <Link href="/portfolio" className="group block relative">
                <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg mt-8 lg:mt-0">
                  <div className="absolute bottom-4 left-4 z-10 w-[65%] -rotate-[10deg] rounded-xl   shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:-translate-x-4 group-hover:-rotate-[14deg]">
                    <div className="overflow-hidden rounded-lg bg-muted/20">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="aspect-[3/4] w-full object-cover"
                      >
                        <source src="https://res.cloudinary.com/qje03hi5/video/upload/v1790772703/D_Pillar_Inner_Presentation.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-[65%] rotate-[10deg] rounded-xl  shadow-xl transition-all duration-500 group-hover:translate-y-4 group-hover:translate-x-4 group-hover:rotate-[14deg]">
                    <div className="overflow-hidden rounded-lg bg-muted/20">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="aspect-[3/4] w-full object-cover"
                      >
                        <source src="https://res.cloudinary.com/qje03hi5/video/upload/v1790773002/STAY_ASSY_FR_SUSP_MBR_LH_Presentation.mp4" type="video/mp4" />

                      </video>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-lg font-bold text-primary transition-all duration-300 group-hover:translate-x-2">
                  View Our Projects <ArrowRight className="h-5 w-5" />
                </div>

              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust / Positioning Section */}
      <Section className="relative overflow-hidden border-y border-border/20 bg-muted/20">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="relative order-2 lg:order-1 lg:col-span-5">
              <FadeIn direction="right">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/50 shadow-xl">
                  <Image
                    src="/images/backgrounds/bg-3.jpeg"
                    alt="Industrial CAD Engineering"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </FadeIn>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-10">
              <FadeIn direction="left">
                <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Dedicated Engineering for <span className="text-primary">Reliable Production</span>
                </h2>
                <p className="mb-8 text-lg font-medium leading-relaxed text-muted-foreground">
                  We specialize in sheet metal stamping simulation, die design, progressive dies, and strip layout development — delivering accurate, production-ready engineering that improves manufacturability, quality, and cost efficiency before tooling begins.
                </p>
                <StaggerContainer className="grid gap-5 sm:grid-cols-2">
                  {[
                    "Accurate engineering solutions",
                    "Production-ready outcomes",
                    "Improved manufacturability",
                    "Reduced trial-and-error",
                  ].map((item, i) => (
                    <FadeIn key={i} direction="up" delay={0.1 * i}>
                      <div className="flex items-start gap-3 font-semibold text-foreground">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    </FadeIn>
                  ))}
                </StaggerContainer>
              </FadeIn>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section className="bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 max-w-2xl" direction="up">
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Specialized Engineering Services
            </h2>
            <p className="text-lg font-medium text-muted-foreground sm:text-xl">
              Comprehensive engineering analysis and design solutions to ensure your stamping process and die design are optimized for production.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.id} direction="up" delay={0.1 * index}>
                <ServiceCard service={service} index={index} />
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Engineering Workflow Section */}
      <Section className="relative overflow-hidden py-28 text-primary-foreground">
        <SectionBackground src="/images/backgrounds/bg-4.jpeg" alt="Engineering Workflow" overlayClassName="bg-primary/95" />
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-20 max-w-3xl text-center" direction="up">
            <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Concept to Production
            </h2>
            <p className="text-lg font-medium text-primary-foreground/80 sm:text-xl">
              Our proven engineering approach bridges the gap between component design and reliable manufacturing.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary-foreground/25 to-transparent lg:block" />
            <StaggerContainer className="relative z-10 grid gap-12 lg:grid-cols-4">
              {[
                { title: "Simulation & Analysis", icon: MonitorPlay, desc: "Formability analysis and process evaluation" },
                { title: "Optimization", icon: Ruler, desc: "Strip layout and process parameters" },
                { title: "Tooling Design", icon: Wrench, desc: "Precision progressive die engineering" },
                { title: "Production Support", icon: Factory, desc: "Validation and tryout support" },
              ].map((step, i) => (
                <FadeIn key={i} direction="up" delay={0.1 * i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm bg-background text-primary shadow-lg ring-1 ring-background/20">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="mb-3 text-xs font-bold tracking-[0.2em] text-primary-foreground/50">
                      STEP 0{i + 1}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/70">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>
    </div>
  );
}