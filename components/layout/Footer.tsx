import Link from "next/link";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
} from "@/data/content";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const capabilities = [
  "Sheet Metal",
  "Simulation",
  "Die Design",
  "Manufacturing",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-background text-foreground">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-primary/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Contact headline */}
        <div className="grid items-end gap-8 border-b border-border/80 py-14 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Precision starts with a conversation
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Your next challenge.
              <br />
              <span className="text-muted-foreground">
                Our engineering expertise.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-5 rounded-full bg-primary py-2 pl-6 pr-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background motion-reduce:transform-none"
          >
            Discuss your project
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15">
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
              />
            </span>
          </Link>
        </div>

        {/* Company and contact details */}
        <div className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.75fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-block rounded-sm text-2xl font-bold tracking-[-0.045em] transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:text-3xl"
            >
              {COMPANY_NAME}
            </Link>

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {COMPANY_TAGLINE}
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground/75">
              Optimized tooling and manufacturing solutions, built on
              engineering analysis, simulation, and thoughtful design.
            </p>

            <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-muted/30 px-4 py-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Engineered for production
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Our expertise
            </h3>

            <ul className="mt-6 space-y-4">
              {capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-4 bg-primary/60"
                  />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Get in touch
            </h3>

            <div className="mt-6 space-y-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-start gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/20 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                </span>

                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Email us
                  </p>
                  <p className="mt-1.5 break-words text-sm font-semibold transition-colors group-hover:text-primary">
                    {CONTACT_EMAIL}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/20 text-primary">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                </span>

                <div className="pt-0.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Find us
                  </p>
                  <address className="mt-1.5 max-w-xs text-sm not-italic leading-6 text-muted-foreground">
                    {CONTACT_LOCATION}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized brand statement */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden border-b border-border/80"
        >
          <p className="whitespace-nowrap pb-4 text-[clamp(3rem,11.5vw,10rem)] font-bold leading-none tracking-[-0.065em] text-foreground/[0.05]">
            PRECISION MATTERS.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-muted-foreground">
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>

          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
            Engineering · Design · Manufacturing
          </span>
        </div>
      </div>
    </footer>
  );
}