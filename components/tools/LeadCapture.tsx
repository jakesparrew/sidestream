"use client";

import { useState } from "react";
import { useI18n } from "@/components/i18n/LanguageProvider";

const EMAIL = "hello@sidestream.be";

/** Result CTA: captures name + email and the tool summary. Posts to /api/lead;
 *  if that isn't configured (or fails), falls back to a pre-filled mailto so the
 *  lead still reaches us. */
export function LeadCapture({ summary, ctaLabel }: { summary: string; ctaLabel: string }) {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function fallbackMailto() {
    const body = encodeURIComponent(`${summary}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Lead via tool")}&body=${body}`;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message: summary, source: "tools" }),
      });
      if (res.ok) {
        setState("done");
        return;
      }
      throw new Error("not ok");
    } catch {
      fallbackMailto();
      setState("done");
    }
  }

  if (state === "done") {
    return (
      <p className="mt-6 rounded-lg border border-line bg-ink px-4 py-3 text-sm text-fg">
        ✓ {t.tools.lead.success}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 border-t border-line pt-6">
      <p className="text-sm font-medium text-fg">{t.tools.lead.title}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.tools.lead.namePlaceholder}
          className="w-full rounded-md border border-line bg-ink px-3.5 py-2.5 text-sm text-fg outline-none placeholder:text-dim focus:border-dim"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.tools.lead.emailPlaceholder}
          className="w-full rounded-md border border-line bg-ink px-3.5 py-2.5 text-sm text-fg outline-none placeholder:text-dim focus:border-dim"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="shrink-0 rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {state === "sending" ? t.tools.lead.sending : ctaLabel}
        </button>
      </div>
    </form>
  );
}
