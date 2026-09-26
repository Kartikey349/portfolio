"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { ProjectImage } from "@/components/project-image";
import { TechIcon } from "@/components/tech-icon";
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkClassName =
  "group/link inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm";

type DetailListProps = {
  label: string;
  items: string[];
};

function DetailList({ label, items }: DetailListProps) {
  return (
    <div>
      <p className="font-mono text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
        {label}
      </p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/40"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, index, total }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const featured = project.featured === true;
  const number = String(index + 1).padStart(2, "0");

  const links = [
    ...(project.githubUrl ? [{ href: project.githubUrl, label: "GitHub" }] : []),
    ...(project.liveUrl ? [{ href: project.liveUrl, label: "Live Demo" }] : []),
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(featured && "md:col-span-2")}
    >
      <AccordionItem
        value={project.id}
        className={cn(
          "rounded-xl border bg-card p-4 transition-colors duration-300 sm:p-5",
          featured
            ? "border-foreground/20 hover:border-foreground/35"
            : "border-border/60 hover:border-border",
        )}
      >
        <div
          className={cn(
            featured && "md:grid md:grid-cols-2 md:items-start md:gap-8",
          )}
        >
          <ProjectImage
            alt={`${project.name} project screenshot`}
            name={project.name}
            number={number}
          />

          <div className="mt-5 md:mt-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                {number} / {String(total).padStart(2, "0")}
              </p>
              {project.badge ? (
                <span className="rounded-full border border-foreground/20 bg-foreground/5 px-2.5 py-0.5 font-mono text-[0.6rem] tracking-[0.2em] text-foreground/80 uppercase">
                  {project.badge}
                </span>
              ) : null}
            </div>

            <h3
              className={cn(
                "mt-2 font-semibold tracking-tight uppercase",
                featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
              )}
            >
              {project.name}
            </h3>

            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              {project.technologies.map((technology) => (
                <TechIcon key={technology} name={technology} />
              ))}
            </div>

            {links.length > 0 ? (
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <AccordionHeader render={<div />} className="mt-5">
          <AccordionTrigger className="w-full border-t border-border/60 pt-4 text-xs text-muted-foreground hover:text-foreground sm:text-sm">
            <span className="font-mono tracking-[0.2em] uppercase">
              View details
            </span>
            <ChevronDown
              className="size-4 shrink-0 transition-transform duration-300 group-data-[panel-open]/accordion-trigger:rotate-180 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </AccordionTrigger>
        </AccordionHeader>

        <AccordionPanel>
          <div className="mt-4 rounded-lg border border-border/60 bg-muted/30 p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className={cn("mt-6 grid gap-6", featured && "md:grid-cols-2")}>
              <DetailList label="Key Features" items={project.features} />
              <DetailList
                label="Technical Highlights"
                items={project.highlights}
              />
            </div>

            <div className="mt-6">
              <p className="font-mono text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
                Technologies
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded border border-border/60 px-2 py-1 font-mono text-[0.65rem] tracking-[0.1em] text-muted-foreground"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </motion.div>
  );
}
