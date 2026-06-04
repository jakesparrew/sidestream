"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { LeadCapture } from "./LeadCapture";

const eur = (n: number) => "€" + Math.round(n).toLocaleString("en-US");

export function AutomationSavings() {
  const { t } = useI18n();
  const s = t.tools.savings;
  const [people, setPeople] = useState(2);
  const [hours, setHours] = useState(8);
  const [cost, setCost] = useState(35);
  const [auto, setAuto] = useState(70);

  const { hoursSaved, moneySaved } = useMemo(() => {
    const annual = people * hours * 52;
    const hs = annual * (auto / 100);
    return { hoursSaved: Math.round(hs), moneySaved: hs * cost };
  }, [people, hours, cost, auto]);

  const summary = `Automation savings — ${people} people × ${hours}h/week at €${cost}/h, ${auto}% automatable → ${hoursSaved.toLocaleString("en-US")}h / ${eur(moneySaved)} saved per year.`;

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
      <h3 className="text-xl font-semibold text-fg">{s.title}</h3>
      <p className="mt-2 text-sm text-muted">{s.sub}</p>

      <Slider label={s.peopleLabel} value={people} min={1} max={50} onChange={setPeople} />
      <Slider label={s.hoursLabel} value={hours} min={1} max={40} onChange={setHours} suffix="h" />
      <Slider label={s.costLabel} value={cost} min={15} max={150} step={5} onChange={setCost} prefix="€" />
      <Slider label={s.autoLabel} value={auto} min={10} max={95} step={5} onChange={setAuto} suffix="%" />

      <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
        <div className="bg-ink p-5">
          <div className="eyebrow">{s.hoursSavedLabel}</div>
          <div className="mono mt-2 text-2xl font-semibold text-fg md:text-3xl">
            {hoursSaved.toLocaleString("en-US")}<span className="text-base font-normal text-dim">h</span>
          </div>
          <div className="mono mt-1 text-[11px] text-dim">{s.perYear}</div>
        </div>
        <div className="bg-ink p-5">
          <div className="eyebrow">{s.moneySavedLabel}</div>
          <div className="mono mt-2 text-2xl font-semibold text-fg md:text-3xl">{eur(moneySaved)}</div>
          <div className="mono mt-1 text-[11px] text-dim">{s.perYear}</div>
        </div>
      </div>
      <p className="mono mt-3 text-[11px] text-dim">{t.tools.disclaimer}</p>

      <LeadCapture summary={summary} ctaLabel={s.cta} />
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  prefix = "",
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="mt-5">
      <div className="flex items-baseline justify-between">
        <span className="eyebrow">{label}</span>
        <span className="mono text-sm font-semibold text-fg">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-white"
      />
    </div>
  );
}
