export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-edge flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="mono text-sm font-semibold text-fg">
          sidestream<span className="text-dim">.be</span>
        </div>
        <p className="text-sm text-dim">
          A venture studio. We build software, then run it.
        </p>
        <p className="mono text-xs text-dim">
          © {new Date().getFullYear()} Sidestream
        </p>
      </div>
    </footer>
  );
}
