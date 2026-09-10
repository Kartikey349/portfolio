"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  siDocker,
  siExpress,
  siGit,
  siJavascript,
  siJsonwebtokens,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPrisma,
  siPytorch,
  siPython,
  siReact,
  siRedis,
  siRedux,
  siScikitlearn,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

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

type Skill = {
  label: string;
  path: string;
};

const SKILLS: Skill[] = [
  { label: "JavaScript", path: siJavascript.path },
  { label: "TypeScript", path: siTypescript.path },
  { label: "React", path: siReact.path },
  { label: "Next.js", path: siNextdotjs.path },
  { label: "Tailwind CSS", path: siTailwindcss.path },
  { label: "Node.js", path: siNodedotjs.path },
  { label: "Express.js", path: siExpress.path },
  { label: "MongoDB", path: siMongodb.path },
  { label: "PostgreSQL", path: siPostgresql.path },
  { label: "Redis", path: siRedis.path },
  { label: "Prisma", path: siPrisma.path },
  { label: "Git", path: siGit.path },
  { label: "Docker", path: siDocker.path },
  { label: "Python", path: siPython.path },
  { label: "NumPy", path: siNumpy.path },
  { label: "Pandas", path: siPandas.path },
  { label: "Scikit-learn", path: siScikitlearn.path },
  { label: "PyTorch", path: siPytorch.path },
  { label: "Redux", path: siRedux.path },
  { label: "Socket.io", path: siSocketdotio.path },
  { label: "JWT", path: siJsonwebtokens.path },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <header className="mb-8 md:mb-10">
        <h2 className="sr-only">Skills</h2>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          Skills
        </p>
      </header>

      <motion.ul variants={item} className="flex flex-wrap gap-2 sm:gap-2.5">
        {SKILLS.map((skill) => (
          <li key={skill.label}>
            <span className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3.5 text-[13px] font-medium text-foreground transition-colors duration-150 hover:border-foreground/25 hover:bg-muted">
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-label={skill.label}
                aria-hidden="true"
                className="size-4 shrink-0 fill-current text-muted-foreground"
              >
                <path d={skill.path} />
              </svg>
              {skill.label}
            </span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}