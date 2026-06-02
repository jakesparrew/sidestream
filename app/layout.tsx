import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidestream — A venture studio that ships",
  description:
    "Sidestream is an engineering studio that builds and operates real software products. We don't pitch decks — we run live products with real users.",
  metadataBase: new URL("https://sidestream.be"),
  openGraph: {
    title: "Sidestream — A venture studio that ships",
    description:
      "An engineering studio that builds and operates real software products.",
    url: "https://sidestream.be",
    siteName: "Sidestream",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
