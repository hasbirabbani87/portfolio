"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectItem {
  index: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  metrics: string;
  stack: string[];
}

export function ProjectIndex({ projects }: { projects: ProjectItem[] }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeProject = projects[activeIdx];

  return (
    <section className="py-16 md:py-24">
      {/* Section Header */}
      <div className="mb-10 flex items-baseline justify-between border-b border-hairline pb-4">
        <h2 className="font-serif text-3xl text-ink">Selected Works</h2>
        <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
          01 — {String(projects.length).padStart(2, "0")} Archive
        </span>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Kolom Kiri: Daftar Indeks Proyek */}
        <div className="divide-y divide-hairline border-b border-hairline lg:col-span-7">
          {projects.map((project, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                onMouseEnter={() => setActiveIdx(idx)}
                className="group block py-6 transition-colors duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors",
                        isSelected ? "text-accent font-medium" : "text-ink-muted"
                      )}
                    >
                      {project.index}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "font-serif text-2xl transition-transform duration-300 ease-editorial md:text-3xl",
                          isSelected
                            ? "translate-x-1.5 text-accent"
                            : "text-ink group-hover:translate-x-1.5"
                        )}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink-secondary">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="font-mono text-xs text-ink-muted">
                      {project.year}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 transition-all duration-300 ease-editorial",
                        isSelected
                          ? "translate-x-0.5 -translate-y-0.5 text-accent"
                          : "text-ink-muted group-hover:text-ink"
                      )}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Kolom Kanan: Sticky Editorial Preview Card */}
        <div className="hidden lg:col-span-5 lg:block">
          {activeProject && (
            <div className="sticky top-28 rounded-md border border-hairline bg-surface p-6 transition-all duration-300 ease-editorial">
              <div className="flex items-center justify-between border-b border-hairline pb-3 font-mono text-xs text-ink-muted">
                <span>CASE STUDY BRIEF</span>
                <span className="text-accent">{activeProject.metrics}</span>
              </div>

              {/* Placeholder Visual / Architecture Thumbnail */}
              <div className="my-5 flex aspect-16/10 w-full items-center justify-center rounded-sm border border-hairline bg-elevated p-6 text-center">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                    System Architecture Preview
                  </span>
                  <p className="mt-2 font-serif italic text-xl text-ink">
                    {activeProject.title}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-ink-secondary">
                {activeProject.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-hairline pt-4">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-hairline bg-canvas px-2 py-0.5 font-mono text-[11px] text-ink-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}