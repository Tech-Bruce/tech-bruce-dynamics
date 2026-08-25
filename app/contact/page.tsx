import { Section } from "@/components/ui/Section";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
} from "@/data/content";
import { Mail, MapPin, Phone, ArrowUpRight, ChevronDown } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechBruce Dynamics to discuss your sheet metal stamping simulation and die design engineering needs.",
};

const contactItems = [
  {
    number: "01",
    icon: Mail,
    title: "Email",
    content: CONTACT_EMAIL,
    description: "Send us your engineering requirements",
  },
  {
    number: "02",
    icon: Phone,
    title: "Phone",
    content: CONTACT_PHONE,
    description: "Discuss your project directly with us",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Location",
    content: CONTACT_LOCATION,
    description: "Engineering support from Tamil Nadu, India",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden border-b border-border/60">
        <SectionBackground
          src="/images/backgrounds/bg-10.jpeg"
          alt="TechBruce Dynamics engineering"
          priority
          overlayClassName="bg-gradient-to-r from-background via-background/95 to-background/45"
        />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.18] pointer-events-none" />

        {/* Decorative technical lines */}
        <div className="absolute right-0 top-0 h-full w-[35%] hidden lg:block pointer-events-none">
          <div className="absolute right-24 top-0 h-full w-px bg-border/30" />
          <div className="absolute right-48 top-0 h-full w-px bg-border/20" />

          <div className="absolute right-24 top-32 h-px w-64 bg-primary/30" />
          <div className="absolute right-24 top-32 h-24 w-px bg-primary/30" />

          <div className="absolute right-48 bottom-40 h-px w-40 bg-border/40" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  TechBruce Dynamics
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-[-0.055em] leading-[0.95] text-foreground max-w-4xl">
                Let&apos;s Build
                <br />
                <span className="text-primary">Better Engineering</span>
                <br />
                Solutions.
              </h1>

              <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground font-medium">
                Have a sheet metal stamping, simulation, or die design
                requirement? Let&apos;s discuss your project and explore the
                right engineering approach.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
                >
                  Start a Conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Engineering Support
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom technical indicator */}
          <div className="absolute bottom-8 right-6 lg:right-8 hidden md:flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Contact</span>
            <span className="h-px w-16 bg-border" />
            <span>01 / 01</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <Section className="relative bg-background py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            {/* =====================================================
                LEFT SIDE
            ===================================================== */}
            <div>
              <FadeIn direction="right">
                <div className="mb-10">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                      Get In Touch
                    </span>
                    <span className="h-px w-12 bg-primary/50" />
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.04em] leading-tight">
                    Start Your
                    <br />
                    <span className="text-muted-foreground">
                      Next Project.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Ready to optimize your stamping process and die design?
                    Reach out to us to discuss your engineering requirements
                    and production goals.
                  </p>
                </div>
              </FadeIn>

              {/* Contact information */}
              <StaggerContainer className="border-t border-border/70">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <FadeIn
                      key={item.number}
                      direction="up"
                      delay={0.08 * index}
                    >
                      <div className="group relative border-b border-border/70 py-7 transition-all duration-300 hover:pl-3">
                        {/* Active line */}
                        <div className="absolute left-0 top-0 h-full w-0 bg-primary transition-all duration-300 group-hover:w-[2px]" />

                        <div className="flex gap-5">
                          {/* Number */}
                          <div className="pt-1 text-xs font-bold tracking-widest text-muted-foreground/50">
                            {item.number}
                          </div>

                          {/* Icon */}
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border bg-muted/30 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-5 w-5" />
                          </div>

                          {/* Content */}
                          <div className="min-w-0">
                            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              {item.title}
                            </p>

                            <p className="break-words text-base sm:text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                              {item.content}
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </StaggerContainer>

              {/* Engineering statement */}
              <FadeIn direction="up" delay={0.3}>
                <div className="mt-10 border-l-2 border-primary/50 pl-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    From simulation and formability analysis to progressive die
                    design and manufacturing support, we help turn engineering
                    requirements into production-ready solutions.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* =====================================================
                RIGHT SIDE — FORM
            ===================================================== */}
            <FadeIn direction="left">
              <div
                id="contact-form"
                className="relative scroll-mt-24 overflow-hidden border border-border/70 bg-muted/20"
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-primary" />

                {/* Background grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] pointer-events-none" />

                {/* Decorative corner */}
                <div className="absolute right-0 top-0 h-24 w-24 pointer-events-none">
                  <div className="absolute right-0 top-8 h-px w-24 bg-primary/30" />
                  <div className="absolute right-8 top-0 h-24 w-px bg-primary/30" />
                </div>

                <div className="relative z-10 p-7 sm:p-9 lg:p-12">
                  {/* Form header */}
                  <div className="mb-9">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                        Project Enquiry
                      </span>

                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        TB / 001
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.035em]">
                      Send a Message
                    </h3>

                    <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground">
                      Tell us a little about your project and engineering
                      requirements. Our team will get back to you.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="h-1.5 w-1.5 bg-primary" />
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-border bg-muted/30 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    TechBruce Dynamics
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl sm:text-4xl font-extrabold tracking-[-0.04em]">
                  Engineering solutions built around your requirements.
                </h2>
              </div>

              <a
                href="#contact-form"
                className="group inline-flex shrink-0 items-center gap-3 border border-border bg-background px-6 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}