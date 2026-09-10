import Image from "next/image";

type ProjectImageProps = {
  src?: string;
  alt: string;
  name: string;
  number: string;
};

export function ProjectImage({ src, alt, name, number }: ProjectImageProps) {
  return (
    <div className="group/visual relative aspect-16/10 overflow-hidden rounded-lg border border-border/60 bg-muted/40">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 48rem) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover/visual:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/visual:scale-100"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover/visual:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/visual:scale-100"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-size-20px_20px opacity-50"
          />
          <p className="relative font-mono text-[0.65rem] tracking-[0.25em] text-muted-foreground/50 uppercase">
            {number} · {name}
          </p>
        </div>
      )}
    </div>
  );
}