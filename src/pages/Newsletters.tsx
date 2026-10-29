import { useState } from "react";
import { BookOpen, Calendar, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterCard from "@/components/NewsletterCard";
import { newslettersData } from "@/data/NewsletterData";

const Newsletters = () => {
  const reduceMotion = useReducedMotion();
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const years = Array.from(
    new Set(newslettersData.map((newsletter) => newsletter.year))
  ).sort((a, b) => Number(b) - Number(a));

  const filteredNewsletters = selectedYear
    ? newslettersData.filter((newsletter) => newsletter.year === selectedYear)
    : newslettersData;

  const stats = [
    {
      value: newslettersData.length,
      label: "Digital Newsletters",
      icon: BookOpen,
    },
    {
      value: years.length,
      label: "Years Archived",
      icon: Calendar,
    },
    {
      value: newslettersData.reduce((total, newsletter) => total + newsletter.pages, 0),
      label: "Pages to Explore",
      icon: FileText,
    },
  ];

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

        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#147BFF]/10 blur-[170px]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 lg:px-10 lg:pb-16 lg:pt-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-[#35C8FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#35C8FF] sm:text-xs">
                Digital Archive
              </span>
            </div>

            <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <h1 className="font-display text-[clamp(3rem,10.5vw,9rem)] uppercase leading-[0.8] tracking-[-0.025em] text-[#F5F7FA]">
                MIT
                <br />
                Newsletters
              </h1>

              <p className="max-w-xl pb-2 font-sans text-base leading-7 text-[#A4AFBC] sm:text-lg lg:pb-4">
                Explore our digital newsletter collection. Discover stories,
                highlights, and updates from our vibrant MIT community,
                one edition at a time.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="relative border-y border-white/10">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-5 sm:flex-wrap sm:px-8 lg:px-10">
            <button
              type="button"
              aria-pressed={selectedYear === null}
              onClick={() => setSelectedYear(null)}
              className={`shrink-0 border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition sm:text-xs ${
                selectedYear === null
                  ? "border-[#147BFF] bg-[#147BFF] text-white"
                  : "border-white/15 bg-[#070A0F] text-[#A4AFBC] hover:border-[#35C8FF]/70 hover:text-white"
              }`}
            >
              All Years
            </button>

            {years.map((year) => (
              <button
                type="button"
                key={year}
                aria-pressed={selectedYear === year}
                onClick={() => setSelectedYear(year)}
                className={`shrink-0 border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] transition sm:text-xs ${
                  selectedYear === year
                    ? "border-[#147BFF] bg-[#147BFF] text-white"
                    : "border-white/15 bg-[#070A0F] text-[#A4AFBC] hover:border-[#35C8FF]/70 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredNewsletters.map((newsletter, index) => (
              <NewsletterCard
                key={newsletter.id}
                newsletter={newsletter}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-b border-white/10 py-10 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0 lg:py-14"
                >
                  <Icon className="mb-5 h-6 w-6 text-[#35C8FF]" />

                  <p className="font-display text-5xl uppercase leading-none text-[#F5F7FA] lg:text-7xl">
                    {stat.value}
                  </p>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#A4AFBC] sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletters;
