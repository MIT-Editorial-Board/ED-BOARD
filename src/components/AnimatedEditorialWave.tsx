import { motion, useReducedMotion } from "framer-motion";

type AnimatedEditorialWaveProps = {
  className?: string;
};

export default function AnimatedEditorialWave({
  className = "",
}: AnimatedEditorialWaveProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`pointer-events-none relative h-full w-full ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes wave-sheen {
          0% {
            background-position: 180% 0;
          }

          100% {
            background-position: -80% 0;
          }
        }

        @keyframes wave-sheen-reverse {
          0% {
            background-position: -80% 0;
          }

          100% {
            background-position: 180% 0;
          }
        }

        @keyframes wave-glow-pulse {
          0%, 100% {
            opacity: 0.24;
            filter: blur(8px);
          }

          50% {
            opacity: 0.48;
            filter: blur(13px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wave-sheen,
          .wave-sheen-reverse,
          .wave-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Soft glow behind the wave */}
      <div
        className="wave-glow absolute inset-[4%] opacity-30"
        style={{
          backgroundImage: "url('/editorial-wave.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          filter: "blur(10px)",
          animation: reduceMotion
            ? "none"
            : "wave-glow-pulse 5s ease-in-out infinite",
        }}
      />

      {/* Main wave */}
      <motion.img
        src="/editorial-wave.webp"
        alt=""
        draggable={false}
        className="absolute inset-0 h-full w-full select-none object-fill"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-0.8%", "0.8%", "-0.8%"],
                y: [0, -5, 0],
                scaleY: [1, 1.025, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Offset filament layer */}
      {!reduceMotion && (
        <motion.img
          src="/editorial-wave.webp"
          alt=""
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-fill opacity-[0.18] mix-blend-screen"
          animate={{
            x: ["1.2%", "-1.2%", "1.2%"],
            y: [-3, 5, -3],
            scaleY: [1.015, 0.985, 1.015],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Fast travelling cyan shine */}
      <div
        className="wave-sheen absolute inset-0 opacity-75 mix-blend-screen"
        style={{
          background:
            "linear-gradient(105deg, transparent 25%, rgba(53,200,255,0.05) 38%, rgba(180,245,255,0.95) 49%, rgba(53,200,255,0.12) 58%, transparent 72%)",
          backgroundSize: "230% 100%",
          WebkitMaskImage: "url('/editorial-wave.webp')",
          maskImage: "url('/editorial-wave.webp')",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          animation: reduceMotion
            ? "none"
            : "wave-sheen 4.8s linear infinite",
        }}
      />

      {/* Slower reverse blue flow */}
      <div
        className="wave-sheen-reverse absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(20,123,255,0.1) 38%, rgba(77,124,243,0.8) 50%, rgba(20,123,255,0.1) 62%, transparent 80%)",
          backgroundSize: "260% 100%",
          WebkitMaskImage: "url('/editorial-wave.webp')",
          maskImage: "url('/editorial-wave.webp')",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          animation: reduceMotion
            ? "none"
            : "wave-sheen-reverse 8s linear infinite",
        }}
      />
    </div>
  );
}