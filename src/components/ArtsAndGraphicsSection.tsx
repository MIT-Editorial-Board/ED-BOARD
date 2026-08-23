import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const artworks = [
  "/ANG/ANG1.jpg",
  "/ANG/ANG2.jpg",
  "/ANG/ANG3.jpg",
  "/ANG/ANG4.jpg",
];

export default function ArtsAndGraphicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10% 0px",
  });

  const visible = reduceMotion || isInView;

  useEffect(() => {
    if (reduceMotion || carouselPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % artworks.length);
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [carouselPaused, reduceMotion]);

  const showPreviousArtwork = () => {
    setCurrentSlide((current) =>
      current === 0 ? artworks.length - 1 : current - 1,
    );
  };

  const showNextArtwork = () => {
    setCurrentSlide((current) => (current + 1) % artworks.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#030507] py-20 text-[#F5F7FA] sm:py-24"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
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
        className="pointer-events-none absolute -right-52 top-1/3 h-[32rem] w-[32rem] rounded-full opacity-15 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section metadata */}
        <motion.div
          className="mb-12 flex items-center justify-between border-b border-white/[0.08] pb-4"
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
              Visual Language
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 04
          </span>
        </motion.div>

        {/* Original-style heading */}
        <motion.div
          className="mb-12 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          animate={
            visible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 25 }
          }
          transition={{
            duration: 0.8,
            delay: reduceMotion ? 0 : 0.1,
          }}
        >
          <h2 className="font-display text-4xl font-normal uppercase tracking-[0.04em] text-[#F5F7FA] sm:text-5xl">
            Arts and Graphics
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-[#147BFF]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#35C8FF] shadow-[0_0_8px_#35C8FF]" />
            <span className="h-px w-16 bg-[#147BFF]" />
          </div>
        </motion.div>

        {/* Original two-column layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Original text placement */}
          <motion.div
            className="font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8"
            initial={reduceMotion ? false : { opacity: 0, x: -30 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -30 }
            }
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <p className="mb-5">
              Our Arts and Graphics department is the creative powerhouse
              behind MIT Editorial Board&apos;s visual identity. We blend
              artistic innovation with technical precision to create compelling
              visual narratives that enhance our publications.
            </p>

            <p className="mb-5">
              From stunning illustrations to dynamic graphic designs, our team
              pushes the boundaries of creativity while maintaining the highest
              standards of professional excellence.
            </p>

            <p>
              Each piece we create is a testament to our commitment to visual
              storytelling and our passion for artistic expression in editorial
              design.
            </p>
          </motion.div>

          {/* Original-sized carousel placement */}
          <motion.div
            className="relative h-[320px] overflow-hidden border border-[#147BFF]/25 bg-[#05070A] shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:h-[420px]"
            initial={reduceMotion ? false : { opacity: 0, x: 30 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 30 }
            }
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.3,
            }}
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentSlide}
                src={artworks[currentSlide]}
                alt={`Artwork ${currentSlide + 1}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 1.025,
                      }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.99,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  ease: "easeOut",
                }}
              />
            </AnimatePresence>

            {/* Image treatments */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020304]/60 via-transparent to-black/15"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]"
              aria-hidden="true"
            />

            {/* Artwork counter */}
            <div className="absolute left-5 top-5 border border-white/[0.12] bg-[#030507]/75 px-3 py-2 backdrop-blur-md">
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.25em] text-[#35C8FF]">
                {String(currentSlide + 1).padStart(2, "0")}
                <span className="text-[#A4AFBC]">
                  {" "}
                  / {String(artworks.length).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                type="button"
                onClick={showPreviousArtwork}
                className="flex h-10 w-10 items-center justify-center border border-white/[0.14] bg-[#030507]/75 text-[#F5F7FA] backdrop-blur-md transition hover:border-[#35C8FF] hover:bg-[#147BFF]"
                aria-label="Show previous artwork"
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={showNextArtwork}
                className="flex h-10 w-10 items-center justify-center border border-white/[0.14] bg-[#030507]/75 text-[#F5F7FA] backdrop-blur-md transition hover:border-[#35C8FF] hover:bg-[#147BFF]"
                aria-label="Show next artwork"
              >
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Navigation indicators */}
            <div className="absolute bottom-6 left-5 flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    h-px transition-all duration-300
                    ${
                      currentSlide === index
                        ? "w-8 bg-[#35C8FF]"
                        : "w-4 bg-white/30 hover:bg-white/60"
                    }
                  `}
                  aria-label={`Show artwork ${index + 1}`}
                  aria-current={currentSlide === index ? "true" : undefined}
                />
              ))}
            </div>

            {/* Crop marks */}
            <span className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-[#35C8FF]/45" />

            <span className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b border-l border-[#35C8FF]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}