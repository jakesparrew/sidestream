"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/i18n/LanguageProvider";

const EMAIL = "hello@sidestream.be";

export function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [project, setProject] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Project with Sidestream — ${name}` : "Project with Sidestream",
    );
    const body = encodeURIComponent(`${project}\n\n— ${name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 120%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      <div className="container-edge relative grid items-start gap-12 py-24 md:py-32 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow flex items-center gap-2">
            <span className="text-dim">06</span> {t.contact.eyebrow}
          </p>
          <h2 className="text-gradient mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t.contact.whatNext}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="mono mt-6 inline-block text-sm text-muted transition-colors hover:text-fg"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-line bg-surface p-6 md:p-7"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePlaceholder}
              className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-dim focus:border-dim"
            />
            <textarea
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder={t.contact.projectPlaceholder}
              rows={4}
              className="mt-3 w-full resize-none rounded-md border border-line bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-dim focus:border-dim"
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-fg px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-40"
              disabled={!project.trim()}
            >
              {t.contact.send}
            </button>
            <p className="mono mt-4 text-center text-[11px] leading-relaxed text-dim">
              {t.contact.trust}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
