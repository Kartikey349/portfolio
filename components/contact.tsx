"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { siGithub, siX } from "simple-icons";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function BrandIcon({ title, path }: { title: string; path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      className="size-4 shrink-0 fill-current text-muted-foreground"
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
}

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "kartikey7518@gmail.com",
    href: "mailto:kartikey7518@gmail.com",
    external: false,
    icon: <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />,
    ariaLabel: "Send an email to Kartikey Sharma",
  },
  {
    label: "GitHub",
    value: "@Kartikey349",
    href: "https://github.com/Kartikey349",
    external: true,
    icon: <BrandIcon title="GitHub" path={siGithub.path} />,
    ariaLabel: "Open Kartikey Sharma's GitHub profile",
  },
  {
    label: "X",
    value: "@kartikey349",
    href: "https://x.com/kartikey349",
    external: true,
    icon: <BrandIcon title="X" path={siX.path} />,
    ariaLabel: "Open Kartikey Sharma's X profile",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/kartikey-sharma-a7b336381/",
    external: true,
    icon: <BrandIcon title="LinkedIn" path={LINKEDIN_PATH} />,
    ariaLabel: "Open Kartikey Sharma's LinkedIn profile",
  },
] as const;

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
        <span aria-hidden="true" className="h-px w-10 bg-border" />
        Contact
      </p>

      <motion.h2
        variants={item}
        className="mt-6 max-w-xl text-3xl font-semibold tracking-tight leading-tight text-foreground sm:text-4xl"
      >
        Let&apos;s build something.
      </motion.h2>

      <motion.p
        variants={item}
        className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Open to software development opportunities, interesting projects, and
        conversations about building on the web.
      </motion.p>

      <motion.ul
        variants={item}
        className="mt-10 grid grid-cols-1 border-y border-border/40 divide-y divide-border/40"
      >
        {CONTACT_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.ariaLabel}
              className="group flex min-w-0 items-center justify-between gap-4 py-4 transition-colors hover:text-foreground sm:py-5"
            >
              <span className="flex min-w-0 items-center gap-3 text-sm text-foreground">
                {link.icon}
                <span className="truncate">{link.label}</span>
              </span>
              <span className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                <span className="truncate text-right">{link.value}</span>
                {link.external && (
                  <ArrowUpRight
                    className="size-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                )}
              </span>
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}