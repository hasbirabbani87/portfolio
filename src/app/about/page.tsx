import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, engineering philosophy, and technical stack of Nama Lo.",
};

const experiences = [
  {
    period: "2024 — Present",
    role: "Senior Full-Stack Engineer",
    company: "Nama Perusahaan / Studio",
    summary:
      "Memimpin arsitektur frontend dan layanan API inti. Berhasil memangkas waktu muat halaman utama sebesar 40% dan membangun design system internal.",
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "Nama Tech Startup",
    summary:
      "Mengembangkan fitur pembayaran real-time, integrasi webhook, dan dashboard analitik menggunakan TypeScript, React, dan PostgreSQL.",
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Digital Agency",
    summary:
      "Menerjemahkan desain editorial kompleks menjadi aplikasi web interaktif dengan standar aksesibilitas dan performa tinggi.",
  },
];

const stackMatrix = [
  {
    domain: "Frontend & UI",
    tools: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "HTML/CSS",
    ],
  },
  {
    domain: "Backend & API",
    tools: [
      "Node.js",
      "Go",
      "REST & GraphQL",
      "tRPC",
      "Server Actions",
      "Zod",
    ],
  },
  {
    domain: "Data & Storage",
    tools: ["PostgreSQL", "Redis", "Prisma / Drizzle ORM", "MongoDB"],
  },
  {
    domain: "Infra & Tooling",
    tools: ["Docker", "Git / GitHub Actions", "Vercel", "Cloudflare", "Linux"],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-editorial px-6 py-16 md:px-12 md:py-24">
      {/* Header Editorial */}
      <Reveal delay={0}>
        <header className="border-b border-hairline pb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">
            Profile &amp; Colophon
          </p>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Engineering software with{" "}
            <span className="italic text-accent">structural rigor</span> and
            human warmth.
          </h1>
        </header>
      </Reveal>

      {/* Section 1: Narrative Bio & Engineering Philosophy */}
      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-12 border-b border-hairline py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ink">Narrative</h2>
            <p className="mt-2 font-mono text-xs text-ink-muted">
              Based in Indonesia · UTC+7
            </p>
          </div>

          <div className="space-y-6 text-base leading-[1.75] text-ink-secondary lg:col-span-8">
            <p>
              Halo, gw{" "}
              <strong className="font-medium text-ink">Nama Lo</strong>—seorang
              Full-Stack Software Engineer yang terobsesi pada titik temu antara
              arsitektur sistem yang tangguh dan antarmuka yang terasa tenang
              saat digunakan.
            </p>
            <p>
              Buat gw, menulis kode yang baik mirip dengan menyunting terbitan
              majalah klasik: setiap baris punya tujuan yang jelas, struktur
              datanya tidak bertele-tele, dan pembaca (atau pengguna) tidak
              pernah dibuat bingung oleh kerumitan di balik layar.
            </p>

            {/* Filosofi Kerja dalam 3 Poin */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
              <div>
                <span className="font-mono text-xs text-accent">
                  01 / CLARITY
                </span>
                <h3 className="mt-2 font-sans text-sm font-semibold text-ink">
                  Boring Tech First
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  Memilih teknologi yang terbukti stabil dan mudah dirawat
                  daripada sekadar mengejar tren sesaat.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent">
                  02 / SPEED
                </span>
                <h3 className="mt-2 font-sans text-sm font-semibold text-ink">
                  Latency is UX
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  Desain terbaik sekalipun akan terasa berat jika query lambat
                  atau layout bergeser saat dimuat.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-accent">
                  03 / CRAFT
                </span>
                <h3 className="mt-2 font-sans text-sm font-semibold text-ink">
                  End-to-End Ownership
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  Memahami perjalanan data mulai dari skema database hingga
                  piksel terakhir di layar pengguna.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Section 2: Career Timeline */}
      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-12 border-b border-hairline py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ink">Experience</h2>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="link-editorial mt-3 inline-flex items-center gap-1 font-mono text-xs text-accent"
            >
              Download Full Resume (PDF){" "}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="divide-y divide-hairline border-t border-hairline lg:col-span-8 lg:border-t-0">
            {experiences.map((item) => (
              <div
                key={item.period}
                className="grid grid-cols-1 gap-4 py-6 first:pt-0 sm:grid-cols-12"
              >
                <div className="font-mono text-xs text-ink-muted sm:col-span-4">
                  {item.period}
                </div>
                <div className="sm:col-span-8">
                  <h3 className="font-sans text-base font-semibold text-ink">
                    {item.role}{" "}
                    <span className="font-normal text-ink-secondary">
                      · {item.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Section 3: Technical Stack Matrix */}
      <Reveal delay={0.1}>
        <section className="grid grid-cols-1 gap-12 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ink">Technical Stack</h2>
            <p className="mt-2 text-sm text-ink-secondary">
              Perangkat utama yang sehari-hari gw pakai untuk merancang dan
              mendeploy sistem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            {stackMatrix.map((group) => (
              <div
                key={group.domain}
                className="rounded-md border border-hairline bg-surface p-5"
              >
                <h3 className="border-b border-hairline pb-2.5 font-mono text-xs uppercase tracking-wider text-ink-muted">
                  {group.domain}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm border border-hairline bg-canvas px-2.5 py-1 font-mono text-xs text-ink-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}