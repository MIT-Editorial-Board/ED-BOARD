import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { articles } from "@/data/articlesData";

export default function ArticlesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10% 0px",
  });

  const visible = reduceMotion || isInView;

  return (
    <section
      ref={sectionRef}
      id="articles"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-20 text-[#F5F7FA] sm:py-28 lg:py-36"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
        aria-hidden="true"
      />

      {/* Blue glow */}
      <div
        className="pointer-events-none absolute -left-52 top-[35%] h-[38rem] w-[38rem] rounded-full opacity-20 blur-[170px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.32), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        {/* Section metadata */}
        <motion.div
          className="mb-10 flex items-center justify-between border-b border-white/[0.08] pb-4 sm:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={
            visible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#147BFF]" />

            <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#35C8FF] sm:text-[0.68rem]">
              From the Editorial Desk
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 03
          </span>
        </motion.div>

        {/* Heading */}
        <div className="mb-12 grid items-end gap-7 lg:mb-20 lg:grid-cols-[1fr_0.52fr]">
          <motion.h2
            className="font-display text-[clamp(4.2rem,13vw,9rem)] font-normal uppercase leading-[0.8] tracking-[-0.015em] text-[#F5F7FA]"
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={
              visible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 35 }
            }
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Featured
            <span className="block text-[#4D7CF3]">Articles</span>
          </motion.h2>

          <motion.p
            className="max-w-lg font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8 lg:pb-2"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={
              visible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 25 }
            }
            transition={{
              duration: 0.75,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            Explore our collection of thought-provoking articles covering campus
            life, student achievements, and more.
          </motion.p>
        </div>

        {/* Articles grid */}
        <div className="grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[250px] lg:gap-5">
          {articles.map((article, index) => {
            const isLarge = article.size === "big";

            return (
              <motion.article
                key={article.id}
                className={`
                  group relative overflow-hidden
                  border border-white/[0.09]
                  bg-[#030507]
                  transition-colors duration-500
                  hover:border-[#147BFF]/65
                  ${
                    isLarge
                      ? "md:col-span-8 md:row-span-2"
                      : "md:col-span-4"
                  }
                `}
                initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                animate={
                  visible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 35 }
                }
                transition={{
                  duration: 0.75,
                  delay: reduceMotion ? 0 : 0.28 + index * 0.1,
                }}
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                  aria-label={`Read ${article.title}`}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover brightness-[0.6] saturate-[0.82] transition duration-1000 group-hover:scale-[1.045] group-hover:brightness-[0.72]"
                  />

                  {/* Image overlays */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020304] via-[#020304]/35 to-transparent"
                    aria-hidden="true"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(130deg, rgba(20,123,255,0.2), transparent 48%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Top metadata */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                    <span className="flex items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-[#35C8FF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#35C8FF] shadow-[0_0_8px_#35C8FF]" />
                      Editorial
                    </span>

                    <span className="font-mono text-[0.6rem] tracking-[0.2em] text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Article information */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                    <div className="mb-4 h-px w-12 bg-[#147BFF] transition-all duration-500 group-hover:w-20 group-hover:bg-[#35C8FF]" />

                    <h3
                      className={`
                        max-w-3xl font-display font-normal uppercase
                        leading-[0.92] tracking-[0.01em]
                        text-[#F5F7FA]
                        ${
                          isLarge
                            ? "text-[clamp(2.8rem,6vw,5.5rem)]"
                            : "text-[clamp(2rem,3.6vw,3.1rem)]"
                        }
                      `}
                    >
                      {article.title}
                    </h3>

                    <p
                      className={`
                        mt-3 max-w-2xl font-sans text-sm
                        leading-6 text-[#C0C7D0]
                        ${isLarge ? "line-clamp-3" : "line-clamp-2"}
                      `}
                    >
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#35C8FF]">
                      Read article

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>

                  {/* Editorial corner details */}
                  <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-[#35C8FF]/35" />

                  <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#35C8FF]/35 transition-colors group-hover:border-[#35C8FF]/80" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}