import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { domains } from "@/data/domainsData";

export default function DomainsSection() {
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
      id="domains"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030507] py-20 text-[#F5F7FA] sm:py-28 lg:py-36"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glows */}
      <div
        className="pointer-events-none absolute -left-52 bottom-[5%] h-[36rem] w-[36rem] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 top-[5%] h-[34rem] w-[34rem] rounded-full opacity-15 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(53,200,255,0.25), transparent 70%)",
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
              How We Work
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 06
          </span>
        </motion.div>

        {/* Heading and existing description */}
        <div className="mb-12 grid items-end gap-7 lg:mb-20 lg:grid-cols-[1fr_0.55fr]">
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
            Our
            <span className="block text-[#4D7CF3]">Domains</span>
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
            Discover the specialized teams that bring MIT Edboard&apos;s vision
            to life through diverse skills and expertise.
          </motion.p>
        </div>

        {/* Domain cards */}
        <div className="grid border-l border-t border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => {
            const Icon = domain.icon;

            return (
              <motion.article
                key={domain.name}
                className="group relative min-h-[310px] overflow-hidden border-b border-r border-white/[0.08] bg-[#070A0F]/70 p-6 transition-colors duration-500 hover:bg-[#0A111C] sm:p-8"
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                animate={
                  visible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.25 + index * 0.1,
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
              >
                {/* Hover line */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#147BFF] via-[#35C8FF] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* Number and icon */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-[#147BFF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {Icon && (
                    <div className="flex h-12 w-12 items-center justify-center border border-[#147BFF]/30 bg-[#147BFF]/[0.06] text-[#35C8FF] transition duration-500 group-hover:border-[#35C8FF]/60 group-hover:bg-[#147BFF]/15">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Existing domain content */}
                <div className="mt-14">
                  <h3 className="font-display text-[2.1rem] font-normal uppercase leading-[0.92] tracking-[0.015em] text-[#F5F7FA] transition-colors duration-300 group-hover:text-[#35C8FF]">
                    {domain.name}
                  </h3>

                  <p className="mt-5 font-sans text-sm leading-7 text-[#A4AFBC]">
                    {domain.description}
                  </p>
                </div>

                {/* Corner detail */}
                <span className="pointer-events-none absolute bottom-5 right-5 h-6 w-6 border-b border-r border-[#147BFF]/35 transition-colors group-hover:border-[#35C8FF]/75" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}