"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { LeadCapture } from "./LeadCapture";

const BASE: Record<string, number> = { mvp: 8000, product: 20000, ai: 9000, automation: 6000, security: 3500 };
const SIZE: Record<string, number> = { s: 1, m: 1.6, l: 2.6 };
const ADDON: Record<string, number> = { auth: 1500, payments: 2500, ai: 4000, dashboard: 3000, mobile: 6000, integrations: 2500 };
const BASE_W: Record<string, number> = { mvp: 6, product: 12, ai: 5, automation: 4, security: 2 };
const SIZE_W: Record<string, number> = { s: 1, m: 1.4, l: 2 };

const round500 = (n: number) => Math.round(n / 500) * 500;
const eur = (n: number) => "€" + n.toLocaleString("en-US");

export function BuildEstimate() {
  const { t } = useI18n();
  const b = t.tools.build;
  const [type, setType] = useState("mvp");
  const [size, setSize] = useState("m");
  const [addons, setAddons] = useState<Set<string>>(new Set(["auth"]));
  const [rush, setRush] = useState(false);

  const { low, high, weeks } = useMemo(() => {
    const addonSum = [...addons].reduce((s, a) => s + (ADDON[a] ?? 0), 0);
    const price = (BASE[type] * SIZE[size] + addonSum) * (rush ? 1.3 : 1);
    const w = Math.round((BASE_W[type] * SIZE_W[size] + addons.size * 0.5) * (rush ? 0.75 : 1));
    return { low: round500(price * 0.85), high: round500(price * 1.25), weeks: Math.max(1, w) };
  }, [type, size, addons, rush]);

  const toggle = (id: string) =>
    setAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const typeLabel = b.types.find((x) => x.id === type)?.label ?? type;
  const sizeLabel = b.sizes.find((x) => x.id === size)?.label ?? size;
  const addonLabels = [...addons].map((a) => b.addonList.find((x) => x.id === a)?.label ?? a);
  const summary = `Build estimate — ${typeLabel}, ${sizeLabel}${addonLabels.length ? `, add-ons: ${addonLabels.join(", ")}` : ""}${rush ? ", rushed" : ""}. Ballpark ${eur(low)}–${eur(high)}, ~${weeks} ${b.weeks}.`;

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
      <h3 className="text-xl font-semibold text-fg">{b.title}</h3>
      <p className="mt-2 text-sm text-muted">{b.sub}</p>

      <Field label={b.typeLabel}>
        <Segmented options={b.types} value={type} onChange={setType} />
      </Field>
      <Field label={b.sizeLabel}>
        <Segmented options={b.sizes} value={size} onChange={setSize} />
      </Field>
      <Field label={b.addonsLabel}>
        <div className="flex flex-wrap gap-2">
          {b.addonList.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => toggle(a.id)}
              aria-pressed={addons.has(a.id)}
              className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
                addons.has(a.id)
                  ? "border-fg bg-fg text-ink"
                  : "border-line bg-ink text-muted hover:border-dim hover:text-fg"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </Field>
      <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-sm text-muted">
        <input
          type="checkbox"
          checked={rush}
          onChange={(e) => setRush(e.target.checked)}
          className="h-4 w-4 accent-white"
        />
        {b.rushLabel}
      </label>

      {/* result */}
      <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
        <div className="bg-ink p-5">
          <div className="eyebrow">{b.estimateLabel}</div>
          <div className="mono mt-2 text-2xl font-semibold text-fg md:text-3xl">
            {eur(low)}<span className="text-dim">–</span>{eur(high)}
          </div>
        </div>
        <div className="bg-ink p-5">
          <div className="eyebrow">{b.timelineLabel}</div>
          <div className="mono mt-2 text-2xl font-semibold text-fg md:text-3xl">
            {weeks} <span className="text-base font-normal text-dim">{b.weeks}</span>
          </div>
        </div>
      </div>
      <p className="mono mt-3 text-[11px] text-dim">{t.tools.disclaimer}</p>

      <LeadCapture summary={summary} ctaLabel={b.cta} />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="eyebrow mb-2">{label}</div>
      {children}
    </div>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onChange(o.id)}
          aria-pressed={value === o.id}
          className={`rounded-md border px-3.5 py-1.5 text-sm transition-colors ${
            value === o.id
              ? "border-fg bg-fg text-ink"
              : "border-line bg-ink text-muted hover:border-dim hover:text-fg"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
