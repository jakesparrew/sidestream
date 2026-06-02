export function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Start something</p>
          <h2 className="mt-4 text-3xl font-semibold text-fg md:text-5xl">
            Got a product to build, or a process to kill?
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Tell us what you&apos;re trying to ship. If it&apos;s a fit, we&apos;ll
            scope it on a short intro call — no deck required.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@sidestream.be?subject=Project%20with%20Sidestream"
              className="rounded-md bg-fg px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Book an intro call
            </a>
            <a
              href="mailto:hello@sidestream.be"
              className="mono text-sm text-muted transition-colors hover:text-fg"
            >
              hello@sidestream.be
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
