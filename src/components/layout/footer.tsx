import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-canvas">
      <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center md:px-12">
        <div>
          <p className="font-serif text-lg text-ink">
            Nama Lo<span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-ink-muted">
            © 2026 — Crafted with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-ink-secondary">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="link-editorial hover:text-ink"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="link-editorial hover:text-ink"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="link-editorial hover:text-ink"
          >
            X / Twitter ↗
          </a>
          <Link href="/about" className="link-editorial hover:text-ink">
            Colophon
          </Link>
        </div>
      </div>
    </footer>
  );
}