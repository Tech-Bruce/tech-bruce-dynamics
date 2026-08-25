import Link from "next/link";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
} from "@/data/content";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-foreground">
      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.045]" />

      <div className="relative z-10">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-14 md:grid-cols-2 lg:gap-24">
            
            {/* =================================================
                COMPANY
            ================================================= */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                  Engineering Solutions
                </span>
              </div>

              <Link
                href="/"
                className="group inline-block"
              >
                <h2 className="text-2xl font-extrabold tracking-[-0.04em] transition-colors duration-300 group-hover:text-primary sm:text-3xl">
                  {COMPANY_NAME}
                </h2>
              </Link>

              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-muted-foreground">
                {COMPANY_TAGLINE}
              </p>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground/80">
                Dedicated to delivering optimized tooling and manufacturing
                solutions through engineering-focused analysis, simulation,
                and design.
              </p>
            </div>

            {/* =================================================
                CONTACT
            ================================================= */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  Contact
                </span>

                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-7">
                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </p>

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-sm font-semibold transition-colors hover:text-primary"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Location
                    </p>

                    <address className="max-w-xs not-italic text-sm font-semibold leading-relaxed text-muted-foreground">
                      {CONTACT_LOCATION}
                    </address>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="group mt-9 inline-flex h-12 items-center gap-3 border border-border px-5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Start a Conversation

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNICAL STRIP
        ===================================================== */}
        <div className="border-y border-border/70 bg-muted/20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 py-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  SHEET METAL
                </span>

                <span className="h-px w-6 bg-border" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  SIMULATION
                </span>

                <span className="h-px w-6 bg-border" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  DIE DESIGN
                </span>

                <span className="h-px w-6 bg-border" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                  MANUFACTURING
                </span>
              </div>

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
                ENGINEERED FOR PRODUCTION
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground sm:flex-row">
            <p>
              © {currentYear} {COMPANY_NAME}. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60">
                Engineering • Design • Manufacturing
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
