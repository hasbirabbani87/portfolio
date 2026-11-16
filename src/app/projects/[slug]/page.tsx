import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { mdxComponents } from "@/components/mdx-components";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

async function CachedProjectArticle({ slug }: { slug: string }) {
  "use cache";

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { meta, content } = project;

  return (
    <article className="mx-auto max-w-editorial px-6 py-12 md:px-12 md:py-20">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Case Studies
      </Link>

      <header className="border-b border-hairline pb-12">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs text-accent">
          <span>CASE STUDY {meta.index}</span>
          <span>•</span>
          <span>{meta.category}</span>
        </div>

        <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
          {meta.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-secondary">
          {meta.summary}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-hairline pt-6 sm:grid-cols-4">
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Role
            </span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {meta.role}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Timeline
            </span>
            <span className="mt-1 block text-sm font-medium text-ink">
              {meta.year}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Key Impact
            </span>
            <span className="mt-1 block font-mono text-sm font-medium text-accent">
              {meta.metrics}
            </span>
          </div>
          <div className="flex items-end gap-4">
            {meta.liveUrl && (
              <a
                href={meta.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="link-editorial inline-flex items-center gap-1 font-mono text-xs text-ink"
              >
                Live Site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {meta.repoUrl && (
              <a
                href={meta.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="link-editorial inline-flex items-center gap-1 font-mono text-xs text-ink-secondary hover:text-ink"
              >
                Source <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "vitesse-light",
                      keepBackground: false,
                    },
                  ],
                ],
              },
            }}
          />
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-md border border-hairline bg-surface p-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Architecture Stack
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {meta.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-hairline bg-canvas px-2.5 py-1 font-mono text-xs text-ink-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

async function ProjectContentLoader({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CachedProjectArticle slug={slug} />;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-editorial px-6 py-20 font-mono text-xs text-ink-muted md:px-12">
          Loading case study...
        </div>
      }
    >
      <ProjectContentLoader params={params} />
    </Suspense>
  );
}