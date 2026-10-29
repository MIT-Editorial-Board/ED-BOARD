import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const APPLY_URL = "https://forms.gle/sArbt8gRsbtpXda86";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Newsletters", to: "/newsletters" },
  { label: "Yearbook", to: "/yearbook" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
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
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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

            <Link
              to="/newsletters"
              className={desktopLinkClass("/newsletters")}
              aria-current={
                location.pathname === "/newsletters" ? "page" : undefined
              }
            >
              Newsletters
            </Link>

            <Link
              to="/yearbook"
              className={desktopLinkClass("/yearbook")}
            >
              Yearbook
            </Link>

            <Link
              to="/gallery"
              className={desktopLinkClass("/gallery")}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={desktopLinkClass("/contact")}
            >
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
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
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
              {navigationItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
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