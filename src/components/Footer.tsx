"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a26] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-bold gradient-text">KPW</span>
        <p className="text-xs text-[#4b5563]">
          © {new Date().getFullYear()} KPW. Built with Next.js & Tailwind.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs text-[#6b7280] hover:text-[#a78bfa] transition-colors"
          whileHover={{ y: -1 }}
        >
          Back to top ↑
        </motion.button>
      </div>
    </footer>
  );
}
