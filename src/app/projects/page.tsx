import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectsArchive } from "@/components/ui/projects-archive";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected full-stack engineering projects, system architectures, and technical case studies.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-editorial px-6 py-16 md:px-12 md:py-24">
      <Reveal delay={0}>
        <header className="mb-12 border-b border-hairline pb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            Complete Archive ({String(projects.length).padStart(2, "0")})
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Engineering{" "}
            <span className="italic text-accent">Case Studies</span> &amp;
            Systems.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary">
            Kumpulan studi kasus arsitektur sistem, optimasi performa database,
            dan pengembangan produk web end-to-end.
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.12}>
        <ProjectsArchive projects={projects} />
      </Reveal>
    </main>
  );
}