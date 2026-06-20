"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, CheckCircle } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a2a3a] to-transparent" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#7c3aed] font-semibold">04 — Contact</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#9ca3af] leading-relaxed mb-10"
            >
              Whether you have a project in mind, need a hand with something, or
              just want to say hi — my inbox is always open. I&apos;ll get back to you
              as soon as possible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:hello@kpw.dev"
                className="flex items-center gap-3 text-[#6b7280] hover:text-[#a78bfa] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl border border-[#2a2a3a] bg-[#12121a] flex items-center justify-center group-hover:border-[#7c3aed]/40 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium">hello@kpw.dev</span>
              </a>

              <div className="flex gap-3 pt-2">
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
                    className="w-10 h-10 rounded-xl border border-[#2a2a3a] bg-[#12121a] flex items-center justify-center text-[#6b7280] hover:text-[#a78bfa] hover:border-[#7c3aed]/40 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border border-[#7c3aed]/30 bg-[#7c3aed]/5 text-center"
              >
                <CheckCircle size={40} className="text-[#a78bfa]" />
                <h3 className="text-xl font-semibold text-[#e8e8f0]">Message sent!</h3>
                <p className="text-[#9ca3af] text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-2">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#2a2a3a] bg-[#12121a] text-[#e8e8f0] text-sm placeholder-[#4b5563] focus:outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/30 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#2a2a3a] bg-[#12121a] text-[#e8e8f0] text-sm placeholder-[#4b5563] focus:outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/30 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7c3aed] text-white font-semibold text-sm hover:bg-[#6d28d9] transition-all shadow-lg shadow-[#7c3aed]/20 hover:shadow-[#7c3aed]/40"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send message
                  <Send size={15} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
