import {
  siDaisyui,
  siExpress,
  siFirebase,
  siJsonwebtokens,
  siMongodb,
  siReact,
  siRedux,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

type SimpleIcon = typeof siReact;

const ICON_MAP: Record<string, SimpleIcon> = {
  React: siReact,
  MongoDB: siMongodb,
  Express: siExpress,
  TailwindCSS: siTailwindcss,
  DaisyUI: siDaisyui,
  JWT: siJsonwebtokens,
  Redux: siRedux,
  "Socket.io": siSocketdotio,
  TypeScript: siTypescript,
  "Firebase Auth": siFirebase,
};

type TechIconProps = {
  name: string;
};

export function TechIcon({ name }: TechIconProps) {
  const icon = ICON_MAP[name];

  if (!icon) {
    return (
      <span className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground/80 uppercase">
        {name}
      </span>
    );
  }

  return (
    <span className="group/tech relative inline-flex">
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={name}
        className="size-4 fill-current text-muted-foreground transition-colors group-hover/tech:text-foreground"
      >
        <title>{name}</title>
        <path d={icon.path} />
      </svg>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 hidden -translate-x-1/2 rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.1em] whitespace-nowrap text-muted-foreground opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100 sm:block"
      >
        {name}
      </span>
    </span>
  );
}