import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#030507] text-[#F5F7FA]">
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center px-5 pb-20 pt-32 sm:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(53,200,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.08) 1px, transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 75%)",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#147BFF]/12 blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#35C8FF]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-[#35C8FF] sm:text-xs">
              Page unavailable
            </span>
            <span className="h-px w-10 bg-[#35C8FF]" />
          </div>

          <h1
            className="font-display text-[clamp(9rem,35vw,22rem)] leading-[0.7] tracking-[-0.04em] text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(245, 247, 250, 0.75)",
            }}
          >
            404
          </h1>

          <p className="mt-12 font-display text-4xl uppercase tracking-wide text-[#F5F7FA] sm:text-6xl">
            Oops! Page not found
          </p>

          <Link
            to="/"
            className="group mx-auto mt-9 inline-flex items-center gap-3 border border-[#147BFF] bg-[#147BFF] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white transition hover:border-[#35C8FF] hover:bg-[#35C8FF] hover:text-[#030507] sm:text-xs"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Link>
        </motion.div>

        <span className="absolute bottom-8 left-8 hidden h-12 w-12 border-b border-l border-[#35C8FF]/45 sm:block" />
        <span className="absolute right-8 top-32 hidden h-12 w-12 border-r border-t border-[#35C8FF]/45 sm:block" />
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;