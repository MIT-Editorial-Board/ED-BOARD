import {
  forwardRef,
  useRef,
  type ForwardedRef,
  type MutableRefObject,
} from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BookOpen, PenTool, Users } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Yearbook Production",
    description:
      "We design, curate and publish the annual yearbook, preserving the defining moments and memories of every academic year.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Our writers, photographers and designers create stories that document student life, achievements and campus culture.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Community Engagement",
    description:
      "We organise events, photoshoots and creative campaigns that bring the MIT community together.",
    icon: Users,
  },
];

const AboutSection = forwardRef<HTMLDivElement>(
  (_, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();

    const isInView = useInView(sectionRef, {
      once: true,
      margin: "-10% 0px",
    });

    const visible = reduceMotion || isInView;

    const setRefs = (node: HTMLDivElement | null) => {
      sectionRef.current = node;

      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as MutableRefObject<HTMLDivElement | null>).current = node;
      }
    };

    return (
      <section
        id="about"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] text-[#F5F7FA]"
      >
        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,200,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.08) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Blue atmospheric glow */}
        <div
          className="pointer-events-none absolute -left-52 top-[18%] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, rgba(20,123,255,0.28), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-60 bottom-[8%] h-[38rem] w-[38rem] rounded-full opacity-20 blur-[160px]"
          style={{
            background:
              "radial-gradient(circle, rgba(53,200,255,0.22), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div
          ref={setRefs}
          className="relative z-10 mx-auto max-w-[96rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
          {/* Section metadata */}
          <motion.div
            className="mb-9 flex items-center justify-between border-b border-white/[0.08] pb-4 sm:mb-12"
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
                About EdBoard
              </span>
            </div>

            <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
              Section / 01
            </span>
          </motion.div>

          {/* Main display heading */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 45 }}
            animate={
              visible
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 45 }
            }
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="font-display text-[clamp(4.1rem,16vw,9rem)] font-normal uppercase leading-[0.8] tracking-[-0.015em]"
              style={{
                backgroundImage:
                  "linear-gradient(115deg, #FFFFFF 0%, #AEB4BC 30%, #F5F7FA 50%, #777F89 72%, #DDE3EA 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 35px rgba(255,255,255,0.05)",
              }}
            >
              <span className="block">We Document</span>
              <span className="block">What Matters</span>
            </h2>
          </motion.div>

          {/* Introduction */}
          <div className="mt-14 grid gap-10 lg:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Team image */}
            <motion.div
              className="relative"
              initial={reduceMotion ? false : { opacity: 0, x: -35 }}
              animate={
                visible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -35 }
              }
              transition={{
                duration: 0.85,
                delay: reduceMotion ? 0 : 0.2,
              }}
            >
              <div className="relative overflow-hidden border border-[#147BFF]/25 bg-[#05070A]">
                <img
                  src="/Group pic.jpg"
                  alt="MIT Editorial Board team"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-center brightness-[0.78] saturate-[0.8] transition duration-700 hover:scale-[1.025] hover:brightness-90"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(20,123,255,0.12), transparent 45%, rgba(0,0,0,0.4))",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.65)]"
                  aria-hidden="true"
                />

                <div className="absolute bottom-0 left-0 border-r border-t border-[#35C8FF]/45 bg-[#030507]/80 px-4 py-3 backdrop-blur-md">
                  <span className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-[#F5F7FA]">
                    The people behind the pages
                  </span>
                </div>
              </div>

              {/* Image crop marks */}
              <span className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l border-t border-[#35C8FF]/55" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b border-r border-[#35C8FF]/55" />

              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55">
                  MIT Manipal
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#35C8FF] shadow-[0_0_9px_#35C8FF]" />
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55">
                    Editorial collective
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="flex flex-col justify-center"
              initial={reduceMotion ? false : { opacity: 0, x: 35 }}
              animate={
                visible
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 35 }
              }
              transition={{
                duration: 0.85,
                delay: reduceMotion ? 0 : 0.3,
              }}
            >
              <span className="mb-5 font-mono text-[0.62rem] uppercase tracking-[0.34em] text-[#35C8FF]">
                MIT Editorial Board
              </span>

              <h3 className="max-w-xl font-display text-[clamp(2.7rem,6vw,5rem)] font-normal uppercase leading-[0.88] tracking-[0.01em] text-[#F5F7FA]">
                What is
                <span className="block text-[#4D7CF3]">Edboard?</span>
              </h3>

              <div className="my-7 flex items-center gap-3">
                <span className="h-px w-16 bg-[#35C8FF]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#147BFF]" />
              </div>

              <p className="max-w-xl font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8">
                The Editorial Board is the creative collective of MIT Manipal,
                dedicated to documenting and showcasing campus life through
                publications, photography, design and storytelling.
              </p>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8">
                Our writers, photographers, designers and creative teams work
                together to produce the annual yearbook, publish newsletters
                and preserve the moments that define each academic year.
              </p>
            </motion.div>
          </div>

          {/* Capabilities */}
          <div className="mt-20 border-t border-white/[0.08] pt-6 sm:mt-28 lg:mt-36">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[#35C8FF]">
                What we create
              </span>
            </div>

            <div className="grid border-l border-t border-white/[0.08] md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;

                return (
                  <motion.article
                    key={pillar.number}
                    className="group relative min-h-[270px] overflow-hidden border-b border-r border-white/[0.08] bg-[#05070A]/55 p-6 transition-colors duration-500 hover:bg-[#0A101A] sm:p-8"
                    initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                    animate={
                      visible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{
                      duration: 0.7,
                      delay: reduceMotion ? 0 : 0.4 + index * 0.12,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -5 }}
                  >
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#147BFF] via-[#35C8FF] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs tracking-[0.2em] text-[#147BFF]">
                        {pillar.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-[#147BFF]/30 bg-[#147BFF]/[0.06] text-[#35C8FF] transition duration-500 group-hover:border-[#35C8FF]/60 group-hover:bg-[#147BFF]/15">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="font-display text-[2rem] font-normal uppercase leading-none tracking-[0.015em] text-[#F5F7FA]">
                        {pillar.title}
                      </h4>

                      <p className="mt-5 font-sans text-sm leading-7 text-[#A4AFBC]">
                        {pillar.description}
                      </p>
                    </div>

                    <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-[#147BFF]/35 transition-colors group-hover:border-[#35C8FF]/70" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

AboutSection.displayName = "AboutSection";

export default AboutSection;

