"use client";

import { useI18n, LangToggle } from "@/components/i18n/LanguageProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-ink">
      <div className="container-edge flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="mono text-sm font-semibold text-fg">
          sidestream<span className="text-dim">.be</span>
        </div>
        <p className="text-sm text-dim">{t.footer.tagline}</p>
        <div className="flex items-center gap-4">
          <LangToggle />
          <p className="mono text-xs text-dim">© {new Date().getFullYear()} Sidestream</p>
        </div>
      </div>
    </footer>
  );
}
