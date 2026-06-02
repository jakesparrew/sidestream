"use client";

import Link from "next/link";
import { useI18n, LangToggle } from "@/components/i18n/LanguageProvider";

export function Nav() {
  const { t } = useI18n();
  const links = [
    { href: "#products", label: t.nav.products },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#process", label: t.nav.process },
    { href: "#studio", label: t.nav.studio },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/75 backdrop-blur-xl">
      <nav className="container-edge flex h-16 items-center justify-between">
        <Link href="/" className="mono shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight text-fg">
          sidestream<span className="text-dim">.be</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="#contact"
            className="rounded-md border border-line bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-dim hover:bg-surface-2"
          >
            {t.nav.book}
          </a>
        </div>
      </nav>
    </header>
  );
}
