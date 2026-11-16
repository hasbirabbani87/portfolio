import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectMeta {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  metrics: string;
  summary: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<ProjectMeta, "slug">),
      };
    });

  return projects.sort((a, b) => a.index.localeCompare(b.index));
}

export function getProjectBySlug(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      ...(data as Omit<ProjectMeta, "slug">),
    },
    content,
  };
}