"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";

import type { Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay } as Transition,
});

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[1px] opacity-[0.15]"
          style={{ background: "linear-gradient(90deg, transparent, #7c3aed, transparent)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a3a] bg-[#12121a] text-xs text-[#a78bfa] font-medium mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          <span className="gradient-text glow-text">KPW</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-xl md:text-2xl text-[#6b7280] font-light leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          Full-stack developer crafting{" "}
          <span className="text-[#a78bfa]">beautiful</span>,{" "}
          <span className="text-[#a78bfa]">performant</span> digital experiences
        </motion.p>

        <motion.p
          {...fadeUp(0.45)}
          className="text-base text-[#4b5563] mb-12 max-w-xl mx-auto leading-relaxed"
        >
          I build modern web applications with clean code and thoughtful design,
          turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => handleScroll("#projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#7c3aed] text-white font-semibold text-sm hover:bg-[#6d28d9] transition-all duration-200 shadow-lg shadow-[#7c3aed]/20 hover:shadow-[#7c3aed]/40"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work
          </motion.button>
          <motion.button
            onClick={() => handleScroll("#contact")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#2a2a3a] text-[#e8e8f0] font-semibold text-sm hover:border-[#7c3aed]/50 hover:bg-[#12121a] transition-all duration-200"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
            { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
            { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-lg border border-[#2a2a3a] text-[#6b7280] hover:text-[#a78bfa] hover:border-[#7c3aed]/40 transition-all duration-200 bg-[#12121a]"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4b5563] hover:text-[#6b7280] transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
