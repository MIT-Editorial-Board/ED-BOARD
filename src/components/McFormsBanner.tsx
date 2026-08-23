import { ArrowUpRight } from "lucide-react";

type Props = {
  applyUrl?: string;
};

const DEFAULT_APPLY_URL =
  "https://forms.gle/sArbt8gRsbtpXda86";

const McFormsBanner = ({
  applyUrl = DEFAULT_APPLY_URL,
}: Props) => {
  const handleClick = () => {
    window.open(
      applyUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="mt-3 hidden md:block">
        <div className="container mx-auto flex justify-end px-4">
          <button
            type="button"
            onClick={handleClick}
            className="group inline-flex items-center gap-3 border border-[#147BFF]/70 bg-[#070A0F]/90 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F5F7FA] backdrop-blur-md transition hover:border-[#35C8FF] hover:text-[#35C8FF]"
          >
            <span className="h-2 w-2 rounded-full bg-[#35C8FF] shadow-[0_0_12px_rgba(53,200,255,0.9)]" />

            <span>Forms now open</span>

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="mt-3 px-4 md:hidden">
        <div className="relative overflow-hidden border border-[#147BFF]/60 bg-[#070A0F]/95 px-4 py-4 backdrop-blur-md">
          <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-[#35C8FF]" />
          <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-[#35C8FF]" />

          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-display text-xl uppercase tracking-wide text-[#F5F7FA]">
                Working Committee Forms Open
              </p>

              <p className="mt-1 font-sans text-xs text-[#A4AFBC]">
                Tap below to submit your application.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="group flex shrink-0 items-center gap-2 border border-[#147BFF] bg-[#147BFF] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition hover:border-[#35C8FF] hover:bg-[#35C8FF] hover:text-[#030507]"
            >
              Apply
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default McFormsBanner;