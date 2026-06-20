"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    title: "DevFlow",
    description:
      "A collaborative developer workspace with real-time code editing, integrated Git workflows, and AI-powered code suggestions. Built for teams that move fast.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    gradient: "from-violet-500/20 to-purple-900/10",
    accent: "#7c3aed",
    featured: true,
  },
  {
    title: "Pulse Analytics",
    description:
      "Real-time analytics dashboard for SaaS products. Visualises user behaviour, funnels, and retention with beautiful, interactive charts.",
    tags: ["React", "D3.js", "Node.js", "Redis"],
    gradient: "from-indigo-500/20 to-blue-900/10",
    accent: "#4f46e5",
    featured: true,
  },
  {
    title: "Forma",
    description:
      "Drag-and-drop form builder with conditional logic, file uploads, and Notion-style rich text. Connects to 50+ integrations via webhooks.",
    tags: ["React", "Tailwind", "Prisma", "Stripe"],
    gradient: "from-fuchsia-500/20 to-pink-900/10",
    accent: "#a21caf",
    featured: false,
  },
  {
    title: "Horizon CLI",
    description:
      "A developer-friendly CLI toolkit for scaffolding projects, managing environments, and deploying to cloud providers with a single command.",
    tags: ["Node.js", "Commander.js", "Docker", "AWS"],
    gradient: "from-emerald-500/20 to-teal-900/10",
    accent: "#059669",
    featured: false,
  },
  {
    title: "Lightpack",
    description:
      "Open-source component library with 40+ accessible, composable components. Zero runtime dependencies, full TypeScript support.",
    tags: ["TypeScript", "Radix UI", "Storybook", "Vitest"],
    gradient: "from-amber-500/20 to-orange-900/10",
    accent: "#d97706",
    featured: false,
  },
  {
    title: "Notely",
    description:
      "Markdown-based note-taking app with offline support, end-to-end encryption, and seamless sync across devices using CRDTs.",
    tags: ["SvelteKit", "SQLite", "CRDTs", "PWA"],
    gradient: "from-rose-500/20 to-red-900/10",
    accent: "#e11d48",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a3a] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#7c3aed] font-semibold">02 — Projects</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-[#6b7280] text-sm max-w-xs leading-relaxed">
            A mix of personal projects, open source contributions, and client work.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`relative group rounded-2xl border border-[#2a2a3a] bg-gradient-to-br ${project.gradient} bg-[#12121a] p-8 hover:border-[#2a2a3a]/80 transition-all duration-300 overflow-hidden cursor-default`}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 0 1px ${project.accent}30` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#e8e8f0]">{project.title}</h3>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <motion.button
                      className="p-2 rounded-lg border border-[#2a2a3a] bg-[#0a0a0f]/60 text-[#6b7280] hover:text-[#e8e8f0] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View source"
                    >
                      <GithubIcon size={15} />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg border border-[#2a2a3a] bg-[#0a0a0f]/60 text-[#6b7280] hover:text-[#e8e8f0] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View live"
                    >
                      <ExternalLink size={15} />
                    </motion.button>
                  </div>
                </div>

                <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-[#2a2a3a] text-[#6b7280] bg-[#0a0a0f]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="group relative p-5 rounded-2xl border border-[#2a2a3a] bg-[#12121a] hover:border-[#2a2a3a]/80 hover:bg-[#1a1a26] transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold text-[#e8e8f0]">{project.title}</h3>
                <ArrowUpRight
                  size={14}
                  className="text-[#4b5563] group-hover:text-[#a78bfa] transition-colors mt-0.5"
                />
              </div>
              <p className="text-xs text-[#6b7280] leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#2a2a3a] text-[#6b7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
