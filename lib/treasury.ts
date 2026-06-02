/**
 * Portfolio-level treasury figures. Mock for now — wire to real sources later:
 *  - crypto: a crypto-portfolio API (value in EUR)
 *  - bank:   the Wise API (account balance in EUR)
 * Each carries a `prevValue` (one week ago) for the week-over-week delta.
 */

export type TreasuryItem = {
  key: string;
  value: number;
  prevValue: number;
  /** Where the real number will come from, shown as a small note. */
  via: string;
  source: "api" | "mock";
};

export const TREASURY: TreasuryItem[] = [
  { key: "crypto", value: 128_400, prevValue: 119_000, via: "API", source: "mock" },
  { key: "bank", value: 86_250, prevValue: 91_300, via: "Wise", source: "mock" },
];

export function getTreasuryItem(key: string): TreasuryItem | undefined {
  return TREASURY.find((t) => t.key === key);
}
