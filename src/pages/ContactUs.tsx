import { ArrowUpRight, Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#030507] text-[#F5F7FA]">
      <Navbar />

      <main className="relative pt-28">
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="pointer-events-none absolute right-[-180px] top-[-40px] h-[550px] w-[550px] rounded-full bg-[#147BFF]/12 blur-[170px]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32 lg:pt-20">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#35C8FF]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#35C8FF] sm:text-xs">
                  Contact
                </span>
              </div>

              <h1 className="font-display text-[clamp(4.5rem,12vw,10rem)] uppercase leading-[0.8] tracking-[-0.025em] text-[#F5F7FA]">
                Connect
                <br />
                With Us
              </h1>

              <p className="mt-8 max-w-xl font-sans text-base leading-7 text-[#A4AFBC] sm:text-lg">
                Your thoughts matter to us. Got a question, feedback, or want to
                collaborate? Reach out anytime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative border border-white/10 bg-[#070A0F]/85 p-6 backdrop-blur-md sm:p-8"
            >
              <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#35C8FF]" />
              <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#35C8FF]" />

              <div className="space-y-2 font-display text-3xl uppercase leading-tight text-[#F5F7FA] sm:text-4xl">
                <p>We’d love to hear from you.</p>
                <p>Got a question?</p>
                <p>Want to share feedback?</p>
              </div>

              <a
                href="mailto:edboard2024@gmail.com"
                className="group mt-9 flex items-center justify-between gap-4 border-t border-white/10 py-5 text-[#F5F7FA] transition hover:text-[#35C8FF]"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#35C8FF]" />

                  <span className="truncate font-sans text-sm sm:text-base">
                    edboard2024@gmail.com
                  </span>
                </span>

                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <div className="border-t border-white/10 pt-6">
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#A4AFBC] sm:text-xs">
                  Follow us
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/mit.edboard?igsh=MTU5dG9haWFiZ2hhOA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-white/15 bg-[#030507] px-4 py-4 text-[#F5F7FA] transition hover:border-[#35C8FF] hover:text-[#35C8FF]"
                    aria-label="Visit MIT Editorial Board on Instagram"
                  >
                    <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
                      <FaInstagram className="h-5 w-5" />
                      Instagram
                    </span>

                    <ArrowUpRight className="hidden h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/the-mit-editorial-board"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border border-white/15 bg-[#030507] px-4 py-4 text-[#F5F7FA] transition hover:border-[#35C8FF] hover:text-[#35C8FF]"
                    aria-label="Visit MIT Editorial Board on LinkedIn"
                  >
                    <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
                      <FaLinkedin className="h-5 w-5" />
                      LinkedIn
                    </span>

                    <ArrowUpRight className="hidden h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[#35C8FF] sm:text-xs">
              Ideas in motion
            </span>

            <span className="h-px min-w-16 flex-1 bg-gradient-to-r from-[#35C8FF] to-transparent" />

            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[#A4AFBC] sm:text-xs">
              Stories in focus
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;