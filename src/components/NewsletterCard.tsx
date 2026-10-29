import { Calendar, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { NewsletterData } from "@/data/NewsletterData";

interface NewsletterCardProps {
  newsletter: NewsletterData;
  index: number;
}

const NewsletterCard = ({ newsletter, index }: NewsletterCardProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
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
          src={newsletter.coverImage}
          alt={`${newsletter.title} Cover`}
          loading="lazy"
          decoding="async"
          width={newsletter.coverWidth}
          height={newsletter.coverHeight}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-[#030507]/25 to-transparent" />
        <div className="absolute inset-0 bg-[#147BFF]/5 mix-blend-color" />

        <div className="absolute left-4 top-4 flex items-center gap-2 border border-white/15 bg-[#030507]/80 px-3 py-2 backdrop-blur-md">
          <Calendar className="h-4 w-4 text-[#35C8FF]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            {newsletter.label}
          </span>
        </div>

        <div className="absolute right-4 top-4 border border-white/15 bg-[#030507]/80 px-3 py-2 backdrop-blur-md">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#A4AFBC]">
            {newsletter.pages} pages
          </span>
        </div>

        <span className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#35C8FF]/60" />
        <span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#35C8FF]/60" />
      </div>

      <div className="relative p-6 sm:p-8">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#35C8FF] sm:text-xs">
          MIT Editorial Board
        </p>

        <h2 className="font-display text-4xl uppercase leading-none tracking-wide text-[#F5F7FA] sm:text-5xl">
          {newsletter.title}
        </h2>

        <p className="mt-5 font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base">
          {newsletter.description}
        </p>

        <a
          href={newsletter.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${newsletter.label} newsletter (PDF, opens in a new tab)`}
          className="mt-7 flex w-full items-center justify-between border border-[#147BFF] bg-[#147BFF] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-[#35C8FF] hover:bg-[#35C8FF] hover:text-[#030507] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A0F] sm:text-xs"
        >
          <span>View Newsletter</span>
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
};

export default NewsletterCard;
