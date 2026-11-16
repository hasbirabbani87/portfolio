import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { ProjectIndex } from "@/components/project-index";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-editorial px-6 md:px-12">
      {/* Editorial Hero */}
      <section className="grid grid-cols-1 gap-12 border-b border-hairline py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <Reveal delay={0}>
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-ink-muted">
              Full-Stack Software Engineer
            </p>
            <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Architecting resilient web systems with{" "}
              <span className="italic text-accent">editorial clarity.</span>
            </h1>
          </Reveal>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-hairline pt-6 md:col-span-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <Reveal
            delay={0.12}
            className="flex h-full flex-col justify-between gap-6"
          >
            <p className="text-base leading-relaxed text-ink-secondary">
              Membangun aplikasi web end-to-end dengan fokus pada arsitektur
              backend yang tangguh, performa tinggi, dan antarmuka yang bersih.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/projects">
                <Button variant="primary">Explore Case Studies</Button>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="link-editorial font-mono text-xs text-ink-secondary hover:text-ink"
              >
                GitHub ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected Works Index */}
      <Reveal delay={0.2}>
        <ProjectIndex projects={projects} />
      </Reveal>
    </main>
  );
}