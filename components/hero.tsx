"use client";

import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { siGithub, siX } from "simple-icons";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
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

const SOCIAL_BUTTONS = [
  {
    label: "GitHub",
    href: "https://github.com/Kartikey349",
    external: true,
    icon: <BrandIcon title="GitHub" path={siGithub.path} />,
    ariaLabel: "Open Kartikey Sharma's GitHub profile",
  },
  {
    label: "X",
    href: "https://x.com/kartikey349",
    external: true,
    icon: <BrandIcon title="X" path={siX.path} />,
    ariaLabel: "Open Kartikey Sharma's X profile",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kartikey-sharma-a7b336381/",
    external: true,
    icon: <BrandIcon title="LinkedIn" path={LINKEDIN_PATH} />,
    ariaLabel: "Open Kartikey Sharma's LinkedIn profile",
  },
  {
    label: "Email",
    href: "mailto:kartikey7518@gmail.com",
    external: false,
    icon: <Mail className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />,
    ariaLabel: "Send an email to Kartikey Sharma",
  },
] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={prefersReducedMotion ? false : "hidden"}
      animate="visible"
      className="relative w-full"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 z-0 -left-6 -right-6 h-40 lg:-left-24 lg:-right-24 sm:h-42"
      >
        <Image
          src="/bg-image.jpg"
          alt=""
          fill
          sizes="50rem"
          priority
          className="object-cover object-center opacity-75 grayscale dark:opacity-45"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgb(0 0 0 / 0.85) 0%, rgb(0 0 0 / 0.55) 75%, rgb(0 0 0 / 0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <motion.div variants={item} className="mt-6 flex justify-center sm:mt-8">
          <Image
            src="/Profile.jpg"
            alt="Kartikey Sharma"
            width={1280}
            height={1280}
            priority
            sizes="(min-width: 640px) 96px, 80px"
            className="size-20 rounded-full border border-border/70 object-cover select-none sm:size-24"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Kartikey Sharma
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-lg leading-snug text-foreground sm:text-xl"
        >
          Building things for the web, one project at a time.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          I&apos;m a full-stack developer focused on building modern web
          applications, backend systems, and exploring AI.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
            />
            Looking for opportunities
          </span>
          <span aria-hidden="true" className="hidden text-foreground/30 sm:inline">
            ·
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5 text-muted-foreground/70" />
            Based in Bhopal, India
          </span>
        </motion.div>

        <motion.ul variants={item} className="mt-7 flex flex-wrap justify-center gap-2">
          {SOCIAL_BUTTONS.map((button) => (
            <li key={button.label}>
              <a
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noopener noreferrer" : undefined}
                aria-label={button.ariaLabel}
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3.5 text-[13px] font-medium text-foreground transition-colors duration-150 hover:border-foreground/25 hover:bg-muted"
              >
                {button.icon}
                {button.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.p
          variants={item}
          className="mt-6 text-xs text-muted-foreground sm:text-sm"
        >
          Currently building, learning, and looking for the next opportunity.
        </motion.p>
      </div>
    </motion.div>
  );
}