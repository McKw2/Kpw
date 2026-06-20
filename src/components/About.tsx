"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, readable code that teams love to work with.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "From pixel-perfect frontends to scalable backend architectures.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Every millisecond matters — building fast experiences users notice.",
  },
  {
    icon: Heart,
    title: "Craft",
    desc: "Caring deeply about the details that make products feel special.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#7c3aed] font-semibold">01 — About</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              Building things I&apos;m{" "}
              <span className="gradient-text">proud of</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-[#9ca3af] leading-relaxed"
            >
              <p>
                I&apos;m a full-stack developer with a passion for building products that
                are both technically excellent and delightful to use. I thrive at the
                intersection of engineering and design.
              </p>
              <p>
                With experience across the entire web stack — from crafting responsive
                interfaces to architecting backend systems — I bring ideas from
                concept to production with care and precision.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to
                open source, and thinking about how to make software better for everyone.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex gap-10 mt-10"
            >
              {[
                { num: "3+", label: "Years experience" },
                { num: "20+", label: "Projects shipped" },
                { num: "∞", label: "Problems solved" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold gradient-text mb-1">{num}</div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: value cards */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="p-6 rounded-2xl border border-[#2a2a3a] bg-[#12121a] hover:border-[#7c3aed]/40 hover:bg-[#1a1a26] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/20 transition-colors">
                  <Icon size={18} className="text-[#a78bfa]" />
                </div>
                <h3 className="text-sm font-semibold text-[#e8e8f0] mb-2">{title}</h3>
                <p className="text-xs text-[#6b7280] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
