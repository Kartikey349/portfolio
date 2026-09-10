"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { MusicButton } from "@/components/music-button";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const scrollToSection = (href: string) => {
    setOpen(false);
    if (!isHome) {
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background">
      <nav
        className="mx-auto flex h-16 w-full max-w-shell items-center justify-between px-6 md:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-semibold tracking-wide text-foreground"
          onClick={() => setOpen(false)}
        >
          KARTIKEY
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  scrollToSection(link.href);
                }
              }}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            RESUME
          </a>
          <MusicButton />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <MusicButton />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-shell flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                }}
                className="rounded-md px-2 py-2 text-sm tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              RESUME
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
