import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-14 mb-4 border-b border-hairline pb-3 font-serif text-3xl text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 font-sans text-xl font-semibold text-ink"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-6 text-base leading-[1.75] text-ink-secondary"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-6 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-ink-secondary marker:text-accent"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-sm border border-hairline bg-surface px-1.5 py-0.5 font-mono text-[13px] text-accent"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-md border border-hairline bg-surface p-5 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  // Komponen kustom untuk menyoroti Engineering Trade-off
  Callout: ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <aside className="my-8 rounded-r-md border-l-2 border-accent bg-surface/70 p-6">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
        {title}
      </p>
      <div className="text-sm leading-relaxed text-ink-secondary [&>p]:mb-0">
        {children}
      </div>
    </aside>
  ),
};