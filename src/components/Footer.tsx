import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#020304] text-[#F5F7FA]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(53,200,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(53,200,255,0.07) 1px, transparent 1px)",
          backgroundSize: "74px 74px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-60 top-0 h-[34rem] w-[34rem] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.28), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[96rem] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Top metadata */}
        <div className="mb-12 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#147BFF]" />

            <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[#35C8FF] sm:text-[0.68rem]">
              MIT Editorial Board
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Manipal / India
          </span>
        </div>

        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.9fr] lg:gap-16">
          {/* Logo and description */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-4"
              aria-label="MIT Editorial Board home"
            >
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-14"
              />

              <span className="h-8 w-px bg-[#147BFF]/55" />

              <span className="font-display text-3xl uppercase leading-none tracking-[0.02em] text-[#F5F7FA] sm:text-4xl">
                MIT Editorial Board
              </span>
            </Link>

            <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8">
              The MIT Editorial Board is the creative hub behind Manipal
              Institute of Technology&apos;s yearbook and student publications.
              We capture memories and shape narratives that last a lifetime.
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center border border-white/[0.12] bg-[#070A0F] text-[#A4AFBC] transition duration-300 hover:border-[#35C8FF] hover:bg-[#147BFF] hover:text-white"
                aria-label="MIT Editorial Board on Instagram"
              >
                <Instagram
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/the-mit-editorial-board/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center border border-white/[0.12] bg-[#070A0F] text-[#A4AFBC] transition duration-300 hover:border-[#35C8FF] hover:bg-[#147BFF] hover:text-white"
                aria-label="MIT Editorial Board on LinkedIn"
              >
                <Linkedin
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#35C8FF]">
                Quick Links
              </h3>

              <span className="font-mono text-[0.58rem] text-[#147BFF]/70">
                01
              </span>
            </div>

            <nav className="flex flex-col">
              <a
                href="#about"
                className="group flex items-center justify-between border-b border-white/[0.07] py-3 font-sans text-sm text-[#A4AFBC] transition hover:text-[#F5F7FA]"
              >
                About Us

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#147BFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <Link
                to="/team"
                className="group flex items-center justify-between border-b border-white/[0.07] py-3 font-sans text-sm text-[#A4AFBC] transition hover:text-[#F5F7FA]"
              >
                Our Team

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#147BFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#gallery"
                className="group flex items-center justify-between border-b border-white/[0.07] py-3 font-sans text-sm text-[#A4AFBC] transition hover:text-[#F5F7FA]"
              >
                Gallery

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#147BFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#domains"
                className="group flex items-center justify-between border-b border-white/[0.07] py-3 font-sans text-sm text-[#A4AFBC] transition hover:text-[#F5F7FA]"
              >
                Domains

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#147BFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#35C8FF]">
                Contact
              </h3>

              <span className="font-mono text-[0.58rem] text-[#147BFF]/70">
                02
              </span>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center border border-[#147BFF]/25 bg-[#147BFF]/[0.05] text-[#35C8FF]">
                  <MapPin size={17} strokeWidth={1.5} />
                </div>

                <p className="pt-1 font-sans text-sm leading-6 text-[#A4AFBC]">
                  MIT Manipal, Karnataka, India - 576104
                </p>
              </div>

              <a
                href="mailto:mitedboard@gmail.com"
                className="group flex items-start gap-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center border border-[#147BFF]/25 bg-[#147BFF]/[0.05] text-[#35C8FF] transition group-hover:border-[#35C8FF] group-hover:bg-[#147BFF]/15">
                  <Mail size={17} strokeWidth={1.5} />
                </div>

                <span className="pt-2 font-sans text-sm text-[#A4AFBC] transition group-hover:text-[#F5F7FA]">
                  mitedboard@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Large editorial wordmark */}
        <div className="mt-16 overflow-hidden border-y border-white/[0.08] py-6 sm:mt-20">
          <p
            className="whitespace-nowrap font-display text-[clamp(3.6rem,10vw,8rem)] uppercase leading-none tracking-[0.01em]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(245,247,250,0.2), rgba(77,124,243,0.75), rgba(245,247,250,0.2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Ideas in motion. Stories in focus.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-[#A4AFBC]/65">
            &copy; {currentYear} MIT Editorial Board. All rights reserved.
          </p>

          <div className="flex items-center gap-3 font-sans text-xs text-[#A4AFBC]/65">
            <a
              href="#"
              className="transition hover:text-[#35C8FF]"
            >
              Privacy Policy
            </a>

            <span className="h-1 w-1 rounded-full bg-[#147BFF]" />

            <a
              href="#"
              className="transition hover:text-[#35C8FF]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}