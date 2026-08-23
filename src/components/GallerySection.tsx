import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { galleryImages } from "@/data/galleryData";

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const previewImages = galleryImages.slice(0, 6);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10% 0px",
  });

  const visible = reduceMotion || isInView;

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#07090D] py-20 text-[#F5F7FA] sm:py-28 lg:py-36"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric glow */}
      <div
        className="pointer-events-none absolute -right-56 top-[28%] h-[38rem] w-[38rem] rounded-full opacity-20 blur-[170px]"
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
              Through Our Lens
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 05
          </span>
        </motion.div>

        {/* Heading and existing description */}
        <div className="mb-12 grid items-end gap-7 lg:mb-20 lg:grid-cols-[1fr_0.55fr]">
          <motion.h2
            className="font-display text-[clamp(4.5rem,15vw,10rem)] font-normal uppercase leading-[0.8] tracking-[-0.015em] text-[#F5F7FA]"
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
            Gallery
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
            Explore the visual storytelling of MIT Manipal through our lens.
            Each photograph captures a unique moment of campus life, events, and
            the people who make our institution special.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[230px] lg:gap-5">
          {previewImages.map((image, index) => {
            const featured = index === 0;

            return (
              <motion.figure
                key={image.id}
                className={`
                  group relative min-h-[310px] overflow-hidden
                  border border-white/[0.09] bg-[#030507]
                  transition-colors duration-500
                  hover:border-[#147BFF]/65
                  ${
                    featured
                      ? "md:col-span-8 md:row-span-2"
                      : "md:col-span-4 md:row-span-1"
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
                  delay: reduceMotion ? 0 : 0.25 + index * 0.08,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.7] saturate-[0.82] transition duration-1000 group-hover:scale-[1.055] group-hover:brightness-[0.82]"
                />

                {/* Image treatments */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020304]/95 via-transparent to-black/20"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(20,123,255,0.18), transparent 45%)",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.45)]"
                  aria-hidden="true"
                />

                {/* Image number */}
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#35C8FF]" />

                  <span className="font-mono text-[0.58rem] tracking-[0.25em] text-[#35C8FF]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Photographer information */}
                <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.25em] text-[#A4AFBC]">
                    Photo by
                  </span>

                  <p
                    className={`
                      mt-1 font-display uppercase leading-none
                      tracking-[0.015em] text-[#F5F7FA]
                      ${
                        featured
                          ? "text-[clamp(2.5rem,5vw,4.5rem)]"
                          : "text-[2rem]"
                      }
                    `}
                  >
                    {image.photographer}
                  </p>
                </figcaption>

                {/* Editorial crop marks */}
                <span className="pointer-events-none absolute right-5 top-5 h-7 w-7 border-r border-t border-[#35C8FF]/45" />

                <span className="pointer-events-none absolute bottom-5 right-5 h-7 w-7 border-b border-r border-[#147BFF]/40 transition-colors group-hover:border-[#35C8FF]/80" />
              </motion.figure>
            );
          })}
        </div>

        {/* Full gallery link */}
        <motion.div
          className="mt-10 flex justify-center sm:mt-12"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={
            visible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.65,
          }}
        >
          <Link
            to="/gallery"
            className="group flex h-12 w-full items-center justify-between border border-[#147BFF]/70 bg-[#147BFF]/[0.06] px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F7FA] transition duration-300 hover:bg-[#147BFF] sm:w-auto sm:min-w-[245px]"
          >
            View Full Gallery

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}