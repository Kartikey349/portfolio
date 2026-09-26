import { ProjectCard } from "@/components/project-card";
import { Accordion } from "@/components/ui/accordion";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <>
      <header className="mb-12 md:mb-16">
        <h2 className="sr-only">Selected Work</h2>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          Selected Work
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          A few things I&apos;ve built.
        </p>
      </header>
      <Accordion className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </Accordion>
    </>
  );
}
