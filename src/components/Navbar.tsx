import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const APPLY_URL = "https://forms.gle/sArbt8gRsbtpXda86";

const newsletterItems = [
  {
    label: "February 2024",
    href: "/HQFINALfinalfinal_compressed.pdf",
  },
  {
    label: "September 2024",
    href: "/September_Newsletter.pdf",
  },
  {
    label: "May 2025",
    href: "/Netflix Newsletter Final.pdf",
  },
];

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Yearbook", to: "/yearbook" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopNewsletterOpen, setDesktopNewsletterOpen] = useState(false);
  const [mobileNewsletterOpen, setMobileNewsletterOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopNewsletterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setDesktopNewsletterOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileNewsletterOpen(false);
    setDesktopNewsletterOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileNewsletterOpen(false);
  };

  const desktopLinkClass = (path: string) => {
    const active = location.pathname === path;

    return `
      relative py-2
      font-sans text-[0.78rem] font-medium
      uppercase tracking-[0.12em]
      transition-colors duration-300
      ${
        active
          ? "text-[#F5F7FA]"
          : "text-[#A4AFBC] hover:text-[#F5F7FA]"
      }
      after:absolute after:bottom-0 after:left-0
      after:h-px after:bg-[#147BFF]
      after:transition-all after:duration-300
      ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `;
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b transition-all duration-300
        ${
          scrolled || mobileMenuOpen
            ? "border-[#147BFF]/20 bg-[#020304]/90 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/[0.04] bg-[#020304]/75 backdrop-blur-md"
        }
      `}
    >
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <div
          className={`
            relative z-50 flex items-center justify-between
            transition-all duration-300
            ${scrolled ? "h-[4.5rem]" : "h-[5.5rem]"}
          `}
        >
          {/* Logo and identity */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-4"
            aria-label="MIT Editorial Board home"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-11"
            />

            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-5 w-px bg-[#147BFF]/55" />

              <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#F5F7FA]">
                MIT Editorial Board
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link to="/" className={desktopLinkClass("/")}>
              Home
            </Link>

            <Link to="/team" className={desktopLinkClass("/team")}>
              Team
            </Link>

            {/* Desktop newsletter dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => {
                  setDesktopNewsletterOpen((current) => !current);
                }}
                className={`
                  relative flex items-center gap-1 py-2
                  font-sans text-[0.78rem] font-medium
                  uppercase tracking-[0.12em]
                  transition-colors duration-300
                  ${
                    desktopNewsletterOpen
                      ? "text-[#F5F7FA]"
                      : "text-[#A4AFBC] hover:text-[#F5F7FA]"
                  }
                  after:absolute after:bottom-0 after:left-0
                  after:h-px after:bg-[#147BFF]
                  after:transition-all after:duration-300
                  ${
                    desktopNewsletterOpen
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                `}
                aria-expanded={desktopNewsletterOpen}
                aria-haspopup="menu"
              >
                Newsletters

                <ChevronDown
                  className={`
                    h-3.5 w-3.5 transition-transform duration-300
                    ${desktopNewsletterOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {desktopNewsletterOpen && (
                <div
                  className="
                    absolute left-1/2 top-[calc(100%+0.9rem)]
                    w-60 -translate-x-1/2 overflow-hidden
                    border border-[#147BFF]/25
                    bg-[#05080D]/95
                    shadow-[0_24px_70px_rgba(0,0,0,0.65)]
                    backdrop-blur-xl
                  "
                  role="menu"
                >
                  <div className="border-b border-white/[0.06] px-4 py-3">
                    <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[#35C8FF]">
                      Latest editions
                    </span>
                  </div>

                  <div className="py-2">
                    {newsletterItems.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setDesktopNewsletterOpen(false)}
                        className="
                          group flex items-center justify-between
                          px-4 py-3
                          font-sans text-sm text-[#A4AFBC]
                          transition-colors duration-200
                          hover:bg-[#147BFF]/10 hover:text-[#F5F7FA]
                        "
                        role="menuitem"
                      >
                        <span>{item.label}</span>

                        <span className="font-mono text-[0.65rem] text-[#147BFF]/65 transition-colors group-hover:text-[#35C8FF]">
                          0{index + 1}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/yearbook"
              className={desktopLinkClass("/yearbook")}
            >
              Yearbook
            </Link>

            <Link to="/gallery" className={desktopLinkClass("/gallery")}>
              Gallery
            </Link>

            <Link to="/contact" className={desktopLinkClass("/contact")}>
              Contact
            </Link>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                ml-1 flex h-10 items-center justify-center
                border border-[#147BFF]/80
                bg-[#147BFF]/10 px-5
                font-sans text-[0.72rem] font-semibold
                uppercase tracking-[0.14em] text-[#F5F7FA]
                transition duration-300
                hover:-translate-y-0.5 hover:bg-[#147BFF]
                hover:shadow-[0_0_28px_rgba(20,123,255,0.3)]
                focus:outline-none focus:ring-2 focus:ring-[#35C8FF]
              "
            >
              Apply
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((current) => !current);
            }}
            className="
              relative flex h-11 w-11 items-center justify-center
              text-[#F5F7FA] transition
              hover:text-[#35C8FF]
              focus:outline-none focus:ring-2 focus:ring-[#147BFF]
              lg:hidden
            "
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" strokeWidth={1.5} />
            ) : (
              <Menu className="h-8 w-8" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="fixed left-0 top-0 z-40 h-[100dvh] w-screen overflow-y-auto bg-[#020304] lg:hidden">
          <div
            className="fixed left-0 top-0 h-[100dvh] w-screen bg-[#020304]"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <nav
            className="
              relative z-10 mx-auto flex min-h-[100dvh]
              max-w-lg flex-col px-7 pb-10 pt-[7.5rem]
            "
            aria-label="Mobile navigation"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#147BFF]" />

              <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#35C8FF]">
                Navigation
              </span>
            </div>

            <div className="flex flex-col border-t border-white/[0.08]">
              {navigationItems.slice(0, 2).map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="
                    group flex items-center justify-between
                    border-b border-white/[0.08] py-4
                  "
                >
                  <span
                    className={`
                      font-display text-[2.5rem] uppercase
                      leading-none tracking-[0.015em]
                      transition-colors
                      ${
                        location.pathname === item.to
                          ? "text-[#35C8FF]"
                          : "text-[#F5F7FA] group-hover:text-[#35C8FF]"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  <span className="font-mono text-[0.65rem] text-[#147BFF]/70">
                    0{index + 1}
                  </span>
                </Link>
              ))}

              {/* Mobile newsletter dropdown */}
              <div className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileNewsletterOpen((current) => !current);
                  }}
                  className="
                    group flex w-full items-center justify-between py-4
                    text-left
                  "
                  aria-expanded={mobileNewsletterOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[2.5rem] uppercase leading-none tracking-[0.015em] text-[#F5F7FA] transition-colors group-hover:text-[#35C8FF]">
                      Newsletters
                    </span>

                    <ChevronDown
                      className={`
                        h-5 w-5 text-[#147BFF]
                        transition-transform duration-300
                        ${mobileNewsletterOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>

                  <span className="font-mono text-[0.65rem] text-[#147BFF]/70">
                    03
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300
                    ${
                      mobileNewsletterOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="mb-4 border-l border-[#147BFF]/50 pl-5">
                      {newsletterItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="
                            block py-2 font-sans text-sm
                            uppercase tracking-[0.12em]
                            text-[#A4AFBC] transition
                            hover:text-[#35C8FF]
                          "
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navigationItems.slice(2).map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="
                    group flex items-center justify-between
                    border-b border-white/[0.08] py-4
                  "
                >
                  <span
                    className={`
                      font-display text-[2.5rem] uppercase
                      leading-none tracking-[0.015em]
                      transition-colors
                      ${
                        location.pathname === item.to
                          ? "text-[#35C8FF]"
                          : "text-[#F5F7FA] group-hover:text-[#35C8FF]"
                      }
                    `}
                  >
                    {item.label}
                  </span>

                  <span className="font-mono text-[0.65rem] text-[#147BFF]/70">
                    0{index + 4}
                  </span>
                </Link>
              ))}
            </div>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                mt-6 flex h-12 w-full items-center justify-center
                border border-[#147BFF]
                bg-[#147BFF]/10
                font-sans text-xs font-semibold uppercase
                tracking-[0.18em] text-[#F5F7FA]
                transition
                hover:bg-[#147BFF]
              "
            >
              Apply
            </a>

            <div className="mt-auto flex items-end justify-between pt-8">
              <span className="font-sans text-[0.58rem] uppercase tracking-[0.3em] text-[#A4AFBC]/55">
                Ideas in motion
              </span>

              <span className="h-10 w-px bg-gradient-to-b from-[#35C8FF] to-transparent" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}