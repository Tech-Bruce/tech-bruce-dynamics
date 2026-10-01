"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_NAME, NAVIGATION_LINKS, COMPANY_TAGLINE } from "@/data/content";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex flex-col group" onClick={closeMobileMenu}>
            <span className="font-extrabold text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary whitespace-nowrap">{COMPANY_NAME}</span>
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.2em] hidden md:inline-block transition-colors group-hover:text-foreground whitespace-nowrap">
              {COMPANY_TAGLINE}
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6 text-sm font-medium">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-foreground/80"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex shrink-0 items-center justify-end gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Discuss Your Project
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" className="w-full justify-center" onClick={closeMobileMenu}>
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

