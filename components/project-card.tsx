"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { ProjectImage } from "@/components/project-image";
import { TechIcon } from "@/components/tech-icon";
import type { Project } from "@/data/projects";

const cardVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

export function ProjectCard({ project, total }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col rounded-xl border border-border/60 bg-card p-4 transition-colors duration-300 hover:border-border sm:p-5"
    >
      <motion.div variants={cardItem}>
        <ProjectImage
          alt={`${project.name} project screenshot`}
          name={project.name}
          number={project.number}
        />
      </motion.div>

      <motion.div variants={cardItem} className="mt-5">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
          {project.number} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl uppercase">
          {project.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2.5">
          {project.technologies.map((technology) => (
            <TechIcon key={technology} name={technology} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={cardItem}
        className="mt-5 flex items-center gap-6 border-t border-border/60 pt-4"
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          Live
          <ArrowUpRight
            className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
        {project.githubUrl !== "#" ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            GitHub
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        ) : (
          <a
            href="#"
            className="group/link inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
          >
            GitHub
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        )}
      </motion.div>
    </motion.article>
  );
}