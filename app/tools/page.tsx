import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ToolsHeader } from "@/components/tools/ToolsHeader";
import { BuildEstimate } from "@/components/tools/BuildEstimate";
import { AutomationSavings } from "@/components/tools/AutomationSavings";

export const metadata: Metadata = {
  title: "Free tools — build cost & automation savings calculators | Sidestream",
  description:
    "Estimate what your software product costs to build and how much automation could save you. Two free calculators from Sidestream, a venture studio.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free tools — Sidestream",
    description:
      "Estimate your build cost and your automation savings. Two free calculators.",
    url: "https://sidestream.be/tools",
    type: "website",
  },
};

export default function ToolsPage() {
  return (
    <>
      <Nav />
      <main>
        <ToolsHeader />
        <section className="border-b border-line">
          <div className="container-edge grid gap-6 pb-24 md:pb-32 lg:grid-cols-2">
            <BuildEstimate />
            <AutomationSavings />
          </div>
        </section>
        <div className="container-edge py-10">
          <Link href="/" className="mono text-sm text-dim transition-colors hover:text-fg">
            ← sidestream.be
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
