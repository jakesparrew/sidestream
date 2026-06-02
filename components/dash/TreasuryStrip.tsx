"use client";

import { CountUp } from "@/components/motion/CountUp";
import { Delta } from "./Delta";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { getTreasuryItem } from "@/lib/treasury";

export function TreasuryStrip({
  totalMrr,
  prevMrr,
}: {
  totalMrr: number;
  prevMrr: number;
}) {
  const { t } = useI18n();
  const crypto = getTreasuryItem("crypto");
  const bank = getTreasuryItem("bank");

  const tiles = [
    crypto && {
      label: t.dash.cryptoPortfolio,
      value: crypto.value,
      prev: crypto.prevValue,
      note: `${t.dash.via} ${crypto.via}`,
    },
    bank && {
      label: t.dash.bankBalance,
      value: bank.value,
      prev: bank.prevValue,
      note: `${t.dash.via} ${bank.via}`,
    },
    {
      label: t.dash.totalMrr,
      value: totalMrr,
      prev: prevMrr,
      note: t.dash.mock,
    },
  ].filter(Boolean) as { label: string; value: number; prev: number; note: string }[];

  return (
    <section>
      <p className="eyebrow mb-3">{t.dash.treasury}</p>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {tiles.map((tile) => (
          <div key={tile.label} className="bg-surface p-5">
            <div className="eyebrow">{tile.label}</div>
            <div className="mono mt-2 text-3xl font-semibold text-fg">
              <CountUp value={tile.value} prefix="€" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Delta value={tile.value} prev={tile.prev} size="md" />
              <span className="text-xs text-dim">{t.dash.vsLastWeek}</span>
              <span className="mono ml-auto text-[10px] uppercase tracking-wider text-dim">
                {tile.note}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
