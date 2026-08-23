import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Send, Sparkles } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const creativePoints = [
  "Create content for MIT's official yearbook and newsletters",
  "Shape engaging social media narratives for the institute",
  "Document and preserve MIT's memorable moments",
  "Build a network with creative minds across departments",
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Idea: "",
  });

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10% 0px",
  });

  const visible = reduceMotion || isInView;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    const payload = {
      name: formData.Name.trim(),
      email: formData.Email.trim(),
      idea: formData.Idea.trim(),
    };

    setSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby8UvSFJQNg4VZEEOqyvi-KXkJqiNqCIHxBDTvOYcr12AjiHL5oarMcTMgyF7wUiDWi/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      alert("Thank you for sharing your idea! We will get back to you soon.");

      setFormData({
        Name: "",
        Email: "",
        Idea: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      alert(
        "Sorry, there was an error submitting your idea. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric glows */}
      <div
        className="pointer-events-none absolute -left-52 top-[20%] h-[36rem] w-[36rem] rounded-full opacity-20 blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(20,123,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-[5%] h-[34rem] w-[34rem] rounded-full opacity-15 blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(53,200,255,0.25), transparent 70%)",
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
              Connect With Us
            </span>
          </div>

          <span className="font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[#A4AFBC]/55 sm:text-[0.65rem]">
            Section / 07
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Existing contact content */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -35 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -35 }
            }
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.1,
            }}
          >
            <h2 className="font-display text-[clamp(4rem,10vw,7.5rem)] font-normal uppercase leading-[0.82] tracking-[-0.015em] text-[#F5F7FA]">
              Join Our
              <span className="block text-[#4D7CF3]">Creative Journey</span>
            </h2>

            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-16 bg-[#35C8FF]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#147BFF]" />
            </div>

            <p className="max-w-xl font-sans text-sm leading-7 text-[#A4AFBC] sm:text-base sm:leading-8">
              Be part of MIT Editorial Board — the creative hub behind
              MIT&apos;s official yearbook, newsletters, and social media
              presence. We&apos;re looking for passionate storytellers,
              designers, and content creators.
            </p>

            <div className="mt-8 border-t border-white/[0.08]">
              {creativePoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-4 border-b border-white/[0.08] py-4"
                  initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                  animate={
                    visible
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.08,
                  }}
                >
                  <span className="mt-1.5 flex h-5 w-5 flex-none items-center justify-center border border-[#147BFF]/50 bg-[#147BFF]/10 text-[#35C8FF]">
                    <Sparkles size={10} strokeWidth={1.5} />
                  </span>

                  <p className="font-sans text-sm leading-6 text-[#C0C7D0]">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/mit.edboard?igsh=bmxmaGk0cWJ2ankz"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex h-12 w-full items-center justify-between border border-[#147BFF]/70 bg-[#147BFF]/[0.06] px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F7FA] transition duration-300 hover:bg-[#147BFF] sm:w-auto sm:min-w-[210px]"
            >
              Explore More

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Existing idea form */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 35 }}
            animate={
              visible
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 35 }
            }
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <div className="relative border border-white/[0.09] bg-[#030507]/80 p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-start justify-between border-b border-white/[0.08] pb-6">
                <div>
                  <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-[#35C8FF]">
                    Have something to say?
                  </span>

                  <h2 className="mt-3 font-display text-[clamp(2.8rem,6vw,4.5rem)] font-normal uppercase leading-[0.88] text-[#F5F7FA]">
                    Share Your Ideas
                  </h2>
                </div>

                <span className="h-2 w-2 rounded-full bg-[#147BFF] shadow-[0_0_12px_#147BFF]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#A4AFBC]"
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={formData.Name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        Name: event.target.value,
                      })
                    }
                    className="h-12 w-full border border-white/[0.12] bg-[#070A0F] px-4 font-sans text-sm text-[#F5F7FA] outline-none transition placeholder:text-[#A4AFBC]/35 focus:border-[#35C8FF] focus:ring-1 focus:ring-[#35C8FF]/40"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#A4AFBC]"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={formData.Email}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        Email: event.target.value,
                      })
                    }
                    className="h-12 w-full border border-white/[0.12] bg-[#070A0F] px-4 font-sans text-sm text-[#F5F7FA] outline-none transition placeholder:text-[#A4AFBC]/35 focus:border-[#35C8FF] focus:ring-1 focus:ring-[#35C8FF]/40"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-idea"
                    className="mb-2 block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#A4AFBC]"
                  >
                    Your Idea
                  </label>

                  <textarea
                    id="contact-idea"
                    value={formData.Idea}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        Idea: event.target.value,
                      })
                    }
                    className="min-h-36 w-full resize-y border border-white/[0.12] bg-[#070A0F] px-4 py-3 font-sans text-sm leading-6 text-[#F5F7FA] outline-none transition placeholder:text-[#A4AFBC]/35 focus:border-[#35C8FF] focus:ring-1 focus:ring-[#35C8FF]/40"
                    placeholder="Tell us what you are thinking..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex h-12 w-full items-center justify-between border border-[#147BFF] bg-[#147BFF]/10 px-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F7FA] transition duration-300 hover:bg-[#147BFF] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {submitting ? "Submitting..." : "Submit Your Idea"}
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              <span className="pointer-events-none absolute -left-px -top-px h-9 w-9 border-l border-t border-[#35C8FF]/70" />

              <span className="pointer-events-none absolute -bottom-px -right-px h-9 w-9 border-b border-r border-[#35C8FF]/70" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}