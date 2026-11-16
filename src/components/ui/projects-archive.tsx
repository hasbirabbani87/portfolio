"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectsArchive({ projects }: { projects: ProjectMeta[] }) {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  // Ambil semua daftar teknologi unik dari seluruh file MDX
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => techSet.add(t)));
    return ["All", ...Array.from(techSet)];
  }, [projects]);

  // Saring proyek berdasarkan filter aktif
  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return projects;
    return projects.filter((p) => p.stack.includes(selectedTech));
  }, [projects, selectedTech]);

  return (
    <div>
      {/* Filter Bar */}
      <div className="mb-12 flex flex-wrap items-center gap-2 border-b border-hairline pb-6">
        <span className="mr-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
          Filter Stack:
        </span>
        {allTechs.map((tech) => {
          const isActive = selectedTech === tech;
          return (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={cn(
                "rounded-sm border px-3 py-1 font-mono text-xs transition-all duration-200 cursor-pointer",
                isActive
                  ? "border-ink bg-ink text-canvas"
                  : "border-hairline bg-surface/60 text-ink-secondary hover:border-strong hover:text-ink"
              )}
            >
              {tech}
            </button>
          );
        })}
      </div>

      {/* Editorial Grid Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col justify-between rounded-md border border-hairline bg-surface p-6 transition-all duration-300 ease-editorial hover:border-strong md:p-8"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-hairline pb-4 font-mono text-xs">
                <span className="text-accent">INDEX {project.index}</span>
                <span className="text-ink-muted">{project.year}</span>
              </div>

              {/* Title & Category */}
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-ink-muted">
                    {project.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-ink transition-colors group-hover:text-accent sm:text-3xl">
                    {project.title}
                  </h2>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
                {project.summary}
              </p>
            </div>

            {/* Bottom Metrics & Stack */}
            <div className="mt-8 border-t border-hairline pt-4">
              <div className="mb-3 flex items-center justify-between font-mono text-xs">
                <span className="text-ink-muted">IMPACT</span>
                <span className="font-medium text-accent">
                  {project.metrics}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-hairline bg-canvas px-2 py-0.5 font-mono text-[11px] text-ink-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}