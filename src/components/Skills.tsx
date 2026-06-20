"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Docker", level: 80 },
      { name: "AWS / GCP", level: 72 },
    ],
  },
  {
    name: "Tooling",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Vitest / Jest", level: 85 },
      { name: "CI/CD pipelines", level: 80 },
      { name: "Figma", level: 70 },
      { name: "Linux / Shell", level: 82 },
    ],
  },
];

const tools = [
  "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
  "Prisma", "Redis", "Docker", "Tailwind", "Framer Motion",
  "GraphQL", "REST APIs", "AWS", "Vercel", "GitHub Actions",
  "Vitest", "Playwright", "Figma", "Stripe", "tRPC",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-[#9ca3af] font-medium">{name}</span>
        <span className="text-xs text-[#6b7280]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1a1a26] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa]"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a3a] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#7c3aed] font-semibold">03 — Skills</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          My <span className="gradient-text">toolkit</span>
        </motion.h2>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + ci * 0.1 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7c3aed] mb-6">
                {cat.name}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + ci * 0.1 + si * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs text-[#4b5563] uppercase tracking-[0.2em] font-semibold mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.05, color: "#a78bfa" }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#2a2a3a] bg-[#12121a] text-[#6b7280] hover:border-[#7c3aed]/40 hover:text-[#a78bfa] hover:bg-[#1a1a26] transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
