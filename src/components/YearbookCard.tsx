import { useState } from "react";
import { Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";

import type { YearbookData } from "@/data/YearbookData";

interface YearbookCardProps {
  yearbook: YearbookData;
  index: number;
}

const YearbookCard = ({ yearbook, index }: YearbookCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);

    try {
      window.open(yearbook.pdfUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening PDF:", error);
    } finally {
      window.setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.1, 0.3),
      }}
      className="group relative overflow-hidden border border-white/10 bg-[#070A0F] transition-colors duration-300 hover:border-[#35C8FF]/55"
    >
      <div className="relative h-72 overflow-hidden sm:h-80">
        <img
          src={yearbook.coverImage}
          alt={`${yearbook.title} Cover`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#030507]/25 to-transparent" />
        <div className="absolute inset-0 bg-[#147BFF]/5 mix-blend-color" />

        <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/15 bg-[#030507]/80 px-3 py-2 backdrop-blur-md">
          <Calendar className="h-4 w-4 text-[#35C8FF]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            {yearbook.year}
          </span>
        </div>

        <div className="absolute right-4 top-4 border border-white/15 bg-[#030507]/80 px-3 py-2 backdrop-blur-md">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A4AFBC]">
            {yearbook.pages} pages
          </span>
        </div>

        <span className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#35C8FF]/60" />
        <span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#35C8FF]/60" />
      </div>

      <div className="relative p-6 sm:p-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#35C8FF] sm:text-xs">
          {yearbook.theme}
        </p>

        <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-[#F5F7FA] sm:text-5xl">
          {yearbook.title}
        </h2>

        <p className="mt-5 font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base">
          {yearbook.description}
        </p>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isLoading}
          className="mt-7 flex w-full items-center justify-between border border-[#147BFF] bg-[#147BFF] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-[#35C8FF] hover:bg-[#35C8FF] hover:text-[#030507] disabled:cursor-wait disabled:opacity-60 sm:text-xs"
        >
          <span>{isLoading ? "Opening..." : "View Yearbook"}</span>

          {isLoading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <Download className="h-4 w-4" />
          )}
        </button>
      </div>
    </motion.article>
  );
};

export default YearbookCard;