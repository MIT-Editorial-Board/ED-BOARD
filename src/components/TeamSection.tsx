import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function TeamSection() {
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
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030507] py-20 text-[#F5F7FA] sm:py-28 lg:py-36"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.08) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Blue glow */}
      <div
        className="pointer-events-none absolute -right-52 top-1/3 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.3), transparent 70%)",
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
              The Collective
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 02
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="mb-12 grid items-end gap-7 lg:mb-20 lg:grid-cols-[1fr_0.55fr]"
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
          <h2 className="font-display text-[clamp(4.2rem,13vw,9rem)] font-normal uppercase leading-[0.8] tracking-[-0.015em] text-[#F5F7FA]">
            Made by
            <span className="block text-[#4D7CF3]">Many Voices</span>
          </h2>

          <p className="max-w-lg font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8 lg:pb-2">
            Writers, photographers, designers and editors working together to
            document the people, ideas and moments that shape MIT Manipal.
          </p>
        </motion.div>

        {/* Main team feature */}
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:gap-0">
          {/* Team image */}
          <motion.div
            className="relative"
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -40 }
            }
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <div className="group relative overflow-hidden border border-[#147BFF]/25 bg-[#05070A]">
              <img
                src="/Board26.jpeg"
                alt="MIT Editorial Board team"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-center brightness-[0.72] saturate-[0.8] transition duration-1000 group-hover:scale-[1.025] group-hover:brightness-[0.82]"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030507] via-transparent to-black/25"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(20,123,255,0.14), transparent 42%)",
                }}
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
                <div>
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-[#35C8FF]">
                    Editorial Board
                  </span>

                  <h3 className="mt-2 font-display text-[2.5rem] font-normal uppercase leading-none text-[#F5F7FA] sm:text-[4rem]">
                    The Board
                  </h3>
                </div>

                <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#A4AFBC] sm:block">
                  MIT Manipal
                </span>
              </div>

              <span className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-[#35C8FF]/65" />

              <span className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-[#35C8FF]/65" />
            </div>

            <span className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 border-b border-l border-[#147BFF]/45" />
          </motion.div>

          {/* Team information panel */}
          <motion.div
            className="relative flex flex-col justify-center border border-white/[0.08] bg-[#070A0F]/80 p-6 sm:p-8 lg:border-l-0 lg:p-10"
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 40 }
            }
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.3,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[#35C8FF]">
                The people behind the pages
              </span>

              <span className="h-2 w-2 rounded-full bg-[#147BFF] shadow-[0_0_12px_#147BFF]" />
            </div>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-16 bg-[#35C8FF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#147BFF]" />
            </div>

            <p className="font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8">
              Meet the people responsible for the words, images and design
              behind every Editorial Board publication.
            </p>

            <Link
              to="/team"
              className="group mt-8 flex h-12 w-full items-center justify-between border border-[#147BFF]/70 bg-[#147BFF]/[0.06] px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F7FA] transition duration-300 hover:bg-[#147BFF]"
            >
              Meet the Team

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#35C8FF]/35" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}