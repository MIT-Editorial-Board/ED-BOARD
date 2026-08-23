import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, X } from "lucide-react";

const FORM_URL = "https://forms.gle/sArbt8gRsbtpXda86";

const INITIAL_DELAY = 60_500;
const REOPEN_DELAY = 3_000_000;
const STORAGE_KEY = "mc_popup_last_closed";

const YearbookPopup = () => {
  const [open, setOpen] = useState(false);
  const reopenTimerRef = useRef<number | null>(null);

  const closePopup = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setOpen(false);

    if (reopenTimerRef.current !== null) {
      window.clearTimeout(reopenTimerRef.current);
    }

    reopenTimerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, REOPEN_DELAY);
  }, []);

  useEffect(() => {
    const lastClosed = localStorage.getItem(STORAGE_KEY);
    const currentTime = Date.now();

    const shouldOpen =
      !lastClosed ||
      currentTime - Number(lastClosed) > REOPEN_DELAY;

    let initialTimer: number | null = null;

    if (shouldOpen) {
      initialTimer = window.setTimeout(() => {
        setOpen(true);
      }, INITIAL_DELAY);
    }

    return () => {
      if (initialTimer !== null) {
        window.clearTimeout(initialTimer);
      }

      if (reopenTimerRef.current !== null) {
        window.clearTimeout(reopenTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closePopup]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="committee-popup-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-[#020305]/85 backdrop-blur-md"
            onClick={closePopup}
            aria-label="Close application popup"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative z-[101] w-full max-w-md overflow-hidden border border-white/10 bg-[#070A0F] shadow-[0_24px_90px_rgba(0,0,0,0.8)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(53,200,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.1) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#147BFF]/20 blur-[80px]" />

            <span className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#35C8FF]" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#35C8FF]" />

            <div className="relative p-6 sm:p-8">
              <button
                type="button"
                onClick={closePopup}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#030507] text-[#A4AFBC] transition hover:border-[#35C8FF] hover:text-[#35C8FF]"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-7 pr-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#35C8FF]" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#35C8FF]">
                    Applications
                  </span>
                </div>

                <h2
                  id="committee-popup-title"
                  className="font-display text-4xl uppercase leading-[0.92] tracking-wide text-[#F5F7FA] sm:text-5xl"
                >
                  Working Committee
                  <br />
                  Forms Open
                </h2>
              </div>

              <p className="mb-7 max-w-sm font-sans text-sm leading-6 text-[#A4AFBC] sm:text-base sm:leading-7">
                Applications for the EdBoard Working Committee are now open.
              </p>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closePopup}
                className="group flex w-full items-center justify-between border border-[#147BFF] bg-[#147BFF] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition hover:border-[#35C8FF] hover:bg-[#35C8FF] hover:text-[#030507] sm:text-xs"
              >
                <span className="flex items-center gap-3">
                  <BookOpen className="h-4 w-4" />
                  Apply Now
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={closePopup}
                className="mt-3 w-full border border-white/10 bg-[#030507] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#A4AFBC] transition hover:border-white/25 hover:text-[#F5F7FA]"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default YearbookPopup;