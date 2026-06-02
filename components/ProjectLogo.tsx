import { asset } from "@/lib/basePath";

type Props = {
  logo: string | null;
  name: string;
  size?: number;
};

function monogram(name: string): string {
  const cleaned = name.replace(/[^A-Za-z0-9 ]/g, " ").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return cleaned.slice(0, 2).toUpperCase();
}

/** Renders a project logo inside a neutral tile so varied raster logos read
 *  cleanly on the dark surface. Falls back to a monogram when no asset exists. */
export function ProjectLogo({ logo, name, size = 36 }: Props) {
  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-surface-2"
      style={{ width: size, height: size }}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(logo)}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-1"
          loading="lazy"
        />
      ) : (
        <span
          className="mono font-semibold text-muted"
          style={{ fontSize: size * 0.34 }}
        >
          {monogram(name)}
        </span>
      )}
    </span>
  );
}
