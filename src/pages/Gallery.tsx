import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryData";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const showNextImage = useCallback(() => {
    setCurrentImage((previous) =>
      previous === galleryImages.length - 1 ? 0 : previous + 1
    );
  }, []);

  const showPreviousImage = useCallback(() => {
    setCurrentImage((previous) =>
      previous === 0 ? galleryImages.length - 1 : previous - 1
    );
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [
    lightboxOpen,
    closeLightbox,
    showNextImage,
    showPreviousImage,
  ]);

  const getSpanClass = (span?: string) => {
    if (span === "col") return "md:col-span-2";
    if (span === "row") return "md:row-span-2";
    if (span === "both") return "md:col-span-2 md:row-span-2";
    return "";
  };

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

        <div className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#147BFF]/10 blur-[150px]" />

        <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#35C8FF]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-[#35C8FF] sm:text-xs">
                Visual archive
              </span>
            </div>

            <h1 className="font-display text-[clamp(4.5rem,14vw,11rem)] uppercase leading-[0.78] tracking-[-0.025em] text-[#F5F7FA]">
              Captures
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-[#A4AFBC] sm:text-lg">
              Explore moments captured through our lens. Each photograph tells
              a story of campus life, events, and the vibrant MIT community.
            </p>
          </motion.div>
        </section>

        <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[270px] lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.button
                type="button"
                key={image.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                onClick={() => openLightbox(index)}
                className={`group relative min-h-[270px] overflow-hidden border border-white/10 bg-[#070A0F] text-left transition-colors duration-300 hover:border-[#35C8FF]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C8FF] ${getSpanClass(
                  image.span
                )}`}
                aria-label={`Open ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030507] via-[#030507]/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <p className="font-sans text-sm text-[#A4AFBC]">Photo by</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-[#F5F7FA]">
                    {image.photographer}
                  </p>
                </div>

                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-[#35C8FF]/70 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-[#35C8FF]/70 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.button>
            ))}
          </div>
        </section>
      </main>

      {lightboxOpen && galleryImages[currentImage] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020305]/95 p-3 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/15 bg-[#070A0F]/90 text-[#F5F7FA] transition hover:border-[#35C8FF] hover:text-[#35C8FF] sm:right-8 sm:top-8"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-[#070A0F]/90 text-[#F5F7FA] transition hover:border-[#35C8FF] hover:text-[#35C8FF] sm:left-8 sm:h-14 sm:w-14"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative flex max-h-[88vh] max-w-6xl items-center justify-center overflow-hidden border border-white/10 bg-[#030507]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-h-[88vh] max-w-full object-contain"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#030507] via-[#030507]/85 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
              <p className="font-display text-2xl uppercase tracking-wide text-[#F5F7FA] sm:text-3xl">
                {galleryImages[currentImage].alt}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-[#35C8FF] sm:text-xs">
                Photo by {galleryImages[currentImage].photographer}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/15 bg-[#070A0F]/90 text-[#F5F7FA] transition hover:border-[#35C8FF] hover:text-[#35C8FF] sm:right-8 sm:h-14 sm:w-14"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;