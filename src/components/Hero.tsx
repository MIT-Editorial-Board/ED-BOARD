import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedEditorialWave from "@/components/AnimatedEditorialWave";

type GlassQuoteProps = {
  inverted?: boolean;
  single?: boolean;
};

const GlassQuote = ({
  inverted = false,
  single = false,
}: GlassQuoteProps) => {
  const id = useId().replace(/:/g, "");
  const gradientId = `quote-gradient-${id}`;
  const shineId = `quote-shine-${id}`;
  const glowId = `quote-glow-${id}`;

  return (
    <div className={inverted ? "rotate-180" : ""}>
      <svg
        viewBox={single ? "0 0 42 68" : "0 0 84 68"}
        className="h-auto w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8DEBFF" />
            <stop offset="38%" stopColor="#00A8FF" />
            <stop offset="72%" stopColor="#075CFF" />
            <stop offset="100%" stopColor="#1626C9" />
          </linearGradient>

          <linearGradient
            id={shineId}
            x1="-120%"
            y1="0"
            x2="-30%"
            y2="1"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="47%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="53%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />

            <animate
              attributeName="x1"
              values="-120%;180%;-120%"
              dur="4.2s"
              repeatCount="indefinite"
            />

            <animate
              attributeName="x2"
              values="-30%;270%;-30%"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <filter
            id={glowId}
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />

            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0.55  0 0 0 0 1  0 0 0 0.85 0"
            />

            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter={`url(#${glowId})`}>
          <path
            d="M4 8H36V34H23C23 46 28 52 38 56V66C16 63 4 50 4 31V8Z"
            fill={`url(#${gradientId})`}
            stroke="#6FE7FF"
            strokeOpacity="0.8"
            strokeWidth="1"
          />

          <path
            d="M4 8H36V34H23C23 46 28 52 38 56V66C16 63 4 50 4 31V8Z"
            fill={`url(#${shineId})`}
          />

          {!single && (
            <>
              <path
                d="M46 8H78V34H65C65 46 70 52 80 56V66C58 63 46 50 46 31V8Z"
                fill={`url(#${gradientId})`}
                stroke="#6FE7FF"
                strokeOpacity="0.8"
                strokeWidth="1"
              />

              <path
                d="M46 8H78V34H65C65 46 70 52 80 56V66C58 63 46 50 46 31V8Z"
                fill={`url(#${shineId})`}
              />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};

const TargetMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M32 0V64M0 32H64"
      stroke="currentColor"
      strokeWidth="1"
    />

    <circle
      cx="32"
      cy="32"
      r="10"
      stroke="currentColor"
      strokeWidth="1"
    />

    <circle cx="32" cy="32" r="2" fill="currentColor" />
  </svg>
);

const particles = [
  ["9%", "61%", "0s"],
  ["16%", "76%", "1.2s"],
  ["24%", "67%", "2.4s"],
  ["33%", "73%", "0.7s"],
  ["57%", "64%", "1.8s"],
  ["72%", "71%", "2.9s"],
  ["83%", "62%", "0.4s"],
  ["91%", "75%", "2s"],
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#020304] text-[#F5F7FA]">
      <style>{`
        @keyframes hero-caret {
          0%, 45% {
            opacity: 1;
            transform: scaleY(1);
          }

          46%, 100% {
            opacity: 0.08;
            transform: scaleY(0.82);
          }
        }

        @keyframes hero-line-left {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.35;
          }

          50% {
            transform: translateX(16px);
            opacity: 1;
          }
        }

        @keyframes hero-line-right {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.35;
          }

          50% {
            transform: translateX(-16px);
            opacity: 1;
          }
        }

        @keyframes hero-particle {
          0% {
            opacity: 0;
            transform: translate3d(0, 10px, 0) scale(0.7);
          }

          30% {
            opacity: 0.95;
          }

          70% {
            opacity: 0.4;
          }

          100% {
            opacity: 0;
            transform: translate3d(8px, -28px, 0) scale(1.15);
          }
        }

        @keyframes hero-square {
          0%, 100% {
            transform: rotate(0deg);
            opacity: 0.35;
          }

          50% {
            transform: rotate(7deg);
            opacity: 0.8;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-caret,
          .hero-line-left,
          .hero-line-right,
          .hero-particle,
          .hero-square {
            animation: none !important;
          }
        }
      `}</style>

      {/* Faint blue atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-[61%] h-[36rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,116,255,.13) 0%, rgba(0,53,145,.04) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      {/* Main heading */}
      <motion.div
        className="relative z-30 mx-auto flex max-w-[96rem] flex-col px-[10.5vw] pb-0 pt-[6.1rem] text-left sm:items-center sm:px-8 sm:pt-[8.7rem] sm:text-center lg:px-12"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Mobile heading */}
        <h1 className="font-display text-[clamp(4.3rem,16.3vw,6.2rem)] font-normal uppercase leading-[0.79] tracking-[-0.015em] text-[#F5F7FA] sm:hidden">
          <span className="block">MIT</span>
          <span className="block">Editorial</span>
          <span className="block">Board</span>
        </h1>

        {/* Desktop heading */}
        <h1 className="hidden whitespace-nowrap font-display text-[clamp(5.25rem,8.8vw,9.5rem)] font-normal uppercase leading-[0.82] tracking-[0.012em] text-[#F5F7FA] sm:block">
          MIT Editorial Board
        </h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 whitespace-nowrap font-sans text-[clamp(.78rem,3.35vw,.95rem)] font-normal tracking-[-0.02em] text-[#F5F7FA]/90 sm:mt-7 sm:text-xl lg:text-[1.45rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: reduceMotion ? 0 : 0.18,
          }}
        >
          Ideas in motion. Stories in focus.
        </motion.p>

        {/* Desktop-only buttons */}
        <motion.div
          className="mt-8 hidden items-center justify-center gap-4 sm:flex"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: reduceMotion ? 0 : 0.32,
          }}
        >
          <a
            href="#what-we-do"
            className="flex h-14 min-w-[265px] items-center justify-center rounded-[2px] bg-[#0865FF] px-8 font-sans text-base font-medium text-white shadow-[0_0_25px_rgba(0,102,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#19BFFF] hover:text-[#020304] focus:outline-none focus:ring-2 focus:ring-[#35C8FF] focus:ring-offset-2 focus:ring-offset-black"
          >
            Explore Our Work
          </a>

          <Link
            to="/team"
            className="flex h-14 min-w-[265px] items-center justify-center rounded-[2px] border border-[#0872FF] bg-black/30 px-8 font-sans text-base font-medium text-[#F5F7FA] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#0865FF] focus:outline-none focus:ring-2 focus:ring-[#35C8FF] focus:ring-offset-2 focus:ring-offset-black"
          >
            Meet the Team
          </Link>
        </motion.div>
      </motion.div>

      {/* Infinite animated wave */}
      <div className="pointer-events-none absolute inset-x-[-14%] bottom-[8.5rem] z-10 h-[22svh] min-h-[150px] max-h-[205px] sm:inset-x-[-4%] sm:bottom-[7rem] sm:h-[31vh] sm:max-h-[320px]">
        <AnimatedEditorialWave />
      </div>

      {/* Opening quotation */}
      <motion.div
        className="pointer-events-none absolute bottom-[39%] left-[9%] z-20 w-[4.2rem] sm:bottom-[33%] sm:left-[17%] sm:w-[5.2rem]"
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <GlassQuote />
      </motion.div>

      {/* Closing quotation */}
      <motion.div
        className="pointer-events-none absolute bottom-[36%] right-[9%] z-20 w-[4.2rem] sm:bottom-[28%] sm:right-[18%] sm:w-[5.2rem]"
        animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <GlassQuote inverted />
      </motion.div>

      {/* Smaller single quotation */}
      <motion.div
        className="pointer-events-none absolute bottom-[17%] right-[14%] z-20 w-[1.45rem] sm:bottom-[14%] sm:right-[15%] sm:w-[3.1rem]"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <GlassQuote single inverted />
      </motion.div>

      {/* Editorial square */}
      <div
        className="hero-square pointer-events-none absolute bottom-[37%] left-[27%] z-20 h-8 w-8 border border-[#008DFF]/60"
        style={{
          animation: reduceMotion
            ? "none"
            : "hero-square 7s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Target marks */}
      <TargetMark className="pointer-events-none absolute bottom-[13%] left-[7%] z-20 h-11 w-11 text-[#31B9FF]/65" />

      <TargetMark className="pointer-events-none absolute bottom-[38%] right-[6%] z-20 h-11 w-11 text-[#31B9FF]/65" />

      {/* Typing caret */}
      <span
        className="hero-caret pointer-events-none absolute bottom-[31%] left-1/2 z-20 h-12 w-px origin-center -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_7px_rgba(255,255,255,.7)] sm:h-16"
        style={{
          animation: reduceMotion
            ? "none"
            : "hero-caret 1.05s steps(1,end) infinite",
        }}
        aria-hidden="true"
      />

      {/* Left moving lines */}
      <div
        className="pointer-events-none absolute bottom-[9.4%] left-[16%] z-20"
        aria-hidden="true"
      >
        <span
          className="hero-line-left block h-px w-12 bg-[#00D9FF]"
          style={{
            animation: reduceMotion
              ? "none"
              : "hero-line-left 4s ease-in-out infinite",
          }}
        />

        <span className="mt-2 block h-px w-7 bg-[#0865FF]" />
      </div>

      {/* Right moving lines */}
      <div
        className="pointer-events-none absolute bottom-[10%] right-[22%] z-20"
        aria-hidden="true"
      >
        <span
          className="hero-line-right block h-px w-12 bg-[#00D9FF]"
          style={{
            animation: reduceMotion
              ? "none"
              : "hero-line-right 4s ease-in-out infinite",
          }}
        />

        <span className="ml-auto mt-2 block h-px w-7 bg-[#0865FF]" />
      </div>

      {/* Floating particles */}
      {particles.map(([left, top, delay], index) => (
        <span
          key={index}
          className="hero-particle pointer-events-none absolute z-20 h-1 w-1 rounded-full bg-[#22CFFF] shadow-[0_0_9px_#22CFFF]"
          style={{
            left,
            top,
            animation: reduceMotion
              ? "none"
              : `hero-particle 6s ease-in-out ${delay} infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Scroll cue */}
      <a
        href="#what-we-do"
        className="group absolute bottom-3 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center text-[#F5F7FA] transition hover:text-[#35C8FF] sm:bottom-5"
        aria-label="Scroll to discover"
      >
        <span className="whitespace-nowrap font-sans text-[9px] font-medium uppercase tracking-[0.42em] sm:text-[10px]">
          Scroll to discover
        </span>

        <span className="relative mt-3 block h-9 w-px bg-current sm:h-11">
          <span className="absolute -bottom-px -left-[4px] h-2 w-2 rotate-45 border-b border-r border-current" />
        </span>
      </a>
    </section>
  );
}