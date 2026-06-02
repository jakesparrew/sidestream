import Link from "next/link";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "What we do" },
  { href: "#process", label: "How we work" },
  { href: "#studio", label: "Studio" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="container-edge flex h-16 items-center justify-between">
        <Link href="/" className="mono text-sm font-semibold tracking-tight text-fg">
          sidestream<span className="text-dim">.be</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-dim hover:bg-surface-2"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
